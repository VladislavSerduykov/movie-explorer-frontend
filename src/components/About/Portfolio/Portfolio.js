import './Portfolio.css'

function Portfolio() {
    return (
        <>
            <ul className='portfolio__items'>
                <li className='portfolio__item'>
                    <p className='portfolio__text'>Статичный сайт</p>
                    <a href="" className="portfolio__link" target='blank'></a>
                </li>
                <li className='portfolio__item'>
                    <p className='portfolio__text'>Адаптивный сайт</p>
                    <a href="" className='portfolio__link' target='blank'></a>
                </li>
                <li className='portfolio__item'>
                    <p className='portfolio__text'>Одностраничное приложение</p>
                    <a href='' className='portfolio__link' target='blank'></a>
                </li>
            </ul>
        </>
    )
}

export default Portfolio;