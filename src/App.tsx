import React, { FC, ReactElement } from "react";

import { Provider } from "react-redux";
import { store } from "redux/store";

import { Layout } from "components";
import { Home } from "pages";

import "normalize.css";

const App: FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <Layout>
        <Home />
      </Layout>
    </Provider>
  );
};

export default App;
