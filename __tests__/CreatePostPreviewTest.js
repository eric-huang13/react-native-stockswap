import React from 'react';
import CreatePostPreview from '../src/components/PostTabScreens/CreatePostPreview';
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

  function FormDataMock() {
    this.append = jest.fn();
  }  
  global.FormData = FormDataMock

test('renders correctly', () => {
    const tree = renderer.create(<CreatePostPreview userAccount={{name:'test' }} route={{params: {data:{body:'test', image:'testImage'}}}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});