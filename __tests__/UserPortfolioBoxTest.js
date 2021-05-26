import React from 'react';
import UserPortfolioBox from '../src/components/HomeTabComponents/UserPortfolioBox';
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
    renderer.render   (<UserPortfolioBox item={[]} />);
    const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});