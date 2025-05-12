import React from 'react'
import Nav from '../Nav'

export default function PerfilAdmin() {
  return (
    <div>
      <Nav/>
      <div className="card">
        <div className="card-body">
          <div className="conatiner">
            <div className="row">
              <p className='h1'>Mi Informacion</p>
              <div className="col-3">
                <label>Nombre: Emmanuel</label>
              </div>
              <div className="col-3">
              <label><label>Apellidos: Reyes</label></label>
              </div>
              <div className="col-3">
              <label>Cargo: Empleado</label>
              </div>
              <div className="col-3">
              <label>edad: 20</label>
              </div>
            </div>
          </div>

          <div className="conatiner mt-5">
            <div className="row">
              <div className="col-3">
                <label>Correo: Emmanuel@gmail.com</label>
              </div>
              <div className="col-3">
              <label><label>Contraseña: 1234</label></label>
              </div>
              <div className="col-3">
              <label>Numero de cuenta: 1227229272929</label>
              </div>
              <div className="col-3">
              <label>Nombre del banco: coppel</label>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}
