import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  GOOGLE_LOGIN_START,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_ERROR,
  GOOGLE_LOGOUT_START,
  GOOGLE_LOGOUT_SUCCESS,
  GOOGLE_LOGOUT_ERROR,
} from 'constants';
import axios from 'axios';
import deviceStorage from '../util/DeviceStorage';
import clearAppData from '../util/ClearStorage';
import apiInstance from '../util/axiosConfig';
import {navigate} from '../../RootNavigation';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Toast from 'react-native-toast-message';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
// GoogleSignin.configure({
//   webClientId:
//     '534509051413-6a8ceait2pji394mgui3svtrnp7bl4hp.apps.googleusercontent.com',
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
// });
// export const Register = (input) => {
//   return (dispatch) => {
//     dispatch({type: SIGNUP_START});
//     axios
//       .post(
//         'http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/auth/signup',
//         input,
//       )
//       .then((response) => {
//         console.log(response, 'RESPONSE in Signup');

//         deviceStorage.saveItem('token', response.data.accessToken),
//         deviceStorage.saveItem('refreshToken', response.data.refreshToken),
//         deviceStorage.saveItem('email', input.email),

//         //route to profileinfo
//           dispatch({type: SIGNUP_SUCCESS, payload: response.data});
//         Toast.show({
//           type: 'success',
//           text2: 'Sign up successful!',
//         });
//       })
//       .catch((error) => {
//         console.log(error, 'ERROR in Signup');
//         dispatch({type: SIGNUP_ERROR, payload: error.response});
//         navigate('SignUp');
//         Toast.show({
//           type: 'errorSignUp',
//           text1: 'Error',
//           text2: error.response.data.message,
//         });
//       });
//   };
// };

export const Register = (input) => {
  return (dispatch) => {
    dispatch({type: SIGNUP_START});
    axios
      .post(
        'http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/auth/signup',
        input,
      )
      .then((response) => {
        console.log(response, 'RESPONSE in Signup');

        deviceStorage.saveItem('token', response.data.accessToken),
        deviceStorage.saveItem('refreshToken', response.data.refreshToken),
        deviceStorage.saveItem('email', input.email),

        //route to profileinfo
          dispatch({type: SIGNUP_SUCCESS, payload: response.data});
          navigate('ProfileInfoForm');

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
// export const RegisterwithImage = (input) => {
//   console.log(input, 'inputapi');
//   const config = {
//     headers: {
//       Accept: 'application/json',
//       'content-type': 'multipart/form-data',
//     },
//   };
//   return (dispatch) => {
//     dispatch({type: SIGNUP_START});
//     axios
//       .post('http://192.168.0.103:3000/api/upload', input, config)

//       .then((response) => {
//         console.log(response, 'RESPONSE in Signup');

//         dispatch({type: SIGNUP_SUCCESS, payload: response.data});
//         Toast.show({
//           type: 'success',
//           text2: 'Sign up successful!',
//         });
//       })
//       .catch((error) => {
//         console.log(error, 'ERROR in Signup');
//         dispatch({type: SIGNUP_ERROR, payload: error.response});
//         navigate('SignUp');
//         Toast.show({
//           type: 'errorSignUp',
//           text1: 'Error',
//           text2: error.response.data.message,
//         });
//       });
//   };
// };

export const RegisterGoogleSignIn = (input) => {
  GoogleSignin.configure({
    webClientId:
      '534509051413-6a8ceait2pji394mgui3svtrnp7bl4hp.apps.googleusercontent.com',
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
  return (dispatch) => {
    dispatch({type: SIGNUP_START});
    axios
      .post(
        'http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/auth/oauth/signup',
        input,
      )

      .then((response) => {
        //here route to profile info
        dispatch({type: SIGNUP_SUCCESS, payload: response.data});
        deviceStorage.saveItem('token', response.data.accessToken),
        deviceStorage.saveItem('refreshToken', response.data.refreshToken),
        navigate('ProfileInfoForm');

          Toast.show({
            type: 'success',
            text2: 'Sign up with Google successful!',
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

//original
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
      .post(
        'http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/auth/oauth/login',
        input,
      )

      .then((response) => {
        dispatch({type: LOGIN_SUCCESS, payload: response.data});
        deviceStorage.saveItem('token', response.data.accessToken),
        deviceStorage.saveItem('refreshToken', response.data.refreshToken),

          // navigate('ProfileInfoForm');
          Toast.show({
            type: 'success',
            text2: 'Login successful!',
          });
      })
      .catch((error) => {
        dispatch({type: SIGNUP_ERROR, payload: error.response});
        //if response is email not registered then should dispatch oauth signup
        dispatch(GoogleLogoutCheck());
        navigate('SignUp');

        Toast.show({
          type: 'error',
          text2: 'Error Logging in. Please create account. ',
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
      .post(
        'http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/auth/login',
        input,
      )
      .then((response) => {
        console.log('FIRST', response.data.refreshToken)
        console.log('INPUT', input.email)

        deviceStorage.saveItem('token', response.data.accessToken),
        deviceStorage.saveItem('refreshToken', response.data.refreshToken),
        deviceStorage.saveItem('email', input.email),


          dispatch({type: LOGIN_SUCCESS, payload: response.data});
        Toast.show({
          type: 'success',
          // text2: response.data.message,
          text2: "Login successful",
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
export const GoogleSignUp = () => {
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
      dispatch(
        RegisterGoogleSignIn({token: userInfo.idToken, platform: 'android'}),
      );
     
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

//original
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
      deviceStorage.saveItem('email', userInfo.user.email),

      //send token to backend
       dispatch(RegisterGoogle({token: userInfo.idToken, platform: 'android'}));
  
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
        dispatch(RegisterGoogle({token: userInfo.idToken, platform: 'android'}));
        
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

// export const Logout = () => (dispatch) => {
//   clearAppData()
//   Toast.show({
//     type: 'success',
//     topOffset: 30,
//     text2: 'You have been successfully logged out.',
//   });
//   dispatch(GoogleLogoutCheck());
//   return dispatch({
//     type: LOGOUT,
//   });
  
// };


export const Logout = () => { 
  return async (dispatch) => {
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    const email = await AsyncStorage.getItem("email");      
    return axios
        .post(
          "http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/auth/logout",
          {
            refreshToken: refreshToken,
            email: email,
          }
        )
        .then( (res) => {
          clearAppData()
  Toast.show({
    type: 'success',
    topOffset: 30,
    text2: 'You have been successfully logged out.',
  });
  dispatch(GoogleLogoutCheck());
  console.log(res, "Logging out")
   dispatch({
    type: LOGOUT,
  });
        })
        .catch((error) => {
          console.log(error, "Error logging out");

          Toast.show({
            type: "errorSignUp",
            text1: "Session Has Expired",
            text2: "Error logging out",
          });
        });
    
  };
};


