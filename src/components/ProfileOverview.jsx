import React from 'react'
import { AboutMe } from './AboutMe'
import { FollowMe } from './FollowMe'

export const ProfileOverview = () => {
    return (
        <section className='px-6 my-16 md:px-0 flex flex-col md:flex-row md:gap-10 md:mb-16 md:w-[700px] md:mx-auto md:items-start'>
            <AboutMe />
            <FollowMe />
        </section>
    )
}
