import React from 'react'

import { GrClose } from 'react-icons/gr'
function InfoFolder() {

    return (
        <div>
            <div className='spaceBetween'>
                <div className='Center'>
                    <p className='gray'> Details folder</p>
                </div>
                <div className='Center'>
                    <GrClose color='gray' />
                </div>
            </div>
            <div className='center'>
                <div className='w250'>
                    <div className='borderbGray spaceBetween  h30'>
                        <div className='Center gray'>
                            <p>Edit</p>
                        </div>
                    </div>
                    <div className='borderbGray spaceBetween  h30'>
                        <div className='Center gray'>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='center mart50'>
                <div>
                    <div className='spaceBetween w250 h30 Center'>
                        <p className='gray'>Folder Name</p>
                        <p className='fzs'>Folder Name</p>
                    </div>
                    <div className='spaceBetween w250 h30 Center'>
                        <p className='gray'>Last modified date</p>
                        <p className='fzs'>22/10/2022</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoFolder