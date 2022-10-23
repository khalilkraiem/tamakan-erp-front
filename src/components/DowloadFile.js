import React from "react";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

function DowloadFile() {
  return (
    <div className="cCenter w250 h100 mart20 pointer">
      <div>
        <div className="cCenter">
          <BsFileEarmarkArrowDown size={30} />
        </div>
        Download
      </div>
    </div>
  );
}

export default DowloadFile;
