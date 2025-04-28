import React from 'react'

export default function AsignarTareas() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <i class="bi bi-clipboard-check-fill"></i> <label for="cargo" class="form-label h4">Asignar a:</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="empleado">pepe</option>
                  <option value="encargado">pedro</option>
                </select>

              </div>
            </div>
          </div>

          <p></p>
          <div class="col-md-6 mb-3">
            <label for="usuario" class="form-label">Titulo de la tarea</label>
            <input type="text" class="form-control" placeholder=""></input>
          </div>
          <div class="col-md-6 mb-3">
            <label for="apellido" class="form-label">Descripcion:</label>
            <input type="text" class="form-control" placeholder=""></input>
          </div>

          <div class="col-md-4 mb-3">
            <label for="edad" class="form-label">fecha:</label>
            <input type="date" class="form-control" ></input>
          </div>
          <div class="col-md-4 mb-3">
            <label for="cargo" class="form-label">Documentos:</label>
            <input class="form-control" type="file" id="formFile"></input>
          </div>

          <div className="container">
            <button className='btn btn-outline-dark'>Enviar Tarea</button>

          </div>
        </div>
      </div>
    </div>

  )
}
