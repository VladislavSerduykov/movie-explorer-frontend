import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header() {
  const { loggedIn } = useContext(CurrentUserContext);
  const { pathname } = useLocation();

  return (
    <header className={`header ${pathname === "/" ? "header_type_auth" : ""}`}>
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
      {loggedIn ? (
        <Navigation isMainPage={pathname === "/" && true} />
      ) : (
        <HeaderAuth />
      )}
    </header>
  );
}

export default Header;
