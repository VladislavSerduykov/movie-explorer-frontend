import "./SavedMovies.css";
import MovieGallery from "../MovieGallery/MovieGallery";
import SearchForm from "../SearchForm/SearchForm";
import { useContext, useMemo, useState } from "react";
import { filterMovies } from "../../utils/movieFilter";
import { MovieContext } from "../../contexts/MovieContext";

function SavedMovies() {
  const { savedMovies, removeMovie } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [formError, setFormError] = useState(null);

  const filteredMovies = useMemo(
    () => filterMovies(savedMovies, searchTerm, isChecked),
    [savedMovies, searchTerm, isChecked]
  );

  function handleSearch(term, isChecked) {
    setSearchTerm(term);
    setIsChecked(isChecked);
  }

  return (
    <>
      <section className="saved-movies">
        <SearchForm
          onError={setFormError}
          onSubmit={handleSearch}
          searchTerm={searchTerm || ""}
          isChecked={isChecked}
          isOnSavedMoviesPage={true}
        />
        {formError && <p>{formError}</p>}
        {filteredMovies.length === 0 && (
          <p style={{ color: "#fff", justifySelf: "center" }}>
            Ничего не найдено
          </p>
        )}
        <MovieGallery
          movies={filteredMovies}
          isSaved={() => true}
          saveMovie={() => {}}
          removeMovie={removeMovie}
        />
      </section>
    </>
  );
}

export default SavedMovies;
