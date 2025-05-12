import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <main className="container-fluid">
    <div className="row" style={{ height: '100vh' }}>
      
      {/* Sidebar */}
      <div className="col-3 mt-5 overflow-auto">
        <Outlet />
      </div>
  
      {/* Imagen */}
      <div className="col-9 p-0">
        <img
          src="../img/logo.jpg"
          alt="logo"
          className="w-100 h-100"
          style={{
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>
  
    </div>
  </main>
  
  
  )
}
