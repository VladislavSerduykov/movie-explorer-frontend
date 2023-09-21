import React, { useState, useEffect } from 'react';
import { Route, useLocation, Routes, useNavigate } from 'react-router-dom';
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
import api from '../../utils/api';
import auth from '../../utils/auth';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({})
  const [moviesList, setMoviesList] = useState([])

  const navigate = useNavigate();

  //Авторизация 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      auth
        .checkToken(token)
        .then(() => {
          api.setToken(token);
          setIsLoggedIn(true);
          navigate("/");
        })
        .catch(console.error)
    }
  },[navigate]);

  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
    <Routes>
      <Route path='/' element={<Main isLoggedIn={isLoggedIn}/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/movies' element={<Movies isLoggedIn={isLoggedIn}/>}/>
      <Route path='/saved-movies' element={<SavedMovies isLoggedIn={isLoggedIn}/>}/>
      <Route path='/profile' element={<Profile isLoggedIn={isLoggedIn}/>}/>
      <Route path='*' element={<PageNotFound/>}/>

      </Routes>
      </CurrentUserContext.Provider>
    </>
 );
}

export default App;
