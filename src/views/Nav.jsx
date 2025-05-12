import React from 'react'

export default function Nav() {
  return (
    <div>
      <div className="container bg-primary-subtle">
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-center mt-4">
              <div class="mb-4">
                <input type="text" class="form-control" placeholder="Buscar" />
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex justify-content-center mt-4 ">
              <div class="mb-4">
                <button className='btn btn-outline-dark '><i class="bi bi-bell"></i></button>
                <button className='btn btn-outline-dark m-1'><i class="bi bi-list"></i></button>
                <button className='btn btn-outline-dark'><i class="bi bi-brightness-alt-high"></i></button>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
