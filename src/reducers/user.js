import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_ERROR} from 'constants';

const defaultState = {
  isLoggedIn: false,
  user:[],
  loading: false,
  error: "",
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGNUP_START:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          user: action.payload,
        };
  
      case SIGNUP_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case LOGIN_START:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          isLoggedIn: true,
          error: "",
          user: action.payload,
        };
  
      case LOGIN_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      case LOGOUT:
        return defaultState;
        default:
        return state;
  }
};

export default userReducer;
