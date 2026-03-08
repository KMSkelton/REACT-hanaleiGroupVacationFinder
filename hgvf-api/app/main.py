from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import properties

app = FastAPI(
    title="Hanalei Group Vacation Finder API",
    description="Property listings for large group vacations on Kauai, HI",
    version="2.0.0"
)

# CORS — update origins when you know your frontend URL
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",   # React dev server
        "http://localhost:5173",   # Vite dev server
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(properties.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:5174",
        "https://kms-hgvf.netlify.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}
