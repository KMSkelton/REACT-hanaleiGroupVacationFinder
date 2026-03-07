"""
Seed script — run once to populate the database with fictional properties.
All property names, addresses, and details are fictional.

Usage:
    python -m database.seed
"""

from database.connection import get_connection

PROPERTIES = [
    {
        "name": "Hanalei Bay Plantation House",
        "street_number": "4820 Weke Road",
        "neighborhood": "Hanalei",
        "latitude": 22.2037,
        "longitude": -159.5003,
        "property_type": "house",
        "description": "A sprawling plantation-style home just steps from Hanalei Bay. Wraparound lanai, outdoor shower, and a fully equipped kitchen for feeding a crowd. The taro fields across the road make for a postcard view every morning.",
        "num_bedrooms": 6,
        "num_bathrooms": 4.0,
        "max_guests": 14,
        "sleeping_capacity": 12,
        "price_per_week": 9800.00,
        "min_nights": 7,
        "accessibility": False,
        "air_conditioning": False,
        "wifi": True,
        "images": []
    },
    {
        "name": "Princeville Cliffside Villa",
        "street_number": "3901 Kamehameha Road",
        "neighborhood": "Princeville",
        "latitude": 22.2196,
        "longitude": -159.4810,
        "property_type": "house",
        "description": "Perched above the Na Pali coastline with unobstructed ocean views from every room. A private infinity pool and two full kitchens make this the ultimate large-group retreat. Five minutes to Hideaways Beach.",
        "num_bedrooms": 7,
        "num_bathrooms": 5.0,
        "max_guests": 16,
        "sleeping_capacity": 14,
        "price_per_week": 14500.00,
        "min_nights": 7,
        "accessibility": True,
        "air_conditioning": True,
        "wifi": True,
        "images": []
    },
    {
        "name": "Haena Beachfront Bungalow Compound",
        "street_number": "7120 Alealea Road",
        "neighborhood": "Haena",
        "latitude": 22.2158,
        "longitude": -159.5712,
        "property_type": "house",
        "description": "Two connected bungalows that share a common outdoor kitchen and fire pit area. Direct beach access, outdoor showers, and a short walk to the trailhead for the Na Pali Coast State Wilderness Park.",
        "num_bedrooms": 5,
        "num_bathrooms": 3.0,
        "max_guests": 12,
        "sleeping_capacity": 10,
        "price_per_week": 8400.00,
        "min_nights": 5,
        "accessibility": False,
        "air_conditioning": False,
        "wifi": True,
        "images": []
    },
    {
        "name": "Kilauea Farmhouse Retreat",
        "street_number": "2240 Kolo Road",
        "neighborhood": "Kilauea",
        "latitude": 22.2078,
        "longitude": -159.4032,
        "property_type": "house",
        "description": "A converted farmhouse on two acres in Kilauea's north shore highlands. Chickens, fruit trees, and mountain views. Close to Kilauea Lighthouse and the Saturday farmers market. Cooler temperatures make this a good choice for those who run warm.",
        "num_bedrooms": 4,
        "num_bathrooms": 3.0,
        "max_guests": 10,
        "sleeping_capacity": 9,
        "price_per_week": 5600.00,
        "min_nights": 5,
        "accessibility": False,
        "air_conditioning": False,
        "wifi": True,
        "images": []
    },
    {
        "name": "Poipu Luxury Estate",
        "street_number": "1840 Pee Road",
        "neighborhood": "Poipu",
        "latitude": 21.8720,
        "longitude": -159.4680,
        "property_type": "house",
        "description": "A fully air-conditioned south shore estate with a private pool, hot tub, and game room. Poipu has the sunniest weather on Kauai — good news if your group is coming from Seattle. Walking distance to Brennecke Beach and Poipu Beach Park.",
        "num_bedrooms": 6,
        "num_bathrooms": 4.5,
        "max_guests": 14,
        "sleeping_capacity": 12,
        "price_per_week": 11200.00,
        "min_nights": 7,
        "accessibility": True,
        "air_conditioning": True,
        "wifi": True,
        "images": []
    },
    {
        "name": "Kapaa Surf House",
        "street_number": "4480 Lehua Street",
        "neighborhood": "Kapaa",
        "latitude": 22.0750,
        "longitude": -159.3190,
        "property_type": "house",
        "description": "A laid-back surf house on the east side, two blocks from the beach path. Surfboard and bike storage, outdoor shower, large covered lanai. Central location makes it an easy base for exploring the whole island.",
        "num_bedrooms": 4,
        "num_bathrooms": 2.5,
        "max_guests": 10,
        "sleeping_capacity": 8,
        "price_per_week": 4900.00,
        "min_nights": 5,
        "accessibility": False,
        "air_conditioning": False,
        "wifi": True,
        "images": []
    },
    {
        "name": "Anini Beach House",
        "street_number": "3560 Anini Road",
        "neighborhood": "Kilauea",
        "latitude": 22.2241,
        "longitude": -159.4380,
        "property_type": "house",
        "description": "On the quiet lagoon at Anini Beach, the best beginner windsurfing spot on the island. The shallow reef keeps the water calm even when the rest of the north shore is rough. A rare find for a group that wants beach access without the crowds.",
        "num_bedrooms": 5,
        "num_bathrooms": 3.0,
        "max_guests": 11,
        "sleeping_capacity": 10,
        "price_per_week": 7700.00,
        "min_nights": 7,
        "accessibility": False,
        "air_conditioning": False,
        "wifi": True,
        "images": []
    },
    {
        "name": "Hanalei Valley View Cottage",
        "street_number": "5110 Ohiki Road",
        "neighborhood": "Hanalei",
        "latitude": 22.1989,
        "longitude": -159.5156,
        "property_type": "cottage",
        "description": "A smaller, cozy option overlooking the Hanalei Valley taro fields and river. Best for a tight-knit group comfortable sharing space. The views from the back deck are arguably the best on the north shore.",
        "num_bedrooms": 3,
        "num_bathrooms": 2.0,
        "max_guests": 7,
        "sleeping_capacity": 6,
        "price_per_week": 3500.00,
        "min_nights": 5,
        "accessibility": False,
        "air_conditioning": False,
        "wifi": True,
        "images": []
    },
    {
        "name": "Waimea Plantation Cottage",
        "street_number": "9400 Kaumualii Highway",
        "neighborhood": "Waimea",
        "latitude": 21.9572,
        "longitude": -159.6671,
        "property_type": "cottage",
        "description": "A historic plantation-era cottage on the west side, walking distance to the pier where Captain Cook first landed in Hawaii. The closest rental to Waimea Canyon — the Grand Canyon of the Pacific. Driest side of the island.",
        "num_bedrooms": 4,
        "num_bathrooms": 2.0,
        "max_guests": 9,
        "sleeping_capacity": 8,
        "price_per_week": 4200.00,
        "min_nights": 3,
        "accessibility": True,
        "air_conditioning": True,
        "wifi": True,
        "images": []
    },
    {
        "name": "Princeville Golf Villa",
        "street_number": "4080 Lei O Papa Road",
        "neighborhood": "Princeville",
        "latitude": 22.2234,
        "longitude": -159.4761,
        "property_type": "house",
        "description": "A modern villa in the Princeville resort community with views of the Makai Golf Course and ocean beyond. Private pool, chef's kitchen, and a media room. Two minutes from Queens Bath tide pools and the Princeville Hotel beach.",
        "num_bedrooms": 5,
        "num_bathrooms": 4.0,
        "max_guests": 12,
        "sleeping_capacity": 10,
        "price_per_week": 10500.00,
        "min_nights": 7,
        "accessibility": True,
        "air_conditioning": True,
        "wifi": True,
        "images": []
    },
]


def seed():
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("DELETE FROM properties;")
            for p in PROPERTIES:
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
                    )
                """, p)
        conn.commit()
    print(f"Seeded {len(PROPERTIES)} properties.")


if __name__ == "__main__":
    seed()
