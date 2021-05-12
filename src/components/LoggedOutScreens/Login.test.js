import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

import {LoginScreen} from './Login'
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
const handleSubmit = jest.fn().mockImplementation((cb) => () => cb({ test: 'test' }));
const wrapper = shallow(<LoginScreen form="test" handleSubmit={handleSubmit}   />);
wrapper.find('form').simulate('submit');
expect(handleSubmit).toBeCalledTimes(1);