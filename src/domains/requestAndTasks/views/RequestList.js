import React, { useState } from "react";
import Modal from "react-modal";

import SelectSmall from "../../../components/Select";
import LightButton from "../../../components/buttons/LightButton";
import RequestTable from "../components/RequestTable";
import AddRequest from "../components/AddRequest";

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

function RequestList() {
  const [addRequestIsOpen, setAddRequestIsOpen] = useState(false);
  return (
    <div>
      <div className="padl50">
        <p className="fwb fzxl">Requests</p>
      </div>
      <div className="right h70">
        <div className="spaceBetween w500 mar30">
          <div className="Center spaceBetween h-100 w300">
            <div className=" Center h-30 mar10">
              <SelectSmall
                label="Filter"
                className="w100 h30"
                data={["option1", "option2"]}
              />
            </div>
            <div className="row h-100 Center mar10 gray">
              <p>Show</p>
              <SelectSmall
                label="number"
                className="w70 h30"
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
              fn={() => setAddRequestIsOpen(true)}
            />
          </div>
        </div>
      </div>
      <RequestTable />
      <Modal
        isOpen={addRequestIsOpen}
        onRequestClose={() => setAddRequestIsOpen(false)}
        style={customStyles}
        backgroundColor={"gray"}
        contentLabel="Add Request Modal"
      >
        <AddRequest setAddRequestIsOpen={setAddRequestIsOpen} />
      </Modal>
    </div>
  );
}

export default RequestList;
