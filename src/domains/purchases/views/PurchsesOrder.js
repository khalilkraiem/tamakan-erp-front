import React, { useState } from 'react'
import PurchasesOrderTable from '../components/PurchachesOrderTable'

import Modal from 'react-modal'
import OnePurchasesOrder from '../components/OnePurchasesOrder'
import EditPurchasesOrder from '../components/EditPurchasesOrder';
import SelectSmall from '../../../components/Select';
import LightButton from '../../../components/buttons/LightButton';

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

function PurchsesOrder() {
   const [viewOrderIsOpen,setViewOrderIsOpen] =useState(false)
   const [editOrderIsOpen,setEditOrderIsOpen]=useState(false)
  return (
    <div>
        <div className='right h70'>
                <div className='spaceBetween w500 mar30'>
                    <div className='Center spaceBetween h-100 w300'>
                        <div className=' Center h-30 mar10'>
                            <SelectSmall label='Filter' className='w100 h40' data={['option1','option2']}  />
                        </div>
                        <div className='row h-100 Center mar10 gray'>
                            <p>Show</p>
                            <SelectSmall label='Num' className='w70 h40' value={10} data={[10, 20]} />
                            <p>Entries</p>
                        </div>
                    </div>
                    <div className='Center h-100'>
                        <LightButton content='+ Add' ws={5}  />
                    </div>
                </div>
            </div>
        <PurchasesOrderTable setViewOrderIsOpen={setViewOrderIsOpen} setEditOrderIsOpen={setEditOrderIsOpen}/>
        <Modal
                isOpen={viewOrderIsOpen}
                onRequestClose={() => setViewOrderIsOpen(false)}
                style={customStyles}
                backgroundColor={'gray'}
                contentLabel="View Order Modal"
            >
                <OnePurchasesOrder setViewOrderIsOpen={setViewOrderIsOpen} />
            </Modal>
            <Modal
                isOpen={editOrderIsOpen}
                onRequestClose={() => setEditOrderIsOpen(false)}
                style={customStyles}
                backgroundColor={'gray'}
                contentLabel="Delete Order Modal"
            >
                <EditPurchasesOrder setEditOrderIsOpen={setEditOrderIsOpen} />
            </Modal>
    </div>
  )
}

export default PurchsesOrder