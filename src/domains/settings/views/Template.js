import React, { useState } from 'react'
import SelectSmall from '../../../components/Select'
import LightButton from '../../../components/buttons/LightButton'
import TemplateTable from '../components/TemplateTable'

function Template() {
  const [num, setNum] = useState('')
  return (
    <div>
      <div className='spaceBetween padl50 padr50'>
        <div className='fzxl fwb '><p>Message Template</p></div>
        
          <div className='cCenter gray'>
            <p>Show</p>
            <SelectSmall label='Num' className='w80 h30' data={[10, 20]} value={num} fn={(e) => setNum(e.target.value)} />
            <p>Entries</p>
            <div className='cCenter h-100 w200'>
              <LightButton content='+ Create' ws={5} />
            </div>
          </div>
        
      </div>
      <TemplateTable />
    </div>
  )
}

export default Template