import {    
    EDITPROFILE_START,
    EDITPROFILE_SUCCESS,
    EDITPROFILE_ERROR, 
    CREATEPROFILE_START,
    CREATEPROFILE_SUCCESS,
    CREATEPROFILE_ERROR,
    GETPROFILE_START,
    GETPROFILE_SUCCESS,
    GETPROFILE_ERROR, 
    GETPROFILEIMAGE_START,
    GETPROFILEIMAGE_SUCCESS,
    GETPROFILEIMAGE_ERROR,
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




  export const GetProfile = () => {
    return (dispatch) => {
      dispatch({type: GETPROFILE_START});
      apiInstance
        .get(
          `http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/profile`
          
        )
        .then((response) => {
          console.log(response, 'profile get response');
          dispatch({type: GETPROFILE_SUCCESS, payload: response.data});

          // Toast.show({
          //   type: 'success',
          //   text2: 'Profile get successful!',
          // });
        })
        .catch((error) => {
          console.log(error.response);
          // Toast.show({
          //   type: 'error',
          //   text2: 'Error getting profile.',
          // });
        });
    };
  };
  export const GetProfileImage = () => {
    return (dispatch) => {
      dispatch({type: GETPROFILEIMAGE_START});
      apiInstance
        .get(
          `https://d13h17hkw4i0vn.cloudfront.net/61084eedcd30f2001e6ed347/profile.jpg`
        
        )
        .then((response) => {
          console.log(response, 'IMAGEEEEEEEEEEE get response');
          dispatch({type: GETPROFILEIMAGE_SUCCESS, payload: response.data});

          Toast.show({
            type: 'success',
            text2: 'IMAGE get successful!',
          });
        })
        .catch((error) => {
          console.log(error.response, "IMAGE ERROR");
          Toast.show({
            type: 'error',
            text2: 'Error getting IMAGE.',
          });
        });
    };
  };


  ///
export const EditUserProfile = (input) => {
  return (dispatch) => {
    dispatch({type: EDITPROFILE_START});
    apiInstance
            .post('http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/profile', (input))
            .then((response) => {
                console.log(response, 'Edit profile response')
                dispatch({type: EDITPROFILE_SUCCESS, payload: response.data});
                    navigate('MyProfile')               

            })

 .catch(error => {dispatch({ type: EDITPROFILE_ERROR, payload: error.response })
console.log(error.response )

})
  };
};