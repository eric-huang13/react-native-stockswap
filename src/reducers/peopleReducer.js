// import {
//     EDITUSER_START,
//     EDITUSER_SUCCESS,
//     EDITUSER_ERROR,
//   } from '../constants';
  
  const defaultState = {
  
    users: [
      {
        id: 1,
        name: 'Hallie Fields',
        email:'hallieemail@email.com',
        posts: 19182,
        followers: 92,
        following: 319,
        trades: 209,
        bio:
          'Business major interested in finding new stock buying opportunities.',
        username: 'hfields123',
        hashtag: '#Myhashtag',
        gain:2103.24,
        percentage: 31.1,
        img:
          'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 2,
        name: 'Viola Casey',
        email:'violaemail@email.com',
        posts: 99,
        followers: 15,
        following: 29,
        trades: 20,
        bio:
          'Business major interested in finding new stock buying opportunities.',
        username: 'vcasey123',
        hashtag: 'www.vc.com',
        gain:2103.24,
        percentage: 24,
        img:
          'https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fGNsb3NlJTIwaGVhZHNob3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 3,
        name: 'Ben Clark',
        email:'benemail@email.com',
        posts: 267,
        followers: 10,
        following: 215,
        trades: 83,
        bio:
          'Business major interested in finding new stock buying opportunities.',
        username: 'clark123',
        hashtag: 'www.rclark.com',
        gain:2103.24,
        percentage: 43,
        img:
          'https://images.unsplash.com/photo-1606240569045-aca76646c656?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
  };
  
  const peopleReducer = (state = defaultState, action) => {
    switch (action.type) {
      //Ready for hook up
      // case EDITUSER_START:
      //   return {
      //     ...state,
      //     loading: true,
      //     error: "",
      //   };
      // case EDITUSER_SUCCESS:
      //   return {
      //     ...state,
      //     loading: false,
      //     error: "",
      //     marketGainers: action.payload,
      //   };
      // case EDITUSER_ERROR:
      //   return {
      //     ...state,
      //     loading: false,
      //     error: action.payload,
      //   };
      default:
        return state;
    }
  };
  
  export default peopleReducer;
  