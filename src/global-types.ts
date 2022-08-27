import { MessageDirection } from "components/Message";

export type SocketMessage = {
  text: string;
  data: string;
};

export type ChatMessage = {
  text: string;
  type: MessageDirection;
};

// State Types

export type GlobalState = {
  loading: boolean;
  socketClient: any;
  messages: ChatMessage[];
  isMobile: boolean | null;
};

export type Action = {
  type: string;
  payload: any;
};
