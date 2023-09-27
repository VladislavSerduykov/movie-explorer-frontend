import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import CurrentUserProvider from "../../contexts/CurrentUserContext";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { MoviesProvider } from "../../contexts/MovieContext";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <CurrentUserProvider>
        <MoviesProvider>
          {pathname === "/" ||
          pathname === "/movies" ||
          pathname === "/saved-movies" ||
          pathname === "/profile" ? (
            <Header />
          ) : (
            ""
          )}
          <Routes>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />

            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={<ProtectedRoute element={Movies} />}
            />
            <Route
              path="/saved-movies"
              element={<ProtectedRoute element={SavedMovies} />}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute element={Profile} />}
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>

          {pathname === "/profile" ? "" : <Footer />}
        </MoviesProvider>
      </CurrentUserProvider>
    </>
  );
}

export default App;
