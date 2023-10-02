export function filterMovies(movies, searchTerm, isShort) {
  return movies.filter((movie) => {
    if (movie.nameRU) {
      return (
        movie.nameRU.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (isShort ? movie.duration <= 40 : true)
      );
    }
    return false;
  });
}

