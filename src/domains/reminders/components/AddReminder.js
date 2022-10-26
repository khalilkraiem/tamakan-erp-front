import React from 'react'
import BlueButton from '../../../components/buttons/BlueButton'
import InputText from '../../../components/inputs/InputText'
function AddReminder({setAddReminderIsOpen}) {
  return (
    <div className='br20 modal bgWhite'>

      <div className='borderbGray spaceBetween h50'>
        <div className='Center'>
          <h2>Add Remainder</h2>
        </div>
      </div>

      <div className=''>
        <InputText label='Name of paper' />
        <InputText label='Expired date' />
        <InputText label='Remider before' />
        <InputText />
      </div>

      <div className='cCenter'>
        <div className='mar20'>
          <BlueButton content={'Close'} fn={() => {
            setAddReminderIsOpen(false)
          }} />
        </div>
        <div className='mar20'>
          <BlueButton content={'Create'} />
        </div>
      </div>

    </div>
  )
}

export default AddReminder