import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAlert } from "react-alert";

import { Text } from "components";
import AppRoutes from "constants/routes";

const Header = () => {
  let navigate = useNavigate();
  const alert = useAlert();

  return (
    <Styled>
      <div className="top-menu">
        <Text onClick={() => navigate(AppRoutes.HOME)} className="option">
          Home
        </Text>
        <Text className="option" onClick={() => navigate(AppRoutes.ABOUT)}>
          About Us
        </Text>
        <Text
          className="option right-section"
          onClick={() => alert.show("Not implemented yet!")}
        >
          Login
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
      margin-right: 1rem;

      &:hover {
        opacity: 0.5;
      }
    }

    .right-section {
      margin-left: auto;
    }
  }
`;

export default Header;
