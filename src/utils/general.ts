import { SocketClient } from "@cognigy/socket-client";

const { REACT_APP_ENDPOINT_BASE_URL, REACT_APP_ENDPOINT_URL_TOKEN } =
  process.env;

export const initSocketClient = (): SocketClient | undefined => {
  try {
    if (REACT_APP_ENDPOINT_BASE_URL && REACT_APP_ENDPOINT_URL_TOKEN) {
      const client = new SocketClient(
        REACT_APP_ENDPOINT_BASE_URL,
        REACT_APP_ENDPOINT_URL_TOKEN,
        {
          // if you use node, internet explorer or safari, you need to enforce websockets
          forceWebsockets: true,
        }
      );

      return client;
    } else {
      console.log("Please provide env variables"!);
    }
  } catch (e) {
    console.log("Can't connect to the server. Please try again!");
  }
};
