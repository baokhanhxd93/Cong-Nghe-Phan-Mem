import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
//import antd css
import 'antd/dist/antd.css';

import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/rootReducer';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
