import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Header({ children,isMainPage }) {
  return (
    <header className={`header ${isMainPage ? 'header_type_auth' : ''}`}>
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
      {children}
    </header>
  );
}

export default Header;
