import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HttpClient = {
  get: async (url, config, settings) => {
    // console.log('get url:', url);
    const headers = await getHeaders(config?.headers, settings);
    console.log('Headers:', headers);
    return await axios.get(url, {...(config || {}), headers});
  },
  post: async (url, data, config, settings) => {
    // console.log('post url:', url);
    const headers = await getHeaders(config?.headers, settings);
    console.log('Headers:', headers);
    return await axios.post(url, data, {...(config || {}), headers});
  },
  put: async (url, data, config, settings) => {
    // console.log('put url:', url);
    const headers = await getHeaders(config?.headers, settings);
    console.log('Headers:', headers);
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
      accessToken = await AsyncStorage.getItem('token');
      if (accessToken) {
        _headers = {
          Authorization: isMediaRequest
            ? 'Bearer ' + accessToken
            : 'JWT ' + accessToken,
        };
      }
    }
    // refreshToken = await AsyncStorage.getItem('refreshToken');
  } catch (err) {
    // console.log('ERROR:', err);
    // ignore
    accessToken = '';
  }
  return {
    ...(_headers || {}),
    ...(headers || {}),
  };
};

export default HttpClient;
