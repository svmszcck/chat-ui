import React, { useContext, FC, ReactNode } from "react";
import styled from "styled-components";

import AppContext from "app-context";

type HistoryProps = {
  children?: ReactNode;
};

type StyledProps = {
  isMobile: boolean;
};

export const History: FC<HistoryProps> = ({ children }) => {
  const { globalState } = useContext(AppContext);

  return <Styled isMobile={globalState.isMobile}>{children}</Styled>;
};

const Styled = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  flex-grow: 1;
  overflow: auto;
`;

export default History;
