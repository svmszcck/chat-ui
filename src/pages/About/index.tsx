import React from "react";

import { Text } from "components";
import { ABOUT_US } from "constants/content";
import Styled from "./styles";

const About = () => {
  return (
    <Styled>
      <Text>{ABOUT_US}</Text>
    </Styled>
  );
};

export default About;
