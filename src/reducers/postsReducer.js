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
      body: "Hallie's post body content.",
      username: 'hfields123',
      img:
        'https://images.unsplash.com/photo-1572231754710-4bed19649091?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tbWVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Hallie Fields',
      profileImg:
        'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      userId: 1,
      likes: 929,
      comments: 125,
      timestamp: '1 hour ago',
      body: "Hallie's Second post body content.",
      username: 'hfields123',
      img:
        'https://images.unsplash.com/photo-1572231754710-4bed19649091?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tbWVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      name: 'Rosa Clark',
      profileImg:
        'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      userId: 3,
      likes: 99,
      comments: 15,
      timestamp: 29,
      body: "Rosa's post body content.",
      img:
        'https://images.unsplash.com/photo-1572231754710-4bed19649091?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tbWVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ],
  comments: [
    {
      id: 1,
      name: 'Hallie Fields',
      postId:3,
      userId: 1,
      body: "Hallie's comment",
      username: 'hfields123',
    },
    {
      id: 2,
      name: 'Viola Casey',
      postId:1,
      userId: 2,
      body: "Viola's comment",
      username: 'vcasey123',
    },
    {
      id: 3,
      name: 'Rosa Clark',
      postId:1,
      userId: 3,
      body: "Rosa's comment",
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
