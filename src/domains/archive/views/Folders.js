import React from 'react'
import DatePickers from '../../../components/inputs/DatePicker'
import SelectSmall from '../../../components/Select'

function Folders() {
    return (
        <div>
            <DatePickers />
            <div className='row h-100 Center mar10 gray'>
                <p>Show</p>
                <SelectSmall label='number' className='w70 h40' value={10} data={[10, 20]} />
                <p>Entries</p>
            </div>
        </div>
    )
}

export default Folders