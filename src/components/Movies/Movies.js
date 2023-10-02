import React, { useContext, useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MovieGallery from "../MovieGallery/MovieGallery";
import { MovieContext } from "../../contexts/MovieContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import MoviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import { filterMovies } from "../../utils/movieFilter";

function Movies() {
  const { savedMovies, saveMovie, removeMovie } = useContext(MovieContext);
  const { user } = useContext(CurrentUserContext);

  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(null);
  const [formError, setFormError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const savedSearch = localStorage.getItem("searchTerm");
    const savedCheckbox = JSON.parse(localStorage.getItem("isChecked"));
    if (savedSearch || savedCheckbox) {
      setSearchTerm(savedSearch);
      setIsChecked(savedCheckbox);
      fetchMovies(savedSearch, savedCheckbox);
    }
  }, [user]);

  const fetchMovies = async (searchTerm = "", isChecked = false) => {
    if (!user) {
      return;
    }

    setIsLoading(true);
    setRequestError(null);

    try {
      let data;

      const initialMovies = JSON.parse(localStorage.getItem("movies"));

      if (!initialMovies) {
        data = await MoviesApi.getMovies();
        localStorage.setItem("movies", JSON.stringify(data));
      } else {
        data = initialMovies;
      }

      const filteredMovies = filterMovies(data, searchTerm, isChecked);
      setFetchedMovies(filteredMovies);
      localStorage.setItem("searchTerm", searchTerm);
      localStorage.setItem("isChecked", JSON.stringify(isChecked));
      setHasSearched(true);
    } catch (error) {
      setRequestError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const isSaved = (movie) =>
  savedMovies.some((savedMovie) => savedMovie._id === movie._id);



  return (
    <section className="movies">
      <SearchForm
        onError={setFormError}
        onSubmit={async (term, checked) => fetchMovies(term, checked)}
        searchTerm={searchTerm}
        isChecked={isChecked}
      />
      {isLoading ? (
        <Preloader />
      ) : requestError ? (
        <p style={{ color: "#fff", justifySelf: "center" }}>
          При выполнении запроса произошла ошибка. Возможно, возникла проблема с
          подключением, или сервер может быть недоступен. Пожалуйста, подождите
          немного и повторите попытку
        </p>
      ) : formError ? (
        <p style={{ color: "#fff", justifySelf: "center" }}>{formError}</p>
      ) : hasSearched && fetchedMovies.length === 0 ? (
        <p style={{ color: "#fff", justifySelf: "center" }}>
          Ничего не найдено
        </p>
      ) : (
        <MovieGallery
          movies={fetchedMovies}
          isSaved={isSaved}
          saveMovie={saveMovie}
          removeMovie={removeMovie}
        />
      )}
    </section>
  );
}

export default Movies;
