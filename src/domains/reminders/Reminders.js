import React, { useState } from 'react'
import Modal from 'react-modal'
import SelectSmall from '../../components/Select'
import LightButton from '../../components/buttons/LightButton'
import RemindersTable from './components/RemindersTable'
import AddReminder from './components/AddReminder'
import DeleteReminder from './components/DeleteReminder'

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

function Remainders() {
  const [filter, setFilter] = useState('')
  const [num, setNum] = useState('')
  const [addReminderIsOpen,setAddReminderIsOpen]=useState(false)
  const [deleteReminderIsOpen,setDeleteReminderIsOpen]=useState(false)
  return (
    <div className=''>
      <div className="padl50">
        <div className='spaceBetween'>
          <div>
            <p className="fwb fzxl">Reminders</p>
          </div>
          <div className='cCenter'>
            <div className='br20 bgBlueGreen white h30 w150 cCenter fzs fwb mar20'>
              <p>Reminders</p>
            </div>
            <SelectSmall label='Filter' value={filter} className='h30 w100 ' data={['Sms', 'Emails', 'Chat']} fn={(e) => setFilter(e.target.value)} />
            <p>Show</p>
            <SelectSmall label='Num' className='w70 h30' data={[10, 20]} value={num} fn={(e) => setNum(e.target.value)} />
            <p>Entries</p>
            <div className='cCenter h-100 w200'>
              <LightButton content='+ Add' ws={5} />
            </div>
          </div>
        </div>

      </div>

      <RemindersTable setAddReminderIsOpen={setAddReminderIsOpen} setDeleteReminderIsOpen={setDeleteReminderIsOpen}/>
      <Modal
        isOpen={addReminderIsOpen}
        onRequestClose={() => setAddReminderIsOpen(false)}
        style={customStyles}
        backgroundColor={"gray"}
        contentLabel="Add Reminder Modal"
      >
        <AddReminder setAddReminderIsOpen={setAddReminderIsOpen} />
      </Modal>
      <Modal
        isOpen={deleteReminderIsOpen}
        onRequestClose={() => setDeleteReminderIsOpen(false)}
        style={customStyles}
        backgroundColor={"gray"}
        contentLabel="Delete Reminder Modal"
      >
        <DeleteReminder setDeleteReminderIsOpen={setDeleteReminderIsOpen} />
      </Modal>
    </div>
  )
}

export default Remainders