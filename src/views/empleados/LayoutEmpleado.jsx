import React from 'react'
import MenuEmpleados from '../../components/MenuEmpleados'
import { Outlet } from 'react-router-dom'

export default function LayoutEmpleado() {
  return (
    <div className=''>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-12 col-md-2 p-3 border-end">
            <MenuEmpleados />
          </div>
          <div className="col-12 col-md-10 p-4 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
