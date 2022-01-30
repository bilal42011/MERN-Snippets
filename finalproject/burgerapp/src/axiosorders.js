import axios from "axios";
const axiosorders=axios.create({
    baseURL:"https://burger-builder-app-9d723-default-rtdb.firebaseio.com/"
});
axiosorders.interceptors.request.use(request=>{
    return request;
},error=>{
    console.log(error);
    return Promise.reject(error);
});
axiosorders.interceptors.response.use(response=>{
   console.log(response.data);
    return response.data;
},error=>{
    console.log(error);
    return Promise.reject(error);
});
export default axiosorders;