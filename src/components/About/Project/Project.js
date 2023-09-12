import './Project.css'

function Project() {
    return (
        <>
            <ul className='project__container'>
                <li className='project__element'>
                    <p className='project__element-title'>Дипломный проект включал 5 этапов</p>
                    <p className='project__element-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                
                <li className='project__element'>
                    <p className='project__element-title'>На выполнение диплома ушло 5 недель</p>
                    <p className='project__element-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>

            <ul className='project__container'>
                <li className='project__graphic'>
                    <h3 className='project__graphic-title'>1 неделя</h3>
                    <p className='project__graphic-text'>Back-end</p>
                </li>

                <li className='project__graphic '>
                    <h3 className='project__graphic-title project__graphic-title_type_dark'>4 недели</h3>
                    <p className='project__graphic-text'>Front-end</p>
                </li>
            </ul>
        </>
    );
}

export default Project;