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
  
  

  

//  const axiosWithAuth = async () => {
//   try{
//     const token = await AsyncStorage.getItem('token') 
//     console.log(token,"token console log") 
//     return axios.create({
//       headers: {
//         Authorization: token,
//       },
//     })
//   }catch (error) {
//     console.log('error')
//     // error reading value
//   }
//   }
  
  export default axiosWithAuth