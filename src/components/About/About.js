import './About.css'
import Project from "./Project/Project";
import Me from "./Me/Me";
import Techno from "./Techno/Techno";
import Portfolio from './Portfolio/Portfolio'

function About() {
    return (
        <>
        <section className="about">
            <h2 className='about__title'>О проекте</h2>
            <Project/>
        </section>

        <section className='about about_theme_light'>
            <h2 className='about__title'>Технологии</h2>
            <Techno/>
        </section>

        <section className='about'>
        <h2 className='about__title'>Студент</h2>
            <Me/>
        </section>

        <section className='about'>
        <h2 className='about__title about__title_theme_light'>Портфолио</h2>
            <Portfolio/>
        </section>
        </>
    )
}

export default About;