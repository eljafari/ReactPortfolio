import React from 'react'
import './about.css'
import AboutMe from '../../assets/AboutMe.jpg';
import AboutMe2 from '../../assets/AboutMe2.png';
import { FaAward } from 'react-icons/fa'
import { AiOutlineProject } from 'react-icons/ai'

function About() {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className="about__me">
                    <div className='about__me-img'>
                        <img src={AboutMe2} alt="Elham Jafari" />
                        <img src={AboutMe} alt="Elham Jafari" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">

                        <a href="#experience">
                            <article className="about__card">
                                <FaAward className='about__icon' />
                                <h5>Experience</h5>
                                <small>+2 Years FullStack Web Development</small>
                            </article>
                        </a> <a href="#portfolio">
                            <article className="about__card">
                                <AiOutlineProject className='about__icon' />
                                <h5>Projects</h5>
                                <small>+10 Completed Projects</small>
                            </article>
                        </a>
                    </div>
                    <p>I'm a passionate full-stack developer with a knack for transforming ideas into seamless web solutions. With expertise in both front-end and back-end development, I craft user-friendly websites that blend functionality with style.
                    </p>
                    <p>
                        I've tackled diverse projects, from e-commerce sites to content management systems, always focusing on collaboration and turning complex requirements into reality. I'm dedicated to continuous learning, having recently advanced my skills in React.js and cloud development.
                    </p>
                    <p>
                        When I’m not coding, you’ll find me biking scenic trails, camping under the stars, or enjoying a day of fishing and hiking.
                    </p>
                    <p>Let’s connect and create something amazing together! </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About