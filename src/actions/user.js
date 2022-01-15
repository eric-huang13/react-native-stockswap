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
  TOKEN_START,
  TOKEN_SUCCESS,
  TOKEN_ERROR,
  RESETPASSWORD_START,
  RESETPASSWORD_SUCCESS,
  RESETPASSWORD_ERROR,
  REFRESH_TOKEN,
  ADD_LATER,
} from 'constants';
import HttpClient from '../httpclient';
import deviceStorage from '../util/DeviceStorage';
// import {deviceStorage} from '../Navigation';

import clearAppData from '../util/ClearStorage';
import {navigate} from '../../RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import {Platform} from 'react-native';
import Toast from 'react-native-toast-message';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {
  GOOGLE_IOS_CLIENT_ID,
  GOOGLE_WEB_CLIENT_ID,
  FORGOTPASSWORD_ERROR,
  FORGOTPASSWORD_START,
  FORGOTPASSWORD_SUCCESS,
} from '../constants';
import {
  AUTH_FORGOT_PASSWORD,
  AUTH_PASSWORD_RESET,
  AUTH_SIGNUP,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_OAUTH_SIGNUP,
  AUTH_OAUTH_LOGIN,
} from './api';

export const RefreshToken = (token) => {
  return (dispatch) => {
    dispatch({type: REFRESH_TOKEN, payload: token});
  };
};
export const AddLater = () => {
  return (dispatch) => {
    dispatch({type: ADD_LATER});
  };
};

export const Register = (input) => {
  return (dispatch) => {
    dispatch({type: SIGNUP_START});
    HttpClient.post(AUTH_SIGNUP, input, {}, {authRequired: false})
      .then((response) => {
        // console.log(response, 'RESPONSE in Signup');
        const decoded = jwt_decode(response.data.accessToken);

        deviceStorage.saveItem('token', response.data.accessToken),
          deviceStorage.saveItem('refreshToken', response.data.refreshToken),
          deviceStorage.saveItem('email', input.email),
          //route to profileinfo
          dispatch({type: SIGNUP_SUCCESS, payload: response.data});
        dispatch({type: TOKEN_SUCCESS, payload: decoded.sub});
        dispatch({type: REFRESH_TOKEN, payload: response.data.accessToken});

        navigate('ProfileInfoForm');

        Toast.show({
          type: 'success',
          text2: 'Sign up successful!',
        });
      })
      .catch((error) => {
        // console.log(error, 'ERROR in Signup');
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

export const RegisterGoogleSignup = (input) => {
  GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT_ID,
    offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: GOOGLE_IOS_CLIENT_ID, // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
  return (dispatch) => {
    dispatch({type: SIGNUP_START});
    HttpClient.post(AUTH_OAUTH_SIGNUP, input, {}, {authRequired: false})

      .then((response) => {
        //here route to profile info
        const decoded = jwt_decode(response.data.accessToken);

        dispatch({type: SIGNUP_SUCCESS, payload: response.data});
        dispatch({type: TOKEN_SUCCESS, payload: decoded.sub});
        dispatch({type: REFRESH_TOKEN, payload: response.data.accessToken});

        deviceStorage.saveItem('token', response.data.accessToken),
          deviceStorage.saveItem('refreshToken', response.data.refreshToken),
          navigate('ProfileInfoForm');

        Toast.show({
          type: 'success',
          text2: 'Sign up with Google successful!',
        });
      })
      .catch((error) => {
        // console.log('GOOGLE ERROR', error);
        dispatch({type: SIGNUP_ERROR, payload: error.response});
        Toast.show({
          type: 'error',
          text2: 'Error signing up.',
        });
      });
  };
};

//original
export const RegisterGoogleSignIn = (input) => {
  GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT_ID,
    offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: GOOGLE_IOS_CLIENT_ID, // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
  // console.log(input, 'input in google action');
  return (dispatch) => {
    // console.log('RegisterGoogleSignIn called');
    dispatch({type: GOOGLE_LOGIN_START});
    HttpClient.post(AUTH_OAUTH_LOGIN, input, {}, {authRequired: false})

      .then((response) => {
        const decoded = jwt_decode(response.data.accessToken);

        dispatch({type: LOGIN_SUCCESS, payload: response.data});
        dispatch({type: TOKEN_SUCCESS, payload: decoded.sub});
        dispatch({type: REFRESH_TOKEN, payload: response.data.accessToken});

        deviceStorage.saveItem('token', response.data.accessToken),
          deviceStorage.saveItem('refreshToken', response.data.refreshToken),
          // navigate('ProfileInfoForm');
          Toast.show({
            type: 'success',
            text2: 'Login successful!',
          });
      })
      .catch((error) => {
        // console.log('ERROR 101:', error);
        dispatch({type: GOOGLE_LOGIN_ERROR, payload: error.response});
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
    HttpClient.post(AUTH_LOGIN, input, {}, {authRequired: false})
      .then((response) => {
        // console.log('FIRST', response.data.refreshToken);
        // console.log('INPUT', input.email);
        const decoded = jwt_decode(response.data.accessToken);
        // console.log(decoded.sub);

        deviceStorage.saveItem('token', response.data.accessToken),
          deviceStorage.saveItem('refreshToken', response.data.refreshToken),
          deviceStorage.saveItem('email', input.email),
          dispatch({type: LOGIN_SUCCESS, payload: response.data});
        dispatch({type: TOKEN_SUCCESS, payload: decoded.sub});
        dispatch({type: REFRESH_TOKEN, payload: response.data.accessToken});

        Toast.show({
          type: 'success',
          // text2: response.data.message,
          text2: 'Login successful',
        });
      })

      .catch((error) => {
        // console.log(error.response.data.message, 'ERROR in LOGIN');
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
    webClientId: GOOGLE_WEB_CLIENT_ID,
    offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: GOOGLE_IOS_CLIENT_ID, // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
  return async (dispatch) => {
    // console.log('GoogleSignUp called');
    dispatch({type: GOOGLE_LOGIN_START});
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      deviceStorage.saveItem('email', userInfo.user.email),
        // console.log(userInfo, 'USERINFO GOOGLE SIGNUP');
        //send token to backend
        dispatch(
          RegisterGoogleSignup({
            token: userInfo.idToken,
            platform: Platform.OS === 'ios' ? 'ios' : 'android',
          }),
        );

      dispatch({type: GOOGLE_LOGIN_SUCCESS, payload: userInfo});
    } catch (error) {
      // console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // console.log('Play Services Not Available or Outdated');
      } else {
        // console.log(error);
      }
    }
  };
};

//original
export const GoogleLogin = () => {
  GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT_ID,
    offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: GOOGLE_IOS_CLIENT_ID, // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
  return async (dispatch) => {
    // console.log('GoogleLogin called');
    dispatch({type: GOOGLE_LOGIN_START});
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      deviceStorage.saveItem('email', userInfo.user.email),
        // console.log(userInfo, 'USERINFO GOOGLE LOGIN');

        //send token to backend
        dispatch(
          RegisterGoogleSignIn({
            token: userInfo.idToken,
            platform: Platform.OS === 'ios' ? 'ios' : 'android',
          }),
        );

      dispatch({type: GOOGLE_LOGIN_SUCCESS, payload: userInfo});
    } catch (error) {
      // console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // console.log('Play Services Not Available or Outdated');
      } else {
        // console.log(error);
      }
    }
  };
};

export const GoogleIsSignedIn = () => {
  GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT_ID,
    offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: GOOGLE_IOS_CLIENT_ID, // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
  return async (dispatch) => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      try {
        const userInfo = await GoogleSignin.signInSilently();
        //send token to backend
        dispatch(
          RegisterGoogleSignIn({
            token: userInfo.idToken,
            platform: Platform.OS === 'ios' ? 'ios' : 'android',
          }),
        );
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          // console.log('User has not signed in yet');
        } else {
          // console.log("Something went wrong. Unable to get user's info");
        }
      }
    } else {
      dispatch({type: GOOGLE_LOGOUT_SUCCESS, payload: {}});
      // console.log('Please Login');
    }
  };
};

export const GoogleLogout = () => {
  GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT_ID,
    offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: GOOGLE_IOS_CLIENT_ID, // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
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

export const Logout = () => {
  return async (dispatch) => {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const email = await AsyncStorage.getItem('email');
    return HttpClient.post(AUTH_LOGOUT, {
      refreshToken: refreshToken,
      email: email,
    })
      .then((res) => {
        clearAppData();
        Toast.show({
          type: 'success',
          topOffset: 30,
          text2: 'You have been successfully logged out.',
        });
        dispatch(GoogleLogoutCheck());
        // console.log(res, 'Logging out');
        dispatch({
          type: LOGOUT,
        });
      })
      .catch((error) => {
        // console.log(error, 'Error logging out');
        clearAppData();
        dispatch({
          type: LOGOUT,
        });

        Toast.show({
          type: 'errorSignUp',
          text1: 'Session Has Expired',
          text2: 'Error logging out',
        });
      });
  };
};

export const ForgotPasswordEmail = (input) => {
  return (dispatch) => {
    dispatch({type: FORGOTPASSWORD_START});
    HttpClient.post(AUTH_FORGOT_PASSWORD, input, {}, {authRequired: false})
      .then((response) => {
        dispatch({type: FORGOTPASSWORD_SUCCESS, payload: response});
        navigate({
          name: 'ConfirmCodeScreen',
          params: {email: input.email},
        });
        Toast.show({
          type: 'success',
          text2: 'Password reset code sent',
        });
      })
      .catch((error) => {
        // console.log(error, 'ERROR in Signup');
        dispatch({type: FORGOTPASSWORD_ERROR, payload: error.response});
        // navigate('Login');
        Toast.show({
          type: 'errorSignUp',
          text1: 'Error',
          text2: 'Error sending password reset',
        });
      });
  };
};

export const ResetPassword = (input) => {
  return (dispatch) => {
    dispatch({type: RESETPASSWORD_START});
    Toast.show({
      type: 'info',
      text2: 'Sending credentials...',
    });
    HttpClient.post(AUTH_PASSWORD_RESET, input, {}, {authRequired: false})
      .then((response) => {
        dispatch({type: RESETPASSWORD_SUCCESS, payload: response.data});
        navigate('Login');

        Toast.show({
          type: 'success',
          // text2: response.data.message,
          text2: 'Password Changed Successfully',
        });
      })
      .catch((error) => {
        // console.log(error.response.data.message, 'ERROR in LOGIN');
        dispatch({type: RESETPASSWORD_ERROR, payload: error.response});
        Toast.show({
          type: 'errorLogin',
          text1: 'Error resetting password',
          text2: error.response.data.message,
        });
      });
  };
};
