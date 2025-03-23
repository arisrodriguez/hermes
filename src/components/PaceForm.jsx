import { useState } from 'react'

/**
 * PaceForm Component
 * 
 * Un formulario que permite a los usuarios ingresar información personal y de carrera
 * para calcular su ritmo (pace) y zonas de entrenamiento basadas en la frecuencia cardíaca.
 * 
 * @param {Function} onCalculate - Función que recibe las zonas de entrenamiento calculadas y el nombre del usuario.
 */

export const PaceForm = ({ onCalculate }) => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        restingFreq: "",
        distance: "",
        hours: "",
        minutes: "",
        seconds: "",
    });

    /**
     * Maneja los cambios en los campos de entrada del formulario
     * y actualiza el estado correspondiente.
     * @param {Event} e - Evento del input
     */
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    /**
     * Maneja el envío del formulario, calcula las zonas de entrenamiento y
     * llama a la función `onCalculate` para pasar los resultados al componente padre.
     * @param {Event} e - Evento del formulario
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        // Convertir los valores ingresados a números
        const age = Number(formData.age);
        const restingFreq = Number(formData.restingFreq);
        const distance = Number(formData.distance);
        const hours = Number(formData.hours);
        const minutes = Number(formData.minutes);
        const seconds = Number(formData.seconds);

        // Calcular tiempo total en segundos
        const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

        // Calcular ritmo (pace) en segundos/km y convertir a min/km
        const paceSeconds = totalSeconds / distance;
        const paceMin = Math.floor(paceSeconds / 60);
        const paceSec = Math.round(paceSeconds % 60);
        const paceFormatted = `${paceMin}:${paceSec < 10 ? '0' : ''}${paceSec} min/km`;

        // Calcular frecuencia cardíaca máxima
        const maxHR = 220 - age;

        // Calcular frecuencia cardíaca de reserva
        const HRreserve = maxHR - restingFreq;

        // Definir las zonas de entrenamiento (basadas en porcentaje de la FC)
        const zones = [50, 60, 70, 80, 90].map((percentage, index) => {
            // Rango de FC para cada zona
            const minHR = Math.round(restingFreq + (HRreserve * (percentage / 100)));
            const maxHR = Math.round(restingFreq + (HRreserve * ((percentage + 10) / 100))); // Usamos un +10% para obtener el rango superior

            // Ajustar el ritmo para cada zona (las zonas más bajas tienen un pace más lento)
            const paceSecondsMax = paceSeconds * (1 + ((4 - index) * 0.03)); // Más lento (Zona 1)
            const paceSecondsMin = paceSeconds * (1 + ((5 - index) * 0.03)); // Más rápido (Zona 5)

            // Convertimos a formato min/km
            const paceMin = Math.floor(paceSecondsMin / 60);
            const paceSecMin = Math.round(paceSecondsMin % 60);
            const paceFormattedMin = `${paceMin}:${paceSecMin < 10 ? '0' : ''}${paceSecMin}`;

            const paceMax = Math.floor(paceSecondsMax / 60);
            const paceSecMax = Math.round(paceSecondsMax % 60);
            const paceFormattedMax = `${paceMax}:${paceSecMax < 10 ? '0' : ''}${paceSecMax} min/km`;

            return {
                zone: `Zone ${index + 1}`,
                hr: `${minHR} - ${maxHR} bpm`, // Rango de FC
                pace: `${paceFormattedMin} - ${paceFormattedMax}` // Rango de pace
            };
        });

        // Pasar los datos calculados al componente padre
        onCalculate(zones, formData.name);
    };


    return (
        <section className='pt-10 md:pt-0 flex-1 w-full'>
            <form onSubmit={handleSubmit} className="md:max-w-md mx-auto bg-blue-700 p-6 rounded-lg shadow-md" id="Form">
                {/* Inputs del formulario para ingresar los datos del usuario */}
                {/* Cada input maneja el evento onChange para actualizar el estado */}

                {/* Name */}
                <div className="relative mb-4">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="peer w-full border border-white text-white bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all placeholder-transparent"
                        placeholder=''
                        required
                        autoComplete="name"
                    />
                    <label
                        htmlFor="name"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:bg-blue-700 peer-focus:px-4 peer-valid:top-0 peer-valid:text-white peer-valid:bg-blue-700 peer-valid:px-4 z-10">
                        Name
                    </label>
                </div>

                {/* Age */}
                <div className="relative mb-4">
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="peer w-full border border-white text-white bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all placeholder-transparent"
                        placeholder=''
                        required
                        autoComplete="bday-year"
                    />
                    <label htmlFor="age"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:bg-blue-700 peer-focus:px-4 peer-valid:top-0 peer-valid:text-white peer-valid:bg-blue-700 peer-valid:px-4 z-10">
                        Age
                    </label>
                </div>

                {/* Resting Frequency */}
                <div className="relative mb-4">
                    <input
                        type="number"
                        name="restingFreq"
                        id="restingFreq"
                        value={formData.restingFreq}
                        onChange={handleChange}
                        className="peer w-full border border-white text-white bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all placeholder-transparent"
                        placeholder=''
                        required
                        autoComplete="off"
                    />
                    <label htmlFor="restingFreq"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:bg-blue-700 peer-focus:px-4 peer-valid:top-0 peer-valid:text-white peer-valid:bg-blue-700 peer-valid:px-4 z-10">
                        Resting Frequency
                    </label>
                </div>

                {/* Distance */}
                <div className="relative mb-4">
                    <input
                        type="number"
                        name="distance"
                        id="distance"
                        value={formData.distance}
                        onChange={handleChange}
                        className="peer w-full border border-white text-white bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all placeholder-transparent"
                        placeholder=''
                        required
                        autoComplete="off"
                    />
                    <label htmlFor="distance"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:bg-blue-700 peer-focus:px-4 peer-valid:top-0 peer-valid:text-white peer-valid:bg-blue-700 peer-valid:px-4 z-10">
                        Distance (km)
                    </label>
                </div>

                {/* Time (Hours, Minutes, Seconds) */}
                <div className="flex gap-4 mb-4">
                    {/* Hours */}
                    <div className="relative w-1/3">
                        <input
                            type="number"
                            name="hours"
                            id="hours"
                            value={formData.hours}
                            onChange={handleChange}
                            className="peer w-full border border-white text-white bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all placeholder-transparent"
                            placeholder=""
                            required
                            autoComplete="off"
                        />
                        <label htmlFor="hours"
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:bg-blue-700 peer-focus:px-4 peer-valid:top-0 peer-valid:text-white peer-valid:bg-blue-700 peer-valid:px-4 z-10">
                            Hours
                        </label>
                    </div>

                    {/* Minutes */}
                    <div className="relative w-1/3">
                        <input
                            type="number"
                            name="minutes"
                            id="minutes"
                            value={formData.minutes}
                            onChange={handleChange}
                            className="peer w-full border border-white text-white bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all placeholder-transparent"
                            placeholder=""
                            required
                            autoComplete="off"
                        />
                        <label htmlFor="minutes"
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:bg-blue-700 peer-focus:px-4 peer-valid:top-0 peer-valid:text-white peer-valid:bg-blue-700 peer-valid:px-4 z-10">
                            Minutes
                        </label>
                    </div>

                    {/* Seconds */}
                    <div className="relative w-1/3">
                        <input
                            type="number"
                            name="seconds"
                            id="seconds"
                            value={formData.seconds}
                            onChange={handleChange}
                            className="peer w-full border border-white text-white bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all placeholder-transparent"
                            placeholder=""
                            required
                            autoComplete="off"
                        />
                        <label htmlFor="seconds"
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:bg-blue-700 peer-focus:px-4 peer-valid:top-0 peer-valid:text-white peer-valid:bg-blue-700 peer-valid:px-4 z-10">
                            Seconds
                        </label>
                    </div>
                </div>

                {/* Botón para calcular las zonas de entrenamiento */}

                {/* Submit Button */}
                <button type='submit' aria-label="Calculate your training zones" className="w-full cursor-pointer py-2 px-6 bg-transparent border border-white text-white rounded-lg hover:border hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out">
                    Calculate Training Zones
                </button>
            </form>
        </section>
    )
} 