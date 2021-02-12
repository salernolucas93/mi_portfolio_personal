import React from 'react'

import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'
import pin from '../../assets/icons/pin.svg'
import tie from '../../assets/icons/tie.png'
import profile from '../../assets/profile.jpeg'
import resume from '../../assets/resume.pdf'
import email from '../../assets/icons/email.svg'

import Typed from 'react-typed'
import { motion } from 'framer-motion'
import './sidebar.css'

const Sidebar = () => {
    const handleEmailMe = () =>{
        window.open("mailto: lucxsa@hotmail.com")
    }

    const sidebar_variant = {
        hidden:{
            x: '-20vw',
        },
        visible:{
            x : 0,
            transition: {
                delay: 0.1,
                duration: 0.5,
                type: 'spring'
            }
        }
    }

    return (
        <motion.div className="sidebar"
            variants={ sidebar_variant }
            initial='hidden'
            animate='visible'
        >
            <img src={ profile } alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">
                Lucas<span> Salerno</span>
            </div>
            <div className="sidebar__item sidebar__title">
                <Typed 
                    className="sidebar__typed-text"
                    strings={["Analista Programador", "Junior Developer", "Freelance"]}
                    typeSpeed={ 40 }
                    backSpeed={ 60 }
                    loop
                />
            </div>
            <a href={ resume } download="cv_lucas.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={ tie } alt="tie" className="sidebar__icon" /> Descargar CV
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.instagram.com/lucas_salerno" target="_blank">
                    <img src={ instagram } alt="instagram" className="sidebar__icon mr-3" />
                </a>
                <a href="https://www.linkedin.com/in/lucas-alejandro-salerno-51a1361a2/" target="_blank">
                    <img src={ linkedin } alt="linkedin" className="sidebar__icon mr-3" />
                </a>
                <a href="https://github.com/salernolucas93" target="_blank">
                        <img src={ github } alt="github" className="sidebar__icon" />
                </a>
            </figure>
            <div className="sidebar__contact">
                {/*<div className="sidebar__item sidebar__github"></div>*/}
                <div className="sidebar__location">
                    <img src={ pin } alt="location" className="sidebar__icon mr-3" />
                    Cordoba, Argentina
                </div>
                <div className="sidebar__item">
                    <img src={ email } alt="email" className="sidebar__icon mr-3" />
                    lucxsa@hotmail.com
                </div>
                {/*<div className="sidebar_item">Teléfono</div>*/}
            </div>
            <div className="sidebar__item sidebar__email" onClick={ handleEmailMe }>Enviame un Correo</div>
        </motion.div>
    )
}

export default Sidebar