import React from 'react'
import { Outlet } from 'react-router-dom'

function Settings() {
  return (
    <div className=''>
      <div className="padl50">
        <p className="fwb fzxl">Settings</p>
      </div>
      <Outlet />
    </div>
  )
}

export default Settings