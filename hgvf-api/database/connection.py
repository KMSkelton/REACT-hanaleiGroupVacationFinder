import psycopg2
from psycopg2.extras import RealDictCursor
from contextlib import contextmanager
import os

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://localhost/hgvf")

@contextmanager
def get_connection():
    conn = psycopg2.connect(DATABASE_URL, cursor_factory=RealDictCursor)
    try:
        yield conn
    finally:
        conn.close()
