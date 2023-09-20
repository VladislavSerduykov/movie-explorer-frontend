import './Portfolio.css'

function Portfolio() {
    return (
        <>
            <ul className='portfolio__items'>
                <li className='portfolio__item'>
                    <a href="https://github.com/VladislavSerduykov/how-to-learn" className="portfolio__link" target='blank' rel="noreferrer">Статичный сайт</a>
                </li>
                <li className='portfolio__item'>
                    <a href="https://github.com/VladislavSerduykov/russian-travel" className='portfolio__link' target='blank' rel="noreferrer">Адаптивный сайт</a>
                </li>
                <li className='portfolio__item'>
                    <a href="https://github.com/VladislavSerduykov/react-mesto-api-full-gha" className='portfolio__link' target='blank' rel="noreferrer">Одностраничное приложение</a>
                </li>
            </ul>
        </>
    )
}

export default Portfolio;