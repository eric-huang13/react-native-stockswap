import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  CREATEPROFILE_START,
  CREATEPROFILE_SUCCESS,
  CREATEPROFILE_ERROR,
  EDITPROFILE_START,
  EDITPROFILE_SUCCESS,
  EDITPROFILE_ERROR,
  GOOGLE_LOGIN_START,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGOUT_SUCCESS,
  GETPROFILE_START,
  GETPROFILE_SUCCESS,
  GETPROFILE_ERROR,
  GETPROFILEIMAGE_START,
  GETPROFILEIMAGE_SUCCESS,
  GETPROFILEIMAGE_ERROR,
  CREATEPROFILEIMAGE_START,
  CREATEPROFILEIMAGE_SUCCESS,
  CREATEPROFILEIMAGE_ERROR,
  TOKEN_SUCCESS,
  REFRESH_TOKEN,
  PLAIDTOKEN_START,
  PLAIDTOKEN_SUCCESS,
  PLAIDTOKEN_ERROR,
  ADD_LATER,
  PLAIDBANK_START,
  PLAIDBANK_SUCCESS,
  PLAIDBANK_ERROR,
  FETCHPORTFOLIOACCOUNTS_START,
  FETCHPORTFOLIOACCOUNTS_SUCCESS,
  FETCHPORTFOLIOACCOUNTS_ERROR, 
  FETCHINSTITUTION_START,
  FETCHINSTITUTION_SUCCESS,
  FETCHINSTITUTION_ERROR, 

} from 'constants';

const defaultState = {
  isLoggedIn: false,
  userData: [],
  userProfile:[],
  googleUser: [],
  userImage: '',
  userId: [],
  token:'',
  linkToken: [],
  plaidBank:[],
  portfolioAccounts:[],
  institution:[],
  userFakeData: {
    id: 4,
    name: 'Bob Fields',
    email: 'bob@email.com',
    posts: 1182,
    followers: 82,
    following: 219,
    trades: 29,
    bio:
      'New to the trading world. Business major interested in finding new stock buying opportunities. Excited to learn the best ways to diversify my portfolio. ',
    username: 'bob123',
    hashtag: '#Myhashtag',
    gain: 1103.24,
    percentage: 11,
    img:
      'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90JTIwc3VpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
  },
  loading: false,
  error: '',
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHINSTITUTION_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHINSTITUTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        institution: action.payload,
      };
    case FETCHINSTITUTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCHPORTFOLIOACCOUNTS_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHPORTFOLIOACCOUNTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        portfolioAccounts: action.payload,
      };
    case FETCHPORTFOLIOACCOUNTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PLAIDBANK_START:
      return {
        ...state,
        // loading: true,
        error: '',
      };
    case PLAIDBANK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        plaidBank: action.payload,
      };
    case PLAIDBANK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PLAIDTOKEN_START:
      return {
        ...state,
        // loading: true,
        error: '',
      };
    case PLAIDTOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        linkToken: action.payload,
      };
    case PLAIDTOKEN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case REFRESH_TOKEN:
      return {
        ...state,
        loading: false,
        // isLoggedIn: true,
        error: '',
        token: action.payload,
      };
      case ADD_LATER:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        error: '',
      };
    case SIGNUP_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        // isLoggedIn: true,
        error: '',
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
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        error: '',
        userData: action.payload,
      };
      case TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        userId: action.payload,

      };
    case CREATEPROFILE_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case CREATEPROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        // isLoggedIn: true,
        error: '',
        userProfile: action.payload,
      };
    case CREATEPROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case EDITPROFILE_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case EDITPROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        error: '',
        userProfile: action.payload,
      };
    case EDITPROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case GETPROFILE_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case GETPROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        error: '',
        userProfile: action.payload,
      };
    case GETPROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case GETPROFILEIMAGE_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case GETPROFILEIMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        userImage: action.payload,
      };
    case GETPROFILEIMAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case CREATEPROFILEIMAGE_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case CREATEPROFILEIMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        userImage: action.payload,
      };
    case CREATEPROFILEIMAGE_ERROR:
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
    case GOOGLE_LOGIN_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        googleUser: action.payload,
      };

    case GOOGLE_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        googleUser: action.payload,
      };
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default userReducer;
