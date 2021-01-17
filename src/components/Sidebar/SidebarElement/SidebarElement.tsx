import React, { FC, ReactElement } from "react";

import "./SidebarElement.styles.scss";

type PropTypes = {
  active: boolean;
};

const SidebarElement: FC<PropTypes> = ({ active }): ReactElement => {
  const borderStyle = {
    borderColor: active ? "#ffffff" : "#888991",
  };
  return (
    <div className="sidebar-element">
      <div className="sidebar-element__circle" style={borderStyle}></div>
    </div>
  );
};

export default SidebarElement;
