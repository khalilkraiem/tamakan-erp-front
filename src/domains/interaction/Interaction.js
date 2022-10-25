import React, { useState } from 'react'
import SelectSmall from '../../components/Select'
import LightButton from '../../components/buttons/LightButton'
import SmsTable from './components/SmsTable'
import EmailTable from './components/EmailTable'
import ChatBox from './components/ChatBox'

function Interaction() {
  const [value,setValue]=useState('Sms')
  
  return (
    <div className=''>
      <div className='spaceBetween'>
        <div className='cCenter'>
          <h2 className='marl50 marr50'>Interaction</h2>
          <SelectSmall data={['Sms', 'Emails', 'Chat']} label='Filter' value={value} className='h30 w100 ' fn={(e)=>setValue(e.target.value)} />
        </div>
        <div className='row h-100 Center mar10 gray'>
          <p>Show</p>
          <SelectSmall label='Num' className='w70 h40'  data={[10, 20]} />
          <p>Entries</p>
          <div className='cCenter h-100 w200'>
            <LightButton content='+ New' ws={5} />
          </div>
        </div>
      </div>
      <div className='bgLightGray h500 pad20 '>
        
        {value==='Sms'&&<SmsTable />}
        {value==='Emails'&& <EmailTable />}
        {value==='Chat'&&<ChatBox />}
      </div>
    </div>
  )
}

export default Interaction