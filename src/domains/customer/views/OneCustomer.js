import React, { useState } from "react";
import Modal from "react-modal";

import QuotationTable from "../../../components/quotation/QuotationTable";
import AddQuotation from "../../../components/quotation/AddQuotation";
import ContactTable from "../../../components/contract/ContactTable";
import AddContract from "../../../components/contract/AddContract";

import InputText from "../../../components/inputs/InputText";
import LightButton from "../../../components/buttons/LightButton";

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

function OneCustomer() {
  const [addQuotationIsOpen, setAddQuotationIsOpen] = useState(false);
  const [addContractIsOpen, setAddContractIsOpen] = useState(false);
  return (
    <div className="">
      <div className="padl50">
        <p className="fwb fzxl">Customer</p>
      </div>
      <div className="marl50 marr50 marb50">
        <div className="fzl gray">
          <p>view</p>
        </div>
        <div className="row wrap">
          <div className="w300">
            <InputText label="Customer Name (English)" />
            <InputText label="Customer Name (Arabic)" />
            <InputText label="N ID Number" />
          </div>
          <div className="w300">
            <InputText label="Country" />
            <InputText label="City" />
            <InputText label="Commercial Registration" />
          </div>
          <div className="w300">
            <InputText label="adress" />
            <InputText label="Building Number" />
            <InputText label="Phone" />
          </div>
          <div className="w300">
            <InputText label="E-mail" />
          </div>
        </div>
      </div>
      <div className="br20 bgLightGray pad30 mar30 mart100">
        <div className="  spaceBetween Center h50">
          <p className="fwb fzl">Quotations</p>
          <LightButton content="+ Add" fn={() => setAddQuotationIsOpen(true)} />
        </div>
        <QuotationTable />
      </div>
      <div className="br20 bgLightGray pad30 mar30">
        <div className="  spaceBetween Center h50">
          <p className="fwb fzl">Contract</p>
          <LightButton content="+ Add" fn={() => setAddContractIsOpen(true)} />
        </div>
        <ContactTable />
      </div>
      <Modal
        isOpen={addQuotationIsOpen}
        onRequestClose={() => setAddQuotationIsOpen(false)}
        style={customStyles}
        backgroundColor={"gray"}
        contentLabel="Add Contract Modal"
      >
        <AddQuotation setAddQuotationIsOpen={setAddQuotationIsOpen} />
      </Modal>
      <Modal
        isOpen={addContractIsOpen}
        onRequestClose={() => setAddContractIsOpen(false)}
        style={customStyles}
        backgroundColor={"gray"}
        contentLabel="Add Contract Modal"
      >
        <AddContract setAddContractIsOpen={setAddContractIsOpen} />
      </Modal>
    </div>
  );
}

export default OneCustomer;
