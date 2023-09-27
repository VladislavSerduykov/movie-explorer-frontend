import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import api from "../utils/api";

export const MovieContext = React.createContext([]);

export const MoviesProvider = ({ children }) => {
  const { user } = useContext(CurrentUserContext);
  const [savedMovies, setSavedMovies] = useState([]);

  const saveMovie = async (movie) => {
    if (!user) {
      return;
    }

    try {
      const data = await api.addMovie(movie);
      setSavedMovies((prevSavedMovie) => [...prevSavedMovie, data]);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const removeMovie = async (id) => {
    if (!user) {
      return;
    }

    try {
      await api.deleteMovie(id);
      setSavedMovies((prevSavedMovie) =>
        prevSavedMovie.filter((movie) => movie._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchSavedMovies = async () => {
      if (!user) {
        return;
      }
      try {
        const movies = await api.getMovies();
        setSavedMovies(movies);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedMovies();
  }, [user]);

  return (
    <MovieContext.Provider
      value={{ savedMovies, setSavedMovies, saveMovie, removeMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};
