import React from 'react'

function TextAreaInput ({label,fn,value,w,h}) {
    return (
        <div className=''>
            <p className='gray h10'>
                {label}
            </p>
            <textarea className="bgGray noBorder br10 w250 h50" onChange={fn} value={value} style={{width:w,height:h}}/>
        </div>
    )
}

export default TextAreaInput