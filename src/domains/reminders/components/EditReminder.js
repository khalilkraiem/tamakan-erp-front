import React from 'react'
import BlueButton from '../../../components/buttons/BlueButton'
import InputText from '../../../components/inputs/InputText'
function EditReminder({setEditReminderIsOpen}) {
  return (
    <div className='br20 modal bgWhite'>

      <div className='borderbGray spaceBetween h50'>
        <div className='Center'>
          <h2>Edit Remainder</h2>
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
            setEditReminderIsOpen(false)
          }} />
        </div>
        <div className='mar20'>
          <BlueButton content={'Edit'} />
        </div>
      </div>

    </div>
  )
}

export default EditReminder