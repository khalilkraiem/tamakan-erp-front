import React, { useState } from "react";

import FoldersTable from "../components/FoldersTable";
import DatePickers from "../../../components/inputs/DatePicker";
import SelectSmall from "../../../components/Select";
import GrayBorderButton from "../../../components/buttons/GrayBorderButton";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";

import CreateFolder from "../components/CreateFolder";
import FoldersList from "../components/FoldersList";
import InfoFolder from "../components/InfoFolder";

function Folders() {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const [viewFolders, setViewFolders] = useState(true);
  const [viewInfo, setViewInfo] = useState(true);
  return (
    <div>
      <div className="padl50">
        <p className="fwb fzxl">Folders</p>
      </div>
      <div className="row h70 marl50 marr50 spaceBetween">
        <div className="h-100 cCenter mar10 gray">
          <div className="cCenter fzl">
            <p>Filter</p>
          </div>
          <div className="mar20">
            <DatePickers
              label=""
              value={start}
              setValue={setStart}
              views={["year"]}
            />
          </div>
          <div className="mar20">
            <DatePickers
              label=""
              value={end}
              setValue={setEnd}
              views={["month", "year"]}
            />
          </div>
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
        <div className="cCenter mar10 h-100">
          <div
            className="h30 w30 br20 bgLightGray mar10 cCenter pointer"
            onClick={() => setViewInfo(false)}
          >
            <AiOutlineInfoCircle size={20} />
          </div>
          <div
            className="h30 w30 br20 bgLightGray mar cCenter pointer"
            onClick={() => {
              setViewFolders(!viewFolders);
            }}
          >
            <CiViewList size={20} />
          </div>
          <GrayBorderButton
            content="Create folder"
            fn={() => setViewInfo(true)}
          />
        </div>
      </div>
      <div className="row">
        <div className="w-100">
          {viewFolders ? <FoldersTable /> : <FoldersList />}
        </div>
        <div className="w300 marl50 marr50">
          {viewInfo ? <CreateFolder /> : <InfoFolder />}
        </div>
      </div>
    </div>
  );
}

export default Folders;
