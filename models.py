from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Cliente(db.Model):
    __tablename__ = 'clientes'
    
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    apellidos = db.Column(db.String(100), nullable=False)
    correo = db.Column(db.String(120), unique=True, nullable=False)
    contraseña = db.Column(db.String(255), nullable=False)
    edad = db.Column(db.Integer, nullable=False)
    domicilio = db.Column(db.String(255), nullable=False)
    telefono = db.Column(db.String(15), nullable=False)
    
    def __repr__(self):
        return f'<Cliente {self.nombre} {self.apellidos}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'apellidos': self.apellidos,
            'correo': self.correo,
            'edad': self.edad,
            'domicilio': self.domicilio,
            'telefono': self.telefono
        }
