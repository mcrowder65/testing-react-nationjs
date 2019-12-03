import React from "react";
import "babel-polyfill";
import AboutMe from "./slides/about-me";
// import Agenda from "./slides/agenda";
import What from "./slides/what";
import Encourage from "./slides/encourage";
// import Best from "./slides/best";
import Effective from "./slides/effective/effective";
import Contrived from "./slides/effective/contrived";
import Palette from "./slides/effective/palette";
import TestOfTime from "./slides/test-of-time";
import Queries from "./slides/apis/queries";
import FiringEvents from "./slides/apis/firing-events";
// import AsyncUtilities from "./slides/apis/async-utilities";

import translations from "./translations";
import "./polyfills";
import Providers from "./providers";
import Outline from "./reusable/outline/outline";
import { createPersistedStore } from "./redux/create-store";
import HowIUsedToWriteTests from "./slides/how-i-used-to-write-tests";
import Siths from "./slides/siths/siths";
import JourneyToRtl from "./slides/journey-to-rtl";
import RealWorldExplanation from "./slides/effective/real-world-explanation";
const routes = [
  { path: "/about-me", name: "About me", component: AboutMe },
  {
    path: "/how-i-used-to-write-tests",
    name: "How I used to write tests",
    component: HowIUsedToWriteTests
  },
  // { path: "/agenda", name: "Agenda", component: Agenda },
  // {
  //   path: "/wrong-tests",
  //   name: "The wrong way to write tests",
  //   component: Wrong,
  //   subcomponents: [
  //     {
  //       path: "/switch",
  //       component: Wrong,
  //       name: "Switch"
  //     },
  //     {
  //       path: "/palette",
  //       component: Palette2,
  //       name: "Color Palette"
  //     }
  //   ]
  // },
  {
    path: "/journey",
    name: "My Journey to writing better tests",
    component: JourneyToRtl
  },
  {
    path: "/what",
    name: "What is React Testing Library?",
    component: What
  },
  {
    path: "/encourage",
    name: "What does React Testing Library encourage?",
    component: Encourage
  },
  // {
  //   path: "/best",
  //   name: "What does React Testing Library do best?",
  //   component: Best
  // },
  {
    path: "/apis",
    name: "React Testing Library Apis",
    subcomponents: [
      { path: "/queries", name: "Queries", component: Queries },
      {
        path: "/firing-events",
        name: "Firing Events",
        component: FiringEvents
      }
      // {
      //   path: "/async-utilities",
      //   name: "Async Utilities",
      //   component: AsyncUtilities
      // }
    ]
  },
  {
    path: "/effective",
    name: "Effectively testing a React component",
    component: Effective,
    subcomponents: [
      { path: "/index", name: "Effective", component: Effective },
      { path: "/contrived", name: "Contrived", component: Contrived },
      {
        path: "/explanation",
        name: "Explanation",
        component: RealWorldExplanation
      },
      { path: "/real-world", name: "Real World", component: Palette }
    ]
  },
  {
    path: "/siths",
    name: "Only siths deal in absolutes",
    component: Siths
  },
  {
    path: "/test-of-time",
    name: "Writing tests that stand the test of time",
    component: TestOfTime
  }
];
const locale = "en";

const { store } = createPersistedStore();
function App() {
  return (
    <Providers
      store={store}
      translations={translations[locale]}
      locale={locale}
      routes={routes}
    >
      <div>
        <Outline routes={routes} />
      </div>
    </Providers>
  );
}

export default App;
