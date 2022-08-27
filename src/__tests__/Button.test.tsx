import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import AppContext from "app-context";
import { Button } from "components";

describe("Button Component", () => {
  const initialState = {
    loading: false,
    socketClient: null,
    messages: [],
  };

  it("handles actions correctly", () => {
    const onClick = jest.fn();

    render(
      <AppContext.Provider
        value={{ globalState: initialState, updateState: jest.fn() }}
      >
        <Button text="Test Button" onClick={onClick} />
      </AppContext.Provider>
    );

    fireEvent.click(screen.getByTestId("button"));

    expect(onClick).toHaveBeenCalled();
  });
});
