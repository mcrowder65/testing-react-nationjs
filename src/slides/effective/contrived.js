import React from "react";
import { Container } from "../../reusable/container";
import { Text } from "../../reusable/text";
import Switch from "../wrong/switch";

function Contrived() {
  const [checked, setChecked] = React.useState(false);

  return (
    <Container flexDirection="column">
      <Text>
        <a
          href="https://github.com/mcrowder65/testing-react-rvajs/blob/master/src/slides/effective/__tests__/switch.test.js#L5-L4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contrived example
        </a>
      </Text>
      <Text>Controlled</Text>
      <Switch checked={checked} toggle={() => setChecked(!checked)} />
      <Switch checked={checked} toggle={() => setChecked(!checked)} />
      <Text>Uncontrolled</Text>
      <Switch />
      <Switch />
    </Container>
  );
}

export default Contrived;
