import React,{useState} from 'react'
import Radio from '../../../components/inputs/RadioInput'
import InputText from '../../../components/inputs/InputText'
import { GrClose } from 'react-icons/gr'
function CreateFolder() {
    const [radio,setRadio]=useState(1)
    return (
        <div>
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
                <Radio label='Type of folder' radio={radio} fn={() => setRadio(1)} value={1} />
                <Radio label='Project Type' radio={radio} fn={() => setRadio(2)} value={2} />
                <Radio label='Project name' radio={radio} fn={() => setRadio(3)} value={3} />
                <Radio label='Folder name' radio={radio} fn={() => setRadio(1)} value={4} />
            </div>
            <div className='cCenter mart20'>
            <div className='cCenter bgBlue br10 w250 white h30 pointer'>
                <p>Create</p>
            </div>
            </div>
        </div>
    )
}

export default CreateFolder