import React from 'react';
import UserPosts from '../src/components/HomeTabScreens/UserPosts';
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
    const tree = renderer.create(<UserPosts userAccount={{id:'test' }} post={{id:'test', body:'testbody' }} comments={[]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});