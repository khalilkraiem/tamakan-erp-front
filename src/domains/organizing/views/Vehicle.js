import React, { useState } from 'react'
import Modal from "react-modal";

import VehicleTable from '../components/VehicleTable'

import LightButton from '../../../components/buttons/LightButton'
import SelectSmall from '../../../components/Select'


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

function Vehicle() {
    const [deleteVehicleIsOpen, setDeleteVehicleIsOpen] = useState(false)
    const [viewVehiculeOpen, setViewVehiculeOpen] = useState(false)
    const [addSupplierIsOpen, setAddSupplierIsOpen] = useState(false)
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
                            <SelectSmall label='number' className='w70 h40' value={10} data={[10, 20]} />
                            <p>Entries</p>
                        </div>
                    </div>
                    <div className='Center h-100'>
                        <LightButton content='+ Add' ws={5} fn={() => setAddSupplierIsOpen(true)} />
                    </div>
                </div>
            </div>
            <VehicleTable setDeleteVehicleIsOpen={setDeleteVehicleIsOpen} setViewVehiculeOpen={setViewVehiculeOpen} />
            {/* <Modal
                isOpen={addSupplierIsOpen}
                onRequestClose={() => setAddSupplierIsOpen(false)}
                style={customStyles}
                backgroundColor={'gray'}
                contentLabel="Add Supplier Modal"
            >
                <AddSupplier setAddSupplierIsOpen={setAddSupplierIsOpen} />
            </Modal>
            <Modal
                isOpen={deleteSupplierIsOpen}
                onRequestClose={() => setDeleteSupplierIsOpen(false)}
                style={customStyles}
                backgroundColor={'gray'}
                contentLabel="Delete Supplier Modal"
            >
                <DeleteSupplier setDeleteSupplierIsOpen={setDeleteSupplierIsOpen} />
            </Modal> */}

        </div>
    )
}

export default Vehicle