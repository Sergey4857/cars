import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import { Global, ThemeProvider } from "@emotion/react";

import { GlobalStyles, theme } from "./styles";

import App from "../src/components/App";
import { Provider } from "react-redux";
// import Loader from "components/Loader/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
      {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </ThemeProvider>
);
