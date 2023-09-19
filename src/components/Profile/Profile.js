import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

function Profile({ name, email,isLoggedIn }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <Header isMainPage={false}>
        {isLoggedIn ? <Navigation isMainPage={false} /> : <HeaderAuth />}
      </Header>
      <section className="profile">
        <h2 className="profile__title">Привет, {name || "Владислав"}!</h2>
        <form className="profile__info">
          <p className="profile__text">Имя</p>
          <div className="profile__area">
            {isEditing ? (
              <input
                className="profile__text"
                defaultValue="Владислав"
                value={name}
                required
              />
            ) : (
              <p className="profile__text">{name || "Владислав"}</p>
            )}
          </div>
        </form>
        <form className="profile__info">
          <p className="profile__text">E-mail</p>
          <div className="profile__area">
            {isEditing ? (
              <input
                className="profile__text"
                defaultValue="Владислав"
                required
              />
            ) : (
              <p className="profile__text">
                {email || "vladis.serd@gmail.com"}
              </p>
            )}
          </div>
        </form>
        <div className="profile__links">
          <button type="button" className="profile__link">
            {!isEditing ? "Редактировать" : "Сохранить"}
          </button>
          <Link to="/signin" className="profile__link profile__link_red">
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </>
  );
}

export default Profile;
