import React, { useState } from 'react'

import InputText from '../../../components/inputs/InputText'
import FoldersTable from '../components/FoldersTable'
import DatePickers from '../../../components/inputs/DatePicker'
import SelectSmall from '../../../components/Select'
import GrayBorderButton from '../../../components/buttons/GrayBorderButton';
import Radio from '../../../components/inputs/RadioInput'


import { AiOutlineInfoCircle } from 'react-icons/ai'
import { CiViewList } from 'react-icons/ci'
import { GrClose } from 'react-icons/gr'

function Folders() {
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [radio,setRadio]=useState(1)
    return (
        <div>
            <div className='row h70 marl50 marr50 spaceBetween'>
                <div className='h-100 cCenter mar10 gray'>
                    <div className='cCenter fzl'>
                        <p>Filter</p>
                    </div>
                    <div className='mar20'>
                        <DatePickers label='' value={start} setValue={setStart} views={['year']} />
                    </div>
                    <div className='mar20'>
                        <DatePickers label='' value={end} setValue={setEnd} views={['month', 'year']} />
                    </div>
                </div>
                <div className='row h-100 Center mar10 gray'>
                    <p>Show</p>
                    <SelectSmall label='number' className='w70 h40' value={10} data={[10, 20]} />
                    <p>Entries</p>
                </div>
                <div className='cCenter'>
                    <div className='h30 w30 br20 bgLightGray mar10 cCenter pointer'>
                        <AiOutlineInfoCircle size={20} />
                    </div>
                    <div className='h30 w30 br20 bgLightGray mar cCenter pointer'>
                        <CiViewList size={20} />
                    </div>
                    <GrayBorderButton content='Create folder' />
                </div>
            </div>
            <div className='row'>
                <div className='w-100'>
                    <FoldersTable />
                </div>
                <div className='w400 marl50 marr50'>
                    <div className='spaceBetween'>
                        <div className='Center'>
                            <p className='fwb'> Create Folder</p>
                        </div>
                        <div className='Center'>
                            <GrClose />
                        </div>
                    </div>
                    <InputText label='type of folder' />
                    <InputText label='Project type' />
                    <InputText label='Project Name' />
                    <InputText label='Folder Name' />
                    <div>
                        <p>folder preference naming</p>
                        <Radio label='Type of folder' radio={radio} fn={()=>setRadio(1)} value={1} />
                        <Radio label='Project Type' radio={radio} fn={()=>setRadio(2)} value={2} />
                        <Radio label='Project name' radio={radio} fn={()=>setRadio(3)} value={3} />
                        <Radio label='Folder name' radio={radio} fn={()=>setRadio(1)} value={4} />
                    </div>
                    <div className='cCenter bgBlue br10 w250 white h40 pointer'>
                        <p>Create</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Folders