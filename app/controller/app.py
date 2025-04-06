# app/controllers.py

from flask import Blueprint, request, jsonify
from app.models import db, Cliente, Producto, Empleado, Tarea  # Importamos los modelos

# Crear el Blueprint para las rutas de la API
api = Blueprint('api', __name__)

# --- Rutas para Clientes ---
@api.route('/clientes', methods=['GET'])
def obtener_clientes():
    clientes = Cliente.query.all()
    return jsonify([cliente.to_dict() for cliente in clientes])

@api.route('/cliente/<int:id>', methods=['GET'])
def obtener_cliente(id):
    cliente = Cliente.query.get(id)
    if cliente:
        return jsonify(cliente.to_dict())
    return jsonify({'error': 'Cliente no encontrado'}), 404

@api.route('/cliente', methods=['POST'])
def crear_cliente():
    data = request.get_json()
    nuevo_cliente = Cliente(
        nombre_cliente=data['nombre'],
        apellidos_cliente=data['apellidos'],
        edad_cliente=data['edad'],
        domicilio_cliente=data['domicilio'],
        espicificaciones_cliente=data['DetallesAdicionales'],
        telefono_cliente=data['telefono']
    )
    db.session.add(nuevo_cliente)
    db.session.commit()
    return jsonify(nuevo_cliente.to_dict()), 201

@api.route('/cliente/<int:id>', methods=['PUT'])
def actualizar_cliente(id):
    cliente = Cliente.query.get(id)
    if cliente:
        data = request.get_json()
        cliente.nombre_cliente = data['nombre']
        cliente.apellidos_cliente = data['apellidos']
        cliente.edad_cliente = data['edad']
        cliente.domicilio_cliente = data['domicilio']
        cliente.espicificaciones_cliente = data['DetallesAdicionales']
        cliente.telefono_cliente = data['telefono']
        db.session.commit()
        return jsonify(cliente.to_dict())
    return jsonify({'error': 'Cliente no encontrado'}), 404

@api.route('/cliente/<int:id>', methods=['DELETE'])
def eliminar_cliente(id):
    cliente = Cliente.query.get(id)
    if cliente:
        db.session.delete(cliente)
        db.session.commit()
        return jsonify({'message': 'Cliente eliminado'}), 200
    return jsonify({'error': 'Cliente no encontrado'}), 404

# --- Rutas para Productos ---
@api.route('/productos', methods=['GET'])
def obtener_productos():
    productos = Producto.query.all()
    return jsonify([producto.to_dict() for producto in productos])

@api.route('/producto/<int:id>', methods=['GET'])
def obtener_producto(id):
    producto = Producto.query.get(id)
    if producto:
        return jsonify(producto.to_dict())
    return jsonify({'error': 'Producto no encontrado'}), 404

@api.route('/producto', methods=['POST'])
def crear_producto():
    data = request.get_json()
    nuevo_producto = Producto(
        nombre_producto=data['nombre'],
        descripcion_producto=data['descripcion'],
        precio_compra=data['precio_compra'],
        precio_venta=data['precio_venta'],
        fecha_hora=data['fecha_hora'],
        existencias=data['existencias'],
        imagen=data['imagen']
    )
    db.session.add(nuevo_producto)
    db.session.commit()
    return jsonify(nuevo_producto.to_dict()), 201

@api.route('/producto/<int:id>', methods=['PUT'])
def actualizar_producto(id):
    producto = Producto.query.get(id)
    if producto:
        data = request.get_json()
        producto.nombre_producto = data['nombre']
        producto.descripcion_producto = data['descripcion']
        producto.precio_compra = data['precio_compra']
        producto.precio_venta = data['precio_venta']
        producto.fecha_hora = data['fecha_hora']
        producto.existencias = data['existencias']
        producto.imagen = data['imagen']
        db.session.commit()
        return jsonify(producto.to_dict())
    return jsonify({'error': 'Producto no encontrado'}), 404

@api.route('/producto/<int:id>', methods=['DELETE'])
def eliminar_producto(id):
    producto = Producto.query.get(id)
    if producto:
        db.session.delete(producto)
        db.session.commit()
        return jsonify({'message': 'Producto eliminado'}), 200
    return jsonify({'error': 'Producto no encontrado'}), 404

# --- Rutas para Empleados ---
@api.route('/empleados', methods=['GET'])
def obtener_empleados():
    empleados = Empleado.query.all()
    return jsonify([empleado.to_dict() for empleado in empleados])

@api.route('/empleado/<int:id>', methods=['GET'])
def obtener_empleado(id):
    empleado = Empleado.query.get(id)
    if empleado:
        return jsonify(empleado.to_dict())
    return jsonify({'error': 'Empleado no encontrado'}), 404

@api.route('/empleado', methods=['POST'])
def crear_empleado():
    data = request.get_json()
    nuevo_empleado = Empleado(
        nombre_empleado=data['nombre'],
        apellidos_empleado=data['apellidos'],
        edad_empleado=data['edad'],
        cargo=data['cargo'],
        numero_cuenta=data['numero_cuenta'],
        nombre_tarjeta=data['nombre_tarjeta'],
        email=data['email'],
        contrasena=data['contrasena'],
        salario=data['salario']
    )
    db.session.add(nuevo_empleado)
    db.session.commit()
    return jsonify(nuevo_empleado.to_dict()), 201

@api.route('/empleado/<int:id>', methods=['PUT'])
def actualizar_empleado(id):
    empleado = Empleado.query.get(id)
    if empleado:
        data = request.get_json()
        empleado.nombre_empleado = data['nombre']
        empleado.apellidos_empleado = data['apellidos']
        empleado.edad_empleado = data['edad']
        empleado.cargo = data['cargo']
        empleado.numero_cuenta = data['numero_cuenta']
        empleado.nombre_tarjeta = data['nombre_tarjeta']
        empleado.email = data['email']
        empleado.contrasena = data['contrasena']
        empleado.salario = data['salario']
        db.session.commit()
        return jsonify(empleado.to_dict())
    return jsonify({'error': 'Empleado no encontrado'}), 404

@api.route('/empleado/<int:id>', methods=['DELETE'])
def eliminar_empleado(id):
    empleado = Empleado.query.get(id)
    if empleado:
        db.session.delete(empleado)
        db.session.commit()
        return jsonify({'message': 'Empleado eliminado'}), 200
    return jsonify({'error': 'Empleado no encontrado'}), 404

# --- Rutas para Tareas ---
@api.route('/tareas', methods=['GET'])
def obtener_tareas():
    tareas = Tarea.query.all()
    return jsonify([tarea.to_dict() for tarea in tareas])

@api.route('/tarea/<int:id>', methods=['GET'])
def obtener_tarea(id):
    tarea = Tarea.query.get(id)
    if tarea:
        return jsonify(tarea.to_dict())
    return jsonify({'error': 'Tarea no encontrada'}), 404

@api.route('/tarea', methods=['POST'])
def crear_tarea():
    data = request.get_json()
    nueva_tarea = Tarea(
        titulo=data['titulo'],
        descripcion=data['descripcion'],
        adjunto=data['adjunto'],
        fecha_hora=data['fecha_hora'],
        categoria=data['categoria'],
        empleado_id=data['empleado_id']  # Asegúrate de que el empleado_id se pase correctamente
    )
    db.session.add(nueva_tarea)
    db.session.commit()
    return jsonify(nueva_tarea.to_dict()), 201

@api.route('/tarea/<int:id>', methods=['PUT'])
def actualizar_tarea(id):
    tarea = Tarea.query.get(id)
    if tarea:
        data = request.get_json()
        tarea.titulo = data['titulo']
        tarea.descripcion = data['descripcion']
        tarea.adjunto = data['adjunto']
        tarea.fecha_hora = data['fecha_hora']
        tarea.categoria = data['categoria']
        tarea.empleado_id = data['empleado_id']
        db.session.commit()
        return jsonify(tarea.to_dict())
    return jsonify({'error': 'Tarea no encontrada'}), 404

@api.route('/tarea/<int:id>', methods=['DELETE'])
def eliminar_tarea(id):
    tarea = Tarea.query.get(id)
    if tarea:
        db.session.delete(tarea)
        db.session.commit()
        return jsonify({'message': 'Tarea eliminada'}), 200
    return jsonify({'error': 'Tarea no encontrada'}), 404
