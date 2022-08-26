import React, { FC, ReactNode } from "react";

type MessageDirection = "incoming" | "outgoing";

type MessageProps = {
  direction: MessageDirection;
  children?: ReactNode;
};

export const Message: FC<MessageProps> = ({ children, direction }) => {
  return (
    <div
      style={{
        alignSelf: direction === "incoming" ? "flex-start" : "flex-end",
        border: "1px solid black",
        padding: 5,
        borderRadius: 5,
      }}
    >
      {children}
    </div>
  );
};
