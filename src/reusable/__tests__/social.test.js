import React from "react";
import { render } from "../../../test/utils";

import { Twitter, GitHub } from "../social";

test("that twitter renders", () => {
  render(<Twitter />);
});

test("that github renders", () => {
  render(<GitHub />);
});
