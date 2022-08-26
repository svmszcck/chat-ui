import React, { FC, ReactNode } from "react";

type HistoryProps = {
  children?: ReactNode;
};

export const History: FC<HistoryProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        border: "1px solid black",
        padding: 10,
        flexGrow: 1,
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
};
