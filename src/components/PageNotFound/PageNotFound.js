import './PageNotFound.css'
import { Link } from 'react-router-dom';

function PageNotFound(){
     const lastPage = () => {
        window.history.back()
    }

    return (
        <section className='page-404'>
            <h2 className="page-404__title">404</h2>
            <p className="page-404__text">Страница не найдена</p>
            <Link onClick={lastPage} className='page-404__link'>Назад</Link>
        </section>
    )
}

export default PageNotFound;