import './Form.css'
import { Link } from "react-router-dom"
import logo from '../../images/logo.svg'

function Form(props) {
const {title, children, buttonText, text, path, link} = props;

return (
    <section className='form'>
        <div className="form__container">
            <Link to='/' className='form__logo'>
                <img src={logo} alt="Логотип" className='form__logo' />
            </Link>
            <h2 className="form__title">{title}</h2>
            <form className="form__inputs">
                <div className="form__items">{children}</div>
                <button type='submit' className='form__button' disabled>
                    {buttonText}
                </button>
            </form>
            <p className="form__text">
                {text}
                <Link to={path} className='form__link'>
                    {link}
                </Link>
            </p>
        </div>
    </section>
)
}

export default Form;