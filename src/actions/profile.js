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
    CREATEPROFILEIMAGE_START,
    CREATEPROFILEIMAGE_SUCCESS,
    CREATEPROFILEIMAGE_ERROR,
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

  export const GetProfile = () => {
    return (dispatch) => {
      dispatch({type: GETPROFILE_START});
      apiInstance
        .get(
          `http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/profile`
          
        )
        .then((response) => {
          dispatch({type: GETPROFILE_SUCCESS, payload: response.data});          
        })
        .catch((error) => {
          console.log(error.response);
          Toast.show({
            type: 'error',
            text2: 'Error getting profile.',
          });
        });
    };
  };

  export const GetProfileImage = (id) => {
    return (dispatch) => {
      dispatch({type: GETPROFILEIMAGE_START});
      apiInstance
        .get(
          `https://d13h17hkw4i0vn.cloudfront.net/${id}/profile.jpg`
        
        )
        .then((response) => {
          // console.log(response.request.responseURL, 'IMAGE get response');
        // const data = `data:${response.headers['content-type']};base64,${Buffer.from(response.data).toString('base64')}`;
          // console.log(data,"DATA IMAGE")
          dispatch({type: GETPROFILEIMAGE_SUCCESS, payload: response.request.responseURL});          
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


export const CreateProfileImage = (id, token, input) => {

  return (dispatch) => {
    dispatch({type: CREATEPROFILEIMAGE_START});
    axios
      .put(`https://d13h17hkw4i0vn.cloudfront.net/${id}/profile.jpg`, input, {
        headers: {
          // 'content-type': 'multipart/form-data',
          'content-type': 'image/jpg',
          'Authorization': `Bearer ${token}` 
        },
      })


      .then((response) => {

        dispatch({type: CREATEPROFILEIMAGE_SUCCESS, payload: response.request.responseURL});      
      })
      .catch((error) => {
        console.log(error, 'ERROR in Image upload');
        dispatch({type: CREATEPROFILEIMAGE_ERROR, payload: error.response});
        Toast.show({
          type: 'errorSignUp',
          text1: 'Error',
          text2: error.response,
        });
      });
  };
};
  
export const EditUserProfile = (input) => {
  return (dispatch) => {
    dispatch({type: EDITPROFILE_START});
    apiInstance
            .post('http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/profile', (input))
            .then((response) => {
                console.log(response, 'Edit profile response')
                dispatch({type: EDITPROFILE_SUCCESS, payload: response.data});
                    navigate('MyProfile')     
                    Toast.show({
            type: 'success',
            text2: 'Profile updated successfully!',
          });
         

            })

 .catch(error => {dispatch({ type: EDITPROFILE_ERROR, payload: error.response })
console.log(error.response )

})
  };
};