import React from "react";
import { Text } from "../reusable/text";
import { Ul } from "../reusable/ul";
import { Li } from "../reusable/li";
import { Container } from "../reusable/container";
const JourneyToRtl = () => {
  return (
    <Container alignItems="center">
      <Text align="center">My Journey to writing better tests</Text>
      <div>
        <Ul>
          <Li>React Testing Library comes out on March 18, 2018 </Li>
          <Li>
            Kent C Dodds sends out an email that looks suspiciously similar to
            what I just showed you all on October 19, 2018
          </Li>
          <Li>React Hooks come out on October 25, 2018</Li>
        </Ul>
      </div>
    </Container>
  );
};

export default JourneyToRtl;
