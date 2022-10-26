import React from "react";
import BlueButton from "../../../components/buttons/BlueButton";
import InputText from "../../../components/inputs/InputText";
import TextAreaInput from "../../../components/inputs/TextAreaInput";
import SelectSmall from "../../../components/Select";

function AddRequest({ setAddRequestIsOpen }) {
  return (
    <div className="br20 modal bgWhite">
      <div className="borderbGray spaceBetween h50">
        <div className="Center">
          <h2>Request</h2>
        </div>
          <SelectSmall data={[1, 2]} label='Filter' className='w100 h30' />
      </div>
      <div className="">
        <InputText label="Item" />
        <TextAreaInput label='Note'/>

      </div>
      <div className="cCenter">
        <div className="mar10">
          <BlueButton content="Close" fn={() => setAddRequestIsOpen(false)} />
        </div>
        <div className="mar10">
          <BlueButton content="Create" />
        </div>
      </div>
    </div>
  );
}

export default AddRequest;
