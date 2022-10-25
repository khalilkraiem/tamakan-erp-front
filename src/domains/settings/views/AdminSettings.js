import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminSettings() {
  return (
    <div>AdminSettings
        <div className='right'>

        <Outlet/>
        </div>
    </div>
  )
}

export default AdminSettings