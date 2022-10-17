import React from 'react'
import data from '../constants/customersData'
import eye from '../assets/images/eye.svg'
import trash from '../assets/images/delete.svg'
import edit from '../assets/images/edit.svg'
import up from '../assets/images/up.svg'
import down from '../assets/images/down.svg'
function Table() {
    return (
        <div className='bgLightGray '>
            <div className='mar30'>
                <div className='spaceBetween h50 gray brdGray '>
                    <div className='row'>
                        <div className='w100 cCenter'>
                            <div className='mar10'>
                                <p>Sr No</p>
                            </div>
                            <div className='column'>

                                <img alt='up' src={up} className='h10 w10 marb5' />

                                <img alt='down' src={down} className='h10 w10 ' />
                            </div>
                        </div>
                        <div className='w200 cCenter'><p>Name</p></div>
                        <div className='w200 cCenter'><p>Country/City</p></div>
                        <div className='w100 cCenter'><p>Phone</p></div>
                        <div className='w200 cCenter'><p>email</p></div>
                    </div>
                    <div className='cCenter w100'>
                        <div className='mar10'><p>Action</p></div>
                        <div className='column'>
                            <img alt='up' src={up} className='h10 w10 marb5' />
                            <img alt='down' src={down} className='h10 w10' />
                        </div>
                    </div>
                </div>
                {data.map((elem, i) => (
                    <div key={i} className={`spaceBetween h50 ${i % 2 === 1 ? "bgWhite" : "bgLightGray "} line`}>
                        <div className='row'>
                            <div className='w100 cCenter fzm '><p>{elem.srNo}</p></div>
                            <div className='w200 cCenter fzm'><p>{elem.name}</p></div>
                            <div className='w200 cCenter fzm'><p>{elem.country}/{elem.city}</p></div>
                            <div className='w100 cCenter fzm'><p>{elem.phone}</p></div>
                            <div className='w200 cCenter fzm'><p>{elem.email}</p></div>
                        </div>
                        <div className='w100 cCenter'>

                            <div className='h20 w20 br5 bgLightOrange cCenter mar5'>
                                <img alt='eye' src={eye} className='' />
                            </div>


                            <div className='h20 w20 br5 bgLightBlue cCenter mar5'>
                                <img alt='edit' src={edit} className='' />
                            </div>


                            <div className='h20 w20 br5 bgLightRed cCenter mar5'>
                                <img alt='delete' src={trash} className='' />
                            </div>

                        </div>
                    </div>
                ))}
                <div className='spaceBetween mar10 bgWhite h50'>
                    <div><p>Showing 1 to 10 of 10 entries</p></div>
                    <div className='cCenter mar10'>
                        <div className='bgLightBlue br5 blue cCenter fzs h20 w70 mar5 fwb'><p>← Previous</p></div>
                        <div className='bgBlue br5 lightGray cCenter fzs h20 w30  '><p>1</p></div>
                        <div className='bgLightBlue br5 blue cCenter fzs h20 w70 mar5 fwb '><p>Next →</p></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Table