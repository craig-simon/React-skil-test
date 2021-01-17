import {
  BonusesState,
  SET_LOADING,
  SET_ERROR,
  SET_BONUSES,
  SET_BONUS_ACTIVATION,
  SET_FILTER,
  BonusesActionTypes,
} from "./types";

const initialState: BonusesState = {
  bonuses: [],
  filter: "",
  loading: false,
  error: null,
};

export const bonusesReducer = (
  state = initialState,
  action: BonusesActionTypes
): BonusesState => {
  switch (action.type) {
    case SET_BONUSES:
      return {
        ...state,
        bonuses: action.payload,
      };

    case SET_BONUS_ACTIVATION:
      const changeIndex = state.bonuses.findIndex(
        (bonus) => bonus.title === action.payload.title
      );
      const updatedBonuses = [...state.bonuses];
      if (changeIndex >= 0) {
        updatedBonuses[changeIndex] = {
          ...updatedBonuses[changeIndex],
          activated: action.payload.isActivated,
        };
      }
      return {
        ...state,
        bonuses: updatedBonuses,
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
