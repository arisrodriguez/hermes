import React from 'react'
import { AboutMe } from './AboutMe'
import { FollowMe } from './FollowMe'

/**
 * Componente ProfileOverview
 * 
 * Este componente organiza y muestra una visión general del perfil del usuario,
 * incluyendo información personal y enlaces a redes sociales.
 * 
 * Contiene dos subcomponentes:
 * - `AboutMe`: Muestra información sobre el usuario.
 * - `FollowMe`: Muestra enlaces a las redes sociales del usuario.
 * 
 * Diseño responsive:
 * - En dispositivos móviles, los elementos se organizan en una columna.
 * - En pantallas más grandes (md: 768px en adelante), los elementos se distribuyen en fila con un espacio entre ellos.
 * 
 * @returns {JSX.Element} Un contenedor `<section>` con la vista general del perfil.
 */

export const ProfileOverview = () => {
    return (
        <section className='px-6 my-16 md:px-0 flex flex-col md:flex-row md:gap-10 md:mb-16 md:w-[700px] md:mx-auto md:items-start'>
            {/* Sección de información sobre el usuario */}
            <AboutMe />
            {/* Sección de enlaces a redes sociales */}
            <FollowMe />
        </section>
    )
}
