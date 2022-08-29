import { SocketClient } from "@cognigy/socket-client";

export const sendMessage = async (
  client: any,
  text: string
): Promise<SocketClient | undefined> => {
  try {
    const response = await client.sendMessage(text);

    return response;
  } catch (e) {
    console.log("Message couldn't be sent. Please try again!");
  }
};
