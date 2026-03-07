from pydantic import BaseModel
from typing import Optional, List
from decimal import Decimal


class PropertyBase(BaseModel):
    name: str
    street_number: str
    neighborhood: str
    latitude: Decimal
    longitude: Decimal
    property_type: str
    description: Optional[str] = None
    num_bedrooms: int
    num_bathrooms: Decimal
    max_guests: int
    sleeping_capacity: int
    price_per_week: Decimal
    min_nights: int
    accessibility: bool
    air_conditioning: bool
    wifi: bool
    images: List[str] = []


class PropertyCreate(PropertyBase):
    pass


class PropertyUpdate(BaseModel):
    name: Optional[str] = None
    street_number: Optional[str] = None
    neighborhood: Optional[str] = None
    property_type: Optional[str] = None
    description: Optional[str] = None
    num_bedrooms: Optional[int] = None
    num_bathrooms: Optional[Decimal] = None
    max_guests: Optional[int] = None
    sleeping_capacity: Optional[int] = None
    price_per_week: Optional[Decimal] = None
    min_nights: Optional[int] = None
    accessibility: Optional[bool] = None
    air_conditioning: Optional[bool] = None
    wifi: Optional[bool] = None
    images: Optional[List[str]] = None


class Property(PropertyBase):
    id: int
    price_per_person: Optional[Decimal] = None

    class Config:
        from_attributes = True
