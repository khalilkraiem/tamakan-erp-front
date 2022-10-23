import React from "react";
import BlueButton from "../../../components/buttons/BlueButton";
import InputText from "../../../components/inputs/InputText";
import TextAreaInput from "../../../components/inputs/TextAreaInput";

function AddVehicle({ setAddVehicleIsOpen }) {
  return (
    <div className="br20 modal bgWhite">
      <div className="borderbGray spaceBetween h50">
        <div className="Center">
          <h2>Add Supplier</h2>
        </div>
      </div>
      <div className="">
        <InputText label="Driver Name" />
        <InputText label="Vehicle Identification Number" />
        <InputText label="Car Plate" />
        <InputText label="IP" />
        <TextAreaInput label='Note'/>

      </div>
      <div className="cCenter">
        <div className="mar10">
          <BlueButton content="Close" fn={() => setAddVehicleIsOpen(false)} />
        </div>
        <div className="mar10">
          <BlueButton content="Create" />
        </div>
      </div>
    </div>
  );
}

export default AddVehicle;
