import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Resumen from "../components/Resumen"

export default function Layout() {
  return (
    <div className="d-flex">
      <Sidebar/>
      <div style={{ marginLeft: '30px' }}>
        <Outlet/>
      </div>
    </div>
  )
}
