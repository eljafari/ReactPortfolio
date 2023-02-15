import React from 'react'
import './navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { BsBook } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { MdOutlineContactMail } from 'react-icons/md'
import { useState } from 'react'

function Navbar() {
    const [activeNav, setActive] = useState('#')
    return (
        <nav className='nav'>
            <a href="#" onClick={() => setActive('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActive('about')} className={activeNav === 'about' ? 'active' : ''}><FiUser /></a>
            <a href="#experience" onClick={() => setActive('experience')} className={activeNav === 'experience' ? 'active' : ''}><BsBook />
            </a>
            <a href="#portfolio" onClick={() => setActive('portfolio')} className={activeNav === 'services' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contact" onClick={() => setActive('contact')} className={activeNav === 'contact' ? 'active' : ''}><MdOutlineContactMail /></a>
        </nav>
    )
}

export default Navbar