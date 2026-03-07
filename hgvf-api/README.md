# HGVF API

FastAPI backend for the Hanalei Group Vacation Finder.

## Setup

```bash
# Create and activate virtual environment
python -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create the database
createdb hgvf

# Apply schema
psql hgvf < database/schema.sql

# Seed with fictional properties
python -m database.seed

# Run the dev server
uvicorn app.main:app --reload
```

## Environment Variables

Create a `.env` file in the project root:

```
DATABASE_URL=postgresql://localhost/hgvf
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/properties/` | List all properties, with optional filters |
| GET | `/api/properties/{id}` | Get a single property |
| GET | `/api/properties/neighborhoods` | List all distinct neighborhoods |
| POST | `/api/properties/` | Create a property |
| PATCH | `/api/properties/{id}` | Update a property |
| DELETE | `/api/properties/{id}` | Delete a property |
| GET | `/health` | Health check |

## Query Parameters

All available on `GET /api/properties/`:

| Param | Type | Description |
|-------|------|-------------|
| `group_size` | int | Filters by max_guests AND sleeping_capacity >= group_size. Also adds price_per_person to each result. |
| `min_bedrooms` | int | Minimum number of bedrooms |
| `max_price_week` | float | Maximum weekly price |
| `min_price_week` | float | Minimum weekly price |
| `neighborhood` | string | e.g. Hanalei, Princeville, Haena, Poipu |
| `property_type` | string | house, cottage, condo |
| `accessibility` | bool | Wheelchair accessible |
| `air_conditioning` | bool | Has AC |
| `wifi` | bool | Has WiFi |

## Interactive Docs

Once running, visit `http://localhost:8000/docs` for the full Swagger UI.
