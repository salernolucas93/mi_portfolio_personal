import React, { useState } from 'react'
import data_projects from '../data/projects_data'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import './projects.css'

const Projects = () => {
    const [projects, setProjects] = useState(data_projects)
    const [active, setActive] = useState('Todos')

    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
        setActive(name)
    }

    const project_variants = {
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
        <motion.div className="container projects"
            variants={ project_variants }
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="projects__navbar">
                <div className={ active === 'Todos' && 'projects__navbar-active' } onClick={ 
                    ()=> {
                        setProjects(data_projects) 
                        setActive("Todos")
                    }}>
                    Todos
                </div>
                <div className={ active === 'php' && 'projects__navbar-active' } onClick={ ()=>handleFilterCategory('php') }>PHP</div>
                <div className={ active === 'mysql' && 'projects__navbar-active' } onClick={ ()=>handleFilterCategory('mysql') }>MySQL</div>
                <div className={ active === 'html' && 'projects__navbar-active' } onClick={ ()=>handleFilterCategory('html') }>HTML</div>
                <div className={ active === 'css' && 'projects__navbar-active' } onClick={ ()=>handleFilterCategory('css') }>CSS</div>
                <div className={ active === 'java' && 'projects__navbar-active' } onClick={ ()=>handleFilterCategory('java') }>Java</div>
                <div className={ active === 'firebase' && 'projects__navbar-active' } onClick={ ()=>handleFilterCategory('firebase') }>Firebase</div>
                <div className={ active === 'javascript' && 'projects__navbar-active' } onClick={ ()=>handleFilterCategory('javascript') }>JavaScript</div>
                <div className={ active === 'react' && 'projects__navbar-active' } onClick={ ()=>handleFilterCategory('react') }>React</div>
                <div className={ active === 'wordpress' && 'projects__navbar-active' } onClick={ ()=>handleFilterCategory('wordpress') }>Wordpress</div>
            </div>
            <div className="row">
                {
                    projects.map(project => 
                        <ProjectCard key={ project.name } project={ project } />
                    )
                }
            </div>
        </motion.div>
    )
}

export default Projects