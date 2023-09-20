import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search__form">
      <div className="search">
        <div className="search__inputs">
          <input type="text" className="search__item" placeholder="Фильм" required />
          <button className="search__button-find" type="submit">
            Найти
          </button>
        </div>
      </div>
      <div className="search__container">
          <label class="search__toggle-button">
            <input type="checkbox" class="search__input-hidden" />
            <span class="search__slider"></span>
          </label>
          <p className="search__text">Короткометражки</p>
        </div>
    </form>
  );
}

export default SearchForm;
