# app/__init__.py

from flask import Flask
from app.models import db
from app.config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)  # Inicializamos la base de datos

    # Importa y registra los controladores
    from app.controller.app import api
    app.register_blueprint(api)  # Registrar el blueprint del API

    return app
