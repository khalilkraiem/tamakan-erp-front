import React from "react";
import InputText from "../../../components/inputs/InputText";
import TextAreaInput from "../../../components/inputs/TextAreaInput";
import BlueButton from "../../../components/buttons/BlueButton";

import DowloadFile from "../../../components/DowloadFile";

function OneVehicle({setViewVehicleIsOpen}) {
  return (
    <div className="br20 modal bgWhite">
      <div className="borderbGray spaceBetween h50">
        <div className="Center">
          <h2>View Vehicle</h2>
        </div>
      </div>
      <div className="">
        <InputText label="Driver Name" />
        <InputText label="Vehicle Identification Number" />
        <InputText label="Car Plate" />
        <InputText label="IP" />
        <DowloadFile />
        <TextAreaInput label="Note" />
      </div>
      <div className="cCenter">
        <div className="mar10">
          <BlueButton content="Close" fn={() => setViewVehicleIsOpen(false)} />
        </div>
        <div className="mar10">
          <BlueButton content="Create" />
        </div>
      </div>
    </div>
  );
}

export default OneVehicle;
