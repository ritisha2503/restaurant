import MenuCard from "./Menucard.jsx"
import menu from "./menuData.js"

function Menu() {
    return (
        <div className="pt-20 bg-[#0B0A0E] text-gray-200 min-h-screen px-6 md:px-16 py-12">
            
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">
            Our Menu
            </h1>

            {menu.map((section) => (
                <div 
                    key={section.name}
                    id = {section.name.replace(/\s+/g, "-").toLowerCase()} 
                    className="mb-16 scroll-mt-24 hover:scale-[1.01] transition-all duration-300"
                >
                    <h2 className="text-2xl md:text-3xl font-serif text-accent mb-8 border-b border-accent/30 pb-2">
                    {section.name}
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2">
                    {section.content.map((item) => (
                        <MenuCard key={item.name} item={item} />
                    ))}
                    </div>
                </div>
            ))}

        </div>
    )

}

export default Menu