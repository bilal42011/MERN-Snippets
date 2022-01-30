import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import signupreducer from './ReduxSlices/signupslice';
const app=<BrowserRouter>
<App />
</BrowserRouter>
const store=configureStore({
  reducer:{
    signupdata:signupreducer
  }
});
ReactDOM.render(
  <Provider store={store}>
  {app}
  </Provider>,
  document.getElementById('root')
);

