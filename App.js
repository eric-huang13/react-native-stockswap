import React from 'react';
import {Provider} from 'react-redux';
import Navigation from 'Navigation';
import reduxStore from 'store/index';

// Runs Axios Config
import axiosConfig from 'util/axiosConfig'

const store = reduxStore();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
