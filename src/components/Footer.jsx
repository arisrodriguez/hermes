import { FaCcPaypal, FaGithub, FaReact, FaHtml5, FaCss3, FaJs } from "react-icons/fa";

/**
 * Componente Footer
 * 
 * Este componente representa el pie de página de la aplicación Hermes Running Calculator App.
 * Contiene información sobre la aplicación, enlaces de soporte y tecnologías utilizadas en su desarrollo.
 * 
 * Estructura:
 * - Sección con el nombre de la aplicación y su descripción.
 * - Sección para apoyar el proyecto con enlaces a PayPal y GitHub.
 * - Sección con el nombre del desarrollador y las tecnologías usadas.
 * - Derechos de autor al final.
 * 
 * Tecnologías usadas:
 * - React
 * - HTML5
 * - CSS3
 * - JavaScript
 */

export const Footer = () => {
    return (
        <footer className='bg-blue-700 text-white py-16'>
            <div className="md:w-[700px] mx-auto text-center">
                <div className='md:flex'>
                    {/* Sección de información de la aplicación */}
                    <div className="mb-10 md:flex-1 font-semibold text-lg">
                        <h1>HERMES</h1>
                        <div className='mt-5'>
                            <h1 className='font-medium'>Running Calculator App</h1>
                        </div>
                    </div>

                    {/* Sección de soporte del proyecto */}
                    <div className="mb-10 md:flex-1">
                        <h1 className='font-semibold text-lg'>Support this Project</h1>

                        <ul className='mt-5 flex gap-4 justify-center items-center'>
                            <li>
                                <a
                                    href="https://www.paypal.com/donate?hosted_button_id=Y2D6XZPVWMLHJ"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    title='Paypal'
                                    className='inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400'
                                >
                                    <FaCcPaypal />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/arisrodriguez"
                                    target='_blank' rel='noopener noreferrer'
                                    title='GitHub'
                                    className='inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400' >
                                    <FaGithub />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Sección de créditos y tecnologías usadas */}
                    <div className="md:flex-1">

                        <h1 className='font-semibold text-lg'>Coded by{' '}
                            <a href="https://a-r-dev.vercel.app/"
                                target='_blank'
                                rel='noopener noreferrer'
                                className="relative inline-block text-white transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all after:duration-300" >
                                Aris Rodríguez
                            </a>
                        </h1>

                        <ul className='mt-5 flex gap-4 justify-center items-center'>
                            <li>
                                <span title='React'
                                    className='inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400'>
                                    <FaReact aria-hidden="true" />
                                </span>
                            </li>
                            <li>
                                <span title='HTML5'
                                    className='inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400'>
                                    <FaHtml5 aria-hidden="true" />
                                </span>
                            </li>
                            <li>
                                <span title='CSS3'
                                    className='inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400'>
                                    <FaCss3 aria-hidden="true" />
                                </span>
                            </li>
                            <li>
                                <span title='JavaScript'
                                    className='inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400'>
                                    <FaJs aria-hidden="true" />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Derechos de autor */}
            <div className="font-medium text-lg text-center mt-16 md:mt-0">
                <h1>© runwithizzat. All
                    rights reserved.</h1>
            </div>
        </footer>
    )
}
