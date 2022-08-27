import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Text } from "components";
import AppRoutes from "constants/routes";

const Header = () => {
  let navigate = useNavigate();

  return (
    <Styled>
      <div className="top-menu">
        <Text onClick={() => navigate(AppRoutes.HOME)} className="option">
          Home
        </Text>
        <Text
          className="option right-section"
          onClick={() => navigate(AppRoutes.ABOUT)}
        >
          About Us
        </Text>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  .top-menu {
    display: flex;
    padding: 1rem 2rem;

    .option {
      font-weight: bold;
      cursor: pointer;
    }

    .right-section {
      margin-left: auto;
    }
  }
`;

export default Header;
