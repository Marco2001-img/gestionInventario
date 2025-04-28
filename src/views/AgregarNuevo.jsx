import React from 'react'

export default function AgregarNuevo() {
  return (
    <>
      <p className="h4 p-4">
      <i class="bi bi-person-fill-add"></i>  Datos del nuevo empleado</p>
      <hr />
      <p></p>
      <p></p>
      <div className="container">

     
      <div className="card p-3">
        <div className="card-body">
          <div class="container">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="usuario" class="form-label">NOMBRE COMPLETO:</label>
                <input type="text" class="form-control" placeholder=""></input>
              </div>
              <div class="col-md-6 mb-3">
                <label for="apellido" class="form-label">APELLIDOS:</label>
                <input type="text" class="form-control" placeholder=""></input>
              </div>

              <div class="col-md-4 mb-3">
                <label for="edad" class="form-label">EDAD:</label>
                <input type="text" class="form-control" placeholder=""></input>
              </div>
              <div class="col-md-4 mb-3">
                <label for="cargo" class="form-label">CARGO:</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="empleado">Empleado</option>
                  <option value="encargado">Encargado</option>
                </select>
              </div>
              <div class="col-md-4 mb-3">
                <label for="numeroCuenta" class="form-label">NUMERO DE CUENTA:</label>
                <input type="text" class="form-control" placeholder=""></input>
              </div>

              <div class="col-md-6 mb-3">
                <label for="nombreTarjeta" class="form-label">NOMBRE DE LA TARJETA:</label>
                <input type="text" class="form-control" placeholder=""></input>
              </div>
              <div class="col-md-6 mb-3">
                <label for="correo" class="form-label">ESCRIBE TU CORREO:</label>
                <input type="email" class="form-control" placeholder=""></input>
              </div>

              <div class="col-md-6 mb-3">
                <label for="password" class="form-label">CONTRASEÑA:</label>
                <input type="password" class="form-control" placeholder=""></input>
              </div>
              <div class="col-md-6 mb-3">
                <label for="salario" class="form-label">SALARIO:</label>
                <input type="text" class="form-control" placeholder=""></input>
              </div>
            </div>
          </div>

         
            <button className="btn btn-outline-dark">AGREGAR NUEVO</button>
        
        </div>
      </div>
      </div>
    </>
  )
}
