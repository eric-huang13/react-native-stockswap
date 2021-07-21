import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  EDITUSER_START,
  EDITUSER_SUCCESS,
  EDITUSER_ERROR,
  GOOGLE_LOGIN_START,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_ERROR,
  GOOGLE_LOGOUT_START,
  GOOGLE_LOGOUT_SUCCESS,
  GOOGLE_LOGOUT_ERROR,
} from 'constants';
import axios from 'axios';
import deviceStorage from '../util/DeviceStorage';
import apiInstance from '../util/axiosConfig';
import {navigate} from '../../RootNavigation';

import Toast from 'react-native-toast-message';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
// GoogleSignin.configure({
//   webClientId:
//     '534509051413-6a8ceait2pji394mgui3svtrnp7bl4hp.apps.googleusercontent.com',
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
// });
export const Register = (input) => {
  return (dispatch) => {
    dispatch({type: SIGNUP_START});
    axios
      .post(
        'http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/auth/signup', input,)
      .then((response) => {
        console.log(response, 'RESPONSE in Signup');
        
        dispatch({type: SIGNUP_SUCCESS, payload: response.data});
        Toast.show({
          type: 'success',
          text2: 'Sign up successful!',
        });
      })
      .catch((error) => {
        console.log(error, 'ERROR in Signup');
        dispatch({type: SIGNUP_ERROR, payload: error.response});
        navigate('SignUp');
        Toast.show({
          type: 'errorSignUp',
          text1: 'Error',
          text2: error.response.data.message,
        });
      });
  };
};

// For signup with image
export const RegisterwithImage = (input) => {
  console.log(input, 'inputapi');
  const config = {
    headers: {
      Accept: 'application/json',
      'content-type': 'multipart/form-data',
    },
  };
  return (dispatch) => {
    dispatch({type: SIGNUP_START});
    axios
      .post('http://192.168.0.103:3000/api/upload', input, config)

      .then((response) => {
        console.log(response, 'RESPONSE in Signup');

        dispatch({type: SIGNUP_SUCCESS, payload: response.data});
        Toast.show({
          type: 'success',
          text2: 'Sign up successful!',
        });
      })
      .catch((error) => {
        console.log(error, 'ERROR in Signup');
        dispatch({type: SIGNUP_ERROR, payload: error.response});
        navigate('SignUp');
        Toast.show({
          type: 'errorSignUp',
          text1: 'Error',
          text2: error.response.data.message,
        });
      });
  };
};

export const RegisterGoogle = (input) => {
  GoogleSignin.configure({
    webClientId:
      '534509051413-6a8ceait2pji394mgui3svtrnp7bl4hp.apps.googleusercontent.com',
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
  console.log(input, 'input in google action');
  return (dispatch) => {
    dispatch({type: SIGNUP_START});
    axios
      // .post('http://ec2-3-139-84-5.us-east-2.compute.amazonaws.com/auth/login', input)

      //Using endpoint for testing
      .post('https://jiujitsux.herokuapp.com/api/users/register', input)

      .then((response) => {
        dispatch({type: SIGNUP_SUCCESS, payload: response.data});
        deviceStorage.saveItem('token', response.data.token),
          navigate('ProfileInfoForm');
        Toast.show({
          type: 'success',
          text2: 'Sign up successful!',
        });
      })
      .catch((error) => {
        dispatch({type: SIGNUP_ERROR, payload: error.response});
        Toast.show({
          type: 'error',
          text2: 'Error signing up.',
        });
      });
  };
};

export const Login = (input) => {
  return (dispatch) => {
    dispatch({type: LOGIN_START});
    Toast.show({
      type: 'info',
      text2: 'Sending credentials...',
    });
    axios
      .post('http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/auth/login', input)
      .then((response) => {
        // console.log('response loginnnnn', response.data)
        deviceStorage.saveItem('token', response.data.accessToken),
          dispatch({type: LOGIN_SUCCESS, payload: response.data});
        Toast.show({
          type: 'success',
          text2: response.data.message,
        });
      })
      
      .catch((error) => {
        console.log(error.response.data.message, 'ERROR in LOGIN');
        dispatch({type: SIGNUP_ERROR, payload: error.response});
        Toast.show({
          type: 'errorLogin',
          text1: 'Error',
          text2: error.response.data.message,
        });
      });
  };
};

export const GoogleLogin = () => {
  GoogleSignin.configure({
    webClientId:
      '534509051413-6a8ceait2pji394mgui3svtrnp7bl4hp.apps.googleusercontent.com',
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
  return async (dispatch) => {
    dispatch({type: GOOGLE_LOGIN_START});
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      //send token to backend
      //  dispatch (RegisterGoogle({idToken:userInfo.idToken}))
      //test to make sure sending google userinfo correctly
      dispatch(Login({email: userInfo.user.email, password: 'Password1!!'}));

      dispatch({type: GOOGLE_LOGIN_SUCCESS, payload: userInfo});
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log(error);
      }
    }
  };
};

export const GoogleIsSignedIn = () => {
  GoogleSignin.configure({
    webClientId:
      '534509051413-6a8ceait2pji394mgui3svtrnp7bl4hp.apps.googleusercontent.com',
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
  return async (dispatch) => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      try {
        const userInfo = await GoogleSignin.signInSilently();
        //send token to backend
        //  dispatch (RegisterGoogle({idToken:userInfo.idToken}))
        //test to make sure sending google userinfo correctly
        dispatch(Login({email: userInfo.user.email, password: 'Password1!!'}));
        dispatch({type: GOOGLE_LOGIN_SUCCESS, payload: userInfo});
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          console.log('User has not signed in yet');
        } else {
          console.log("Something went wrong. Unable to get user's info");
        }
      }
    } else {
      dispatch({type: GOOGLE_LOGOUT_SUCCESS, payload: {}});
      console.log('Please Login');
    }
  };
};

export const GoogleLogout = () => {
  GoogleSignin.configure({
    webClientId:
      '534509051413-6a8ceait2pji394mgui3svtrnp7bl4hp.apps.googleusercontent.com',
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
  return async (dispatch) => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      dispatch({type: GOOGLE_LOGOUT_SUCCESS, payload: {}});
    } catch (error) {
      console.error(error);
    }
  };
};

export const GoogleLogoutCheck = () => {
  return async (dispatch) => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      dispatch(GoogleLogout());
    }
  };
};

//Working POST with token sent on headers

// export const Login = (input) => {
//   return (dispatch) => {
//     dispatch({type: LOGIN_START});
//     apiInstance
//             .post('https://jiujitsux.herokuapp.com/api/moves/takedown', (input))
//             .then((response) => {
//                 console.log(response, 'TAKEDOWN response')
//                 // window.location.reload();
//             })
//         // .then(response =>{ deviceStorage.saveItem('token', response.data.token), dispatch({ type: LOGIN_SUCCESS, payload: response.data })

// .catch(error => {dispatch({ type: SIGNUP_ERROR, payload: error.response })
// console.log(error.response )

// })
//   };
// };

// export const Login = () => (dispatch) => {
//   Toast.show({
//     type: 'success',
//     text2: 'Sign up successful!',
//   });

//   return dispatch({
//     type: LOGIN_SUCCESS,
//   });
// };

export const Logout = () => (dispatch) => {
  Toast.show({
    type: 'success',
    topOffset: 30,
    text2: 'You have been successfully logged out.',
  });
  dispatch(GoogleLogoutCheck());
  return dispatch({
    type: LOGOUT,
  });
};

export const EditUser = (input) => {
  return (dispatch) => {
    dispatch({type: EDITUSER_START});
    apiInstance
      .put(
        `https://jiujitsux.herokuapp.com/api/moves/takedown/${input.id}`,
        input,
      )
      .then((response) => {
        console.log(response, 'TAKEDOWN edit response');
        Toast.show({
          type: 'success',
          text2: 'Profile updated successfully!',
        });
      })
      .catch((error) => {
        dispatch({type: EDITUSER_ERROR, payload: error.response});
        console.log(error.response);
        Toast.show({
          type: 'error',
          text2: 'Error updating profile.',
        });
      });
  };
};
