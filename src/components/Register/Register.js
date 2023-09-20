import Form from "../Form/Form";

function Register () {
  return (
  <Form title="Добро пожаловать" buttonText="Зарегистрироваться" text="Уже зарегистрированы?" link="Войти" path='/signin '>
      <label className="form__item">
        <p className="form__input-text">Имя</p>
        <input type="email" required className="form__input"/>
        <p className="form__input-error">Что-то пошло не так...</p>
      </label>
      
      <label className="form__item">
        <p className="form__input-text">E-mail</p>
        <input type="email" required className="form__input"/>
        <p className="form__input-error">Что-то пошло не так...</p>
      </label>

      <label className="form__item">
        <p className="form__input-text">Пароль</p>
        <input type="password" required className="form__input"/>
        <p className="form__input-error form__input-error_dark">Что-то пошло не так...</p>
      </label>
  </Form>
  )
}

export default Register;