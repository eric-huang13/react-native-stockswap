import React from 'react';
import CompanyBoxList from '../src/components/SearchTabScreens/CompanyBoxList';
import ShallowRenderer from 'react-test-renderer/shallow'; 


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
  renderer.render(<CompanyBoxList gainers={[]} losers={[]} highestByVolume={[]}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});