import React from "react";
import BlueButton from "../../../components/buttons/BlueButton";
import InputText from "../../../components/inputs/InputText";
import TextAreaInput from "../../../components/inputs/TextAreaInput";


function OneTask({ setViewTaskIsOpen }) {
  return (
    <div className="br20 modal bgWhite">
      <div className="borderbGray spaceBetween h50">
        <div className="Center">
          <h2>Task</h2>
        </div>
         
      </div>
      <div className="">
        <InputText label="Name" />
        <InputText label="Departement" />
        <InputText label="Requests Type" />
        <InputText label="Order item" />
        <TextAreaInput label='Order Note'/>

      </div>
      <div className="cCenter">
        <div className="mar10">
          <BlueButton content="Close" fn={() => setViewTaskIsOpen(false)} />
        </div>
        <div className="mar10">
          <BlueButton content="Create" />
        </div>
      </div>
    </div>
  );
}

export default OneTask;