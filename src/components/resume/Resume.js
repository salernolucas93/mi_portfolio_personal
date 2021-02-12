import React from 'react'
import Bar from './Bar'
import { motion } from 'framer-motion'
import { tools, languages } from '../data/resume_data'
import './resume.css'

const Resume = () => {
    const resume_variants = {
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

    return(
        <motion.div className="container resume"
            variants={ resume_variants }
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">Educación</h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Licenciatura en Sistemas de Información
                        </h5>
                        <p className="resume-card__name">
                            Universidad Nacional del Nordeste.
                        </p>
                        <p className="resume-card__details">
                            {/*Aqui van los detalles de la carrera.*/}
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Experiencia
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Freelance
                        </h5>
                        <p className="resume-card__name">
                            {/*Nombre*/}
                        </p>
                        <p className="resume-card__details">
                            Trabajos y Proyectos realizados de manera autonoma, según detalles observables en este portfolio.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Lenguajes y Frameworks
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={ language } />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Herramientas y Software
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => 
                                <Bar value={ tool } />
                            )
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume