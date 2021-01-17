import { Bonus } from "sharedTypes";

export type BonusesState = {
  bonuses: Bonus[];
  filter: string;
  loading: boolean;
  error: null | string;
};

export type BonusActivationPayload = { title: string; isActivated: boolean };

export const SET_BONUS_ACTIVATION = "@BONUSES/SET_BONUS_ACTIVTION";
type SetBonusActivation = {
  type: typeof SET_BONUS_ACTIVATION;
  payload: BonusActivationPayload;
};

export const SET_BONUSES = "@BONUSES/SET_BONUSES";
type SetBonuses = {
  type: typeof SET_BONUSES;
  payload: Bonus[];
};

export const SET_FILTER = "@BONUSES/SET_FILTER";
type SetFilter = {
  type: typeof SET_FILTER;
  payload: string;
};

export const SET_LOADING = "@BONUSES/SET_LOADING";
type SetLoading = {
  type: typeof SET_LOADING;
  payload: boolean;
};

export const SET_ERROR = "@BONUSES/SET_ERROR";
type SetError = {
  type: typeof SET_ERROR;
  payload: null | string;
};

export type BonusesActionTypes =
  | SetLoading
  | SetError
  | SetBonuses
  | SetBonusActivation
  | SetFilter;
