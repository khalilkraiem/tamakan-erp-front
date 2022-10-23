import React from 'react'
import InputText from '../../../components/inputs/InputText'
import { BsFileEarmarkArrowDown } from 'react-icons/bs'
import BlueButton from '../../../components/buttons/BlueButton'
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
                    <div className='cCenter w250 h100 mart20 pointer'>
                        <div>
                            <div className='cCenter'>
                                <BsFileEarmarkArrowDown size={30} />
                            </div>
                            Download
                        </div>
                    </div>
                </div>
            </div>
            <div className='cCenter mar20'>
                <BlueButton content='Close' fn={() => setViewOrderIsOpen(false)} />
            </div>
        </div>
    )
}

export default OnePurchasesOrder