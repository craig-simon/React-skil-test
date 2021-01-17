import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchBonuses, setBonusActivation } from "redux/bus/bonuses/actions";
import { selectors } from "redux/selectors";

export const useBonusList = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBonuses());
  }, [dispatch]);
  const bonuses = useSelector(selectors.bonuses.getBonuses);
  const filter = useSelector(selectors.bonuses.getFilter);
  const loading = useSelector(selectors.bonuses.getLoading);

  const activateBonusHandler = React.useCallback(
    (title: string) => {
      dispatch(setBonusActivation({ title, isActivated: true }));
    },
    [dispatch]
  );

  return {
    bonuses,
    filter,
    loading,
    activateBonusHandler,
  };
};
