import React from 'react'

/**
 * Componente Header que representa el encabezado de la aplicación.
 * Contiene el título de la aplicación y un enlace de crédito.
 */

export const Header = () => {
    return (
        <header className=' bg-blue-700 text-white flex'>
            <nav className='h-[149px] mx-auto md:flex md:w-[700px] text-center content-center justify-center items-center'>

                {/* Sección izquierda con el título de la aplicación */}
                <div className='flex-1'>
                    <h1 className='font-bold font-sans text-[40px] md:text-left'>HERMES</h1>
                </div>

                {/* Sección derecha con información sobre el creador */}
                <div className='flex-1'>
                    <p className='font-semibold font-sans italic text-[20px]'>Running calculator by <a className='hover:text-yellow-400' href="https://www.instagram.com/runwithizzat/" target='_blank' rel='noopener noreferrer'>@runwithizzat</a></p>
                </div>
            </nav>
        </header>
    )
}
