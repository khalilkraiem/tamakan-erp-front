import React from 'react'
import { Outlet } from 'react-router-dom'

function Archive() {
  return (
    <div className=''>
      <div className='padl50'>
        <p className='fwb fzxl'>Archive</p>
      </div>
      <Outlet />
    </div>
  )
}

export default Archive