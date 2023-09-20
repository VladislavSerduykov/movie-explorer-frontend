import './HeaderAuth.css'
import { Link } from "react-router-dom"

function HeaderAuth() {

  return (
    <nav className='header__auth'>
      <ul className="header__list">
        <li className="header__list-item">
          <Link to='/signup' className='header__auth-link header__auth-link_type_signup'>Регистрация</Link>
        </li>
        <li className="header__list-item">
          <Link to='/signin' className='header__auth-link header__auth-link_type_signin'>Войти</Link>
        </li>
      </ul>
    </nav>
 );
}

export default HeaderAuth;
