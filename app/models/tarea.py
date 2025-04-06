from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Tarea(db.Model):
    __tablename__ = 'tareas'

    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.String(255), nullable=True)
    adjunto = db.Column(db.String(255), nullable=True)
    fecha_y_hora = db.Column(db.DateTime, default=datetime.utcnow)
    categoria = db.Column(db.String(50), nullable=False)
    empleado_id = db.Column(db.Integer, db.ForeignKey('empleados.id'), nullable=False)
    empleado = db.relationship('Empleado', back_populates='tareas')

    def __repr__(self):
        return f'<Tarea {self.titulo}>'

    def to_dict(self):
        return {
            'id': self.id,
            'titulo': self.titulo,
            'descripcion': self.descripcion,
            'adjunto': self.adjunto,
            'fecha_y_hora': self.fecha_y_hora,
            'categoria': self.categoria,
            'empleado_id': self.empleado_id
        }

# Relación inversa con Empleado
Empleado.tareas = db.relationship('Tarea', back_populates='empleado')
