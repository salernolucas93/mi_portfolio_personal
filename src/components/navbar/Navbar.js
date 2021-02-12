import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './navbar.css'

const Navbar = () => {
    const [ active, setActive ] = useState('')

    useEffect( () => {
        let currentUrl = window.location.href
        console.log(currentUrl)
        if (currentUrl.endsWith('/')){
            setActive('Sobre Mi')
        }
        else if (currentUrl.endsWith('/proyectos')){
            setActive('Proyectos')
        }
        else if (currentUrl.endsWith('/curriculum')){
            setActive('Curriculum')
        }
    }, [active])

    const navbar_variant = {
        hidden: {
            y: '-30vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.7,
                type: 'spring'
            }
        }
    }

    return(
        <motion.div className="navbar"
            variants={ navbar_variant }
            initial='hidden'
            animate='visible'
        >
            <div className="navbar__active">
                { active }
            </div>
            <div className="navbar__items">
                { 
                    active !== 'Sobre Mi' && 
                    <Link to="/">
                        <div className="navbar__item" onClick={ () => setActive('Sobre Mi') }>Sobre Mi</div>
                    </Link>
                }
                { 
                    active !== 'Curriculum' ? 
                    <Link to="/curriculum">
                        <div className="navbar__item" onClick={ () => setActive('Curriculum') }>Curriculum</div> 
                    </Link> : null 
                }
                { 
                    active !== 'Proyectos' && 
                    <Link to="/proyectos">
                        <div className="navbar__item" onClick={ () => setActive('Proyectos') }>Proyectos</div> 
                    </Link>
                }
            </div>
        </motion.div>
    )
}

export default Navbar