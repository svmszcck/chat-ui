import { Provider as AlertProvider } from "react-alert";

import Router from "router";

import { alertConfig } from "constants/config";
import GlobalContextProvider from "contexts/GlobalContext/provider";

const alertTemplate = require("react-alert-template-basic").default;

const App = () => {
  return (
    <GlobalContextProvider>
      <AlertProvider
        template={alertTemplate}
        {...alertConfig}
        containerStyle={{ textTransform: "lowercase" }}
      >
        <Router />
      </AlertProvider>
    </GlobalContextProvider>
  );
};

export default App;
