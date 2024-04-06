import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
  BsCurrencyDollar,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon-header" />
          SHOP
        </div>
        <span className="icon close_icon " onClick={OpenSidebar}>
          X
        </span>
      </div>
      <ul className="siderbar-lists">
        <li className="sidebar-list-items">
          <a href="">
            <BsGrid1X2Fill className="icon me-1" />
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-items">
          <a href="">
            <BsCurrencyDollar className="icon me-1" />
            Sales
          </a>
        </li>
        <li className="sidebar-list-items">
          <a href="">
            <BsPeopleFill className="icon me-1" />
            Customers
          </a>
        </li>
        <li className="sidebar-list-items">
          <a href="">
            <BsFillArchiveFill className="icon me-1" />
            Instocks
          </a>
        </li>
        <li className="sidebar-list-items">
          <a href="">
            <BsMenuButtonWideFill className="icon me-1" />
            Reports
          </a>
        </li>
        <li className="sidebar-list-items">
          <a href="">
            <BsFillGearFill className="icon me-1" />
            Setting
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
