import React, { useState, useEffect } from 'react';
import { Route, Switch, useNavigate , useLocation, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const {pathname} = useLocation();
  const navigate = useNavigate();

  function openPopup() {
    setIsOpenPopup(true);
  }

  function closePopup() {
    setIsOpenPopup(false);
  }
  return (
    <>
    <Routes>
      <Route 
      path='/'
      element={
        <Main/>
      }/>
      <Route
      path='/signin'
      element={
        <Login/>
      }/>
    </Routes>

    <Footer/>
    </>
 );
}

export default App;
