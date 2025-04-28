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

const router = createBrowserRouter([
    {
        path:'/',
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
    {
        path:'/auth',
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
    }
])

export default router