import './Me.css'

function Me() {
    return (
        <>
            <div className='me__container'>
                <div className='me__info'>
                <h3 className='me__info_text me__info_text_title'>Владислав</h3>
                <h4 className='me__info_text me__info_text_title_secondary'>Фронтенд-разработчик, 28 лет</h4>
                <p className='me__info_text me__info_text_title_paragraph'> 
                Я живу в Новороссийске. У меня есть любимая девушка и кошка. Я люблю слушать музыку, а ещё увлекаюсь бегом. Кодить начал недавно.
 С 2015 года работал и продолжаю работать частным предпринимателем. После того, как прошёл курс 
по веб-разработке, начал заниматься фриланс-заказами.
                </p>
                <a href="https://github.com/VladislavSerduykov" target='blank' rel='noreferrer' className='me__info_text me__info_text_link'>GitHub</a>
                </div>
                <img src="https://phonoteka.org/uploads/posts/2022-06/1655380377_51-phonoteka-org-p-raian-gosling-oboi-65.jpg" alt="Фотография" className='me__image'/>
            </div>
            </>
    );
}

export default Me;