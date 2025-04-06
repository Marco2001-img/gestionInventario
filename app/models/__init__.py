# app/models/__init__.py

# Importamos los modelos individuales
from .cliente import Cliente
from .producto import Producto
from .empleado import Empleado
from .tarea import Tarea

# Importamos la instancia 'db' desde el archivo donde se define
from . import db

# Hacemos que todos los modelos y 'db' sean accesibles
__all__ = ['db', 'Cliente', 'Producto', 'Empleado', 'Tarea']
