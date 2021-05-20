import React from 'react';
import MyProfilePostBox from '../src/components/MyProfileTabComponents/MyProfilePostBox';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6


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
    renderer.render   (<MyProfilePostBox item={{img:'test' }}/>);
    const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});