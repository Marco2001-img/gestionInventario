import { Link } from "react-router-dom";

export default function Registro() {
  return (
    <div>
      <p className="h4 ">Registrar</p>
      <p></p>
      <p className="h6">
      Por favor, complete los campos requeridos para registrar 
      un nuevo usuario, ya sea como empleado o encargado.
      </p>
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

          <div className="d-flex justify-content-center">
            <button className="btn btn-success">REGISTRATE</button>
          </div>
        </div>
      </div>

      <nav className="mt-3">
        <Link to="/auth/login">
          Volver
        </Link>
      </nav>
    </div>
  )
}
