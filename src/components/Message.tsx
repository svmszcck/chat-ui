import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type MessageDirection = "incoming" | "outgoing";

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
  align-items: stretch;
  border: 1px solid black;
  padding: 0.5rem;
  border-radius: 5px;
  align-self: ${({ incoming }) => (incoming ? "flex-start" : "flex-end")};
  margin-bottom: 0.5rem;
`;

export default Message;
