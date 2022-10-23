import React from 'react'
import BlueButton from '../../../components/buttons/BlueButton'

function DeleteVehicle({setDeleteVehicleIsOpen}) {
  return (
    <div className='h200 w300 wrap cCenter'>
            <div className=''>
                <div className='center fzl' >
                    <p> Do you want to delete the client?</p>
                </div>
                <div className='cCenter'>
                    <div className='mar20'>
                        <BlueButton content='No' fn={()=>setDeleteVehicleIsOpen(false)} />
                    </div>
                    <div className='mar20'>
                        <BlueButton content='Yes' />
                    </div>

                </div>
            </div>
        </div>
  )
}

export default DeleteVehicle