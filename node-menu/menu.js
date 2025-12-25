import menu from "../src/components/menuData.js"

console.log("🍽️  NOCTURNE — FULL MENU\n")

menu.forEach(section => {
    console.log(`\n=== ${section.name.toUpperCase()} ===\n`)

    section.content.forEach(item => {
        console.log(`• ${item.name} — ${item.price}`)
        console.log(`  ${item.description}`)
        if (item.special) {
        console.log("  ★ Chef’s Special")
        }
        console.log("")
    })
})
