import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import sideBarData from "./sideBarData";
import selected from '../assets/images/selected.svg'


function SideBar() {
  let location = useLocation();
  let navigate = useNavigate();
  const [tag, setTag] = useState('/')
  const [subTag, setSubTag] = useState('')
  console.log(location.pathname);
  useEffect(() => {

    sideBarData.forEach((elem, i) => {
      if (elem.name !== 'DashBoard') {
        if (location.pathname.includes(elem.path)) {
          setTag(elem.path)
          if (elem.children)
            elem.children.forEach((el, i) => {
              if (location.pathname.includes(el.path))
                setSubTag(el.path)
            })
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="sideBar ">
      <div>
        <img src={logo} alt="" className="mar10" />
      </div>
      <div className="SideBarContainer">
        {sideBarData.map((elem, i) => (
          <div key={i}>
            <div
              
              className={
                tag === elem.path
                  ? "active pad10 row spaceBetween pointer h20 padl20 white"
                  : "pad10 row spaceBetween pointer h20 padl20 gray "
              }
              onClick={() => {
                navigate(elem.path)
                setTag(elem.path)
                setSubTag(elem.path)
              }}
            >

              <div className="cCenter">
                <img
                  src={elem.image}
                  alt={elem.name}
                  className='icon'
                  style={{ filter: tag === elem.path ? 'brightness(200%)' : '' }}
                />
                <p className="mar10 fzs fwb">{elem.name}</p>
              </div>
              <div>
                {tag === elem.path && <img src={selected} alt="" />}
              </div>
            </div>
            {elem.children && tag === elem.path && elem.children.map((el, i) => (
              <div key={i} className="padl20 fzs pointer" onClick={() => {
                navigate(el.path)
                setSubTag(el.path)

              }}>
                <p className={`${subTag === el.path ? "fwb" : ""}`} >{el.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
