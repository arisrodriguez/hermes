import React from 'react'

/**
 * Componente AboutMe
 * 
 * Este componente muestra una breve biografía de Izzat Rodríguez, un corredor de media distancia.
 * Incluye un título, el nombre del atleta y una descripción de sus logros y habilidades.
 * 
 * Diseño responsivo:
 * - En pantallas medianas y grandes (md: 768px en adelante), el contenedor toma el ancho completo disponible (`md:w-full`)
 *   y se expande proporcionalmente (`md:flex-1`) cuando se encuentra dentro de un `flex` container.
 * 
 * @returns {JSX.Element} Un contenedor `<section>` con la información sobre el corredor.
 */

export const AboutMe = () => {
    return (
        <section className='md:flex-1 md:w-full'>
            {/* Título principal */}
            <h1 className='text-center font-bold text-4xl text-gray-700 '>About Me</h1>
            {/* Subtítulo con el nombre del atleta */}
            <h2 className='text-center font-bold text-lg text-gray-700 pt-10 pb-5'>Izzat Rodríguez - Middle distance runner</h2>
            {/* Descripción del atleta */}
            <p className='text-gray-700 text-base leading-relaxed'>Is a mid-distance runner with impressive prowess in events ranging from <strong>5k - 10k to 21k</strong>. His agility, speed, and endurance have led him to achieve impressive personal bests. With a combination of rigorous training and race strategy, Izzat continues to break personal records.</p>
        </section>
    )
}
