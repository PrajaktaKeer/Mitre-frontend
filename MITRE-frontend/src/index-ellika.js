/*Index.js rendering ReactDOM*/


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './reducers/index';
import {createBrowserHistory} from 'history';
import {Router} from 'react-router';
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    {/* <Router history={createBrowserHistory} routes={routes}/> */}
  
    <App />
    </Provider>
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
