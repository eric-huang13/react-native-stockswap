// packages
import {combineReducers} from 'redux';

// imports
import userReducer from './user';
import companyBoxReducer from './companyBoxReducer';
import postsReducer from './postsReducer';
import peopleReducer from './peopleReducer';
import newsReducer from './newsReducer';
import portfolioReducer from './portfolioReducer';

const appReducer = combineReducers({
  user: userReducer,
  company: companyBoxReducer,
  posts: postsReducer,
  people: peopleReducer,
  news: newsReducer,
  portfolio: portfolioReducer,
});

const rootReducer = (state, action) => {
  // reset redux state to initial
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
