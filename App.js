import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';
import reduxStore from 'store/index';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = reduxStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
