import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAuthLogger} from '../util';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {
  STORAGE_ACCESS_TOKEN,
  STORAGE_EMAIL,
  STORAGE_REFRESH_TOKEN,
} from '../constants';

import {AUTH_REFRESH} from '../actions/api';

let authRequestPromise = null;

const log = getAuthLogger();

const HttpClient = {
  get: async (url, config, settings) => {
    log('get url:', url);
    const headers = await getHeaders(config?.headers, settings);
    log('Headers:', headers);
    return await axios.get(url, {...(config || {}), headers});
  },
  post: async (url, data, config, settings) => {
    log('post url:', url);
    const headers = await getHeaders(config?.headers, settings);
    log('Headers:', headers);
    return await axios.post(url, data, {...(config || {}), headers});
  },
  put: async (url, data, config, settings) => {
    log('put url:', url);
    const headers = await getHeaders(config?.headers, settings);
    log('Headers:', headers);
    return await axios.put(url, data, {...(config || {}), headers});
  },
  del: async () => {
    const headers = await getHeaders();
  },
};

const getHeaders = async (headers = {}, settings) => {
  let accessToken = '';
  let _headers = {};
  try {
    const {isMediaRequest = false, authRequired = true} = settings || {
      isMediaRequest: false,
      authRequired: true,
    };
    if (authRequired) {
      accessToken = await AsyncStorage.getItem(STORAGE_ACCESS_TOKEN);
      if (accessToken && isValidToken(accessToken)) {
        _headers = {
          Authorization: isMediaRequest
            ? 'Bearer ' + accessToken
            : 'JWT ' + accessToken,
        };
      } else if (accessToken) {
        // get new auth token
        const newAccessToken = await getAuthTokenPromise();
        log('New access Token::', newAccessToken);
        _headers = {
          Authorization: isMediaRequest
            ? 'Bearer ' + newAccessToken
            : 'JWT ' + newAccessToken,
        };
      }
    }
    // refreshToken = await AsyncStorage.getItem('refreshToken');
  } catch (err) {
    log('ERROR:', err);
    // ignore
    accessToken = '';
  }
  return {
    ...(_headers || {}),
    ...(headers || {}),
  };
};

const getAuthTokenPromise = async () => {
  if (authRequestPromise == null) {
    const email = await AsyncStorage.getItem(STORAGE_EMAIL);
    const refreshToken = await AsyncStorage.getItem(STORAGE_REFRESH_TOKEN);
    authRequestPromise = getAuthResponse({email, refreshToken});
  } else {
    log('promise exists');
  }
  return authRequestPromise;
};

const isValidToken = (accessToken) => {
  // return false;
  const decoded = jwt_decode(accessToken);
  //console.log('Decode::', decoded);
  var nowInSeconds = Math.round(new Date().getTime() / 1000);
  const expiry = decoded.exp;
  const diffInSeconds = expiry - nowInSeconds;
  // console.log('expiry::', expiry);
  // console.log('SECONDS::', nowInSeconds);
  // console.log('DIFFINSECONDS::', diffInSeconds);
  if (expiry < nowInSeconds || diffInSeconds <= 60 * 60) {
    log('token expired');
    return false;
  }
  return true;
};

const getAuthResponse = async (request) => {
  try {
    log('Auth refresh request:', request);
    const response = await axios.post(AUTH_REFRESH, request);
    log('response::', response);
    const accessToken = response?.data?.accessToken;
    const refreshToken = response?.data?.refreshToken;
    if (accessToken && refreshToken) {
      AsyncStorage.setItem(STORAGE_ACCESS_TOKEN, accessToken);
      AsyncStorage.setItem(STORAGE_REFRESH_TOKEN, refreshToken);
    }
    return accessToken;
  } finally {
    authRequestPromise = null;
  }
};

Object.freeze(HttpClient);
export default HttpClient;
