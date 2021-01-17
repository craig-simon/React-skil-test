import React, { FC, ReactElement } from "react";

import { useFilter } from "hooks/useFilter";

import "./Filter.styles.scss";

const Filter: FC = (): ReactElement => {
  const { filter, filterHandler, resetFilterHandler, t } = useFilter();

  return (
    <div className="filter">
      <h3 className="filter__title">{t("Filter")}</h3>
      <div className="filter__actions">
        <input
          className="filter__input"
          type="text"
          placeholder="Filter"
          value={filter}
          onChange={filterHandler}
        />
        <button className="filter__reset" onClick={resetFilterHandler}>
          {t("Reset")}
        </button>
      </div>
    </div>
  );
};

export default Filter;
