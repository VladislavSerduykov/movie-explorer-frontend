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
  const [currentUser, setCurrentUser] = useState({})

  const headerPaths = ['/', '/signin', '/signup', '/movies', '/saved-movies', '/profile'];

  const { pathname } = useLocation();
  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      {headerPaths.includes(pathname) && (loggedIn ? <HeaderAuth isMainPage={pathname} /> : <Header isLoggedIn={loggedIn} />)}
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
