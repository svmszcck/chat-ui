import { useContext, CSSProperties, MouseEventHandler } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { handleButtonVariant } from "utils/ui";
import Colors from "constants/colors";
import { Text } from "components";
import AppContext from "contexts/GlobalContext";

export type ButtonVariant = "primary" | "danger";

type ButtonProps = {
  text: string;
  style?: CSSProperties;
  className?: string;
  variant?: ButtonVariant;
  onClick: MouseEventHandler<HTMLDivElement>;
  icon?: IconProp;
};

type StyledProps = {
  isMobile: boolean;
  variant: ButtonVariant;
};

const Button = ({
  text,
  style,
  className,
  variant = "primary",
  onClick,
  icon,
}: ButtonProps) => {
  const { globalState } = useContext(AppContext);

  return (
    <Styled
      style={style}
      className={className}
      variant={variant}
      data-testid="button"
      onClick={onClick}
      isMobile={globalState.isMobile}
    >
      {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
      {!globalState.isMobile && <Text className="button-text">{text}</Text>}
    </Styled>
  );
};

const Styled = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.7rem;
  width: fit-content;
  cursor: pointer;
  color: ${Colors.WHITE};
  border-radius: 5px;
  font-weight: 500;
  ${({ variant }) => handleButtonVariant(variant)};

  ${({ isMobile }) =>
    isMobile && "padding: 0; width: 40px; height: 40px; border-radius: 50%;"};

  &:hover {
    opacity: 0.9;
  }

  .button-icon {
    margin-right: ${({ isMobile }) => (isMobile ? 0 : "0.5rem")};
  }
  .button-text {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export default Button;
