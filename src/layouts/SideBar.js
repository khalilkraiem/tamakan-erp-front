import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import sideBarData from "./sideBarData";
import selected from "../assets/images/selected.svg";
import {BiChevronUp} from 'react-icons/bi'

function SideBar() {
  let location = useLocation();
  let navigate = useNavigate();
  const [tag, setTag] = useState("/");
  const [subTag, setSubTag] = useState("");
  const [miniSubTag,setMiniSubTag]=useState("")
  console.log(location.pathname);
  useEffect(() => {
    sideBarData.forEach((elem, i) => {
      if (elem.name !== "DashBoard") {
        if (location.pathname.includes(elem.path)) {
          setTag(elem.path);
          
            elem.children?.forEach((ele, i) => {
              if (location.pathname.includes(ele.path)) {
                setSubTag(ele.path);
                ele.children?.forEach((el,i)=>{
                  if(location.pathname.includes(el.path))
                  setMiniSubTag(el.path)
                })
              }
            });
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
                navigate(elem.path);
                setTag(elem.path);
                setSubTag(elem.path);
              }}
            >
              <div className="cCenter">
                <img
                  src={elem.image}
                  alt={elem.name}
                  className="icon"
                  style={{
                    filter: tag === elem.path ? "brightness(200%)" : "",
                  }}
                />
                <p className="mar10 fzs fwb">{elem.name}</p>
              </div>
              <div>{tag === elem.path && <img src={selected} alt="" />}</div>
            </div>
            {elem.children &&
              tag === elem.path &&
              elem.children.map((ele, i) => (
                <div key={i}>
                  <div
                    className="padl20 fzs pointer spaceBetween padr20"
                    onClick={() => {
                      navigate(ele.path);
                      setSubTag(ele.path);
                    }}
                  >
                    <p className={`${subTag === ele.path ? "fwb" : ""}`}>
                      {ele.name}
                    </p>
                    {ele.children&& <div className="cCenter"><BiChevronUp size={20}/></div>}
                  </div>
                  {ele.children &&
                    subTag === ele.path &&
                    ele.children.map((el, i) => (
                      <div key={i} className="padl30 fzs pointer" onClick={() => {
                        navigate(el.path);
                        setMiniSubTag(el.path);
                      }}>
                        <p className={`${miniSubTag === el.path ? "fwb" : ""}`}>{el.name}</p>
                      </div>
                    ))}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
