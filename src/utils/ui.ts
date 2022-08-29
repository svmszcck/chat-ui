import { ButtonVariant } from "components/Button";
import { TextVariant } from "components/Text";
import Colors from "constants/colors";

export const isMobile = (width: number): boolean => width <= 768;

export const isDesktop = (width: number): boolean =>
  width > 768 && width <= 992;

export const isLarge = (width: number): boolean => width > 992 && width <= 1200;

export const isRetina = (width: number): boolean => width > 1200;

export const handleButtonVariant = (variant: ButtonVariant): string => {
  switch (variant) {
    case "primary":
      return `background-color: ${Colors.GREEN}`;
    case "danger":
      return `background-color: ${Colors.RED}`;

    default:
      return `background-color: ${Colors.GREEN}`;
  }
};

export const handleTextVariant = (variant: TextVariant): string => {
  switch (variant) {
    case "p":
      return "font-size: 1rem;";
    case "h1":
      return "font-size: 3rem; font-weight: bold";
    case "h2":
      return "font-size: 2rem; font-weight: bold";
    case "h3":
      return "font-size: 1.5rem; font-weight: bold";
    case "h4":
      return "font-size: 1.2rem; font-weight: bold";
    default:
      return "font-size: 1rem;";
  }
};
