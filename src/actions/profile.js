import {    
    EDITPROFILE_START,
    EDITPROFILE_SUCCESS,
    EDITPROFILE_ERROR, 
    CREATEPROFILE_START,
    CREATEPROFILE_SUCCESS,
    CREATEPROFILE_ERROR, 
  } from 'constants';
  import axios from 'axios';
  import deviceStorage from '../util/DeviceStorage';
  import apiInstance from '../util/axiosConfig';
  import {navigate} from '../../RootNavigation';  
  import Toast from 'react-native-toast-message';

  export const CreateProfile = (input) => {
    return (dispatch) => {
      dispatch({type: CREATEPROFILE_START});
      apiInstance
        .put(
          `http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/profile`,
          input,
        )
        .then((response) => {
          console.log(response, 'profile created');
          dispatch({type: CREATEPROFILE_SUCCESS, payload: response.data});

          Toast.show({
            type: 'success',
            text2: 'Profile created successfully!',
          });
        })
        .catch((error) => {
          console.log(error.response);
          Toast.show({
            type: 'error',
            text2: 'Error creating profile.',
          });
        });
    };
  };
  ///
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