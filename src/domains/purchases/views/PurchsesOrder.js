import React, { useState } from 'react'
import PurchasesOrderTable from '../components/PurchachesOrderTable'

import Modal from 'react-modal'
import OnePurchasesOrder from '../components/OnePurchasesOrder'
import EditPurchasesOrder from '../components/EditPurchasesOrder';

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