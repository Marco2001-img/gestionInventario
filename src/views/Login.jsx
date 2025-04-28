import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="card p-3">
        <div className="card-body">
          <p className="h4 text-center">Construcciones TorreMar</p>
          <div class="mb-3">
            <label for="usuario" class="form-label">Email:</label>
            <input type="email" class="form-control" placeholder="Email"></input>
          </div>
          <div class="mb-3">
            <label for="pasword" class="form-label">Contraseña</label>
            <input type="password" class="form-control" placeholder="contraseña"></input>
          </div>
          
          <div className="d-flex justify-content-center">
            <button className="btn btn-success">Iniciar sesion</button>
          </div>
        </div>
      </div>

      
    </div>
  )
}
