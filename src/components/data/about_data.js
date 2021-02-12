import React from 'react'
import api from '../../assets/icons/api.svg'
import frontend from '../../assets/icons/frontend.png'
import backend from '../../assets/icons/backend.png'
import developer from '../../assets/icons/developer.png'
import collaboration from '../../assets/icons/collaboration.png'
import mobile from '../../assets/icons/mobile.png'

const skills = [
    {
        icon: frontend,
        title: 'Desarrollo Front-End',
        about: [
            'Aplicaciones responsivas usando ', 
            <strong key={ 1 }>HTML</strong>, 
            ' y ', 
            <strong key={1}>CSS</strong>, 
            '. Actualmente formandome en ', 
            <strong key={ 1 }>React.js.</strong>
        ]
    },
    {
        icon: backend,
        title: 'Desarrollo Back-End',
        about: [
            'Manejo de Base de Datos ',
            <strong key={ 1 }>SQL</strong>,
            '. Formandome en ',
            <strong key={ 1 }>NoSQL</strong>,
            ' y manejo de ',
            <strong key={ 1 }>APIs.</strong>
        ]

    },
    {
        icon: mobile,
        title: 'Desarrollo Móvil',
        about: [
            'Sencillas aplicaciones nativas para ',
            <strong key={ 1 }>Android</strong>,
            ' utilizando ',
            <strong key={ 1 }>Java.</strong>
        ]

    },
    {
        icon: developer,
        title: 'Aprendizaje Constante',
        about: 'Formación diaria nuevas tecnologias, resolución de problemas y nuevos desafios.'
    },
    {
        icon: collaboration,
        title: 'Trabajo Colaborativo',
        about: 'El trabajo en equipo es prioridad, tanto con compañeros en un proyecto, como con la gente que confía en mis proyectos.'
    }
]

export default skills