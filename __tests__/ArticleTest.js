import React from 'react';
import Article from '../src/components/SearchTabComponents/Article';
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
    const tree = renderer.create(<Article item={[]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});