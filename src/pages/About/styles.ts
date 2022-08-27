import styled from "styled-components";

type StyledProps = {};

const Styled = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 5rem;
  white-space: pre-wrap;
`;

export default Styled;
