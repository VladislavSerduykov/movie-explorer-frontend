import Promo from "../Promo/Promo";
import About from "../About/About";
import Footer from '../Footer/Footer';
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import Header from "../Header/Header";

function Main({loggedIn, pathname}) {
  return (
    <>
      <Promo />
      <About/>
      <Footer/>
    </>
  );
}

export default Main;
