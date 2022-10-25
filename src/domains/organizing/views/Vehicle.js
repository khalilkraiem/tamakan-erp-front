import React, { useState } from "react";
import Modal from "react-modal";

import VehicleTable from "../components/VehicleTable";

import LightButton from "../../../components/buttons/LightButton";
import SelectSmall from "../../../components/Select";
import AddVehicle from "../components/AddVehicle";
import DeleteVehicle from "../components/DeleteVehicle";
import OneVehicle from "../components/OneVehicle";
import EditVehicle from "../components/EditVehicle";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 10,
    border: "none",
  },
};

Modal.setAppElement("#root");

function Vehicle() {
  const [deleteVehicleIsOpen, setDeleteVehicleIsOpen] = useState(false);
  const [viewVehicleIsOpen, setViewVehicleIsOpen] = useState(false);
  const [addVehicleIsOpen, setAddVehicleIsOpen] = useState(false);
  const [editVehicleIsOpen, setEditVehicleIsOpen] = useState(false);
  return (
    <div>
      <div className="padl50">
        <p className="fwb fzxl">Vehicle</p>
      </div>
      <div className="right h70">
        <div className="spaceBetween w500 mar30">
          <div className="Center spaceBetween h-100 w300">
            <div className=" Center h-30 mar10">
              <SelectSmall
                label="Filter"
                className="w100 h40"
                data={["option1", "option2"]}
              />
            </div>
            <div className="row h-100 Center mar10 gray">
              <p>Show</p>
              <SelectSmall
                label="number"
                className="w70 h40"
                value={10}
                data={[10, 20]}
              />
              <p>Entries</p>
            </div>
          </div>
          <div className="Center h-100">
            <LightButton
              content="+ Add"
              ws={5}
              fn={() => setAddVehicleIsOpen(true)}
            />
          </div>
        </div>
      </div>
      <VehicleTable
        setDeleteVehicleIsOpen={setDeleteVehicleIsOpen}
        setViewVehicleIsOpen={setViewVehicleIsOpen}
        setEditVehicleIsOpen={setEditVehicleIsOpen}
      />
      <Modal
        isOpen={addVehicleIsOpen}
        onRequestClose={() => setAddVehicleIsOpen(false)}
        style={customStyles}
        backgroundColor={"gray"}
        contentLabel="Add Vehicle Modal"
      >
        <AddVehicle setAddVehicleIsOpen={setAddVehicleIsOpen} />
      </Modal>
      <Modal
        isOpen={deleteVehicleIsOpen}
        onRequestClose={() => setDeleteVehicleIsOpen(false)}
        style={customStyles}
        backgroundColor={"gray"}
        contentLabel="Delete Vehicle Modal"
      >
        <DeleteVehicle setDeleteVehicleIsOpen={setDeleteVehicleIsOpen} />
      </Modal>
      <Modal
        isOpen={viewVehicleIsOpen}
        onRequestClose={() => setViewVehicleIsOpen(false)}
        style={customStyles}
        backgroundColor={"gray"}
        contentLabel="View Vehicle Modal"
      >
        <OneVehicle setViewVehicleIsOpen={setViewVehicleIsOpen} />
      </Modal>
      {/* modal edit */}
      <Modal
        isOpen={editVehicleIsOpen}
        onRequestClose={() => setEditVehicleIsOpen(false)}
        style={customStyles}
        backgroundColor={"gray"}
        contentLabel="Edit Vehicle Modal"
      >
        <EditVehicle setEditVehicleIsOpen={setEditVehicleIsOpen} />
      </Modal>
    </div>
  );
}

export default Vehicle;
