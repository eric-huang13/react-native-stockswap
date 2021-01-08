import {
  MARKETGAINERS_FETCHING,
  MARKETGAINERS_SUCCESS,
  MARKETGAINERS_FAILURE,
} from '../constants';

const defaultState = {
  posts: [
    {
      id: 1,
      name: 'Hallie Fields',
      profileImg:
        'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      userId: 1,
      likes: 99,
      comments: 15,
      timestamp: '1 hour ago',
      body:
        'An article from the newspaper that I thought was interesting. Let me know what you think.',
      username: 'hfields123',
      img:
        'https://images.unsplash.com/photo-1572231754710-4bed19649091?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tbWVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Viola Casey',
      profileImg:
        'https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fGNsb3NlJTIwaGVhZHNob3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      userId: 2,
      likes: 929,
      comments: 125,
      timestamp: '1 hour ago',
      body:
        'Here is a post that I created. Please read it and like it if it was helpful to you.',
      username: 'hfields123',
      img:
        'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fHN0b2Nrc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      name: 'Ben Clark',
      profileImg:
        'https://images.unsplash.com/photo-1606240569045-aca76646c656?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      userId: 3,
      likes: 99,
      comments: 15,
      timestamp: 29,
      body:
        'Doing some research on investing today. Here is my favorite article about trading stocks.',
      img:
        'https://images.unsplash.com/photo-1579407364450-481fe19dbfaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2tzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
  ],
  comments: [
    {
      id: 1,
      name: 'Hallie Fields',
      profileImg:
        'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      postId: 3,
      userId: 1,
      body: 'What a great post above. I really enjoyed reading it. Thanks',
      time: '3 hours ago',
      likes: 2,
      username: 'hfields123',
    },
    {
      id: 2,
      name: 'Viola Casey',
      profileImg:
        'https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fGNsb3NlJTIwaGVhZHNob3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      postId: 1,
      userId: 2,
      body: 'Awesome content. Thank you for sharing with everyone!',
      time: '2 hours ago',
      likes: 1,
      username: 'vcasey123',
    },
    {
      id: 3,
      name: 'Ben Clark',
      profileImg:
        'https://images.unsplash.com/photo-1606240569045-aca76646c656?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      postId: 1,
      userId: 3,
      body: 'Cool article! I love reading all of your posts.',

      time: '1 hour ago',
      likes: 3,
      username: 'rclark123',
    },
  ],
};

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    //Ready for hook up
    // case MARKETGAINERS_FETCHING:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: "",
    //   };
    // case MARKETGAINERS_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: "",
    //     marketGainers: action.payload,
    //   };
    // case MARKETGAINERS_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};

export default postsReducer;
