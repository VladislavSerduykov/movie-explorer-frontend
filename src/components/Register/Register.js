import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import React, { useState } from "react";
import auth from "../../utils/auth";
import validator from "validator";

function Register() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const target = e.target;

    if (name === "email") {
      if (
        validator.isEmail(value)
          ? target.setCustomValidity("Некорректный адрес почты")
          : target.setCustomValidity("")
      );
    }

    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };


  return (
    <Form
      title="Добро пожаловать"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      link="Войти"
      path="/signin "
    >
      <label className="form__item">
        <p className="form__input-text">Имя</p>
        <input
          type="email"
          className="form__input"
          value={inputs.name}
          onChange={handleChange}
          minLength="2"
          maxLength="40"
          required
        />
        <p className="form__input-error">Что-то пошло не так...</p>
      </label>

      <label className="form__item">
        <p className="form__input-text">E-mail</p>
        <input
          type="email"
          className="form__input"
          value={inputs.email}
          onChange={handleChange}
          minLength="8"
          maxLength="40"
          required
        />
        <p className="form__input-error">Что-то пошло не так...</p>
      </label>

      <label className="form__item">
        <p className="form__input-text">Пароль</p>
        <input type="password" required className="form__input" />
        <p className="form__input-error form__input-error_dark">
          Что-то пошло не так...
        </p>
      </label>
    </Form>
  );
}

export default Register;
