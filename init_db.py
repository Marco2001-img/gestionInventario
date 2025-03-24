# init_db.py
from app import app  # Importa la aplicación Flask
from models import db  # Importa la base de datos de models.py

with app.app_context():  # Establece el contexto de la aplicación
    db.create_all()  # Crea todas las tablas basadas en los modelos definidos
