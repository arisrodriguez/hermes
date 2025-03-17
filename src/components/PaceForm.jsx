import { useState } from 'react'

export const PaceForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        restingFreq: "",
        distance: "",
        hours: "",
        minutes: "",
        seconds: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className='pt-10 md:pt-0 flex-1 w-full'>
            <form className="md:max-w-md mx-auto bg-blue-700 p-6 rounded-lg shadow-md" id="Form">
                {/* Name */}
                <div className="relative mb-4">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="peer w-full border border-white text-white bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all placeholder-transparent"
                        placeholder=" "
                        required
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
                    />
                    <label htmlFor="restinFreq"
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
                        />
                        <label htmlFor="seconds"
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:bg-blue-700 peer-focus:px-4 peer-valid:top-0 peer-valid:text-white peer-valid:bg-blue-700 peer-valid:px-4 z-10">
                            Seconds
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <button aria-label="Calculate your training zones" className="w-full cursor-pointer py-2 px-6 bg-transparent border border-white text-white rounded-lg hover:border hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out">
                    Calculate Training Zones
                </button>
            </form>
        </section>
    )
} 