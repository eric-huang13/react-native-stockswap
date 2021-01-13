// packages
import {combineReducers} from 'redux';

// imports
import userReducer from './user';
import companyBoxReducer from './companyBoxReducer';
import postsReducer from './postsReducer';

const appReducer = combineReducers({
  user: userReducer,
  company: companyBoxReducer,
  posts: postsReducer,
});

const rootReducer = (state, action) => {
  // reset redux state to initial
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
