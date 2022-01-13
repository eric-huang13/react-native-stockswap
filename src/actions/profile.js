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
  PLAIDTOKEN_START,
  PLAIDTOKEN_SUCCESS,
  PLAIDTOKEN_ERROR,
  PLAIDBANK_START,
  PLAIDBANK_SUCCESS,
  PLAIDBANK_ERROR,
  FETCHPORTFOLIOACCOUNTS_START,
  FETCHPORTFOLIOACCOUNTS_SUCCESS,
  FETCHPORTFOLIOACCOUNTS_ERROR,
  FETCHINSTITUTION_START,
  FETCHINSTITUTION_SUCCESS,
  FETCHINSTITUTION_ERROR,
  NEWPLAIDACCOUNT_INSTITUTION,
  NEWPLAIDACCOUNT_SUCCESS,
  PLAIDACCOUNTSTATUS_START,
  PLAIDACCOUNTSTATUS_SUCCESS,
  PLAIDACCOUNTSTATUS_ERROR,
  GETSETTINGS_START,
  GETSETTINGS_SUCCESS,
  GETSETTINGS_ERROR,
  POSTSETTINGS_START,
  POSTSETTINGS_SUCCESS,
  POSTSETTINGS_ERROR,
} from 'constants';
import axios from 'axios';
import deviceStorage from '../util/DeviceStorage';
import apiInstance from '../util/axiosConfig';
import {navigate} from '../../RootNavigation';
import Toast from 'react-native-toast-message';
import {
  PORTFOLIO,
  PORTFOLIO_INSTITUTIONS,
  PORTFOLIO_INITIATE,
  PORTFOLIO_LINK,
  PORTFOLIO_ACCOUNT,
  PROFILE,
} from './api';
import { API_SERVER } from '../constants';

export const GetSettings = () => {
  return (dispatch) => {
    dispatch({type: GETSETTINGS_START});
    apiInstance
      .get(API_SERVER + `/settings`)
      .then((response) => {
       dispatch({
          type: GETSETTINGS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({type: GETSETTINGS_ERROR, payload: error.response});
        console.log(error.response, 'Error getting settings');
      });
  };
};

export const PostSettings = (input) => {
  console.log(input,"INPUT")
  return (dispatch) => {
    dispatch({type: POSTSETTINGS_START});
    apiInstance
      .post(API_SERVER + `/settings`, input)
      .then((response) => {
      dispatch({
          type: POSTSETTINGS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({type: POSTSETTINGS_ERROR, payload: error.response});
        console.log(error.response, 'Error posting settings');
      });
  };
};

export const PortfolioAccounts = () => {
  return (dispatch) => {
    dispatch({type: FETCHPORTFOLIOACCOUNTS_START});
    apiInstance
      //add endpoint
      .get(PORTFOLIO)
      .then((response) => {
        dispatch(PortfolioInstitution());
        // dispatch(PortfolioInstitution({ids:'ins_3'}));

        dispatch({
          type: FETCHPORTFOLIOACCOUNTS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({type: FETCHPORTFOLIOACCOUNTS_ERROR, payload: error.response});
        console.log(error.response, 'Error in portfolio');
      });
  };
};
export const PortfolioInstitution = () => {
  return (dispatch) => {
    dispatch({type: FETCHINSTITUTION_START});
    apiInstance
      //add endpoint
      .get(PORTFOLIO_INSTITUTIONS)
      .then((response) => {
        dispatch({type: FETCHINSTITUTION_SUCCESS, payload: response.data});
      })
      .catch((error) => {
        dispatch({type: FETCHINSTITUTION_ERROR, payload: error.response});
        console.log(error, 'Error in Institution');
      });
  };
};

export const PlaidLoading = () => {
  return (dispatch) => {
    dispatch({type: PLAIDBANK_START});
  };
};

export const NewPlaidAccount = (accounts, institution) => {
  return (dispatch) => {
    dispatch({type: NEWPLAIDACCOUNT_SUCCESS, payload: accounts});
    dispatch({type: NEWPLAIDACCOUNT_INSTITUTION, payload: institution});

    navigate('EnableAccounts');
  };
};

export const PlaidAccountStatus = (input) => {
  console.log(input, 'INPUT IN ACCOUNT REDUX');
  return (dispatch) => {
    // dispatch({type: PLAIDACCOUNTSTATUS_SUCCESS});
    apiInstance
      .post(PORTFOLIO_ACCOUNT, input)
      .then((response) => {
        console.log(response, 'Success in PLAIDACCOUNTSTATUS');
        dispatch({type: PLAIDACCOUNTSTATUS_SUCCESS, payload: response.data});
      })
      .catch((error) => {
        dispatch({type: PLAIDACCOUNTSTATUS_ERROR, payload: error.response});
        console.log(error.response, 'Error in PlaidToken');
      });
  };
};

export const PlaidBank = (input) => {
  return (dispatch) => {
    // dispatch({type: PLAIDBANK_START});
    apiInstance
      //add endpoint
      .post(PORTFOLIO_LINK, input)
      .then((response) => {
        console.log(response, 'Success in PLAIDBANK');
        dispatch({type: PLAIDBANK_SUCCESS, payload: response.data});
      })
      .catch((error) => {
        dispatch({type: PLAIDBANK_ERROR, payload: error.response});
        console.log(error.response, 'Error in PLAIDBANK');
      });
  };
};

export const PlaidToken = () => {
  return (dispatch) => {
    dispatch({type: PLAIDTOKEN_START});
    apiInstance
      .post(PORTFOLIO_INITIATE)
      .then((response) => {
        // console.log(response, 'Success in Plaidtoken');
        dispatch({type: PLAIDTOKEN_SUCCESS, payload: response.data});
      })
      .catch((error) => {
        dispatch({type: PLAIDTOKEN_ERROR, payload: error.response});
        console.log(error.response, 'Error in PlaidToken');
      });
  };
};

export const CreateProfile = (input) => {
  return (dispatch) => {
    dispatch({type: CREATEPROFILE_START});
    apiInstance
      .put(PROFILE, input)
      .then((response) => {
        // console.log(response, 'profile created');
        dispatch({type: CREATEPROFILE_SUCCESS, payload: response.data});
        navigate('ConnectAccount');

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
      .get(PROFILE)
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

export const GetProfileImage = (token, id) => {
  return (dispatch) => {
    dispatch({type: GETPROFILEIMAGE_START});
    // apiInstance
    //   .get(
    //     `https://d13h17hkw4i0vn.cloudfront.net/${id}/profile.jpg`

    //   )
    axios
      .get(`https://d13h17hkw4i0vn.cloudfront.net/${id}/profile.jpg`, {
        headers: {
          // 'content-type': 'multipart/form-data',
          // 'content-type': 'image/jpg',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.request.responseURL, 'IMAGE get response');
        // const data = `data:${response.headers['content-type']};base64,${Buffer.from(response.data).toString('base64')}`;
        // console.log(response, 'DATA IMAGE');
        dispatch({
          type: GETPROFILEIMAGE_SUCCESS,
          payload: response.request.responseURL,
        });
      })
      .catch((error) => {
        // console.log(error.response, 'IMAGE ERROR');
        // Toast.show({
        //   type: 'error',
        //   text2: 'Error getting IMAGE.',
        // });
      });
  };
};

export const CreateProfileImage = (id, token, input) => {
  return (dispatch) => {
    dispatch({type: CREATEPROFILEIMAGE_START});
    // console.log('ID:', id);
    // console.log('Token:', token);
    // console.log('IMAGE INPUT:' + input);
    axios
      .put(`https://d13h17hkw4i0vn.cloudfront.net/${id}/profile.jpg`, input, {
        headers: {
          // 'content-type': 'multipart/form-data',
          'content-type': 'image/jpg',
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        console.log('image upload success');
        dispatch({
          type: CREATEPROFILEIMAGE_SUCCESS,
          payload: response.request.responseURL,
        });
      })
      .catch((error) => {
        console.log('ERROR in Image upload', error);
        dispatch({type: CREATEPROFILEIMAGE_ERROR, payload: error.response});
        Toast.show({
          type: 'errorSignUp',
          text1: 'Error uploading picture',
          // text2: error.response,
        });
      });
  };
};

export const EditUserProfile = (input) => {
  return (dispatch) => {
    dispatch({type: EDITPROFILE_START});
    apiInstance
      .post(PROFILE, input)
      .then((response) => {
        // console.log(response, 'Edit profile response');
        dispatch({type: EDITPROFILE_SUCCESS, payload: response.data});
        navigate('MyProfile');
        Toast.show({
          type: 'success',
          text2: 'Profile updated successfully!',
        });
      })

      .catch((error) => {
        dispatch({type: EDITPROFILE_ERROR, payload: error.response});
        // console.log(error.response);
      });
  };
};
