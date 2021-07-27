import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import deviceStorage from './DeviceStorage';
import Toast from 'react-native-toast-message';
import {navigate} from '../../RootNavigation';



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
      config.headers.Authorization = `'JWT' ${token}`
      console.log(config.headers.Authorization, 'Auth headers');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);


//Add a response interceptor

apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error.response.data,"ERROR MSG")
    const originalRequest = error.config
    console.log(originalRequest, "ORIGINAL")

    
  //send refresh token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = await AsyncStorage.getItem('refreshToken');

      const email = await AsyncStorage.getItem('email');

           return axios.post('http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/auth/refresh',
          {
              "refreshToken": refreshToken,
              "email":"th325109@ohio.edu"
          })
          .then( async res => {
            //save new tokens
            deviceStorage.saveItem('token', res.data.accessToken)
            deviceStorage.saveItem('refreshToken', res.data.refreshToken)            
            
              if (res.status === 200) {
                  //set headers
                  const token = await AsyncStorage.getItem('token');
                  originalRequest.headers.Authorization = `'JWT' ${token}`
                  console.log(token,"NEW headers")

                   return apiInstance(originalRequest)
              }
              // return apiInstance(originalRequest)

          })
          .catch((error) => {
            console.log(error, 'Refresh token must be invalid');
            navigate('LoggingOut');

            Toast.show({
              type: 'errorSignUp',
              text1: 'Session has expired',
              text2: 'Please Login Again',
            });
          });         
    }
    return Promise.reject(error)
  }
)

export default apiInstance;
