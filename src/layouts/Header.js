import React, { useState } from "react";
import search from "../assets/images/search.svg";
import notification from "../assets/images/notification.svg";
import userPhoto from "../assets/images/userPhoto.jpg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import InputText from "../components/inputs/InputText";
import BlueButton from "../components/buttons/BlueButton";

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <div className="header ">
      <div className="HeaderContainer ">
        <div className="spaceBetween h-100 bgWhite">
          <div className="leftHeader cCenter mar30">

            <img src={search} alt="search" className="icon mar10" />
            <input
              placeholder="Search for Application here"
              className="noBorder headerSearch h30 mar10"
            />

          </div>
          <div className="rightHeader cCenter ">
            <div className="mar20 pointer cCenter">
              <img src={notification} alt="notification icon" />
            </div>
            <div className="mar20 gray">
              <p className="fzs fwb h10">Riadh</p>
              <p className="fzs op05 h10">Admin</p>
            </div>
            <div className="mar20 cCenter pointer" onClick={() => setOpen(!open)}>
              <div
                className="h40 w40 br20 headerUserPhoto mar5"
                style={{ backgroundImage: `url(${userPhoto})` }}
              ></div>
              {!open ? <AiOutlineDown color="gray" className="op05" size={10} /> :
                <AiOutlineUp color="gray" className="op05" size={10} />}
            </div>
            {!open&&<div className="headerProfile pad20">
              <div><p className="fwb">hi Riadh</p></div>
              <div><p className="fwb gray">User Profile</p></div>
              <div>
                <InputText label='N ID' h={30} />
                <InputText label='Phone' h={30} />
                <InputText label='Email' h={30} />
                <InputText label='Job ID' h={30} />
                <InputText label='User Role' h={30} />
                <div className="mart10">
                  <label for="vehicle1">Active user</label><input className="checkBoxGreen" type='checkbox' id="vehicle1"  />
                </div>
                <InputText label='Change Password' h={30} />
              </div>
              <div className="mar20 center">
                <BlueButton content='Edit' />
              </div>

            </div>}
          </div>
        </div>
        <div className="center bgWhite">
          <hr style={{ height: 0.5, width: "98%" }} className="bgGray op02 br10"></hr>
        </div>
      </div>
    </div>
  );
}

export default Header;
