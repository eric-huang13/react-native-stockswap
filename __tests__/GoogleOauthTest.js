import React from 'react';
import renderer from 'react-test-renderer';
import {GoogleOauth} from '../src/components/LoggedOutComponents/GoogleOauth'
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6


jest.mock('@react-native-community/google-signin', () => {});

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);


test('renders correctly', () => {
  const renderer = new ShallowRenderer();
  let googleUser={idToken:'test',
                user:{photo:'test'}
                }
  renderer.render(<GoogleOauth googleUser={googleUser}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});