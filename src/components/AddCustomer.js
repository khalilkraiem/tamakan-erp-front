import React from 'react'
import BlueBotton from './BlueBotton'
import SelectSmall from './Select'

function AddCustomer() {
    return (
        <div className='br20 modal bgWhite'>
            <div className='borderbGray spaceBetween h50'>
                <div className='Center'>
                <h2>Add Customer</h2>
                </div>
                <SelectSmall data={[1, 2]} label='Filter' className='w100 h40' />
            </div>
            <div className='spaceBetween'>
                <div className=''>
                    <div className=''>
                        <p className='gray mar h20'>
                            {'Customer Name (English)'}
                        </p>
                        <input className='bgGray noBorder br10 w250 h40' />
                    </div>
                    <div className=''>
                        <p className='gray mar h20'>
                            {'Customer Name (Arabic)'}
                        </p>
                        <input className='bgGray noBorder br10 w250 h40' />
                    </div>
                    <div className=''>
                        <p className='gray mar h20'>
                            {'N ID Number'}
                        </p>
                        <input className='bgGray noBorder br10 w250 h40' />
                    </div>
                    <div className=''>
                        <p className='gray mar h20'>
                            {'Country'}
                        </p>
                        <input className='bgGray noBorder br10 w250 h40' />
                    </div>
                    <div className=''>
                        <p className='gray mar h20'>
                            {'City'}
                        </p>
                        <input className='bgGray noBorder br10 w250 h40' />
                    </div>
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
            <div className='center gray '>
                <div>
                    <p className='h20'>Notes</p>
                    <textarea className='w600 bgGray noBorder br10' rows={4} />
                </div>
            </div>
            <div className='cCenter'>
                <div className='mar20'>
                    <BlueBotton content={'Close'} />
                </div>
                <div className='mar20'>
                    <BlueBotton content={'Create'} />
                </div>
            </div>

        </div>
    )
}

export default AddCustomer