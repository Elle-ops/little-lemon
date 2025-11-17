// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// src/setupTests.js
// jest-dom adds helpful matchers
import "@testing-library/jest-dom/extend-expect";

// Provide noop globals if API script isn't loaded in test env:
if (typeof global.fetchAPI !== "function") {
  global.fetchAPI = jest.fn(() => []);
}
if (typeof global.submitAPI !== "function") {
  global.submitAPI = jest.fn(() => true);
}
