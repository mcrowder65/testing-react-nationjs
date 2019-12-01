import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createPersistedStore } from "../src/redux/create-store";
import Providers from "../src/providers";
import translations from "../src/translations";

export const render = component => {
  const { store } = createPersistedStore();
  return rtlRender(
    <Providers store={store} translations={translations.en} locale="en">
      {component}
    </Providers>
  );
};
