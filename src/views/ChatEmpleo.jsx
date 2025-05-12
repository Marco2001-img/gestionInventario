import React from 'react'

export default function ChatEmpleo() {
  return (
    <>
      <div className="d-flex flex-column w-100 min-vh-100 px-0 mx-0" style={{ backgroundColor: "#f8f9fa" }}>
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between bg-white px-3 py-2 w-100 m-0">
          <div>
            <i className="bi bi-arrow-right-circle-fill me-2"></i> Nuevo Chat
          </div>

          <div className="d-flex align-items-center">
            <label className="me-2">Enviar a:</label>
            <div className="btn-group">
              <button type="button" className="btn btn-black dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Empleados
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Carlos</a></li>
                <li><a className="dropdown-item" href="#">Juan</a></li>
                <li><a className="dropdown-item" href="#">Pedro</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chat Burbujas */}
        <div className="flex-grow-1 w-100 px-3 py-2">
          <div className="d-flex mb-3">
            <div className="p-2 bg-light rounded-pill">
              ¡Hola! ¿Cómo estás?
            </div>
          </div>
          <div className="d-flex justify-content-end mb-3">
            <div className="p-2 bg-primary text-white rounded-pill">
              ¡Muy bien, gracias! ¿Y tú?
            </div>
          </div>
          <div className="d-flex mb-3">
            <div className="p-2 bg-light rounded-pill">
              ¡Todo bien también!
            </div>
          </div>
        </div>



        {/* Input mensaje */}
        <div className="d-flex align-items-center bg-white px-3 py-2 w-100 m-0">
          <input type="text" className="form-control me-2" placeholder="Enviar mensaje" />
          <button className="btn btn-dark">
            <i className="bi bi-cursor-fill"></i>
          </button>

        </div>

      </div>







    </>
  )
}
