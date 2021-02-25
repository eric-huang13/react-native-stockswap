import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// axios.defaults.baseURL = 'http://10.0.2.2:9000'
// axios.defaults.headers.common['Authorization'] = 'authToken'
// axios.defaults.headers.post['Content-Type'] = 'application/json'

// For logging data

// axios.interceptors.request.use(request => {
//     console.log(request);
//     return request;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });

// axios.interceptors.response.use(response => {
//     console.log(response.data);
//     return response;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// });

const apiInstance = axios.create();

apiInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    console.log(token, 'token in axios config');
    if (token) {
      config.headers.Authorization = token;
      console.log(config.headers.Authorization, 'Auth headers');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default apiInstance;
