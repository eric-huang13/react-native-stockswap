// Packages
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// imports
import rootReducer from '../reducers';

const reduxStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default reduxStore;
