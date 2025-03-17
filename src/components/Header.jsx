import React from 'react'

export const Header = () => {
    return (
        <header className=' bg-blue-700 text-white flex'>
            <nav className='h-[149px] mx-auto md:flex md:w-[700px] text-center content-center justify-center items-center'>
                <div className='flex-1'>
                    <h1 className='font-bold text-[40px] md:text-left'>HERMES</h1>
                </div>
                <div className='flex-1'>
                    <p className='font-semibold text-[20px]'>Running calculator by <a href="https://www.instagram.com/runwithizzat/" target='_blank' rel='noopener noreferrer'>@runwithizzat</a></p>
                </div>
            </nav>
        </header>
    )
}
