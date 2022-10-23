import React from 'react'

function InputText({label,fn,value,w,h}) {
    return (
        <div className=''>
            <p className='gray h10'>
                {label}
            </p>
            <input className='bgGray noBorder br10 w250 h40' onChange={fn} value={value} style={{width:w,height:h}} />
        </div>
    )
}

export default InputText