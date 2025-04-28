import React from 'react'

export default function PerfilEncargado() {
  return (
    <>
     
      <div className="card p-3 mt-3">
      <p className="h4 ">MI INFORMACION</p>
        <div className="card-body">
          <div class="container">
            <div class="row">
            <div class="col-md-6 mb-3">
            <img src="../img/logo.jpg"
            alt="logo"
            className="w-25"
            />
              </div>
              <div class="col-md-6 mb-3">
                <label for="usuario" class="form-label">NOMBRE COMPLETO: </label>
                <label for="usuario" class="form-label">Carlos Juarez Ponce</label>
              </div>
              <div class="col-md-6 mb-3">
                <label for="apellido" class="form-label">APELLIDOS:</label>
                <label for="usuario" class="form-label"> Juarez Ponce</label>
              </div>

              


              <div class="col-md-4 mb-3">
                <label for="edad" class="form-label">EDAD:</label>
                <label for="usuario" class="form-label">26 años</label>
              </div>
              <div class="col-md-4 mb-3">
                <label for="cargo" class="form-label">CARGO:</label>
                <label for="usuario" class="form-label">Encargado</label>
              </div>
              <div class="col-md-4 mb-3">
                <label for="numeroCuenta" class="form-label">NUMERO DE CUENTA:</label>
                <label for="usuario" class="form-label">515151561561102111</label>
              </div>

              <div class="col-md-6 mb-3">
                <label for="nombreTarjeta" class="form-label">NOMBRE DE LA TARJETA:</label>
                <label for="usuario" class="form-label">Coppel</label>
              </div>
              <div class="col-md-6 mb-3">
                <label for="correo" class="form-label">ESCRIBE TU CORREO:</label>
                <label for="usuario" class="form-label">CarlosJuarez@gmail.com </label>
              </div>

              <div class="col-md-6 mb-3">
                <label for="password" class="form-label">CONTRASEÑA:</label>
                <label for="salario" class="form-label">juarez234</label>
              </div>
              <div class="col-md-6 mb-3">
                <label for="salario" class="form-label">SALARIO:</label>
                <label for="salario" class="form-label">$10,000</label>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </>
  )
}
