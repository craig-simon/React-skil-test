import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./init/rootReducer";
import { middleware } from "./init/middleware";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
