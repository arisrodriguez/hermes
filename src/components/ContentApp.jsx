import React from 'react'
import { DescriptionApp } from './DescriptionApp'
import { PaceForm } from './PaceForm'

export const ContentApp = () => {
    return (
        <section className='my-16 px-6 md:px-0 md:flex md:gap-5 m-auto w-full max-w-[700px]'>
            <DescriptionApp />
            <PaceForm />
        </section>
    )
}
