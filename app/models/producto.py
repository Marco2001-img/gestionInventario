from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Producto(db.Model):
    __tablename__ = 'productos'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.String(255), nullable=True)
    precio_compra = db.Column(db.Float, nullable=False)
    precio_venta = db.Column(db.Float, nullable=False)
    fecha_y_hora = db.Column(db.DateTime, default=datetime.utcnow)
    existencias = db.Column(db.Integer, nullable=False)
    imagen = db.Column(db.String(255), nullable=True)

    def __repr__(self):
        return f'<Producto {self.nombre}>'

    def to_dict(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'descripcion': self.descripcion,
            'precio_compra': self.precio_compra,
            'precio_venta': self.precio_venta,
            'fecha_y_hora': self.fecha_y_hora,
            'existencias': self.existencias,
            'imagen': self.imagen
        }
