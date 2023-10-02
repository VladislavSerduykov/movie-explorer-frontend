import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";

function SearchForm({
  onSubmit,
  searchTerm,
  isChecked,
  onError,
  isOnSavedMoviesPage,
}) {
  const [input, setInput] = useState(searchTerm || "");
  const [checkbox, setCheckbox] = useState(isChecked || false);

  useEffect(() => {
    setInput(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    setCheckbox(isChecked);
  }, [isChecked]);

  const handleCheckboxChange = () => {
    const newCheckboxState = !checkbox;
    setCheckbox(newCheckboxState);
    onSubmit(input, newCheckboxState);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input && !isOnSavedMoviesPage) {
      onError("Нужно ввести ключевое слово");
    } else {
      onError(null);
      onSubmit(input, checkbox);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="search__form">
      <div className="search">
        <div className="search__inputs">
          <input
            className="search__item"
            placeholder="Фильм"
            value={input}
            onChange={handleInputChange}
            required
          />
          <button className="search__button-find">Найти</button>
        </div>
      </div>
      <div className="search__container">
        <Checkbox checked={checkbox} onChange={handleCheckboxChange} />
        <p className="search__text">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
