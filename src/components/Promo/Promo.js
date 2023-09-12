import './Promo.css'
import promo from '../../images/promo.svg'

function Promo() {
    return (
        <div className="promo">
            <h1 className='promo__text'>Учебный проект студента факультета Веб-разработки</h1>
            <img src={promo} alt="Картинка с промо" className='promo__img'/>
        </div>
    );
}

export default Promo;