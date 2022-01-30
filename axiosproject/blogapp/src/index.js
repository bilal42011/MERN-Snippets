import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";

axios.defaults.baseURL="https://burger-builder-app-9d723-default-rtdb.firebaseio.com/";
axios.interceptors.request.use(config=>{
  return config;
},error=>{console.log("hello from interceptor");
return Promise.reject(error);});
axios.interceptors.response.use(response=>{
console.log(response.data);
return response.data;
},error=>{console.log("inside interceptor response catch");
return Promise.reject(error);
} );
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
