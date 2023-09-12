import './Header.css'
import { Link, useLocation } from "react-router-dom"
import logo from '../../images/logo.svg'
function Header() {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <Link to = '/'><img src={logo} alt="logo" className="header__logo" /></Link>
    </header>
 );
}

export default Header;
