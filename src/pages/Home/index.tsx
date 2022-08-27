import React, { useContext, FC } from "react";

import { ChatPanel } from "components";
import AppContext from "contexts/GlobalContext";

import Styled from "./styles";

const Home: FC = () => {
  const { globalState } = useContext(AppContext);

  return (
    <Styled isMobile={globalState.isMobile}>
      <ChatPanel />
    </Styled>
  );
};

export default Home;
