from flask import Flask, request, jsonify
from models import db, Cliente
from config import Config

app = Flask(__name__)

app.config.from_object(Config)

# Iniciar la conexión a la base de datos
db.init_app(app)

# Ruta principal
@app.route('/')
def home():
    return '¡Hola, bienvenido a Flask!'

@app.route('/clientes', methods=['GET'])
def obtener_clientes():
    clientes = Cliente.query.all()
    return jsonify([cliente.to_dict() for cliente in clientes])

@app.route('/cliente/<int:id>', methods=['GET'])
def obtener_cliente(id):
    cliente = Cliente.query.get(id)
    if cliente:
        return jsonify(cliente.to_dict())
    return jsonify({'error': 'Cliente no encontrado'}), 404

@app.route('/Agregarcliente', methods=['POST'])
def crear_cliente():
    data = request.get_json()
    nuevo_cliente = Cliente(
        nombre=data['nombre'],
        apellidos=data['apellidos'],
        correo=data['correo'],
        contraseña=data['contraseña'],
        edad=data['edad'],
        domicilio=data['domicilio'],
        telefono=data['telefono']
    )
    db.session.add(nuevo_cliente)
    db.session.commit()
    return jsonify(nuevo_cliente.to_dict()), 201

@app.route('/Modificarcliente/<int:id>', methods=['PUT'])
def actualizar_cliente(id):
    cliente = Cliente.query.get(id)
    if cliente:
        data = request.get_json()
        cliente.nombre = data['nombre']
        cliente.apellidos = data['apellidos']
        cliente.correo = data['correo']
        cliente.contraseña = data['contraseña']
        cliente.edad = data['edad']
        cliente.domicilio = data['domicilio']
        cliente.telefono = data['telefono']
        db.session.commit()
        return jsonify(cliente.to_dict())
    return jsonify({'error': 'Cliente no encontrado'}), 404

@app.route('/cliente/<int:id>', methods=['DELETE'])
def eliminar_cliente(id):
    cliente = Cliente.query.get(id)
    if cliente:
        db.session.delete(cliente)
        db.session.commit()
        return jsonify({'message': 'Cliente eliminado'}), 200
    return jsonify({'error': 'Cliente no encontrado'}), 404

if __name__ == '__main__':
    app.run(debug=True)
