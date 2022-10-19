import React from 'react'

function InputText({label,fn,value}) {
    return (
        <div className=''>
            <p className='gray mar h20'>
                {label}
            </p>
            <input className='bgGray noBorder br10 w250 h40' onChange={fn} value={value} />
        </div>
    )
}

export default InputText