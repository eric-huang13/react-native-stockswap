// packages
import {combineReducers} from 'redux';

// imports
import userReducer from './user';

const appReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (state, action) => {
  // reset redux state to initial
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
