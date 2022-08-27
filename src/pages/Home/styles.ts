import styled from "styled-components";

type StyledProps = {
  isMobile: boolean;
};

const Styled = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ isMobile }) => (isMobile ? "1rem" : "3rem")};
`;

export default Styled;
