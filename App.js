import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/Navigation';
import reduxStore from './src/store/index';

const store = reduxStore();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
