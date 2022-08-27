import { ButtonVariant } from "components/Button";
import { TextVariant } from "components/Text";
import Colors from "constants/colors";

export const isMobile = (width: number) => width <= 768;

export const isDesktop = (width: number) => width > 768 && width <= 992;

export const isLarge = (width: number) => width > 992 && width <= 1200;

export const isRetina = (width: number) => width > 1200;

export const handleButtonVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return {
        backgroundColor: Colors.GREEN,
      };
    case "danger":
      return {
        backgroundColor: Colors.RED,
      };
    default:
      return {
        backgroundColor: Colors.GREEN,
      };
  }
};

export const handleTextVariant = (variant: TextVariant) => {
  switch (variant) {
    case "p":
      return {
        fontSize: "1rem",
      };
    case "h1":
      return {
        fontSize: "3rem",
        fontWeight: "bold",
      };
    case "h2":
      return {
        fontSize: "2rem",
        fontWeight: "bold",
      };
    case "h3":
      return {
        fontSize: "1.5rem",
        fontWeight: "bold",
      };
    case "h4":
      return {
        fontSize: "1.2rem",
        fontWeight: "bold",
      };
    default:
      return {
        fontSize: "1rem",
      };
  }
};
