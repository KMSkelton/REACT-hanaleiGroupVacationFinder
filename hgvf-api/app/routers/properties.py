from fastapi import APIRouter, HTTPException, Query
from typing import Optional, List
from database.connection import get_connection
from app.models import Property, PropertyCreate, PropertyUpdate

router = APIRouter(prefix="/api/properties", tags=["properties"])


def row_to_property(row: dict, group_size: Optional[int] = None) -> dict:
    """Convert a DB row to a dict, optionally adding price_per_person."""
    p = dict(row)
    if group_size and group_size > 0:
        p["price_per_person"] = round(float(p["price_per_week"]) / group_size, 2)
    else:
        p["price_per_person"] = None
    return p


@router.get("/", response_model=List[Property])
def get_properties(
    group_size:       Optional[int]   = Query(None, description="Filter by max_guests >= group_size and sleeping_capacity >= group_size"),
    min_bedrooms:     Optional[int]   = Query(None),
    max_price_week:   Optional[float] = Query(None),
    min_price_week:   Optional[float] = Query(None),
    neighborhood:     Optional[str]   = Query(None),
    property_type:    Optional[str]   = Query(None),
    accessibility:    Optional[bool]  = Query(None),
    air_conditioning: Optional[bool]  = Query(None),
    wifi:             Optional[bool]  = Query(None),
):
    filters = []
    params = []

    if group_size:
        filters.append("max_guests >= %s AND sleeping_capacity >= %s")
        params.extend([group_size, group_size])

    if min_bedrooms:
        filters.append("num_bedrooms >= %s")
        params.append(min_bedrooms)

    if max_price_week:
        filters.append("price_per_week <= %s")
        params.append(max_price_week)

    if min_price_week:
        filters.append("price_per_week >= %s")
        params.append(min_price_week)

    if neighborhood:
        filters.append("LOWER(neighborhood) = LOWER(%s)")
        params.append(neighborhood)

    if property_type:
        filters.append("LOWER(property_type) = LOWER(%s)")
        params.append(property_type)

    if accessibility is not None:
        filters.append("accessibility = %s")
        params.append(accessibility)

    if air_conditioning is not None:
        filters.append("air_conditioning = %s")
        params.append(air_conditioning)

    if wifi is not None:
        filters.append("wifi = %s")
        params.append(wifi)

    where = ("WHERE " + " AND ".join(filters)) if filters else ""
    query = f"SELECT * FROM properties {where} ORDER BY price_per_week ASC"

    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(query, params)
            rows = cur.fetchall()

    return [row_to_property(row, group_size) for row in rows]


@router.get("/neighborhoods", response_model=List[str])
def get_neighborhoods():
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT DISTINCT neighborhood FROM properties ORDER BY neighborhood ASC")
            rows = cur.fetchall()
    return [row["neighborhood"] for row in rows]


@router.get("/{property_id}", response_model=Property)
def get_property(property_id: int, group_size: Optional[int] = Query(None)):
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM properties WHERE id = %s", (property_id,))
            row = cur.fetchone()

    if not row:
        raise HTTPException(status_code=404, detail="Property not found.")

    return row_to_property(row, group_size)


@router.post("/", response_model=Property, status_code=201)
def create_property(data: PropertyCreate):
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO properties (
                    name, street_number, neighborhood, latitude, longitude,
                    property_type, description, num_bedrooms, num_bathrooms,
                    max_guests, sleeping_capacity, price_per_week, min_nights,
                    accessibility, air_conditioning, wifi, images
                ) VALUES (
                    %(name)s, %(street_number)s, %(neighborhood)s, %(latitude)s, %(longitude)s,
                    %(property_type)s, %(description)s, %(num_bedrooms)s, %(num_bathrooms)s,
                    %(max_guests)s, %(sleeping_capacity)s, %(price_per_week)s, %(min_nights)s,
                    %(accessibility)s, %(air_conditioning)s, %(wifi)s, %(images)s
                ) RETURNING *
            """, data.model_dump())
            row = cur.fetchone()
        conn.commit()
    return row_to_property(row)


@router.patch("/{property_id}", response_model=Property)
def update_property(property_id: int, data: PropertyUpdate):
    updates = {k: v for k, v in data.model_dump().items() if v is not None}
    if not updates:
        raise HTTPException(status_code=400, detail="No fields to update.")

    set_clause = ", ".join(f"{k} = %s" for k in updates)
    values = list(updates.values()) + [property_id]

    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                f"UPDATE properties SET {set_clause} WHERE id = %s RETURNING *",
                values
            )
            row = cur.fetchone()
        conn.commit()

    if not row:
        raise HTTPException(status_code=404, detail="Property not found.")

    return row_to_property(row)


@router.delete("/{property_id}", status_code=204)
def delete_property(property_id: int):
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                "DELETE FROM properties WHERE id = %s RETURNING id",
                (property_id,)
            )
            deleted = cur.fetchone()
        conn.commit()

    if not deleted:
        raise HTTPException(status_code=404, detail="Property not found.")
