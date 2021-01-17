import { HeaderData } from "sharedTypes";

export type HeaderState = {
  balance: number | null;
  nextPayout: number | null;
  currency: string | null;
  loading: boolean;
  error: string | null;
};

export const SET_HEADER_DATA = "@HEADER/SET_HEADER_DATA";
type SetHeaderData = {
  type: typeof SET_HEADER_DATA;
  payload: HeaderData;
};

export const SET_LOADING = "@HEADER/SET_LOADING";
type SetLoading = {
  type: typeof SET_LOADING;
  payload: boolean;
};

export const SET_ERROR = "@HEADER/SET_ERROR";
type SetError = {
  type: typeof SET_ERROR;
  payload: null | string;
};

export type HeaderActionTypes = SetHeaderData | SetLoading | SetError;
