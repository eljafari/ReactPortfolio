import React from 'react'
import './about.css'
import elhamK from '../../assets/elhamK.jpg';
import elhamC from '../../assets/elhamC.jpg';
import elhamB from '../../assets/elhamB.jpg';
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
                        <img src={elhamC} alt="Elham Jafari" />
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
                    <p>I'm a passionate full-stack developer, and I absolutely love taking ideas and turning them into powerful web solutions. I'm like a creative techie! I'm well-versed in both the front-end and back-end of web development, which means I can make websites not only look great but also work smoothly.
                        <br />
                        I've been fortunate to work on all sorts of projects, from online stores to systems that help manage content. One thing I'm really proud of is how I can take complex requirements and turn them into websites that are not just functional but also super user-friendly.

                    </p>
                    <p>
                        Teamwork is my forte. Collaborating with designers and project managers, we turn ideas into reality. I'm committed to continuous learning and recently completed advanced courses in React.js and cloud-based development. Beyond coding, you'll find me exploring the outdoors, biking on trails, and camping under the stars. Let's connect and create something amazing together!
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>

        </section>
    )
}

export default About