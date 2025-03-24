import os

class Config:
    # Cambia estos valores por los de tu base de datos
    SQLALCHEMY_DATABASE_URI = 'postgresql://admin:123456@localhost:5432/test_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
