import React from 'react'

export default function MenuAdmin() {
    return (
        <div>
            <div class="">
                <div className="sidebar mt-3 " >
                    <div className="d-flex justify-content-center">
                        <p>
                            <i class="bi bi-person-square fs-1"></i>
                        </p>
                    </div>
                    <h5 className="text-center">
                        Hola, Admin
                    </h5>

                    <div class="list-group mt-4">
                        <a href="/admin/TodosEmpleados" class="list-group-item list-group-item-action border-0" >
                            <i class="bi bi-person-add"></i> Empleados
                        </a>
                        <a href="/admin/ventas" class="list-group-item list-group-item-action border-0">
                            <i class="bi bi-chat-left-text"></i> Ventas
                        </a>
                        <a href="/admin/inventarioGrafico" class="list-group-item list-group-item-action border-0">
                            <i class="bi bi-card-checklist"></i>    Inventario Grafico
                        </a>
                        <a href="/admin/inventario" class="list-group-item list-group-item-action border-0">
                            <i class="bi bi-building"></i> Inventario
                        </a>
                        <a href="/admin/chatAdmin" class="list-group-item list-group-item-action border-0">
                            <i class="bi bi-cash-coin"></i> Chat General
                        </a>
                        <a href="/admin/NuestrosClientes" class="list-group-item list-group-item-action border-0">
                            <i class="bi bi-clipboard-data"></i> Clientes
                        </a>
                        <a href="/admin/PerfilAdmin" class="list-group-item list-group-item-action border-0">
                            <i class="bi bi-person-circle"></i> Perfil
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
