import React from 'react'
import data from '../constants/customersData'
import eye from '../assets/images/eye.svg'
import trash from '../assets/images/delete.svg'
import edit from '../assets/images/edit.svg'
function Table() {
    return (
        <div className='bgLightGray '>
            <div className='mar30'>
                <div className='spaceBetween h50 gray brdGray '>
                    <div className='row'>
                        <div className='w100 cCenter'><p>Sr No</p></div>
                        <div className='w200 cCenter'><p>Name</p></div>
                        <div className='w200 cCenter'><p>Country/City</p></div>
                        <div className='w100 cCenter'><p>Phone</p></div>
                        <div className='w200 cCenter'><p>email</p></div>
                    </div>
                    <div className='cCenter'>
                        <div className='w100'><p>Action</p></div>
                        <div className='column'>
                            <img alt='up' src='/' />
                            <img alt='down' src='/' />
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
                        <div className='w100 row'>
                            <div className='w30'> <img alt='eye' src={eye} className='icon' /></div>
                            <div className='w30'><img alt='edit' src={edit} className='icon' /></div>
                            <div className='w30'><img alt='delete' src={trash} className='icon' /></div>
                        </div>
                    </div>
                ))}
                <div className='spaceBetween mar10 bgWhite h50'>
                    <div><p>Showing 1 to 10 of 10 entries</p></div>
                    <div className='cCenter mar10'>
                        <div className='bgLightGray br5 blue cCenter fzs h20 w50 '><p>← Previous</p></div>
                        <div className='bgBlue br5 lightGray cCenter fzs h20 w30'><p>1</p></div>
                        <div className='bgLightGray br5 blue cCenter fzs h20 w50 '><p>Next →</p></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Table