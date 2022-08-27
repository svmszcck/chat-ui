import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import Colors from "constants/colors";

export type MessageDirection = "incoming" | "outgoing";

type MessageProps = {
  direction: MessageDirection;
  children?: ReactNode;
};

type StyledProps = {
  incoming: boolean;
};

export const Message: FC<MessageProps> = ({ children, direction }) => {
  return <Styled incoming={direction === "incoming"}>{children}</Styled>;
};

const Styled = styled.div<StyledProps>`
  display: flex;
  // align-items: stretch;
  max-width: 80%;
  padding: 0.5rem;
  border-radius: 5px;
  align-self: ${({ incoming }) => (incoming ? "flex-start" : "flex-end")};
  margin-bottom: 0.5rem;
  background-color: ${({ incoming }) => (incoming ? Colors.GRAY : Colors.BLUE)};
  color: ${({ incoming }) => (incoming ? Colors.BLACK : Colors.WHITE)};
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
`;

export default Message;
