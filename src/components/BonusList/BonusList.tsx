import React, { FC, ReactElement } from "react";

import Bonus from "./Bonus/Bonus";
import { BonusLoader } from "components";
import "./BonusList.styles.scss";

import { useBonusList } from "hooks/useBonusList";
import { Bonus as BonusType } from "sharedTypes";

const BonusList: FC = (): ReactElement => {
  const { bonuses, filter, loading, activateBonusHandler } = useBonusList();

  if (loading)
    return (
      <>
        <BonusLoader />
        <BonusLoader />
        <BonusLoader />
        <BonusLoader />
        <BonusLoader />
      </>
    );

  let filteredBonuses = bonuses;
  if (filter) {
    filteredBonuses = bonuses.filter((bonus) =>
      bonus.title.toLowerCase().includes(filter.toLowerCase())
    );
  }

  if (filteredBonuses.length === 0)
    return <div className="bonus-list__no-items">No items to show</div>;

  const bonusesJSX = filteredBonuses.map(
    (bonus: BonusType): ReactElement => (
      <Bonus
        key={bonus.title}
        bonus={bonus}
        activateBonusHandler={activateBonusHandler}
      />
    )
  );

  return <div className="bonus-list">{bonusesJSX}</div>;
};

export default BonusList;
