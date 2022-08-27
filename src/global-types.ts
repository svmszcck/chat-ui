import { MessageDirection } from "components/Message";

export type GlobalState = {
  loading: boolean;
  socketClient: any;
  messages: string[];
};

export type SocketMessage = {
  text: string;
  data: string;
};

export type ChatMessage = {
  text: string;
  type: MessageDirection;
};
