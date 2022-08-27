import { useEffect, useState } from "react";

import { GlobalState } from "global-types";
import Router from "router";
import AppContext from "app-context";
import { isMobile } from "utils/ui";
import useWindowDimensions from "hooks/useWindowDimensions";

const initialState: GlobalState = {
  loading: false,
};

const App = () => {
  const { width } = useWindowDimensions();
  const mobileScreen = isMobile(width);

  const [globalState, setGlobalState] = useState({
    ...initialState,
    isMobile: isMobile(width),
  });

  useEffect(() => {
    updateState({ isMobile: mobileScreen });
  }, [mobileScreen]);

  const updateState = (value: object) => {
    setGlobalState((globalState) => ({ ...globalState, ...value }));
  };

  return (
    <AppContext.Provider value={{ globalState, updateState }}>
      <Router />
    </AppContext.Provider>
  );
};

export default App;
