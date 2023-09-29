import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainApi from "../utils/MainApi";

import AuthApi from '../utils/AuthApi';
import Preloader from "../components/Preloader/Preloader";


export const CurrentUserContext = React.createContext(null);

const CurrentUserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const [loggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setErrMsg(null);
  }, [navigate])

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.getUser(jwt)
        .then((data) => {
          setUser(data);
          setIsLoggedIn(true)
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          navigate("/signin");
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  function handleSignOut() {
    setUser(null);
    setErrMsg(null);
    setIsLoggedIn(false)
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchTerm');
    localStorage.removeItem('isChecked');
    localStorage.removeItem('movies');
    navigate("/");
  }

  const handleSignUp = useCallback(
    async (data) => {
      try {
        setErrMsg(null);
        await AuthApi.signUp(data);
        const { token } = await AuthApi.signIn({
          email: data.email,
          password: data.password
        });
        localStorage.setItem("jwt", token);
        setUser(data);
        setIsLoggedIn(true)
        setErrMsg(null);
        navigate("/movies");
      } catch (err) {
        throw err;
      }
    },
    [navigate]
  );

  const handleSignIn = useCallback(
    async (data) => {
      setErrMsg(null);
      try {
        const { token } = await AuthApi.signIn(data);
        localStorage.setItem("jwt", token);
        return MainApi.getUser(token)
          .then((userData) => {
            setUser(userData);
            setIsLoggedIn(true)
            setErrMsg(null);
            navigate("/movies");
          });
      } catch (err) {
        throw err;
      }
    },
    [navigate]
  );

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setIsLoggedIn,
        errMsg,
        setErrMsg,
        handleSignOut,
        handleSignUp,
        handleSignIn,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
