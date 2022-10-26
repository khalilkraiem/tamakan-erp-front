import React from 'react'
import BlueButton from '../../../components/buttons/BlueButton'
import InputText from '../../../components/inputs/InputText'
import SelectSmall from '../../../components/Select'

function AddSupplier({setAddSupplierIsOpen}) {
    return (
        <div className='br20 modal bgWhite'>
            <div className='borderbGray spaceBetween h50'>
                <div className='Center'>
                <h2>Add Supplier</h2>
                </div>
                <SelectSmall data={[1, 2]} label='Filter' className='w100 h30' />
            </div>
            <div className='spaceBetween w600'>
                <div className=''>
                    <InputText label='Supplier Name (English)' />
                    <InputText label='Supplier Name (Arabic)' />
                    <InputText label='N Id Number' />
                    <InputText label='Country' />
                    <InputText label='City' />
                    <InputText label='Tax Number' />
                </div>
                <div className=''>
                    <div className=''>
                        <p className='gray mar h20'>
                            {'Commercial Registration'}
                        </p>
                        <input className='bgGray noBorder br10 w250 h40' />
                    </div>
                    <div className=''>
                        <p className='gray mar h20'>
                            {'Adress'}
                        </p>
                        <input className='bgGray noBorder br10 w250 h40' />
                    </div>
                    <div className=''>
                        <p className='gray mar h20'>
                            {'Building Number'}
                        </p>
                        <input className='bgGray noBorder br10 w250 h40' />
                    </div>
                    <div className=''>
                        <p className='gray mar h20'>
                            {'Phone'}
                        </p>
                        <input className='bgGray noBorder br10 w250 h40' />
                    </div>
                    <div className=' '>
                        <p className='gray mar h20'>
                            {'E-mail'}
                        </p>
                        <input className='bgGray noBorder br10 w250 h40' />
                    </div>
                </div>
            </div>
           
            <div className='cCenter mar30'>
                <div className='marr20'>
                    <BlueButton content={'Close'} fn={()=>{setAddSupplierIsOpen(false)
                    console.log(false);}} />
                </div>
                <div className='marl20'>
                    <BlueButton content={'Create'} />
                </div>
            </div>

        </div>
    )
}

export default AddSupplier