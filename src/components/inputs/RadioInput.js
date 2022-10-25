import React from 'react'

function RadioInput({radio,fn,value,label}) {
    return (
        <div className='row Center h30'>
            <input type="radio" className="marr10" checked={radio === value ? true : false} onChange={fn} />
            <p className=''>{label}</p>
        </div>
    )
}

export default RadioInput