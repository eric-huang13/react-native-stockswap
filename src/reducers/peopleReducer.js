import {
  USERS_FETCHING,
  USERS_SUCCESS,
  USERS_ERROR,
  USERS_STOP,
  GETMYFOLLOWERS_START,
  GETMYFOLLOWERS_SUCCESS,
  GETMYFOLLOWING_ERROR,
  GETMYFOLLOWING_START,
  GETMYFOLLOWING_SUCCESS,
  GETMYFOLLOWERS_ERROR
  
} from '../constants';

const defaultState = {
users: [
  {
    id: 1,
    name: 'Hallie Fields',
    email: 'hallieemail@email.com',
    posts: 19182,
    followers: 92,
    following: 319,
    trades: 209,
    bio:
      'Business major interested in finding new stock buying opportunities.',
    username: 'hfields123',
    hashtag: '#Myhashtag',
    gain: 2103.24,
    percentage: 31.1,
    img:
      'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Viola Casey',
    email: 'violaemail@email.com',
    posts: 99,
    followers: 15,
    following: 29,
    trades: 20,
    bio:
      'Business major interested in finding new stock buying opportunities.',
    username: 'vcasey123',
    hashtag: 'www.vc.com',
    gain: 2103.24,
    percentage: 28,
    img:
      'https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fGNsb3NlJTIwaGVhZHNob3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Ben Clark',
    email: 'benemail@email.com',
    posts: 267,
    followers: 10,
    following: 215,
    trades: 83,
    bio:
      'Business major interested in finding new stock buying opportunities.',
    username: 'clark123',
    hashtag: 'www.rclark.com',
    gain: 2103.24,
    percentage: 17.3,
    img:
      'https://images.unsplash.com/photo-1606240569045-aca76646c656?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'Bob Fields',
    email: 'bob@email.com',
    posts: 1182,
    followers: 82,
    following: 219,
    trades: 29,
    bio:
      'New to the trading world. Business major interested in finding new stock buying opportunities.',
    username: 'bob123',
    hashtag: '#Myhashtag',
    gain: 1103.24,
    percentage: 11,
    img:
      'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90JTIwc3VpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
  },
],
loading:false,
page:1,
offset:10,
loadMore:true,
myFollowers: [],
myfollowing: [],
};

const peopleReducer = (state = defaultState, action) => {
switch (action.type) {
  case USERS_FETCHING:
    return {
      ...state,
      loading: true,
      error: "",
    };
  case USERS_SUCCESS:
    return {
      ...state,
      loading: false,
      error: "",
      users: [...state.users, ...action.payload],
      page:(state.page+1)
    };
  case USERS_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
    case USERS_STOP:
    return {
      ...state,
      loading: false,
      error: '',
      loadMore:action.payload
    };
    case GETMYFOLLOWERS_START:
    return {
      ...state
    };
    case GETMYFOLLOWERS_SUCCESS:
    return {
      ...state,     
      myFollowers:action.payload
    };
    case GETMYFOLLOWERS_ERROR:
    return {
      ...state,     
      myFollowers:action.payload
    };
    case GETMYFOLLOWING_START:
      return {
        ...state,
      };
      case GETMYFOLLOWING_SUCCESS:
      return {
        ...state,      
        myFollowing:action.payload
      };
      case GETMYFOLLOWING_ERROR:
      return {
        ...state,      
        myFollowing:action.payload
      };
  default:
    return state;
}
};

export default peopleReducer;
