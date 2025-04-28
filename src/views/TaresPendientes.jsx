import React from 'react'

export default function TaresPendientes() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            
            <div className="card">
              <div className="card-body">
                <p className='h2'>Tareas Pendientes</p>
                <p></p>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Titulo</label>
            </div>

            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Descripcion</label>
            </div>

            <div class="form-floating mb-3">
              <input type="date" class="form-control" placeholder="Password" />
              <label for="floatingPassword">Fecha de entrega</label>
            </div>
          </div>

          <button className='btn btn-light'>Agregar Tarea</button>

              </div>
            </div>
          <div className="col-6">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Titulo</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Fecha</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Facturas</td>
                  <td>Empresa refrescos</td>
                  <td>12/2/2025</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
