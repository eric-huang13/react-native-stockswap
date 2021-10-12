import React from 'react';
import StockTicker from '../src/components/HomeTabComponents/StockTicker';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

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
    const renderer = new ShallowRenderer();
    renderer.render(<StockTicker gainers={[]} />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });