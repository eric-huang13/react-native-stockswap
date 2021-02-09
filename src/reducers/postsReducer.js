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
        'An article from the newspaper that I thought was interesting. Let me know what you think or if you have any questions.',
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
      timestamp: '1 hour ago',
      body:
        'Doing some research on investing today. Here is my favorite article about trading stocks.',
      img:
        'https://images.unsplash.com/photo-1579407364450-481fe19dbfaa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2tzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    },
    {
      id: 4,
      name: 'Bob Fields',
      profileImg:
      'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90JTIwc3VpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      userId: 4,
      likes: 19,
      comments: 10,
      timestamp: '1 hour ago',
      body:
        'My first post. Nice!',
      img:
      'https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 5,
      name: 'Bob Fields',
      profileImg:
      'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90JTIwc3VpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      userId: 4,
      likes: 9,
      comments: 11,
      timestamp: '1 hour ago',
      body:
        'My second post. Yes!',
      img:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2luZXNzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 6,
      name: 'Bob Fields',
      profileImg:
      'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90JTIwc3VpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      userId: 4,
      likes: 2,
      comments: 4,
      timestamp: '1 hour ago',
      body:
        'My third post. Cool!',
      img:
      'https://images.unsplash.com/photo-1559589689-577aabd1db4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0b2NrJTIwbWFya2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 7,
      name: 'Bob Fields',
      profileImg:
      'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90JTIwc3VpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      userId: 4,
      likes: 3,
      comments: 8,
      timestamp: '1 hour ago',
      body:
        'My fourth post. Awesome!',
      img:
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fHN0b2NrJTIwbWFya2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
      body:
        'Cool article! I love reading all of your posts. Keep up the good work! Have a nice day!',

      time: '1 hour ago',
      likes: 3,
      username: 'rclark123',
    },
    {
      id: 4,
      name: 'Hallie Fields',
      profileImg:
        'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      postId: 4,
      userId: 1,
      body: 'Welcome!',
      time: '1 hour ago',
      likes: 3,
      username: 'hfields123',
    },
    {
      id:5,
      name: 'Bob Fields',
      profileImg:
      'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90JTIwc3VpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      postId: 1,
      userId: 4,
      body: 'Wow, awesome!',
      time: '1 hour ago',
      likes: 2,
      username: 'bob123',
    },
    {
      id: 6,
      name: 'Ben Clark',
      profileImg:
        'https://images.unsplash.com/photo-1606240569045-aca76646c656?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      postId: 4,
      userId: 3,
      body:
        'Cool!',

      time: '1 hour ago',
      likes: 3,
      username: 'rclark123',
    },
  ],
  reply: [
    {
      id: 1,
      name: 'Hallie Fields',
      profileImg:
        'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      commentId: 3,
      userId: 1,
      body: 'I agree with this comment',
      time: '1 hour ago',
      likes: 2,
      username: 'hfields123',
    },
    {
      id: 2,
      name: 'Viola Casey',
      profileImg:
        'https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fGNsb3NlJTIwaGVhZHNob3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      commentId: 1,
      userId: 2,
      body: 'I enjoyed this comment.',
      time: '1 hour ago',
      likes: 1,
      username: 'vcasey123',
    },
    {
      id: 3,
      name: 'Ben Clark',
      profileImg:
        'https://images.unsplash.com/photo-1606240569045-aca76646c656?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      commentId: 1,
      userId: 3,
      body: 'Perfect comment!',

      time: '1 hour ago',
      likes: 3,
      username: 'rclark123',
    },
    {
      id: 4,
      name: 'Ben Clark',
      profileImg:
        'https://images.unsplash.com/photo-1606240569045-aca76646c656?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      commentId: 5,
      userId: 3,
      body: 'Hey!!',

      time: '1 hour ago',
      likes: 2,
      username: 'rclark123',
    },
    {
      id: 5,
      name: 'Bob Fields',
      profileImg:
        'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90JTIwc3VpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      commentId: 5,
      userId: 4,
      body: 'Good to see you!',

      time: '1 hour ago',
      likes: 4,
      username: 'bob123',
    },
    {
      id: 6,
      name: 'Bob Fields',
      profileImg:
        'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90JTIwc3VpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      commentId: 6,
      userId: 4,
      body: 'Thanks!!',

      time: '1 hour ago',
      likes: 2,
      username: 'bob123',
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
