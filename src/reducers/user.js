import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_ERROR, EDITUSER_START,
  EDITUSER_SUCCESS, EDITUSER_ERROR,} from 'constants';

const defaultState = {
  isLoggedIn: false,
  userData:[],
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
          userData: action.payload,
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
          userData: action.payload,
        };
          case EDITUSER_START:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case EDITUSER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          userData: action.payload,
        };
      case EDITUSER_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
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
