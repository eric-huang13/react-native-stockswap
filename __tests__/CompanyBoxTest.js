import React from 'react';
import CompanyBox from '../src/components/SearchTabComponents/CompanyBox';
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
  renderer.render(<CompanyBox item={{title:'test' }}/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});