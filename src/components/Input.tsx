import React, { FC, ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";

import Colors from "constants/colors";
import { ENTER_KEY } from "constants/general";

type InputProps = {
  onSubmit?: () => void;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = ({ value, onChange, onSubmit }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === ENTER_KEY) {
      onSubmit?.();
    }
  };

  return (
    <Styled
      className="input"
      placeholder="Type your message..."
      autoFocus
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
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
