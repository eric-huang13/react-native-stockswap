import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

 
const axiosWithAuth =  () => {
 
    const token =  AsyncStorage.getItem('token') 
    console.log(token,"token console log") 
    return axios.create({
      headers: {
        Authorization: token,
      },
    })
  }
  
  export default axiosWithAuth