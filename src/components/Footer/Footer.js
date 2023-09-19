import './Footer.css'

function Footer(){
    return(
        <section className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__container">
                <p className="footer__text" style={{marginTop:'30px', color:'#8B8B8B'}}>© 2023 </p>

                <div className="footer__links">
                    <p className="footer__text">Яндекс.Практикум </p>
                    <p className="footer__text">Github</p>
                </div>
                
            </div>
        </section>
    )
}

export default Footer;