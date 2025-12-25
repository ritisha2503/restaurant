function MenuCard({ item }) {
    return (
        <div
        className={`bg-[#1A1729] rounded-xl p-5 transition-all duration-300
                    hover:scale-[1.02] hover:shadow-lg hover:shadow-black/40
                    ${item.special ? "border border-accent/60" : "border border-white/5"}`}
        >
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-medium text-white">
            {item.name}
            </h3>

            <span className="text-accent font-semibold">
            {item.price}
            </span>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed">
            {item.description}
        </p>

        {item.special && (
            <span className="inline-block mt-3 text-xs uppercase tracking-widest text-accent">
            ★ Chef’s Special
            </span>
        )}
        </div>
    )
}

export default MenuCard
