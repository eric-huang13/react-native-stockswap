// Packages
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistStore, persistReducer} from 'redux-persist';

// imports
import rootReducer from 'reducers';

const persistConfig = {
  key: 'root',
  whitelist: ['user'],
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
  let persistor = persistStore(store);
  return {store, persistor};
};

// const reduxStore = () => {
//   return createStore(persistReducer, compose(applyMiddleware(thunk)));
// };

// export default reduxStore;
