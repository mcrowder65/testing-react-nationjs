[![Coverage Status][coverage-image]][coverage-url]
[![Build Status][travis-image]][travis-url]

<h3>Testing React</h3>

If you had to rewrite your tests when writing a hook in your React application, then you’re writing tests wrong.

React Testing Library is what it sounds like, but more importantly, it encourages writing tests in the way that your end users will be using your components.

In this talk, I will first introduce react-testing-library, what it is, what it encourages, and what it does best. I’ll then dive into how to effectively test a react component, first a smaller component, then a “larger” component with redux, i18n dependencies, etc., then I will show all of the different APIs that react-testing-library provides, and how to effectively use them. Then, I’ll show how to write effective tests across an entire application (writing reusable, effective tests that are not brittle).


---

This was a talk given at <a href="https://www.rvajavascript.com/">RVA JavaScript</a> on November 15, 2019.

Slides/website are available are <a href="https://testingreactrvajs.netlify.com">available here</a>


[travis-image]: https://travis-ci.org/mcrowder65/testing-react-rvajs.svg?branch=master
[travis-url]: https://travis-ci.org/mcrowder65/testing-react-rvajs
[coverage-image]: https://coveralls.io/repos/github/mcrowder65/testing-react-rvajs/badge.svg
[coverage-url]: https://coveralls.io/github/mcrowder65/testing-react-rvajs
