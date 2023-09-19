import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MovieGallery from '../MovieGallery/MovieGallery';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function Movies() {
    return (
        <>
        <Header isMainPage={false}>
            <Navigation isMainPage={false}/>
        </Header>
        <section className="movies">
        <SearchForm />
        <MovieGallery/>
        </section>
    </>
    )
}

export default Movies;