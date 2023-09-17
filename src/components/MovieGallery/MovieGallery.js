import './MovieGallery.css'
import MovieCard from '../MovieCard/MovieCard';

function MovieGallery() {
    return (
    <section className='gallery'>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>

    </section>
    )
}

export default MovieGallery;