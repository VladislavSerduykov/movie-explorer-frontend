import './SavedMovies.css'
import MovieGallery from "../MovieGallery/MovieGallery";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(){
    return (<section className="saved-movies">
        <SearchForm/>
        <MovieGallery/>
        </section>
    )
}

export default SavedMovies;