import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Registro from "./views/Registro";
import AgregarNuevo from "./views/AgregarNuevo";
import ChatEmpleo from "./views/ChatEmpleo";
import AsignarTareas from "./views/AsignarTareas";
import Inventario from "./views/Inventario";
import VentasEncargado from "./views/VentasEncargado";
import PerfilEncargado from "./views/PerfilEncargado";
import TaresPendientes from "./views/TaresPendientes";
import LayoutEmpleado from "./views/empleados/LayoutEmpleado";
import CerrarVentas from "./views/empleados/CerrarVentas";
import MisTareas from "./views/empleados/MisTareas";
import Minventario from "./views/empleados/Minventario";
import MisVentas from "./views/empleados/MisVentas";
import NuevoCliente from "./views/empleados/NuevoCliente";
import PerfilEmpleado from "./views/empleados/PerfilEmpleado";
import ChatEmpleado from "./views/empleados/ChatEmpleado";
import AdminLayout from "./layouts/AdminLayout";
import EmpleadosAdmin from "./views/Admin/EmpleadosAdmin";
import VentasAdmin from "./views/Admin/VentasAdmin";
import InventarioAdmin from "./views/Admin/InventarioAdmin";
import InventarioNAdmin from "./views/Admin/InventarioNAdmin";
import ChatAdmin from "./views/Admin/ChatAdmin";
import NuestrosClientes from "./views/Admin/NuestrosClientes";
import PerfilAdmin from "./views/Admin/PerfilAdmin";

const router = createBrowserRouter([
    //ENCARGADO
    {
        path:'/encargado',
        element: <Layout/>,
        children:[
            {
                path:'/encargado/ventas',
                element:<Inicio/>
            },
            {
                path:'/encargado/NuevoEmpleado',
                element:<AgregarNuevo/>
            },
            {
                path:'/encargado/ChatEmpleados',
                element:<ChatEmpleo/>
            },
            {
                path:'/encargado/AsignarTareas',
                element:<AsignarTareas/>
            },
            {
                path:'/encargado/inventario',
                element:<Inventario/>
            },
            {
                path:'/encargado/TareasPendientes',
                element:<TaresPendientes/>
            },
            {
                path:'/encargado/PerfilEncargado',
                element:<PerfilEncargado/>
            }
        ]
    },
    //LOGIN
    {
        path:'/',
        element:<AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element:<Login/>
            },
            {
                path:'/auth/Registro',
                element:<Registro/>
            }
        ]
    },
    //EMPLEADO

    {
        path:'/empleado',
        element:<LayoutEmpleado/>,
        children:[
            {
                path:'/empleado/cerrarVenta',
                element:<CerrarVentas/>
            },
            {
                path:'/empleado/chatEmpleado',
                element:<ChatEmpleado/>
            },
            {
                path:'/empleado/misTareas',
                element:<MisTareas/>
            },
            {
                path:'/empleado/inventario',
                element:<Minventario/>
            },
            {
                path:'/empleado/MisVentas',
                element:<MisVentas/>           
            },
            {
                path:'/empleado/nuevoCliente',
                element:<NuevoCliente/>
            },
            {
                path:'/empleado/PerfilEmpleado',
                element:<PerfilEmpleado/>
            }
        ]
    },
    //admin
    {
        path:'/admin',
        element:<AdminLayout/>,
        children:[
            {
                path:'/admin/TodosEmpleados',
                element:<EmpleadosAdmin/>
            },
            {
                path:'/admin/ventas',
                element:<VentasAdmin/>
            },
            {
                path:'/admin/inventario',
                element:<InventarioAdmin/>
            },
            {
                path:'/admin/inventarioGrafico',
                element:<InventarioNAdmin/>
            },
            {
                path:'/admin/chatAdmin',
                element:<ChatAdmin/>
            },
            {
                path:'/admin/NuestrosClientes',
                element:<NuestrosClientes/>
            },
            {
                path:'/admin/PerfilAdmin',
                element:<PerfilAdmin/>
            }
        ]
    }
])

export default router