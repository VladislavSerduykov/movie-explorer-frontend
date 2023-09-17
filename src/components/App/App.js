import React, { useState, useEffect } from 'react';
import { Route, useNavigate , useLocation, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import PageNotFound from '../PageNotFound/PageNotFound';


function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState({})


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
    <CurrentUserContext.Provider value={currentUser}>
      {pathname !== '*' && pathname !== '/signin' && pathname !== '/signup' && (loggedIn ? <HeaderAuth isMainPage={pathname} /> : <Header />)}
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/saved-movies' element={<SavedMovies/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='*' element={<PageNotFound/>}/>

      </Routes>

      </CurrentUserContext.Provider>
    </>
 );
}

export default App;
