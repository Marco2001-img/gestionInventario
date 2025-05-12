import React from 'react'
import Nav from '../Nav'

export default function CerrarVentas() {
  return (
    <div>
      <Nav/>
      <div class="container mt-5 my-3">
        <div class="row justify-content-center">
         
        <h1> <i class="bi bi-bag-plus-fill"></i> Cerrar Venta Nueva</h1>

          <div className="card">
            <div className="card-body">
          <form>
            <div class="mb-3">
              <label class="form-label">Nombre Del Producto:</label>
              <input type="text" class="form-control" aria-describedby="emailHelp"  />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Nombre Cliente</label>
              <select class="form-select" aria-label="Default select example">
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class="mb-3">
              <label class="form-label">Fecha y Hora</label>
              <input type="date" class="form-control" aria-describedby="emailHelp" />
            </div>


            <button type="submit" class="btn btn-primary">Venta</button>
          </form>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
