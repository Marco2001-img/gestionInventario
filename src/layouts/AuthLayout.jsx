import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <main className="container mt-5">
        <div className="row">
          <div className="col-3 mt-5">
            <Outlet/>
          </div>
          <div className="col-9">
            <img src="../img/logo.jpg"
            alt="logo"
            className="w-100"
            />
          </div>
        </div>
    </main>
  )
}
