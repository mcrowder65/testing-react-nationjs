import React from "react";
import { mount } from "enzyme";
import { Palette } from "../palette";
import * as ReactIntl from "react-intl";
import { Button } from "../../../reusable/button";
import translations from "../../../translations";
test("renders", () => {
  mount(
    <ReactIntl.IntlProvider messages={translations.en} locale="en">
      <Palette />
    </ReactIntl.IntlProvider>
  );
});

test(`WHEN I click a color it updates local state.swatchColor to that color
THEN WHEN I click the submit button, it calls updateThemeColor prop`, () => {
  jest.spyOn(ReactIntl, "FormattedMessage").mockImplementation(() => <div />);
  const updateThemeColor = jest.fn();
  const comp = mount(<Palette updateThemeColor={updateThemeColor} />);
  expect(comp.instance().state.swatchColor).toEqual(undefined);
  const newColor = `#9c27b0`;

  comp.find({ title: newColor }).simulate("click");

  expect(comp.instance().state.swatchColor).toEqual(newColor);

  comp.find(Button).simulate("click");
  expect(updateThemeColor).toHaveBeenCalledWith(newColor);
  ReactIntl.FormattedMessage.mockRestore();
});
