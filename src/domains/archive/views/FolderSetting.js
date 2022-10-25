import React, { useState } from 'react'
import InputText from '../../../components/inputs/InputText'
import RadioInput from '../../../components/inputs/RadioInput'

function FolderSetting() {
  const [radio,setRadio]=useState(1)
  return (
    <div>
      <div className='padl50'>
        <p className='fwb fzxl'>Folder Setting</p>
      </div>
      <div className='mart50 h500 bgLightGray pad20'>
        <div className=' bgWhite h200 br20 pad30'>
          <p className='fwb fzl'>Inward List</p>
          <div className='row'>
            <div className='w500'>
              <InputText label='Short Name' />
            </div>
            <div className=''>
              <p className='h10 fwb gray'>Year represent</p>
              <div className='row'>
                <div className='w100'>
                  <RadioInput label='2' radio={radio} fn={() => setRadio(1)} value={1} />
                </div>
                <div className='w100'>
                  <RadioInput label='4'  radio={radio} fn={() => setRadio(2)} value={2}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FolderSetting