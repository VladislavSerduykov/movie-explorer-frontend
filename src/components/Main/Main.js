import Promo from "../Promo/Promo";
import About from "../About/About";
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";

function Main({isLoggedIn}) {
  const {pathname} = useLocation();

  return (
    <>
    <Header isMainPage={true}>
      {isLoggedIn ? <Navigation isMainPage={pathname}/> : <HeaderAuth/>}
    </Header>
    <main>
      <Promo />
      <About/>
    </main>
      <Footer/>
    </>
  );
}

export default Main;
