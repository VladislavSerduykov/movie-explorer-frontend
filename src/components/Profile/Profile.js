import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import MainApi from "../../utils/MainApi";
import FormValidation from "../../hooks/formValidation";

function Profile() {
  const { user, setUser, handleSignOut, errMsg, setErrMsg } =
    useContext(CurrentUserContext);

  const [isEditing, setIsEditing] = useState(false);

  const { values, handleChange, errors, isValid, resetForm } = FormValidation({
    email: user.name,
    password: user.email,
  });

  useEffect(() => {
    if (user) {
      resetForm(
        {
          name: user.name,
          email: user.email,
        },
        {},
        false
      );
    }
  }, [user, resetForm]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!values.name || !values.email) {
        setErrMsg("Вы пропустили поля");
        return;
      }
      MainApi
        .updateUser(values)
        .then((data) => {
          setUser({ name: data.name, email: data.email });
          setIsEditing(false);
          resetForm();
        })
        .catch((err) => {
          setErrMsg(err.message);
        });
    },
    [setUser, setErrMsg, values, resetForm]
  );
  console.log(errMsg)

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {user.name}!</h2>
      <form
        id="profile__form"
        onSubmit={handleSubmit}
        className="profile__info"
      >
        <p className="profile__text">Имя</p>
        <div className="profile__area">
          <input
            name="name"
            className="profile__text"
            value={values.name || ""}
            onChange={handleChange}
            required
            disabled={!isEditing}
          />
          <p className="profile__input-error">{errors.name}</p>
        </div>
      </form>
      <form className="profile__info">
        <p className="profile__text">E-mail</p>
        <div className="profile__area">
          <input
            name="email"
            className="profile__text"
            value={values.email}
            onChange={handleChange}
            required
            disabled={!isEditing}
          />
          <p className="profile__input-error">{errors.email}</p>
        </div>
      </form>
      <div className="profile__links">
        {isEditing ? (
          <>
            <span className="profile__error">{errMsg}</span>
            <button
              disabled={
                !isValid ||
                (values.name === user.name && values.email === user.email)
              }
              type="submit"
              className="profile__link"
              form="profile__form"
            >
              Сохранить
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            type="button"
            className="profile__link"
          >
            Редактировать
          </button>
        )}

        <Link
          to='/'
          onClick={handleSignOut}
          className="profile__link profile__link_red"
        >
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
