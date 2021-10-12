import React from 'react';
import {SignUp} from '../src/components/LoggedOutScreens/SignUp'
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6


jest.mock('@react-native-community/google-signin', () => {});

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
test('renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SignUp/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});