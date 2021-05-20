import React from 'react';
import UserCommentReply from '../src/components/HomeTabComponents/UserCommentReply';
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
    renderer.render   (<UserCommentReply userAccount={{id:'test' }} reply={[]}/>);
    const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});