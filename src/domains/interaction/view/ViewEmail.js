import React from 'react'
import LightButton from '../../../components/buttons/LightButton'
import SelectSmall from '../../../components/Select'
import {useNavigate} from 'react-router-dom'


function ViewEmail() {
  let navigate=useNavigate()
  return (
    <div className='bgLightGray'>
      <div className='spaceBetween bgWhite padl20 padr20'>
        <div className='cCenter '><LightButton content={'← Back'} ws={5} fn={()=>navigate(-1)} /><p className='fzxl fwb marl20'>View email</p></div>
        <div className='cCenter'><LightButton content={'+ New'} /></div>
      </div>
      <div className='mar20 br10 bgWhite column pad20'>
        <div className='Center h20'>
          <p className='gray w40 fwb'>To :</p>
          <SelectSmall className="w400 h30" data={[]} />
        </div>
        <div className='Center'>
          <p className='gray w40 fwb'>Title :</p>
          <SelectSmall className="w400 h30" data={[]} />
        </div>
        <textarea className='w-100 borderGray br10 h300' />
      </div>
    </div>
  )
}

export default ViewEmail