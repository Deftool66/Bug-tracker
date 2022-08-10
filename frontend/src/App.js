import React from 'react';
//import './App.css';
import {useSelector} from 'react-redux';
import Login from './Views/Login/login';
/* import authSlice from './Controllers/Redux/authSlice'; */


function App() {
  const {auth} = useSelector(state => state);
  console.log(auth);

  return (
    <>
      {auth.LoggedIn? <h1>Hello</h1> : <Login /> }
    </>
);
}

export default App;
