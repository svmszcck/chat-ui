export const sendMessage = async (client: any, text: string) => {
  try {
    const response = await client.sendMessage(text);

    return response;
  } catch (e) {
    console.log(e);
    console.log("Message couldn't be sent. Please try again!");
  }
};
