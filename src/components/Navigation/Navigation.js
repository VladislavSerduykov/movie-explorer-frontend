import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isMainPage }) {
    const [isOpen, setIsOpen] = React.useState(true);

    function handleOpenMenu(){
        setIsOpen(!isOpen)
    }

  return (
    <>
      <nav className="navigation">
        <button className="navigation__button" onClick={handleOpenMenu}></button>
        <div className={`nav__burger-container nav__burger-container${!isOpen ? '_active' : ''}`}>
          <div className="nav__burger">
            <button className="nav__burger-close" onClick={handleOpenMenu}></button>
            <ul className="nav__burger-list">
              <li className="nav__burger-item">
                <Link to="/" className="navigation__link navigation__link_type_burger">
                  Главная
                </Link>
              </li>
              <li className="nav__burger-item">
                <Link to="/movies" className="navigation__link navigation__link_type_burger">
                  Фильмы
                </Link>
              </li>
              <li className="nav__burger-item">
                <Link to="/saved-movies" className="navigation__link navigation__link_type_burger">
                  Сохраненные фильмы
                </Link>
              </li>
              <li className={`nav__burger-item nav__burger-item${isMainPage ? "" : "_film"}`}>
                <Link to="/profile" className="navigation__link navigation__link_type_burger">
                  Аккаунт
                </Link>
              </li>
            </ul>
                
          </div>
        </div>

        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/movies" className="navigation__link">
              Фильмы
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/saved-movies" className="navigation__link">
              Сохраненные фильмы
            </Link>
          </li>
          <li
            className={`navigation__item navigation__item${
              isMainPage ? "" : "_film"
            }`}
          >
            <Link to="/profile" className="navigation__link">
              Аккаунт
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
