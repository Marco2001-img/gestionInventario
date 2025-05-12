import React from 'react'

export default function MenuEmpleados() {
  return (
    <div>
         <div>
                <div className="sidebar mt-3 " >
                    <div className="d-flex justify-content-center">
                        <p>
                        <i class="bi bi-person-square fs-1"></i>
                        </p>
                    </div>
                    <h5 className="text-center">
                        Hola, Emmanuel
                    </h5>

                    <div class="list-group mt-4">
                        <a href="/empleado/cerrarVenta" class="list-group-item list-group-item-action border-0" >
                        <i class="bi bi-clipboard2-check"></i> Cerrar Venta
                        </a>
                        <a href="/empleado/chatEmpleado" class="list-group-item list-group-item-action border-0">
                        <i class="bi bi-chat-dots-fill"></i> Chat 
                        </a>
                        <a href="/empleado/misTareas" class="list-group-item list-group-item-action border-0">
                        <i class="bi bi-folder-plus"></i>    Mis Tareas
                        </a>
                        <a href="/empleado/inventario" class="list-group-item list-group-item-action border-0">
                        <i class="bi bi-buildings-fill"></i> Inventario
                        </a>
                        <a href="/empleado/MisVentas" class="list-group-item list-group-item-action border-0">
                        <i class="bi bi-graph-up-arrow"></i> Mis Ventas
                        </a>
                        <a href="/empleado/nuevoCliente" class="list-group-item list-group-item-action border-0">
                        <i class="bi bi-people-fill"></i> Nuevo Cliente
                        </a>
                        <a href="/empleado/PerfilEmpleado" class="list-group-item list-group-item-action border-0">
                        <i class="bi bi-person-square"></i> Perfil 
                        </a>
                        <a href="/auth/login" class="list-group-item list-group-item-action border-0">
                        <i class="bi bi-x-lg"></i> Salir
                        </a>
                    </div>
                </div>
            </div>
      
    </div>
  )
}
