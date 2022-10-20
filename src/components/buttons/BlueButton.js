import React from 'react'

function BlueButton({ content,fn }) {
    return (
        <div className='bgBlue br5 lightGray cCenter fzs h30 w100 fzm pointer' onClick={fn}>
            <p>{content}</p>
        </div>
    )
}

export default BlueButton