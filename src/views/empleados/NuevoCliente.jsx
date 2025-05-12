import React from 'react'
import Nav from '../Nav'

export default function NuevoCliente() {
  return (
    <div>
      <Nav/>
      <div className="card mt-3">
        <div className="card-body">
      <form action="">
      <div className="container mt-4">
        <div className="row">
          <h2 className='p-3'>Agregar Nuevo Cliente</h2>
          <div className="col-4">
            <label >Nombre</label>
            <input type="text" className='form-control' placeholder='Nombre del cliente' />
          </div>
          <div className="col-4">
          <label >Apellidos</label>
          <input type="text" className='form-control' placeholder='Apellidos del cliente' />
          </div>
          <div className="col-4">
          <label >Telefono</label>
          <input type="text" className='form-control' placeholder='Telefono del cliente' />
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-4">
          <label >Email</label>
          <input type="email" className='form-control' placeholder='E-mail del cliente' />
          </div>
          <div className="col-4">
          <label >Domiclio</label>
          <input type="text" className='form-control' placeholder='Domicilio del domicilio' />
          </div>
          <div className="col-4">
          <label >Domiclio</label>
          <input type="text" className='form-control' placeholder='Detalles del domicilio' />
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center mt-3">

      <button className='btn btn-warning'><i class="bi bi-plus-lg"></i> Nuevo Cliente</button>
      </div>
      </form>

        </div>
      </div>
    </div>
  )
}
