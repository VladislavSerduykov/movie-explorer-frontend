import './HeaderAuth.css'
import { Link } from "react-router-dom"
import logo from '../../images/logo.svg'
import profileLogo from '../../images/profile.svg'
import moviesLogo from '../../images/profileFilm.svg'

function HeaderAuth({ isMainPage }) {

  return (
    <header className={`header__auth ${isMainPage === '/' ? 'header__auth-main' : ''}`}>
      <div className='header__auth-nav'>
        <Link to = '/'><img src={logo} alt="logo" className="header__auth-logo" /></Link>
        <Link to='/movies' className='header__auth-link'>Фильмы</Link>
        <Link to='/savedMovies' className='header__auth-link'>Сохраненные фильмы</Link>
      </div>
      <div className='header__auth-profile'>
          <Link to='/profile' className='header__auth-link'>Аккаунт</Link>
          <img src={isMainPage === '/' ? profileLogo : moviesLogo} alt="" />
      </div>
    </header>
 );
}

export default HeaderAuth;
