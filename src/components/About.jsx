function About() {
    return (
        <div className="pt-20 bg-[#0B0A0E] min-h-screen px-6 md:px-16 py-20 text-gray-300">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-16 text-center">
                About Us
            </h1>

            <div className="max-w-4xl mx-auto space-y-20">

                <section>
                <h2 className="text-2xl font-serif text-accent mb-4 tracking-wide">
                    The Experience
                </h2>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    At Nocturne, we believe dining is more than just food — it's an experience.
                    Our space blends contemporary elegance with a relaxed atmosphere, offering
                    guests a refined yet welcoming environment. With a passion for quality
                    ingredients and artistic presentation, we create dishes that feel indulgent,
                    balanced, and memorable.
                </p>
                </section>

                <section>
                <h2 className="text-2xl font-serif text-accent mb-4 tracking-wide">
                    Cuisine
                </h2>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    Our menu celebrates global cuisine with a modern fine-dining approach.
                    Drawing inspiration from flavors around the world, we bring together
                    diverse ingredients, techniques, and culinary traditions. From comfort
                    classics reimagined to bold, innovative plates, our offerings are designed
                    to cater to every palate while maintaining a refined, elevated style.
                </p>
                </section>

                <section>
                <h2 className="text-2xl font-serif text-accent mb-4 tracking-wide">
                    Our Story
                </h2>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    Nocturne was born from a simple idea: to create a place where great food
                    meets unforgettable ambience. Inspired by late-night conversations,
                    softly lit rooms, and the joy of shared meals, we set out to build a
                    restaurant that feels timeless yet contemporary. Every dish, every detail,
                    and every evening at Nocturne is crafted to leave a lasting impression.
                </p>
                </section>

            </div>
        </div>
    )
}

export default About