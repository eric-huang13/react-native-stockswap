import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

import {LoginScreen} from '../src/components/LoggedOutScreens/Login'
// jest.mock('@react-native-community/google-signin', () => ({
//   GoogleSignin: jest.fn(),

//   GoogleSigninButton: jest.requireActual(
//     '@react-native-community/google-signin'
//   ).GoogleSigninButton,
// }))

jest.mock('@react-native-community/google-signin', () => {});


jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
test('renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<LoginScreen/>);
  const tree = renderer.getRenderOutput();
  // const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});