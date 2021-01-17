import React, { FC, ReactElement } from "react";
import { Sidebar, Topbar } from "components";

import "./Layout.styles.scss";

const Layout: FC = ({ children }): ReactElement => {
  return (
    <div className="app">
      <Sidebar />
      <div className="container">
        <Topbar />
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
