import { Action, GlobalState } from "global-types";

import actions from "./actions";

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case actions.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case actions.SET_SOCKET_CLIENT:
      return {
        ...state,
        socketClient: action.payload,
      };
    case actions.SET_SCREEN_SIZE:
      return {
        ...state,
        isMobile: action.payload,
      };
    default:
      throw new Error();
  }
};

export default reducer;
