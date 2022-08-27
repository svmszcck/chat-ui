import React, { FC } from "react";
import styled from "styled-components";

import { Input, Message, History } from "components";
import Colors from "constants/colors";

type ChatPanelProps = {
  isMobile: boolean;
};

type StyledProps = {
  isMobile: boolean;
};

const ChatPanel: FC<ChatPanelProps> = ({ isMobile }) => {
  return (
    <Styled isMobile={isMobile}>
      <div className="wrapper">
        <History>
          <Message direction="incoming">hello user</Message>
          <Message direction="outgoing">hello bot</Message>
        </History>
        <Input />
      </div>
    </Styled>
  );
};

const Styled = styled.div<StyledProps>`
  width: ${({ isMobile }) => (isMobile ? "100%" : "60%")};

  .wrapper {
    padding: 1rem;
    background-color: ${Colors.WHITE};
    border-radius: 15px;
  }
`;

export default ChatPanel;
