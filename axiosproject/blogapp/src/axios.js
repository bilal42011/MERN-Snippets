import axios from "axios";

const instance=axios.create({
    baseURL:"https://burger-builder-app-9d723-default-rtdb.firebaseio.com/"
});
instance.defaults.headers["authorization"]="hello authorization";

instance.interceptors.request.use(request=>{
    console.log(request.headers["authorization"]);
    return request;
},error=>{console.log("inside instance request interceptor catch");});

instance.interceptors.response.use(response=>{
    console.log(response);
let data=response.data;
return data;
},error=>{console.log("inside instance response interceptor catch");
return Promise.reject(error);});

export default instance;