import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import AppContext from "app-context";
import { ChatPanel } from "components";
import { INCOMING, OUTGOING } from "constants/general";

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

  it("renders chat panel correctly", () => {
    render(
      <AppContext.Provider
        value={{ globalState: initialState, updateState: jest.fn() }}
      >
        <ChatPanel />
      </AppContext.Provider>
    );

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
});
