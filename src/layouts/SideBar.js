import React from "react";
import logo from "../assets/images/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import sideBarData from "./sideBarData";
import selected from '../assets/images/selected.svg'

function SideBar() {
  let location = useLocation();
  let navigate = useNavigate();
  console.log(location.pathname);
  return (
    <div className="sideBar ">
      <div>
        <img src={logo} alt="" className="mar10" />
      </div>
      <div className="SideBarContainer">
        {sideBarData.map((elem, i) => (
          <div
            key={i}
            className={
              location.pathname === elem.path
                ? "active pad10 row spaceBetween pointer h20 white"
                : "pad10 row spaceBetween pointer h20 gray "
            }
            onClick={() => navigate(elem.path)}
          >
            
              <div className="cCenter">
                <img
                  src={elem.image}
                  alt={elem.name}
                  style={{ height: 10, width: 10 }}
                />
                <p className="mar10 fzs">{elem.name}</p>
              </div>
              <div>
                {location.pathname===elem.path&&<img src={selected} alt="" />}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
