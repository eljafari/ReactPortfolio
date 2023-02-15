import React from 'react'
import './about.css'
import Me from '../../assets/meOffice.png'
import { FaAward } from 'react-icons/fa'
import { AiOutlineProject } from 'react-icons/ai'

function About() {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                {/* <div className="about__me">
                    <div className='about__me-img'>
                        <img src={Me} alt="Elli at Office" />
                    </div>
                </div> */}
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>+2 Years Web Development</small>
                        </article>
                        <a href="#portfolio">
                            <article className="about__card">
                                <AiOutlineProject className='about__icon' />
                                <h5>Projects</h5>
                                <small>+10 Completed Projects</small>
                            </article>
                        </a>
                    </div>
                    <p>A web developer with a background in Digital Marketing, a passion for user experience and interaction design and strength in creative and strategic thinking. Learning and growing as a developer is crucial to me. I enjoy collaboration with peers and teamwork; I want to hone my skills in Frontend and Backend in small and medium-sized teams.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>

        </section>
    )
}

export default About