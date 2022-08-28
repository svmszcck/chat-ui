import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import GlobalContext from "contexts/GlobalContext";
import { ChatPanel } from "components";
import { INCOMING, OUTGOING } from "constants/general";

jest.mock("services/messages", () => ({
  sendMessage: (client: any, message: string) => Promise.resolve("success"),
}));

describe("Chat Panel Component", () => {
  const initialState = {
    loading: false,
    socketClient: null,
    messages: [
      {
        text: "Blabla",
        type: OUTGOING,
      },
      {
        text: "Blabla2",
        type: INCOMING,
      },
      {
        text: "Blabla3",
        type: OUTGOING,
      },
    ],
  };
  const addMessage = jest.fn();

  const renderChatPanel = () => {
    render(
      <GlobalContext.Provider value={{ globalState: initialState, addMessage }}>
        <ChatPanel />
      </GlobalContext.Provider>
    );
  };

  it("renders chat panel correctly", () => {
    renderChatPanel();

    expect(screen.getAllByTestId("message").length).toBe(
      initialState.messages.length
    );
    expect(screen.getAllByTestId("message")[0]).toHaveStyle(
      `align-self: flex-end`
    );
    expect(screen.getAllByTestId("message")[1]).toHaveStyle(
      `align-self: flex-start`
    );
  });

  it("validates message", async () => {
    renderChatPanel();

    const input = screen.getByTestId("input") as HTMLInputElement;

    fireEvent.change(input, {
      target: { value: "New Value" },
    });

    expect(input.value).toBe("New Value");

    fireEvent.click(screen.getByTestId("button"));

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() =>
      expect(addMessage).toHaveBeenCalledWith({
        text: "New Value",
        type: OUTGOING,
      })
    );
  });
});
