import React from "react";
import {
  BsFillBellFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
  BsFillEnvelopeFill,
} from "react-icons/bs";
const Header = ({OpenSidebar}) => {
  return (
    <div className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar}/>
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon me-5" />
        <BsFillEnvelopeFill className="icon me-5" />
        <BsPersonCircle className="icon me-5" />
      </div>
    </div>
  );
};

export default Header;
