import {LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT} from 'constants';

const defaultState = {
  isLoggedIn: false,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
      };
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default userReducer;
