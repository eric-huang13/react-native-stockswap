import React from 'react';
import CompanyInformation from '../src/components/SearchTabScreens/CompanyInformation';
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
    const yPrices = [1,2,3]
    const renderer = new ShallowRenderer();
    renderer.render   (<CompanyInformation route={{params: {item:{symbol:'test'}}}}/>);
    const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});