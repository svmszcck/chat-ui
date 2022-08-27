import { useEffect, useState } from "react";
import { Provider as AlertProvider } from "react-alert";

import { GlobalState } from "global-types";
import Router from "router";
import AppContext from "app-context";
import { isMobile } from "utils/ui";
import useWindowDimensions from "hooks/useWindowDimensions";
import { initSocketClient } from "utils/general";
import { alertConfig } from "constants/config";

const alertTemplate = require("react-alert-template-basic").default;

const initialState: GlobalState = {
  loading: false,
  socketClient: null,
  messages: [],
};

const App = () => {
  const { width } = useWindowDimensions();
  const mobileScreen = isMobile(width);

  const [globalState, setGlobalState] = useState({
    ...initialState,
    isMobile: isMobile(width),
  });

  useEffect(() => {
    const client = initSocketClient();

    if (client) updateState({ socketClient: client });
  }, []);

  useEffect(() => {
    updateState({ isMobile: mobileScreen });
  }, [mobileScreen]);

  const updateState = (value: object) => {
    setGlobalState((globalState) => ({ ...globalState, ...value }));
  };

  return (
    <AppContext.Provider value={{ globalState, updateState }}>
      <AlertProvider
        template={alertTemplate}
        {...alertConfig}
        containerStyle={{ textTransform: "lowercase" }}
      >
        <Router />
      </AlertProvider>
    </AppContext.Provider>
  );
};

export default App;
