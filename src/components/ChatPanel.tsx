import React, { useContext, useState, FC } from "react";
import styled from "styled-components";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { Button, Input, Message, History } from "components";
import Colors from "constants/colors";
import AppContext from "app-context";

type StyledProps = {
  isMobile: boolean;
};

const ChatPanel: FC = () => {
  const [message, setMessage] = useState<string>("");
  const { globalState } = useContext(AppContext);

  const handleSubmit = () => {};

  return (
    <Styled isMobile={globalState.isMobile}>
      <div className="wrapper">
        <History>
          <Message direction="incoming">hello user</Message>
          <Message direction="outgoing">hello bot</Message>
          <Message direction="outgoing">hello bot</Message>
          <Message direction="outgoing">hello bot</Message>
          <Message direction="incoming">hello user</Message>
          <Message direction="incoming">hello user</Message>
          <Message direction="incoming">hello user</Message>
        </History>
        <div className="bottom-section">
          <Input value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button
            className="submit"
            text="Send Message"
            icon={faPaperPlane}
            onClick={handleSubmit}
          />
        </div>
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

    .bottom-section {
      display: flex;

      .submit {
        margin-left: 1rem;
      }
    }
  }
`;

export default ChatPanel;
