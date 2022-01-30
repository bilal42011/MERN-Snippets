import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./reduxstate";
const store=configureStore({reducer});

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
,
  document.getElementById('root')
);

