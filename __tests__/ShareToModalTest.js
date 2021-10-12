import React from 'react';
import ShareToModal from '../src/components/HomeTabComponents/ShareToModal';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6


jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);


  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ShareToModal />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });