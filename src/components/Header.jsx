// import { FaRunning } from "react-icons/fa";
/**
 * Componente Header que representa el encabezado de la aplicación.
 * Contiene el título de la aplicación y un enlace de crédito.
 */

export const Header = () => {
    return (
        <header className=' bg-blue-700 text-white flex'>
            <nav className='mx-auto py-6 md:flex md:w-[700px] text-center content-center justify-center items-center'>

                {/* Sección izquierda con el título de la aplicación */}
                <div className='flex-1'>
                    <h1 className="text-4xl font-extrabold tracking-wide flex gap-2 items-center justify-center md:justify-start">
                        {/* <FaRunning className="text-white w-6 h-6 md:w-7 md:h-7" /> */}
                        HERMES
                    </h1>
                </div>

                {/* Sección derecha con información sobre el creador */}
                <div className='flex-1'>
                    <p className='font-medium italic text-lg'>Running calculator by{' '}
                        <a
                            href="https://www.instagram.com/runwithizzat/"
                            target='_blank'
                            rel='noopener noreferrer'
                            className="relative inline-block ml-1 font-semibold text-white transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all after:duration-300"
                        >
                            @runwithizzat
                        </a>
                    </p>
                </div>
            </nav>
        </header>
    )
}
