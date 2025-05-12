import React from 'react'
import MenuAdmin from '../components/MenuAdmin'
import { Outlet } from 'react-router-dom'
import Nav from '../views/Nav'

export default function AdminLayout() {
  return (
    <div className=''>
        <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-12 col-md-2 p-3 border-end">
      
        <MenuAdmin/>
        </div>

        <div className="col-12 col-md-10 p-4 overflow-auto">
        <Outlet/>
      </div>
      </div>
        </div>
    </div>
  )
}
