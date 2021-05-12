import React from 'react';
import UserAgreement from '../src/components/LoggedOutScreens/UserAgreement'
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6


jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

test('renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<UserAgreement/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});

