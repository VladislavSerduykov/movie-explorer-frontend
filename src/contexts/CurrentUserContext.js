import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import auth from "../utils/auth";
import Preloader from "../components/Preloader/Preloader";

export const CurrentUserContext = React.createContext();

const CurrentUserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [loggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    setErrMsg(null);
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      api
        .getUser(token)
        .then((res) => {
          setUser(res);
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

  const handleSignout = () => {
    setUser(null);
    setErrMsg(null);
    setIsloggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("searchTerm");
    localStorage.removeItem("isChecked");
    localStorage.removeItem("movies");
    navigate("/");
  };

  const handleSignUp = useCallback(
    async (data) => {
      try {
        setErrMsg(null);
        await auth.register(data);
        const { token } = await auth.authorize({
          email: data.email,
          password: data.password,
        });
        localStorage.setItem("jwt", token);
        setUser(data);
        setErrMsg(null);
        setIsloggedIn(true);
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
        const { token } = await auth.authorize(data);
        localStorage.setItem("jwt", token);
        return auth.checkToken(token).then((data) => {
          setUser(data);
          setIsloggedIn(true);
          setErrMsg(null);
          navigate("/");
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
        errMsg,
        loggedIn,
        setErrMsg,
        handleSignIn,
        handleSignUp,
        handleSignout,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
