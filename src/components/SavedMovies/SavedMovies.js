import "./SavedMovies.css";
import MovieGallery from "../MovieGallery/MovieGallery";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import cards from "../../utils/SavedMovies";
import Footer from "../Footer/Footer";

function SavedMovies({ isLoggedIn }) {
  return (
    <>
      <Header isMainPage={false}>
        {isLoggedIn ? <Navigation isMainPage={false}/> : <HeaderAuth/>}
      </Header>
      <section className="saved-movies">
        <SearchForm />
        <MovieGallery cards={cards} buttonMore={true} />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
