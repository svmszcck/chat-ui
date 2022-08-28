import { useCallback, useContext, useEffect, useState, FC } from "react";
import styled from "styled-components";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";
import Swal from "sweetalert2";

import { Button, Input, Message, History, Text } from "components";
import Colors from "constants/colors";
import { INCOMING, OUTGOING } from "constants/general";
import AppContext from "contexts/GlobalContext";
import { ChatMessage, SocketMessage } from "global-types";
import { sendMessage } from "services/messages";
import Cat from "assets/cat.png";

type StyledProps = {
  isMobile: boolean;
};

const ChatPanel: FC = () => {
  const [message, setMessage] = useState<string>("");
  const { globalState, addMessage } = useContext(AppContext);

  useEffect(() => {
    globalState.socketClient
      ?.connect()
      .then(() => console.log("Socket Connected"));

    globalState.socketClient?.on("output", onMessageReceive);

    return () => {
      globalState.socketClient?.removeListener("output", onMessageReceive);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState.socketClient]);

  const onMessageReceive = (output: SocketMessage) => {
    if (output?.text) {
      addMessage({ text: output.text, type: INCOMING });
    }
  };

  const handleSubmit = useCallback(async () => {
    if (!message) return;

    const response = await sendMessage(globalState.socketClient, message);

    if (response) {
      setMessage("");
      addMessage({ text: message, type: OUTGOING });
    } else {
      Swal.fire({
        title: "Warning!",
        text: "Something wrong happened. Please try again!",
        icon: "warning",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <Styled isMobile={globalState.isMobile}>
      <div className="wrapper">
        {globalState.messages.length === 0 ? (
          <div className="no-message">
            <img src={Cat} alt="No Message" width={200} />
            <Text variant="h4">There isn't any message to show yet!</Text>
          </div>
        ) : (
          <>
            <History>
              {globalState.messages.map((message: ChatMessage) => (
                <Message direction={message.type} key={nanoid()}>
                  <Text>{message.text}</Text>
                </Message>
              ))}
            </History>
          </>
        )}
        <div className="bottom-section">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onSubmit={handleSubmit}
          />
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
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: ${({ isMobile }) => (isMobile ? "1rem" : "5% 10%")};
    padding: 1rem;
    background-color: ${Colors.WHITE};
    border-radius: 15px;

    .no-message {
      text-align: center;
      margin-top: auto;
      margin-bottom: auto;
    }

    .bottom-section {
      display: flex;
      margin-top: auto;

      .submit {
        margin-left: 1rem;
      }
    }
  }
`;

export default ChatPanel;
