import React from "react";
import { fireEvent } from "@testing-library/react";
import Palette from "../palette";
import { theme } from "../../../reusable/theme";
import { render } from "../../../../test/utils-2";

test("that it renders", () => {
  render(<Palette />);
});

test.skip(`WHEN updating to a new primary color
THEN the button changes to the new primary color
AND WHEN rerendering the component the new primary color stays`, () => {
  const { getByLabelText, getByTitle, rerender, unmount } = render(<Palette />);
  const getButton = () => getByLabelText("update primary color");

  expect(getButton()).toHaveStyle(
    `background-color: #${theme.palette.primary.main}`
  );

  const newColor = `#9c27b0`;
  fireEvent.click(getByTitle(newColor));

  fireEvent.click(getButton());
  expect(getButton()).toHaveStyle(`background-color: ${newColor}`);

  // simulate a page refresh
  unmount();
  rerender(<Palette />);

  expect(getButton()).toHaveStyle(`background-color: ${newColor}`);
});
