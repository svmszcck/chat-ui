import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Text } from "components";

describe("Text Component", () => {
  it("renders correctly", () => {
    render(<Text variant="h3">Blabla</Text>);

    const textElement = screen.getByText("Blabla");

    expect(textElement).toBeInTheDocument();
  });
});
