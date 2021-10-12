import React from 'react';
import MyFollowers from '../src/components/MyProfileTabScreens/MyFollowers';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

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
    renderer.render   (<MyFollowers users={[]} userAccount={{img:'test' }}/>);
    const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});