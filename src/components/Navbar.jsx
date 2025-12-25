import { NavLink } from 'react-router-dom';

function Navbar() {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "About Us", path: "/about" },
        { name: "Reservations", path: "/reservations" }
    ];

    return (
        <div className="sticky top-0 left-0 w-full z-50
                        flex justify-between items-center 
                        px-8 py-4 bg-linear-to-r from-[#1A1729] via-[#1A1729] to-[#1A1729] border-b border-white/10 text-white">
            <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="Logo" className="w-10 h-10" />
                <div className="font-serif text-softwhite text-2xl tracking-widest uppercase">
                Nocturne
                </div>
            </div>
            <div className="flex gap-2 items-center font-sans">
                {navItems.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                    `relative px-3 py-1.5 rounded-md text-sm uppercase tracking-wide
                    transition-colors duration-300 ease-in-out
                    hover:shadow-white/20
                    ${isActive
                        ? "bg-white/20 text-accent" // active page highlight stays visible
                        : "text-softgray hover:bg-white/10 hover:text-softwhite"}`
                    }
                >
                    {item.name}
                </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
