import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectors } from "redux/selectors";
import { setFilter } from "redux/bus/bonuses/actions";

import { useTranslation } from "react-i18next";

export const useFilter = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const filter = useSelector(selectors.bonuses.getFilter);

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };

  const resetFilterHandler = () => {
    dispatch(setFilter(""));
  };

  return {
    filter,
    filterHandler,
    resetFilterHandler,
    t,
  };
};
