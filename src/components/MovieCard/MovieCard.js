import React, { useCallback, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MovieCard.css";
import { MovieContext } from "../../contexts/MovieContext";

function MovieCard({ movie, saveMovie, removeMovie }) {
  const { pathname } = useLocation();
  const { savedMovies } = useContext(MovieContext);

  const [isSaved, setIsSaved] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [foundMovie, setFoundMovie] = useState(null);

  useEffect(() => {
    const found = savedMovies.find(
      (savedMovie) => savedMovie.movieId === movie.movieId
    );
    setFoundMovie(found);
    setIsSaved(!!found);
  }, [movie._id, savedMovies]);

  useEffect(() => {
    if (typeof movie.image === "object") {
      setImageUrl(`https://api.nomoreparties.co/${movie.image.url}`);
    } else if (typeof movie.image === "string") {
      setImageUrl(movie.image);
    }
  }, [movie.image]);

  const handleMovieBtnClick = useCallback(async () => {
    if (pathname === "/movies") {
      if (!isSaved) {
        saveMovie(movie);
      } else {
        if (foundMovie && foundMovie._id) {
          removeMovie(foundMovie._id);
        }
      }
    } else if (pathname === "/saved-movies") {
      if (movie._id) {
        removeMovie(movie._id);
      }
    }
  }, [isSaved, movie, pathname, foundMovie, saveMovie, removeMovie]);
  return (
    <article className="movie-card">
      <a href={movie.trailerLink} target="blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={movie.nameRU} className="movie-card__cover" />
      </a>
      <div className="movie-card__container">
        <h3 className="movie-card__title">{movie.nameRU}</h3>

        <button
          type="button"
          onClick={handleMovieBtnClick}
          className={`movie-card__like ${
            pathname === "/movies"
              ? `movie-card__like_unactive ${
                  isSaved ? "movie-card__like_active" : ""
                }`
              : "movie-card__like_delete"
          }`}
        ></button>
      </div>
      <p className="movie-card__duration">
        {movie.duration > 59 ? `${Math.floor(movie.duration / 60)} ч ` : null}{" "}
        {movie.duration > 59
          ? `${movie.duration - Math.floor(movie.duration / 60) * 60} м`
          : `${movie.duration} м`}
      </p>
    </article>
  );
}

export default MovieCard;
