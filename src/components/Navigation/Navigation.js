import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation({isMainPage}){ 
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link to='/movies' className='navigation__link'>Фильмы</Link>
                </li>
                <li className="navigation__item">
                    <Link to='/saved-movies' className='navigation__link'>Сохраненные фильмы</Link>
                </li>
                <li className={`navigation__item navigation__item${isMainPage ? '' : '_film'}`}>
                    <Link to='/profile' className='navigation__link'>Аккаунт</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;