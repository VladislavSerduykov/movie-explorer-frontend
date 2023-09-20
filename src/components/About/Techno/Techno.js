import './Techno.css'


function Techno() {
    return (
        <>
            <div className='techno__container'>
                <h3 className='techno__container-title'>7 Технологий</h3>
                <p className='techno__container-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>

            <ul className='techno__items'>
                <li className='techno__item'>HTML</li>
                <li className='techno__item'>CSS</li>
                <li className='techno__item'>JS</li>
                <li className='techno__item'>React</li>
                <li className='techno__item'>Git</li>
                <li className='techno__item'>Express.js</li>
                <li className='techno__item'>MongoDB</li>
            </ul>
        </>
    );
}

export default Techno;