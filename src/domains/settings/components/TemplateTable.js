import React from 'react'

import data from '../../../constants/templatesData'
import eye from '../../../assets/images/eye.svg'
import trash from '../../../assets/images/delete.svg'
import edit from '../../../assets/images/edit.svg'
import up from '../../../assets/images/up.svg'
import down from '../../../assets/images/down.svg'
import LightButton from '../../../components/buttons/LightButton'
function TemplateTable({setViewTemplateIsOpen,setDeleteTemplateIsOpen}) {
  return (
    <div className='bgLightGray pad30'>
      <div className='fzm'>
                <div className='spaceBetween h50 gray borderbGray '>
                    <div className='row'>
                        <div className='w100 Center mar20'>
                            <div className='mar10'>
                                <p>#</p>
                            </div>
                            
                        </div>
                        <div className='w200 Center'><p>Name of paper</p></div>
                        <div className='w200 Center'><p>Expired date</p></div>
                        
                    </div>
                    <div className='cCenter w100 mar20'>
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
                            <div className='w100 Center fzm mar20 '><p className='mar10'>{elem.num}</p></div>
                            <div className='w200 Center fzm'><p>{elem.title}</p></div>
                           
                           
                        </div>
                        <div className='w100 cCenter mar20'>

                            <div className='h20 w20 br5 bgLightOrange cCenter mar5 pointer' onClick={()=>setViewTemplateIsOpen(true)} >
                                <img alt='eye' src={eye} className='' />
                            </div>

                            <div className='h20 w20 br5 bgLightBlue cCenter  pointer' >
                                <img alt='edit' src={edit} className='' />
                            </div>

                            <div className='h20 w20 br5 bgLightRed cCenter mar5 pointer' onClick={()=>setDeleteTemplateIsOpen(true)} >
                                <img alt='delete' src={trash} className='' />
                            </div>

                        </div>
                    </div>
                ))}
                <div className='spaceBetween mar10 bgWhite h50'>
                    <div className='Center mar20'><p className='gray op08'>Showing 1 to 10 of 10 entries</p></div>
                    <div className='cCenter mar10'>
                        <LightButton content='← Previous' />
                        <div className='bgBlue br5 lightGray cCenter fzs h30 w50 fzm '><p>1</p></div>
                        <LightButton content='Next →' />

                    </div>
                </div>
            </div>
    </div>
  )
}

export default TemplateTable