import React from 'react'

export const Results = () => {
    return (
        <section className='bg-blue-700 text-center px-6'>
            <div className='md:w-[700px] mx-auto'>
                <div className="text-white pt-16">
                    <h1 className='font-bold text-4xl mb-5'>Training zones</h1>
                    <p className='mb-10'>Hey Izzat. Enjoy your training zones
                        and build your best version</p>
                </div>
                <div className='pb-16 text-white'>
                    <table class="w-full table-fixed border-separate border-spacing-2">
                        {/*Encabezado */}
                        <thead>
                            <tr>
                                <th class="bg-white text-blue-700 font-bold py-2 px-4 rounded w-1/3">Zone</th>
                                <th class="bg-white text-blue-700 font-bold py-2 px-4 rounded w-1/3">FC</th>
                                <th class="bg-white text-blue-700 font-bold py-2 px-4 rounded w-1/3">Pace min/km</th>
                            </tr>
                        </thead>

                        {/* Cuerpo de la tabla */}
                        <tbody>
                            <tr>
                                <td class="bg-white text-blue-700 font-bold py-2 px-6 rounded text-center">zone 1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="bg-white text-blue-700 font-bold py-2 px-6 rounded text-center">zone 2</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="bg-white text-blue-700 font-bold py-2 px-6 rounded text-center">zone 3</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="bg-white text-blue-700 font-bold py-2 px-6 rounded text-center">zone 4</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="bg-white text-blue-700 font-bold py-2 px-6 rounded text-center">zone 5</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    )
}
