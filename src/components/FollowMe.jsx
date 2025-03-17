import React from 'react'
import { FaInstagramSquare, FaYoutube, FaDiscord } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { MdEmail } from "react-icons/md";



export const FollowMe = () => {
    return (
        <section className='mt-16 md:mt-0 md:flex-1 md:w-full'>
            <h1 className='font-bold text-4xl text-gray-700 text-center'>Follow Me</h1>
            <p className='text-gray-700 pt-10'>I’m a passionate athlete sharing my workouts, achievements, and behind-the-scenes moments on social media. Follow me to join my journey and stay motivated together! 💪📲 <a target='_blank' rel='noopener noreferrer' title='Instagram' className='text-blue-600 font-semibold hover:underline' href='https://www.instagram.com/runwithizzat/'>Instagram</a><a target='_blank' rel='noopener noreferrer' title='Youtube' className='text-blue-600 font-semibold hover:underline' href='https://www.youtube.com/soyizzat'>, Youtube </a><a target='_blank' rel='noopener noreferrer' title='Tik Tok' className='text-blue-600 font-semibold hover:underline' href='https://www.tiktok.com/@soyizzat'>, TikTok </a><a target='_blank' rel='noopener noreferrer' title='Email' className='text-blue-600 font-semibold hover:underline' href='mailto:izzat1029@gmail.com'>, Email</a><a target='_blank' rel='noopener noreferrer' title='Discord' className='text-blue-600 font-semibold hover:underline' href='https://discord.gg/Hbwquentmn'>, Discord.</a> See you there!</p>


            <ul className="mt-6 flex gap-4 justify-center items-center list-none">
                <li><a target='_blank' rel='noopener noreferrer' title='Instagram' className='inline-flex text-gray-800 text-4xl hover:text-blue-700 transition-all duration-300 hover:scale-110' href="https://www.instagram.com/runwithizzat/" aria-label="Instagram"><FaInstagramSquare aria-hidden="true" /></a></li>
                <li><a target='_blank' rel='noopener noreferrer' title='Youtube' className='inline-flex text-gray-800 text-4xl hover:text-blue-700 transition-all duration-300 hover:scale-110' href="https://www.youtube.com/soyizzat" aria-label="YouTube"><FaYoutube aria-hidden="true" /></a></li>
                <li><a target='_blank' rel='noopener noreferrer' title='tik Tok' className='inline-flex text-gray-800 text-4xl hover:text-blue-700 transition-all duration-300 hover:scale-110' href="https://www.tiktok.com/@soyizzat" aria-label="TikTok"><AiFillTikTok aria-hidden="true" /></a></li>
                <li><a target='_blank' rel='noopener noreferrer' title='Email' className='inline-flex text-gray-800 text-4xl hover:text-blue-700 transition-all duration-300 hover:scale-110' href='mailto:izzat1029@gmail.com' aria-label="Correo"><MdEmail aria-hidden="true" /></a></li>
                <li><a target='_blank' rel='noopener noreferrer' title='Discord' className='inline-flex text-gray-800 text-4xl hover:text-blue-700 transition-all duration-300 hover:scale-110' href="https://discord.gg/Hbwquentmn" aria-label="Discord"><FaDiscord aria-hidden="true" /></a></li>
            </ul>
        </section>
    )
}
