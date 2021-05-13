import React from 'react';
import CreateTrade from '../src/components/PostTabScreens/CreateTrade';
import renderer from 'react-test-renderer';


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
    const tree = renderer.create(<CreateTrade/>).toJSON();
  expect(tree).toMatchSnapshot();
});