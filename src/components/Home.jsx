import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="bg-[#0B0A0E] min-h-screen flex items-center justify-center px-6 md:px-16">
        
        <div className="max-w-3xl text-center">
            
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-wide">
            Nocturne
            </h1>

            <p className="text-accent uppercase tracking-[0.25em] text-sm mb-8">
            Modern flavors · Timeless nights
            </p>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-12">
            Welcome to Nocturne, a modern fine-dining restaurant designed for slow evenings
            and memorable conversations. From thoughtfully crafted dishes to a warm,
            intimate ambience, every detail is curated to elevate your dining experience.
            Whether you're here for a quiet dinner or a celebratory night out, Nocturne
            invites you to savor the moment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <Link
                to="/menu"
                className="px-8 py-3 border border-white/20 text-gray-200
                        uppercase tracking-wider text-sm
                        hover:border-accent hover:text-accent
                        transition-all duration-300"
            >
                View Menu
            </Link>

            <Link
                to="/reservations"
                className="px-8 py-3 border border-white/20 text-gray-200
                        uppercase tracking-wider text-sm
                        hover:border-accent hover:text-accent
                        transition-all duration-300"
            >
                Make a Reservation
            </Link>

            </div>
        </div>

        </div>
    )
}

export default Home
