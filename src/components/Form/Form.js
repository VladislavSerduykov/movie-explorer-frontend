import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Form({
  handleSubmit,
  title,
  disabled,
  children,
  buttonText,
  link,
  linkText,
  error,
  text,
}) {
  return (
    <section className="form">
      <div className="form__container">
        <Link to="/" className="form__logo">
          <img src={logo} alt="Логотип" className="form__logo" />
        </Link>
        <h2 className="form__title">{title}</h2>
        <form className="form__inputs" onSubmit={handleSubmit}>
          <div className="form__items">
            {children}
            <p className="form__input-error">{error}</p>
            <button type="submit" className="form__button" disabled={disabled}>
              {buttonText}
            </button>
          </div>
        </form>
        <p className="form__text">
          {text}
          <Link to={link} className="form__link">
            {linkText}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Form;
