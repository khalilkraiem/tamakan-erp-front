import React,{useState} from 'react'
import Modal from "react-modal";
import AddCustomer from '../components/AddCustomer';
import LightButton from '../components/LightButton'
import SelectSmall from '../components/Select'
import Table from '../components/Table'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius:10,
    border:'none'
  },
};

Modal.setAppElement("#root");

function Customer() {

  const [addCustomerIsOpen, setAddCustomerIsOpen] = useState(false);
 
 
  return (
    <div className='page'>
      <div className='padl50'>
        <h2>Customer</h2>
      </div>
      <div className='right h70'>
        <div className='spaceBetween w500 mar30'>
          <div className='Center spaceBetween h-100 w300'>
            <div className=' Center h-30 mar10'>
              <SelectSmall label='' className='w100 h40' data={['option1','option2']} value='Filter' />
            </div>
            <div className='row h-100 Center mar10 gray'>
              <p>Show</p>
              <SelectSmall label='' className='w70 h40' value={10} data={[10,20]}/>
              <p>Entries</p>
            </div>
          </div>
          <div className='Center h-100'>
            <LightButton content='+ Add' ws={5} fn={()=>setAddCustomerIsOpen(true)} />
          </div>
        </div>
      </div>
      <Table />
      <Modal
        isOpen={addCustomerIsOpen}
        onRequestClose={()=>setAddCustomerIsOpen(false)}
        style={customStyles}
        backgroundColor={'gray'}
        contentLabel="Add Customer Modal"
      >
        <AddCustomer />
      </Modal>
    </div>
  )
}

export default Customer