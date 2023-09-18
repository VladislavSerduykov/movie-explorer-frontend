import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
      {isLoggedIn ? (
        <button type="button" className="header__burger" />
      ) : (
        <div className="header__nav">
          <Link to="/signup" style={{ alignSelf: "center" }}>
            <button className="header__button header__button_signup">
              Регистрация
            </button>
          </Link>
          <Link to="/signin">
            <button className="header__button header__button_signin">
              Войти
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
