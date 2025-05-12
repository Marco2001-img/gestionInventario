import React from 'react'
import Nav from '../Nav'

export default function MisTareas() {
  return (
    <div>
     <Nav/>

      <div className="d-flex jsutify-content-center">
      <div className="container mt-3">
        <div className="row">
          <div className="col-10">
              <div className="card">
                <div className="card-body">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Desciripcion</th>
      <th scope="col">Fecha De Entrega</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Costeos</td>
      <td>Rebisar los precios de inventario</td>
      <td>1/05/2025 </td>
    </tr>
   
  </tbody>
</table>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
