import React from 'react';
import ReportModal from '../src/components/HomeTabComponents/ReportModal';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6


jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);


  test('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ReportModal />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });