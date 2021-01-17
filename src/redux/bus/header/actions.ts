import {
  HeaderActionTypes,
  SET_HEADER_DATA,
  SET_LOADING,
  SET_ERROR,
} from "./types";
import { HeaderData } from "sharedTypes";
import { ThunkAction } from "redux-thunk";
import { AppState } from "redux/init/rootReducer";
import { Action } from "redux";
import { API } from "api";
import { createHeaderDataObject } from "redux/helpers";

const setHeaderData = (payload: HeaderData): HeaderActionTypes => ({
  type: SET_HEADER_DATA,
  payload,
});

const setLoading = (payload: boolean): HeaderActionTypes => ({
  type: SET_LOADING,
  payload,
});

const setError = (payload: null | string): HeaderActionTypes => ({
  type: SET_ERROR,
  payload,
});

export const fetchHeaderData = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    const res = await API.header();
    if (!res) throw new Error(res);
    dispatch(setHeaderData(createHeaderDataObject(res)));
    dispatch(setLoading(false));
  } catch (err) {}
};
