import React from 'react'
import { FaCcPaypal } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className='bg-blue-700 text-white py-16'>
            <div className="md:w-[700px] mx-auto text-center">
                <div className='md:flex'>
                    <div className="mb-10 md:flex-1 font-bold text-lg">
                        <h1>HERMES</h1>
                        <div className='mt-5'>
                            <h1 className='font-semibold'>Running Calculator App</h1>
                        </div>
                    </div>

                    <div className="mb-10 md:flex-1">
                        <h1 className='font-bold text-lg'>Support this Project</h1>

                        <ul className='mt-5 flex gap-4 justify-center items-center'>
                            <li><a target='_blank' rel='noopener noreferrer' title='Paypal' className='inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400' href="https://www.paypal.com/donate?hosted_button_id=Y2D6XZPVWMLHJ"><FaCcPaypal /></a></li>
                            <li><a target='_blank' rel='noopener noreferrer' title='GitHub' className='inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400' href="https://github.com/arisrodriguez"><FaGithub /></a></li>
                        </ul>
                    </div>

                    <div className="md:flex-1">
                        <h1 className='font-bold text-lg'>Coded by Aris Rodríguez</h1>

                        <ul className='mt-5 flex gap-4 justify-center items-center'>
                            <li><span title='React' className='inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400'><FaReact aria-hidden="true" /></span></li>
                            <li><span title='HTML5' className='inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400'><FaHtml5 aria-hidden="true" /></span></li>
                            <li><span title='CSS3' className='inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400'><FaCss3 aria-hidden="true" /></span></li>
                            <li><span title='JavaScript' className='inline-flex text-white text-4xl transition-all duration-300 hover:text-yellow-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-yellow-400'><FaJs aria-hidden="true" /></span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="font-bold text-center mt-16 md:mt-0">
                <h1>© runwithizzat. All
                    rights reserved.</h1>
            </div>
        </footer>
    )
}
