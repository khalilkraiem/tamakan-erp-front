import React from 'react'
import InputText from '../../../components/inputs/InputText'

import BlueButton from '../../../components/buttons/BlueButton'
import DowloadFile from '../../../components/DowloadFile'
function OnePurchasesOrder({ setViewOrderIsOpen }) {
    return (
        <div className='br20 modal bgWhite' >
            <div className='borderbGray spaceBetween h50'>
                <div className='Center'>
                    <h2>View</h2>
                </div>
            </div>
            <div className='spaceBetween'>

                <div className='w300'>
                    <InputText label='Serial Number' />
                    <InputText label='Employee name' />
                    <InputText label='type of request' />

                </div>
                <div className=''>
                    <InputText label='Item' />
                    <InputText label='Departement' />
                    <DowloadFile />
                </div>
            </div>
            <div className='cCenter mar20'>
                <BlueButton content='Close' fn={() => setViewOrderIsOpen(false)} />
            </div>
        </div>
    )
}

export default OnePurchasesOrder