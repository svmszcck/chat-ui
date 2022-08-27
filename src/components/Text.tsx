import { ReactNode, CSSProperties } from "react";
import styled from "styled-components";

import { handleTextVariant } from "utils/ui";

export type TextVariant = "p" | "h1" | "h2" | "h3" | "h4";

type TextProps = {
  children: ReactNode;
  variant?: TextVariant;
  style?: CSSProperties;
  className?: string;
};

type StyledProps = {
  variant: TextVariant;
};

const Text = ({ children, variant = "p", style, className }: TextProps) => {
  return (
    <Styled variant={variant} className={className} style={style}>
      {children}
    </Styled>
  );
};

const Styled = styled.p<StyledProps>`
  margin: 0;
  ${({ variant }) => handleTextVariant(variant)}
`;

export default Text;
