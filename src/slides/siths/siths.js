import React from "react";
import { Container } from "../../reusable/container";
import { Text } from "../../reusable/text";
import { Li } from "../../reusable/li";
import { Ul } from "../../reusable/ul";
import Grid from "./grid";
const Siths = () => {
  return (
    <Container alignItems="center">
      <Text align="center">Only siths deal in absolutes!</Text>
      <Ul>
        <Li>Sometimes you need to test implementation details</Li>
      </Ul>
      <Grid />
    </Container>
  );
};

export default Siths;
