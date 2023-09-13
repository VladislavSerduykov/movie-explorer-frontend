import React from "react";
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import logo from '../../images/logo.svg'

function Login({ handleInfoMessage, onLogin }) {
  const defaultInputs = {
    email: "",
    password: "",
  };

  const [inputs, setInputs] = React.useState(defaultInputs);

  const navigate = useNavigate();

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setInputs((state) => ({ ...state, [name]: value }));
  }

//   function handleSubmit(e) {
//     e.preventDefault();

//     auth
//       .authorize(inputs)
//       .then((res) => {
//         if (res.token) {
//           localStorage.setItem('token', res.token);
//           api.setToken(res.token);
//         }
//         resetForm();
//         onLogin();
//         navigate("/");
//       })
//       .catch((err) => {
//         const text = err.message || "Что-то пошло не так! Попробуйте еще раз.";
//         handleInfoMessage({
//           text: text,
//           isSuccess: false,
//         });
//       });
//   }

//   function resetForm() {
//     setInputs({ ...defaultInputs });
//   }

  return (
    <>
    <main className="login">
        <div className="login__container">
                <img src={logo} alt="Логотип" className="login__logo" />
                <h2 className="login__title">Рады видеть!</h2>
                <form className="login__form">
                    <input type="email" name="email" placeholder="E-mail" required className="login__input" />
                    <input type="password" name="password" placeholder="Пароль" required className="login__input" />
                    <button className="login__button" type="submit">Войти</button>
                </form>
        </div>
    </main>
    </>
  );
}

export default Login;