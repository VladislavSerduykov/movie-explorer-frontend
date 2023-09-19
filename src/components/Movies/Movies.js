import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MovieGallery from '../MovieGallery/MovieGallery';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Footer from '../Footer/Footer';
import cards from '../../utils/Movies'

function Movies({isLoggedIn}) {
    return (
        <>
        <Header isMainPage={false}>
        {isLoggedIn ? <Navigation isMainPage={false}/> : <HeaderAuth/>}
        </Header>
        <section className="movies">
        <SearchForm />
        <MovieGallery cards={cards} buttonMore={true}/>
        </section>
        <Footer/>
    </>
    )
}

export default Movies;