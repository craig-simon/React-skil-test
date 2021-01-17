import React, { FC, ReactElement } from "react";

import { Filter, BonusList } from "components";
import { useTranslation } from "react-i18next";

import "./Home.styles.scss";

const Home: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h2 className="home__title">{t("Services")}</h2>
      <Filter />
      <BonusList />
    </div>
  );
};

export default Home;
