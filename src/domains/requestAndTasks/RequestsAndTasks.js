import React from 'react'
import {Outlet} from 'react-router-dom'

function RequestsAndTasks() {
  return (
    <div className='page'>
    <div className='padl50'>
      <p className='fwb fzxl'>Requests and Tasks</p>
    </div>
    <Outlet />
  </div>
  )
}

export default RequestsAndTasks