import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'; 
import ForgotPassword from '../src/components/LoggedOutScreens/ForgotPassword';

jest.mock('@react-native-community/google-signin', () => {});

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);


jest.mock('react-redux', () => ({
    connect: () => {
      return (component) => {
        return component
      };
    }
  }));

test('renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<ForgotPassword/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});