import React from 'react'
import BlueButton from '../../../components/buttons/BlueButton'
import InputText from '../../../components/inputs/InputText'

function EditPurchasesOrder({ setEditOrderIsOpen }) {
    return (
        <div className='br20 modal bgWhite' >
            <div className='borderbGray spaceBetween  h50'>
                <div className='Center marl20 marr20'>
                    <h2>Edit</h2>
                </div>
            </div>
            <div className='h200 cCenter w300'>
                <InputText label='Select File' />
            </div>
            <div className='cCenter'>
                <div className='mar10'>
                    <BlueButton content='Close' fn={() => setEditOrderIsOpen(false)} />
                </div>
                <div className='mar10'>
                    <BlueButton content='Create' />
                </div>
            </div>
        </div>
    )
}

export default EditPurchasesOrder