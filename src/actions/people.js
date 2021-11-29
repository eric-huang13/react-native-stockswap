import {
  EDITUSER_START,
  EDITUSER_SUCCESS,
  EDITUSER_ERROR,
  USERS_FETCHING,
  USERS_SUCCESS,
  USERS_ERROR,
  USERS_STOP,
  FOLLOWUSER_SUCCESS,
  FOLLOWUSER_ERROR,
  FOLLOWUSER_START,
  UNFOLLOWUSER_SUCCESS,
  UNFOLLOWUSER_ERROR,
  UNFOLLOWUSER_START,
  GETMYFOLLOWERS_SUCCESS,
  GETMYFOLLOWERS_ERROR,
  GETMYFOLLOWERS_START,
  GETMYFOLLOWING_SUCCESS,
  GETMYFOLLOWING_ERROR,
  GETMYFOLLOWING_START,
} from 'constants';
import axios from 'axios';
import deviceStorage from '../util/DeviceStorage';
import apiInstance from '../util/axiosConfig';
import {navigate} from '../../RootNavigation';

//Working POST with token sent on headers

// export const EditUser = (input) => {
//   return (dispatch) => {
//     dispatch({type: EDITUSER_START});
//     apiInstance
//             .post('https://jiujitsux.herokuapp.com/api/moves/takedown', (input))
//             .then((response) => {
//                 console.log(response, 'TAKEDOWN response')
//                 // window.location.reload();
//             })
//         // .then(response =>{ deviceStorage.saveItem('token', response.data.token), dispatch({ type: EDITUSER_SUCCESS, payload: response.data })

//  .catch(error => {dispatch({ type: EDITUSER_ERROR, payload: error.response })
// console.log(error.response )

// })
//   };
// };
export const fetchFake = (page, offset) => {
  return (dispatch) => {
    dispatch({type: USERS_FETCHING});
    axios
      .get(
        `https://api.openbrewerydb.org/breweries?page=${page}&per_page=${offset}&by_state=ohio`,
      )
      // .then(response => console.log (response.data, "From USERS API"))
      .then((response) =>
        response.data.length > 0
          ? dispatch({type: USERS_SUCCESS, payload: response.data})
          : dispatch({type: USERS_STOP, payload: false}),
      )

      .catch((error) => dispatch({type: USERS_ERROR, payload: error.response}));
  };
};

export const FollowUser = (id) => {
  return (dispatch) => {
    dispatch({type: FOLLOWUSER_START});

    apiInstance
      .post(
        `http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/interactions/follow/:profileId${id}`,
      )
      .then((response) => {
        console.log('Follow User Success');
        dispatch({
          type: FOLLOWUSER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log('ERROR Follow User', error);
        dispatch({type: FOLLOWUSER_ERROR, payload: error.response});
      });
  };
};

export const UnFollowUser = (id) => {
  return (dispatch) => {
    dispatch({type: UNFOLLOWUSER_START});

    apiInstance
      .post(
        `http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/interactions/unfollow/:profileId${id}`,
      )
      .then((response) => {
        console.log('UnFollow User Success');
        dispatch({
          type: UNFOLLOWUSER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log('ERROR UnFollow User', error);
        dispatch({type: UNFOLLOWUSER_ERROR, payload: error.response});
      });
  };
};

export const getMyFollowers = () => {
  return (dispatch) => {
    dispatch({type: GETMYFOLLOWERS_START});
    apiInstance
      .get(
        'http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/interactions/followers',
      )
      // .then(response => console.log (response.data, "From Get Followers"))
      .then((response) =>
        dispatch({type: GETMYFOLLOWERS_SUCCESS, payload: response.data.data}),
      )
      .catch(
        (error) => console.log(error, 'error getting followers'),
        dispatch({type: GETMYFOLLOWERS_ERROR, payload: error.response}),
      );
  };
};

export const getMyFollowing = () => {
  return (dispatch) => {
    dispatch({type: GETMYFOLLOWING_START});
    apiInstance
      .get(
        'http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/interactions/following',
      )
      // .then(response => console.log (response.data, "From Get Following"))
      .then((response) =>
        dispatch({type: GETMYFOLLOWING_SUCCESS, payload: response.data.data}),
      )
      .catch(
        (error) => console.log(error, 'error getting following'),
        dispatch({type: GETMYFOLLOWING_ERROR, payload: error.response}),
      );
  };
};
