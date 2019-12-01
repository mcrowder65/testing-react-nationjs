import React from "react";
import CustomCell from "../custom-cell";
import { render } from "../../../../test/utils";

test("that getData returns this.state.data", () => {
  const ref = React.createRef();
  render(<CustomCell ref={ref} />);
  expect(ref.current.getValue()).toEqual(ref.current.state.value);
});
