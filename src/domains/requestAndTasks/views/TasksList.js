import React,{useState} from 'react'
import Modal from "react-modal";
import SelectSmall from '../../../components/Select'
import OneTask from '../components/OneTask';


import TaskTable from '../components/TaskTable';

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: 10,
        border: 'none'
    },
};

Modal.setAppElement("#root");

function TasksList() {
    const [viewTaskIsOpen,setViewTaskIsOpen]=useState(false)
  return (
    <div>
        <div className='right h70'>
                <div className='spaceBetween w500 mar30'>
                    <div className='Center spaceBetween h-100 w300'>
                        <div className=' Center h-30 mar10'>
                            <SelectSmall label='Filter' className='w100 h40' data={['option1', 'option2']} />
                        </div>
                        <div className='row h-100 Center mar10 gray'>
                            <p>Show</p>
                            <SelectSmall label='number' className='w70 h40'  data={[10, 20]} />
                            <p>Entries</p>
                        </div>
                    </div>
                    <div className='Center h-100'>
                        
                    </div>
                </div>
            </div>
            <TaskTable setViewTaskIsOpen={setViewTaskIsOpen} />
            <Modal
                isOpen={viewTaskIsOpen}
                onRequestClose={() => setViewTaskIsOpen(false)}
                style={customStyles}
                backgroundColor={'gray'}
                contentLabel="Add Task Modal"
            >
                <OneTask setViewTaskIsOpen={setViewTaskIsOpen} />
            </Modal>
    </div>
  )
}

export default TasksList