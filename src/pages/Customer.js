import React from 'react'
import LightButton from '../components/LightButton'
import SelectSmall from '../components/Select'
import Table from '../components/Table'

function Customer() {
  return (
    <div className='page'>
      <div className='padl50'>
        <h2>Customer</h2>
      </div>
      <div className='right h70'>
        <div className='spaceBetween w500 mar30'>
          <div className='Center spaceBetween h-100 w300'>
            <div className=' Center h-30 mar10'>
              <SelectSmall label='Filter' className='w100 h40' data={['option1','option2']} />
            </div>
            <div className='row h-100 Center mar10 gray'>
              <p>Show</p>
              <SelectSmall label='nb' className='w70 h40' value={10} data={[10,20]}/>
              <p>Entries</p>
            </div>
          </div>
          <div className='Center h-100'>
            <LightButton content='+ Add' ws={5}  />
          </div>
        </div>
      </div>
      <Table />
    </div>
  )
}

export default Customer