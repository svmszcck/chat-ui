import { ReactNode, CSSProperties, MouseEventHandler } from "react";
import styled from "styled-components";

import { handleTextVariant } from "utils/ui";

export type TextVariant = "p" | "h1" | "h2" | "h3" | "h4";

type TextProps = {
  children: ReactNode;
  variant?: TextVariant;
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
};

type StyledProps = {
  variant: TextVariant;
};

const Text = ({
  children,
  variant = "p",
  style,
  className,
  onClick,
}: TextProps) => {
  return (
    <Styled
      variant={variant}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </Styled>
  );
};

const Styled = styled.p<StyledProps>`
  margin: 0;
  ${({ variant }) => handleTextVariant(variant)}
`;

export default Text;
