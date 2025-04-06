from app import create_app
from app.models import db

app = create_app()

with app.app_context():
    db.create_all()  # Crea las tablas de la base de datos basadas en los modelos
