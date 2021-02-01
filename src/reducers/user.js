import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_ERROR, EDITUSER_START,
  EDITUSER_SUCCESS, EDITUSER_ERROR, PROFILEPOST_START,
  PROFILEPOST_SUCCESS, PROFILEPOST_ERROR,} from 'constants';

const defaultState = {
  isLoggedIn: false,
  userData:[],
  userFakeData:{
      id:4,
      name: 'Bob Fields',
      email:'bob@email.com',
      posts: 1182,
      followers: 82,
      following: 219,
      trades: 29,
      bio:
        'New to the trading world.',
      username: 'bob123',
      hashtag: '#Myhashtag',
      gain:1103.24,
      percentage: 28.1,
      img:
        'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90JTIwc3VpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
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
        case PROFILEPOST_START:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case PROFILEPOST_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          userData: action.payload,
          isLoggedIn: true,
        };
      case PROFILEPOST_ERROR:
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
