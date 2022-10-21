import React from 'react'
import { Outlet } from 'react-router-dom'

function Organizing() {
  return (
    <div className='page'>
    <div className='padl50'>
      <p className='fwb fzxl'>Organizing</p>
    </div>
    <Outlet />
  </div>

  )
}

export default Organizing