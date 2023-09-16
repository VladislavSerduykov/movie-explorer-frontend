import React, { useState, useEffect } from 'react';
import { Route, useNavigate , useLocation, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Header from '../Header/Header';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);


  const { pathname } = useLocation();
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
      <Route path='/' element={<Main/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/movies' element={<Movies/>}/>

      </Routes>
    </>
 );
}

export default App;
