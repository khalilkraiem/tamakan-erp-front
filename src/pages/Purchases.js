import React from 'react'
import {Outlet} from 'react-router-dom'

function Purchases() {
  return (
    <div className='page'>
    <div className='padl50'>
      <p className='fwb fzxl'>Supplier</p>
    </div>
    <Outlet />
  </div>
  )
}

export default Purchases