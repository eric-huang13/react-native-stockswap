import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import deviceStorage from "./DeviceStorage";
import Toast from "react-native-toast-message";
import { navigate } from "../../RootNavigation";


 
const apiInstance = axios.create();

apiInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    console.log(refreshToken, "refresh token in axios config");
    if (token) {
      config.headers.Authorization = `JWT ${token}`
      console.log(config.headers.Authorization, "Auth headers")
    }
   

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
 
//Add a response interceptor
 
apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error,"ORIGINAL")
 
    const originalRequest = error.config;
    //send refresh token
    if (error.response.status === 401 || error.response.status === 400 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      const email = await AsyncStorage.getItem("email");
      
      return axios
        .post(
          "http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/auth/refresh",
          {
            refreshToken: refreshToken,
            email: email,
          }
        )
        .then(async (res) => {
          //save new tokens
          deviceStorage.saveItem("token", res.data.accessToken);
          deviceStorage.saveItem("refreshToken", res.data.refreshToken);
          originalRequest.headers.Authorization = `JWT ${res.data.accessToken}`;
    
          return apiInstance(originalRequest);
        })
        .catch((error) => {
          console.log(error, "Refresh token must be invalid");
          navigate("LoggingOut");
 
          Toast.show({
            type: "errorSignUp",
            text1: "Session Has Expired",
            text2: "Please Login Again",
          });
        });
    }
    return Promise.reject(error);
  }
);
 
export default apiInstance;
 

