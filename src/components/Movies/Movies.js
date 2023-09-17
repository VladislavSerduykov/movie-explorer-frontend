import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MovieGallery from '../MovieGallery/MovieGallery';

function Movies() {
    return (
        <section className="movies">
        <SearchForm />
        <MovieGallery/>
        </section>
    )
}

export default Movies;