import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'
import './footer.css'


function Footer() {
    return (
        <footer>
            <ul className="footerLinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact Me</a></li>

            </ul>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/eljafari/" target='-blank'><BsLinkedin /></a>
                <a href="https://github.com/eljafari?tab=repositories" target='-blank'><FaGithub /></a>
                <a href="https://medium.com/@elijafari" target='-blank'><SiMedium /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Elham Jafari</small>
            </div>
        </footer>
    )
}

export default Footer