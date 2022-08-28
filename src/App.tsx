import Router from "router";

import GlobalContextProvider from "contexts/GlobalContext/provider";

const App = () => {
  return (
    <GlobalContextProvider>
      <Router />
    </GlobalContextProvider>
  );
};

export default App;
