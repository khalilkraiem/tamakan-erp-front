import React from 'react'
import BlueButton from './BlueButton'
import InputText from './InputText';

function AddContract({ setAddContractIsOpen }) {
    return (
        <div className='br20 modal bgWhite'>

            <div className='borderbGray spaceBetween h50'>
                <div className='Center'>
                    <h2>Add Contract</h2>
                </div>
            </div>

            <div className=''>
                <InputText label='Serial Number' />
                <InputText label='Serial Select quotations' />
                <InputText label='Select File' />
            </div>

            <div className='cCenter'>
                <div className='mar20'>
                    <BlueButton content={'Close'} fn={() => {
                        setAddContractIsOpen(false)
                        console.log(false);
                    }} />
                </div>
                <div className='mar20'>
                    <BlueButton content={'Create'} />
                </div>
            </div>

        </div>
    )
}

export default AddContract