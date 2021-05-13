import React from 'react';
import PostType from '../src/components/PostTabScreens/PostType';
import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer.create(<PostType/>).toJSON();
  expect(tree).toMatchSnapshot();
});