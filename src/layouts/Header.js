import React from "react";
import search from "../assets/images/search.svg";
import notification from "../assets/images/notification.svg";
import userPhoto from "../assets/images/userPhoto.jpg";
import { AiOutlineDown } from "react-icons/ai";

function Header() {
  return (
    <div className="header ">
      <div className="HeaderContainer">
        <div className="spaceBetween h100">
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
            <div className="mar20 cCenter">
              <div
                className="h40 w40 br20 headerUserPhoto mar5"
                style={{ backgroundImage: `url(${userPhoto})` }}
              ></div>
              <AiOutlineDown color="gray" className="op05" size={10} />
            </div>
          </div>
        </div>
        <div className="center">
          <hr style={{ height: 0.5, width: "98%" }} className="bgGray op02 br10"></hr>
        </div>
      </div>
    </div>
  );
}

export default Header;
