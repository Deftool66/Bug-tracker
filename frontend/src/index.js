import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore,combineReducers } from '@reduxjs/toolkit';

//Reducers
import authReducer from './Controllers/Redux/authSlice';
import bugReducer from './Controllers/Redux/bugSlice';
import userReducer from './Controllers/Redux/userSlice';

//Reduce configure
const reducer = combineReducers({
  auth: authReducer,
  bug: bugReducer,
  user: userReducer
});
const store = configureStore({reducer});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
      </Provider>
);
