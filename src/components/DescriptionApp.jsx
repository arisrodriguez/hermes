import React from 'react'

/**
 * Componente DescriptionApp que proporciona una breve descripción de Hermes App.
 * Contiene un título y un párrafo explicativo sobre la funcionalidad de la aplicación.
 */

export const DescriptionApp = () => {
    return (
        <section className='flex-1'>
            {/* Contenedor del título */}
            <div className="flex justify-center">
                <h1 className='inline-block font-semibold text-2xl text-gray-700 border rounded-md text-center px-5 py-3 mb-10'>Hermes App</h1>
            </div>

            {/* Descripción de la aplicación */}
            <p className='text-gray-700 text-base'>Hermes is the ultimate app for optimizing your physical training. Designed for athletes of all levels, Hermes Running Calculator accurately calculates your personalized training zones based on your heart rate, power, or pace. Enter your data and goals, and the app will provide you with specific zones to maximize your performance, enhance your endurance, and achieve your goals more efficiently.</p>
        </section>
    )
}
