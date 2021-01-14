import axios from 'axios'

axios.defaults.baseURL = 'http://10.0.2.2:9000'
axios.defaults.headers.common['Authorization'] = 'authToken'
axios.defaults.headers.post['Content-Type'] = 'application/json'

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
