import React, { useContext } from "react";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import FormValidation from "../../hooks/formValidation";

function Login() {
  const { errMsg, handleSignIn, setErrMsg } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = FormValidation({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(values)
      .then(() => {
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        setErrMsg(err.message);
      });
  };

  return (
    <Form
      title={"Добро пожаловать"}
      buttonText={"Войти"}
      text={"Еще не зарегистрированы"}
      link={"/signup"}
      linkText={"Регистрация"}
      error={errMsg}
      handleSubmit={handleSubmit}
      disabled={!isValid}
    >
      <FormInput
        name="email"
        title="E-mail"
        type="email"
        placeholder="E-mail"
        required={true}
        value={values.email}
        error={errors.email}
        onChange={handleChange}
      />
      <FormInput
        name="password"
        title="Пароль"
        type="password"
        placeholder="Пароль"
        required={true}
        minLength="8"
        maxLength="40"
        value={values.password}
        error={errors.password}
        onChange={handleChange}
      />
    </Form>
  );
}

export default Login;
