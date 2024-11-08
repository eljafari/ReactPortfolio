import React from 'react'
import './header.css'
import CTA from './CTA'
import Elli from '../../assets/elham.JPG'

import HeaderSocial from './headerSocial'

function Header() {
    return (
        <header>
            <div className="container header__container" id='home'>
                <h5>Hello I'm</h5>
                <h1>Elham Jafari</h1>
                <h3>FullStack Web Developer</h3>
                <CTA />
                <div className="me">
                    <img src={Elli} alt="Elham Jafari" />
                </div>
                <HeaderSocial />
                <div className="scroll__down">
                    <a href="#portfolio">Scroll Down</a>
                </div>
            </div>

        </header>
    )
}

export default Header