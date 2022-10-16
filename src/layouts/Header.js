import React from 'react'

function Header() {
  return (
    <div className='header '>
      <div className='HeaderContainer spaceBetween'>
        <div className='leftHeader cCenter'>
          <div className='mar10'>search</div>
        </div>
        <div className='rightHeader cCenter '>
          <div className='mar10'>notif</div>
          <div className='mar10'>name</div>
          <div className='mar10'>picture</div>
        </div>
      </div>
    </div>
  )
}

export default Header