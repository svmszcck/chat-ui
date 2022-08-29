import React, { useEffect, useReducer, FC, ReactNode } from "react";

import { isMobile } from "utils/ui";
import { ChatMessage, GlobalState } from "global-types";
import { initSocketClient } from "utils/general";
import useWindowDimensions from "hooks/useWindowDimensions";

import GlobalContext from ".";
import reducer from "./reducer";
import actions from "./actions";

const initialState: GlobalState = {
  loading: false,
  socketClient: null,
  messages: [],
  isMobile: null,
};

type GlobalContextProviderProps = {
  children?: ReactNode;
};

const GlobalContextProvider: FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const { width } = useWindowDimensions();
  const mobileScreen = isMobile(width);
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    isMobile: mobileScreen,
  });

  useEffect(() => {
    dispatch({ type: actions.SET_SCREEN_SIZE, payload: mobileScreen });
  }, [mobileScreen]);

  useEffect(() => {
    if (state.socketClient) return;

    const client = initSocketClient();

    if (client) dispatch({ type: actions.SET_SOCKET_CLIENT, payload: client });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    globalState: state,
    addMessage: (message: ChatMessage): void => {
      dispatch({ type: actions.ADD_MESSAGE, payload: message });
    },
    setSocketClient: (client: any): void => {
      dispatch({ type: actions.SET_SOCKET_CLIENT, payload: client });
    },
    isMobile: isMobile(width),
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
