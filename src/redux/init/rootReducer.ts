import { combineReducers } from "redux";

import { headerReducer as header } from "redux/bus/header/reducer";
import { bonusesReducer as bonuses } from "redux/bus/bonuses/reducer";

export const rootReducer = combineReducers({ header, bonuses });

export type AppState = ReturnType<typeof rootReducer>;
