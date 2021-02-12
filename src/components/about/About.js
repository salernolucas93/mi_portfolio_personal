import React from 'react'
import Skillcard from './Skillcard'
import { motion } from 'framer-motion'
import skills from '../data/about_data'
import './about.css'

const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.6
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.div className="about"
            variants={ about_variants }
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <h6 className="about__intro">
            Me describo como alguien al cual le gusta aprender, resolver problemas y ayudar a las personas,
            siendo colaborativo y atendiendo principalmente a las necesidades de las mismas.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">¿Qué te puedo ofrecer?</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={ skill } />
                        )
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default About