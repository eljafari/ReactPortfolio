import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'



function HeaderSocial() {
    return (
        <div className='header__socials'>
            <a target='_blank' href="https://www.linkedin.com/in/eljafari/"><BsLinkedin /></a>
            <a target='_blank' href="https://github.com/eljafari?tab=repositories"><FaGithub /></a>
            <a target='_blank' href="https://medium.com/@elijafari"><SiMedium /></a>
        </div>
    )
}

export default HeaderSocial
