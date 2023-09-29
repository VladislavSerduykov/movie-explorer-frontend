import "./MovieGallery.css";
import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

function MovieGallery({ movies, isSaved, saveMovie, removeMovie }) {
  const settings = [
    { width: 1280, moviesPerPage: 16, addMovies: 4 },
    { width: 990, moviesPerPage: 9, addMovies: 3 },
    { width: 768, moviesPerPage: 8, addMovies: 2 },
    { width: 320, moviesPerPage: 5, addMovies: 2 },
  ];
  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);
  const [moviesPerPage, setMoviesPerPage] = useState(0);
  const [addMovies, setAddMovies] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const resizeListener = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => {
        setWindowDimensions(window.innerWidth);
      }, 500);
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    const currentSetting =
      settings.find((setting) => windowDimensions >= setting.width) ||
      settings[0];
    setMoviesPerPage(currentSetting.moviesPerPage);
    setAddMovies(currentSetting.addMovies);
  }, [windowDimensions, settings]);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const currentMovies = movies.slice(0, indexOfLastMovie);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + addMovies / moviesPerPage);
  };

  const isLoadMoreButtonDisabled = currentMovies.length === movies.length;

  return (
    <section className="gallery">
      <ul className="gallery__items">
      {currentMovies.map((movie) => (
        <li className="gallery__item" key={movie._id || movie.id}
        >
        <MovieCard
          movie={movie}
          isSaved={isSaved(movie)}
          saveMovie={saveMovie}
          removeMovie={removeMovie}
        />
        </li>
      ))}
      </ul>
      {!isLoadMoreButtonDisabled && (
        <button
          className="gallery__button"
          type="button"
          onClick={handleLoadMore}
        >
          Еще
        </button>
      )}
    </section>
  );
}

export default MovieGallery;
