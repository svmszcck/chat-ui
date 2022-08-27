import React, { FC, ChangeEvent, useState } from "react";
import styled from "styled-components";

import Colors from "constants/colors";

type InputProps = {
  onSubmit?: (message: string) => void;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  return (
    <Styled
      className="input"
      placeholder="Type your message..."
      autoFocus
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    ></Styled>
  );
};

const Styled = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  background-color: ${Colors.GRAY};
  border: 0;
  border-radius: 10px;

  &:focus {
    outline-width: 0;
    outline: none;
  }
`;

export default Input;
