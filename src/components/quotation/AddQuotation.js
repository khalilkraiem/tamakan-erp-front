import React from 'react'

import BlueButton from '../buttons/BlueButton'
import InputText from '../inputs/InputText'
import TextEditor from '../inputs/TextEditor'
import trash from '../../assets/images/delete.svg'



import data from '../../constants/addQuotationsData'

function AddQuotation({ setAddQuotationIsOpen }) {
    

    return (
        <div className='br20 modal bgWhite'>
            <div className='borderbGray spaceBetween h50'>
                <div className='Center'>
                    <h2>Add Quotation</h2>
                </div>

            </div>
            <div className='spaceBetween'>
                <div className='w300'>
                    <InputText label='Serial number' />
                    <InputText label='Date' />
                    <InputText label='Offer Duration' />
                    <InputText label='project type' />
                    <InputText label='Terms of business' />
                    <div className='cCenter w250'>
                        <div className='mar20'>
                            <BlueButton content={'Close'} fn={() => {
                                setAddQuotationIsOpen(false)
                                console.log(false);
                            }} />
                        </div>
                        <div className='mar20'>
                            <BlueButton content={'Create'} />
                        </div>
                    </div>
                </div>
                <div className='w700' >
                    <div className='mar50 '>
                        <TextEditor />
                    </div>
                    <div className='bgLightGray br10 '>
                        <div className='mar50'>
                            <p className='fzl fwb'>Quotations</p>
                        </div>
                        <div className='fzs'>
                            <div className='spaceBetween h50 gray borderbGray '>
                                <div className='row'>
                                    <div className='w100 cCenter mar20'>
                                        <div className='mar10'>
                                            <p >item</p>
                                        </div>

                                    </div>
                                    <div className='w100 cCenter'><p>unit</p></div>
                                    <div className='w100 cCenter'><p>quantity</p></div>
                                    <div className='w100 cCenter'><p>total exclude Tax</p></div>
                                    <div className='w100 cCenter'><p>totlIncludeTax</p></div>

                                </div>
                                <div className='cCenter w100 mar20'>
                                    <div className='mar10'><p>Action</p></div>

                                </div>
                            </div>
                            {data.map((elem, i) => (
                                <div key={i} className={`spaceBetween h50 ${i % 2 === 0 ? "bgWhite" : "bgLightGray "} line`}>
                                    <div className='row'>
                                        <div className='w100 cCenter textCenter mar20 '><p className='w50 bgLightGray'>{elem.item}</p></div>
                                        <div className='w100 cCenter textCenter'><p className='w50 bgLightGray'>{elem.unit}</p></div>
                                        <div className='w100 cCenter textCenter'><p className='w50 bgLightGray'>{elem.quantity}</p></div>
                                        <div className='w100 cCenter textCenter'><p className='w50 bgLightGray'>{elem.totalExcludeTax}</p></div>
                                        <div className='w100 cCenter textCenter'><p className='w50 bgLightGray'>{elem.totlIncludeTax}</p></div>
                                    </div>
                                    <div className='w100 cCenter mar20'>

                                        <div className='h20 w20 br5 bgLightRed cCenter mar5 pointer' >
                                            <img alt='delete' src={trash} className='' />
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AddQuotation