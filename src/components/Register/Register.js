import "../Form/Form.css";
import Form from "../Form/Form";
import FormInput from "../FormInput/FormInput";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import FormValidation from "../../hooks/formValidation";

function Register() {
  const { errMsg, handleSignUp, setErrMsg } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = FormValidation({
    email: "",
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(values)
      .then(() => resetForm())
      .catch((err) => {
        console.log(err);
        setErrMsg(err.message);
      });
  };

  return (
    <Form
      title={"Добро пожаловать"}
      buttonText={"Регистрация"}
      text={"Уже зарегистрированы?"}
      link={"/signin"}
      linkText={"Войти"}
      error={errMsg}
      handleSubmit={handleSubmit}
      disabled={!isValid}
    >
      <FormInput
        name="name"
        title="Имя"
        type="text"
        placeholder="Ваше имя"
        required={true}
        minLength="8"
        maxLength="40"
        value={values.name}
        error={errors.name}
        onChange={handleChange}
      />
      <FormInput 
              name="email"
              title="E-mail"
              type="email"
              placeholder="E-mail"
              required={true}
              value={values.email}
              error={errors.email}
              onChange={handleChange}/>
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
              onChange={handleChange}/>
    </Form>
  );
}

export default Register;
