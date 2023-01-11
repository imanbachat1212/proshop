import React from 'react';
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client'
import store from './store';
import './bootstrap.min.css'
import './index.css';
import App from './App';
// import * as serviceworker from './serviceworker';


const rootElement = document.getElementById("root");


const root = createRoot(rootElement);

root.render(
  <Provider store={store} >
    <App />
  </Provider>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// serviceworker.unregister()