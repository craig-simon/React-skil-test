import {
  HeaderState,
  HeaderActionTypes,
  SET_HEADER_DATA,
  SET_LOADING,
  SET_ERROR,
} from "./types";

const initialState: HeaderState = {
  balance: null,
  nextPayout: null,
  currency: null,
  loading: false,
  error: null,
};

export const headerReducer = (
  state = initialState,
  action: HeaderActionTypes
): HeaderState => {
  switch (action.type) {
    case SET_HEADER_DATA:
      return {
        ...state,
        balance: action.payload.balance,
        nextPayout: action.payload.nextPayout,
        currency: action.payload.currency,
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
