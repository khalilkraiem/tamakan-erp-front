import React from 'react'
import { Outlet } from 'react-router-dom';


function Customer() {

  return (
    <div className='page'>
      <div className='padl50'>
        <p className='fwb fzxl'>Customer</p>
      </div>
      <Outlet />
    </div>
  )
}

export default Customer