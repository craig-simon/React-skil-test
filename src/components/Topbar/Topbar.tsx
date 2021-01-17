import React, { FC, ReactElement } from "react";

import { HeaderLoader } from "components";

import { useTopbar } from "hooks/useTopbar";

import "./Topbar.styles.scss";

const Topbar: FC = (): ReactElement => {
  const { loading, balance, nextPayout, currency, t } = useTopbar();

  const topBarJSX = loading ? (
    <>
      <HeaderLoader />
      <HeaderLoader />
    </>
  ) : (
    <>
      <div className="topbar__element">
        <h3 className="topbar__element-title">{t("Balance")}</h3>
        <p className="topbar__element-value">
          {balance !== null ? balance.toLocaleString() : null}{" "}
          {currency === "usd" ? "$" : ""}
        </p>
      </div>

      <div className="topbar__element">
        <h3 className="topbar__element-title">{t("Payout")}</h3>
        <p className="topbar__element-value">
          {nextPayout !== null ? nextPayout.toLocaleString() : null}{" "}
          {currency === "usd" ? "$" : ""}
        </p>
      </div>
    </>
  );

  return <div className="topbar">{topBarJSX}</div>;
};

export default Topbar;
