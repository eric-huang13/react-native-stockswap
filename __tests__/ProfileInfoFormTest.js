import React from 'react';
import renderer from 'react-test-renderer';
import ProfileInfoForm from '../src/components/LoggedOutScreens/ProfileInfoForm'

jest.mock('@react-native-community/google-signin', () => {});

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
    const navigate = jest.fn();
    // const navigation = { navigate: jest.fn() };
    // const userInfo = {emal:'test@email.com', password:'Password1'} 
  
  const tree = renderer.create(<ProfileInfoForm navigation={{navigate}}  route={{params: {userInfo:{email:'test@email.com', password:'Password1', termsVersion:'V1'}}}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});