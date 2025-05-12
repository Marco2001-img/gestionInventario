import 'bootstrap-icons/font/bootstrap-icons.css'; 

export default function Sidebar() {
    return (
        <div className="" >
            <div class="">
                <div className="sidebar mt-3 " >
                    <div className="d-flex justify-content-center">
                        <p>
                        <i class="bi bi-person-square fs-1"></i>
                        </p>
                    </div>
                    <h5 className="text-center">
                        Hola, Carlos
                    </h5>

                    <div class="list-group mt-4">
                        <a href="/encargado/NuevoEmpleado" class="list-group-item list-group-item-action border-0" >
                            <i class="bi bi-person-add"></i> Nuevo Empleado
                        </a>
                        <a href="/encargado/ChatEmpleados" class="list-group-item list-group-item-action border-0">
                        <i class="bi bi-chat-left-text"></i> Chat Empleados
                        </a>
                        <a href="/encargado/AsignarTareas" class="list-group-item list-group-item-action border-0">
                        <i class="bi bi-card-checklist"></i>    Asignar Tareas
                        </a>
                        <a href="/encargado/inventario" class="list-group-item list-group-item-action border-0">
                        <i class="bi bi-building"></i> Inventario
                        </a>
                        <a href="/encargado/ventas" class="list-group-item list-group-item-action border-0">
                        <i class="bi bi-cash-coin"></i> Ventas
                        </a>
                        <a href="/encargado/TareasPendientes" class="list-group-item list-group-item-action border-0">
                        <i class="bi bi-clipboard-data"></i> Tareas Pendientes
                        </a>
                        <a href="/encargado/PerfilEncargado" class="list-group-item list-group-item-action border-0">
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
