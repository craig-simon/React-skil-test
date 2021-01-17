import React, { FC, ReactElement } from "react";

import logo from "assets/images/logo.svg";
import SidebarElement from "./SidebarElement/SidebarElement";
import "./Sidebar.styles.scss";

const Sidebar: FC = (): ReactElement => {
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="sidebar__logo" />
      <div className="sidebar__menu">
        <SidebarElement active={false} />
        <SidebarElement active={false} />
        <SidebarElement active={false} />
        <SidebarElement active={false} />
        <SidebarElement active={false} />
        <SidebarElement active={true} />
        <SidebarElement active={false} />
      </div>
    </div>
  );
};

export default Sidebar;
