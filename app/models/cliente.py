from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Cliente(db.Model):
    __tablename__ = 'clientes'
    
    id = db.Column(db.Integer, primary_key=True)
    nombre_cliente = db.Column(db.String(100), nullable=False)
    apellidos_cliente = db.Column(db.String(100), nullable=False)
    edad_cliente = db.Column(db.Integer, nullable=False)
    domicilio_cliente = db.Column(db.String(255), nullable=False)
    espicificaciones_cliente = db.Column(db.String(255), nullable=False)
    telefono_cliente = db.Column(db.String(15), nullable=False)

    def __repr__(self):
        return f'<Cliente {self.nombre_cliente} {self.apellidos_cliente}>'

    def to_dict(self):
        return {
            'id': self.id,
            'nombre': self.nombre_cliente,
            'apellidos': self.apellidos_cliente,
            'edad': self.edad_cliente,
            'domicilio': self.domicilio_cliente,
            'DetallesAdicionales': self.espicificaciones_cliente,
            'telefono': self.telefono_cliente
        }
