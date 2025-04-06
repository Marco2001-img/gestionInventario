from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Empleado(db.Model):
    __tablename__ = 'empleados'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    apellidos = db.Column(db.String(100), nullable=False)
    edad = db.Column(db.Integer, nullable=False)
    cargo = db.Column(db.String(100), nullable=False)
    numero_cuenta = db.Column(db.String(50), nullable=False)
    nombre_tarjeta = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    contraseña = db.Column(db.String(255), nullable=False)
    salario = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f'<Empleado {self.nombre} {self.apellidos}>'

    def to_dict(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'apellidos': self.apellidos,
            'edad': self.edad,
            'cargo': self.cargo,
            'numero_cuenta': self.numero_cuenta,
            'nombre_tarjeta': self.nombre_tarjeta,
            'email': self.email,
            'salario': self.salario
        }
