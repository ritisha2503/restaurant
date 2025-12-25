import { useState } from "react"

function Reservations() {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: ""
    })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // no backend — intentional
    }

    return (
        <div className="pt-20 bg-[#0B0A0E] min-h-screen px-6 md:px-16 py-20 text-gray-300">

        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">
            Reservations
        </h1>

        <div className="max-w-xl mx-auto bg-[#1A1729] p-8 md:p-10 rounded-xl border border-white/10">
            
            <p className="text-gray-400 mb-8 text-center">
            Reserve your table for an unforgettable dining experience...
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

            <div>
                <label className="block text-sm uppercase tracking-wider mb-2 text-gray-400">
                Name
                </label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full bg-transparent border border-white/20
                            px-4 py-3 text-white
                            focus:outline-none focus:border-accent
                            transition-colors"
                />
            </div>

            <div>
                <label className="block text-sm uppercase tracking-wider mb-2 text-gray-400">
                Date
                </label>
                <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20
                            px-4 py-3 text-white
                            focus:outline-none focus:border-accent
                            transition-colors"
                />
            </div>

            <div>
                <label className="block text-sm uppercase tracking-wider mb-2 text-gray-400">
                Time
                </label>
                <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20
                            px-4 py-3 text-white
                            focus:outline-none focus:border-accent
                            transition-colors"
                />
            </div>

            <div>
                <label className="block text-sm uppercase tracking-wider mb-2 text-gray-400">
                Number of people
                </label>
                <input
                type="number"
                name="number"
                value={formData.num}
                onChange={handleChange}
                placeholder="Number of people"
                className="w-full bg-transparent border border-white/20
                            px-4 py-3 text-white
                            focus:outline-none focus:border-accent
                            transition-colors"
                />
            </div>

            <button
                type="submit"
                className="w-full mt-4 py-3 border border-accent text-accent
                        uppercase tracking-wider text-sm
                        hover:bg-accent hover:text-black
                        transition-all duration-300"
            >
                Reserve Table
            </button>

            </form>
        </div>

        </div>
    )
}

export default Reservations
