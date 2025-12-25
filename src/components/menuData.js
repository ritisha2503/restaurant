const soup = [
    {name: "Cream of Tomato", description: "Rich and creamy tomato soup", special: false,price: "₹246"},
    {name: "Cream de Broccoli", description: "Rich and creamy broccoli soup", special: true ,price: "₹246"},
    {name: "Tibetan Manchow", description: "Spicy and flavorful manchow soup", special: false,price: "₹226"},
    {name: "Sweet corn soup", description: "Sweet and savory corn soup", special: false,price: "₹226"},
    {name: "Hot n Sour", description: "Spicy and tangy hot and sour soup", special: false,price: "₹226"},
    {name: "Lemon Coriander", description: "Zesty and refreshing lemon coriander soup", special: false,price: "₹226"},
]
const salad = [
    {name: "Burrata Exotic Greens", description: "Romaine Lettuce, Arugula, Asparagus, Beans, Cherry Tomatoes, Pine nuts & Burrata in Balsamic Vinegar Dressing", special: false, price: "₹496"},
    {name: "Halloumi Greens", description: "Romaine Lettuce, Arugula, Grapes, Pan seared Halloumi in Pomegranate dressing", special: true, price:"₹496"},
    {name: "Foxy Bowl of Goodness", description: "Asparagus, Beans, Edamame, Bell Peppers, Lettuce, Heart of Palm in Honey, Mustard Dressing", special: true, price: "₹396"},
    {name: "Black Rice Avocado", description: "Bell Peppers, Avocado, Arugula, Red Cabbage, Praline in Orange Mustard Dressing", special: false, price: "₹446"},
    {name: "Caesar", description: "Crisp romaine, shaved Parmesan, garlic croutons, tossed in creamy Caesar dressing", special: false, price:"₹366"}
]
const sushi = [
    {name: "Asparagus Avocado California", description:"Imitation crab-style California roll with asparagus and creamy avocado, seasoned sushi rice and toasted sesame", special: true, price: "₹546"},
    {name: "Asparagus Avocado Cheese Nilgiri", description:"Asparagus and avocado with mild Nilgiri cheese, rolled in nori with a light herb finish", special: true, price: "₹546"},
    {name: "Edamame Cream Cheese", description:"Sweet edamame and smooth cream cheese wrapped with seasoned rice for a creamy, fresh bite", special: true, price: "₹546"},
    {name: "Cheese Tempura", description:"Crispy tempura-battered roll with molten cheese center, served with a tangy dipping sauce", special: true, price: "₹546"},
    {name: "Yellow Radish Avocado", description:"Crunchy pickled yellow radish paired with creamy avocado for a refreshing, tangy roll", special: false, price: "₹546"},
]
const appetizer = [
    {name: "Sly Dimsum", description: "Assorted steamed dumplings with delicate wrappers and savory filling, served with soy-chili dip", special: false, price: "₹396"},
    {name: "Philadelphia Cheese Dumplings", description: "Creamy Philadelphia-style cheese filling wrapped in tender dumpling, paired with a tangy herb dip", special: false, price: "₹426"},
    {name: "Pan Seared Dumplings", description: "Crispy-bottomed pan-seared dumplings with juicy filling and a chili-soy glaze", special: true, price: "₹416"},
    {name: "Spring Roll", description: "Crisp vegetable spring rolls served with sweet chili dipping sauce", special: false, price: "₹396"},
    {name: "Crispy Tofu in Chilli Basil", description: "Golden tofu tossed in a spicy chilli-basil sauce, finished with fresh herbs", special: true, price: "₹466"},
    {name: "Crispy Chilli Potato", description: "Crispy potato strips tossed in sweet chilli sauce with spring onions", special: false, price: "₹376"},
    {name: "Crispy Lotus Stem", description: "Thinly sliced lotus stem, battered and fried until crisp, served with a tangy dip", special: false, price: "₹396"},
    {name: "Corn Kernels", description: "Sautéed sweet corn with butter, herbs and a hint of chilli", special: false, price: "₹376"},
    {name: "Palak Patta Chaat", description: "Crispy spinach leaves topped with yogurt, chutneys, pomegranate and chaat spices", special: false, price: "₹376"},
    {name: "Pav Bhaji Fondue", description: "Creamy pav bhaji-inspired dip served with butter-toasted pav cubes for dipping", special: false, price: "₹426"},
    {name: "Buratta Bruschetta", description: "Creamy burrata on toasted crostini with heirloom tomatoes and basil drizzle", special: false, price: "₹446"},
    {name: "Halloumi Mini Burgers", description: "Grilled halloumi sliders with tangy chutney and crisp greens", special: true, price: "₹496"},
    {name: "Mezze Platter", description: "Selection of hummus, baba ghanoush, olives, pita and marinated vegetables", special: true, price: "₹526"},
    {name: "Jalapeno Cheese Balls", description: "Spicy jalapeño-filled cheese balls, crumb-fried and served with a cooling dip", special: false, price: "₹396"},
    {name: "Mini Mexican Tacos", description: "Three mini tacos with seasoned filling, pico de gallo and crema", special: false, price: "₹426"},
    {name: "Loaded Nachos", description: "Tortilla chips piled with melted cheese, jalapeños, salsa, guacamole and sour cream", special: false, price: "₹446"},
    {name: "Pull Apart Garlic Bread", description: "Butter-packed pull-apart bread with garlic, herbs and melted cheese", special: false, price: "₹396"}
]
const kebaberie = [
    {name: "Malai Broccoli", description: "Creamy malai-marinated broccoli, char-grilled", special: false, price: "₹396"},
    {name: "Bhutta Tawa Kebab", description: "Smoky corn kebab shallow-tawa cooked with masalas", special: true, price: "₹386"},
    {name: "Aloo Nazakat", description: "Soft spiced potato patty with aromatic herbs", special: false, price: "₹386"},
    {name: "Dahi Ke Kebab", description: "Creamy hung-yogurt kebabs shallow-fried to golden", special: false, price: "₹396"},
    {name: "Royal Hara Bhara Kebab", description: "Spinach and green pea patties tempered with spices", special: false, price: "₹386"},
    {name: "Rajma Galouti", description: "Silky rajma mash spiced and shaped into melt-in-mouth kebab", special: true, price: "₹396"},
    {name: "Tandoori Mushroom", description: "Tandoor-roasted mushrooms marinated in spices", special: false, price: "₹376"},
    {name: "Paneer Bharwan Tikka", description: "Paneer cubes stuffed and grilled in tandoor", special: true, price: "₹416"},
    {name: "Punjabi Paneer Tikka", description: "Classic marinated paneer grilled with peppers", special: false, price: "₹396"},
    {name: "Daawat e Kebab", description: "Platter: Punjabi Paneer Tikka, Aloo Nazakat, Dahi Ke Kebab, Royal Hara Bhara Kebab (3 pcs each)", special: false, price: "₹796"}
]
const pasta = [
    {name: "Arrabiata Pasta", description: "Spicy tomato-garlic pasta with red chili kick", special: false, price: "₹446"},
    {name: "Alfredo/Mixed Pasta", description: "Creamy Alfredo or mixed sauce pasta selection", special: false, price: "₹476"},
    {name: "Spaghetti Aglio Olio", description: "Classic garlic, olive oil and chilli spaghetti", special: false, price: "₹446"},
    {name: "Truffle Shiitake Risotto", description: "Creamy risotto with shiitake mushrooms and truffle", special: false, price: "₹596"},
    {name: "Spinach & Ricotta Ravioli", description: "Spinach-ricotta ravioli with butter-garlic/pesto/mixed sauce", special: true, price: "₹546"},
    {name: "Three Cheese Truffle Ravioli", description: "Ravioli with three cheeses served in choice of sauce", special: false, price: "₹596"},
    {name: "Baked Lasagne", description: "Layered baked lasagne with rich cheese and béchamel", special: true, price: "₹526"},
    {name: "Cannelloni", description: "Stuffed pasta tubes baked in tomato and cheese", special: false, price: "₹496"},
    {name: "Veg Au Gratin", description: "Baked vegetables with creamy cheese crust", special: false, price: "₹426"}
]
const gourmetPizza = [
    {name: "Margherita", description: "Cherry tomatoes and fresh basil over mozzarella", special: false, price: "₹476"},
    {name: "Chaasi", description: "Zucchini, babycorn, bell peppers, cherry tomato & onion", special: true, price: "₹526"},
    {name: "Farmhouse", description: "Sundried tomatoes, jalapeno, mozzarella & feta", special: false, price: "₹546"},
    {name: "Verde", description: "Artichoke, kalamata olive, roasted garlic & arugula", special: true, price: "₹546"},
    {name: "Fungi", description: "Shiitake, porcini & button mushrooms with truffle cheese", special: true, price: "₹596"},
    {name: "La Casa Mia", description: "Sundried tomatoes, red onions, spinach, black olives & feta", special: false, price: "₹546"},
    {name: "Mexican Fiesta", description: "Onions, bell peppers, broccoli and corn with spicy salsa", special: false, price: "₹526"},
    {name: "Midland Confit", description: "Jalapenos, mushrooms, broccoli, artichoke and med spices", special: true, price: "₹546"},
    {name: "Greek", description: "Pesto base with sundried tomatoes, olives, feta and basil", special: false, price: "₹566"}
]
const mainCourse = [
    {name: "Thai Curry Red/Green", description: "Choice of red or green curry, served with steamed rice", special: false, price: "₹526"},
    {name: "Burmese Khow Suey", description: "Creamy coconut noodle bowl with crunchy toppings", special: false, price: "₹526"},
    {name: "Miso Ramen Vegetables", description: "Umami-rich miso ramen loaded with vegetables", special: true, price: "₹466"},
    {name: "Exotic Greens", description: "Stir-fried greens with choice of Coriander/Hot Garlic/Kung Pao sauce", special: false, price: "₹426"},
    {name: "Devil’s Choice", description: "Spicy chef’s special vegetable preparation", special: true, price: "₹426"},
    {name: "Tangra Style Chilli Paneer", description: "Chilli paneer in Tangra-style tangy sauce", special: false, price: "₹446"},
    {name: "Manchurian", description: "Classic Indo-Chinese vegetable Manchurian", special: false, price: "₹396"},
    {name: "Tofu in Black Bean Sauce", description: "Sautéed tofu in savory black bean sauce", special: true, price: "₹476"},
    {name: "Chinese Sizzler", description: "Hakka noodles or fried rice served on sizzling plate", special: false, price: "₹546"},
    {name: "Hari Mirch Paneer", description: "Paneer cooked in green chilli masala", special: false, price: "₹446"},
    {name: "Kadhai Paneer", description: "Classic spiced kadhai paneer with peppers", special: false, price: "₹446"},
    {name: "Paneer Butter Masala", description: "Creamy tomato-based paneer curry", special: false, price: "₹446"},
    {name: "Paneer Bharwan Makhani", description: "Stuffed paneer in rich makhani gravy", special: true, price: "₹446"},
    {name: "Malai Kofta", description: "Soft koftas in creamy malai gravy", special: true, price: "₹446"},
    {name: "Pindi Chana", description: "Spicy Punjabi-style chana masala", special: false, price: "₹396"},
    {name: "Vegetable Kadhai", description: "Mixed vegetables cooked in kadhai masala", special: false, price: "₹426"},
    {name: "Vegetable Korma with Kokum", description: "Creamy korma flavored with kokum tang", special: true, price: "₹426"},
    {name: "Aloo Do Pyaza", description: "Potatoes cooked with double onions and spices", special: false, price: "₹396"},
    {name: "Hing Dhaniye ke Chatpate Aloo", description: "Asafoetida-coriander spiced tangy potatoes", special: false, price: "₹376"},
    {name: "Mexican Burrito Bowl", description: "Burrito bowl with rice, beans, veggies and salsa", special: true, price: "₹496"}
]
const dalsMore = [
    {name: "Yellow Dal Tadka", description: "Comforting yellow lentils tempered with spices", special: false, price: "₹346"},
    {name: "Dhaba Dal", description: "Rustic slow-cooked dal with robust flavours", special: false, price: "₹366"},
    {name: "Dal Makhani", description: "Creamy black lentils simmered overnight", special: true, price: "₹396"},
    {name: "Masala Khichdi aur Chaar Yaar", description: "Spiced khichdi served with four accompaniments", special: false, price: "₹346"}
]
const accompaniments = [
    {name: "Fries (Truffle/Peri Peri)", description: "Choice of truffle or peri-peri seasoned fries", special: false, price: "₹246"},
    {name: "Masala Papad/ Masala Peanuts", description: "Crispy papad or spiced peanuts", special: false, price: "₹176"},
    {name: "Raita (Masala/Pudian/Mixed)", description: "Cooling yogurt condiments", special: false, price: "₹176"},
    {name: "Roasted Papad", description: "Lightly roasted crispy papad", special: false, price: "₹96"},
    {name: "Fresh Garden Salad", description: "Seasonal greens with light dressing", special: false, price: "₹176"},
    {name: "Onion Salad", description: "Sliced onions with lemon and chaat masala", special: false, price: "₹86"}
]
const indianBread = [
    {name: "Plain/Butter Naan", description: "Soft tandoor-baked naan, plain or buttered", special: false, price: "₹116"},
    {name: "Garlic/Chilli Cheese Naan", description: "Naan topped with garlic and melted cheese", special: false, price: "₹126"},
    {name: "Paratha (Chur Chur/Lachha/Lal Mirch/Pudina/Malabar)", description: "Choice of layered or spiced paratha", special: false, price: "₹126"},
    {name: "Kulcha (Masala/Onion)", description: "Stuffed kulcha served hot", special: false, price: "₹136"},
    {name: "Pyaz Mirchi Roti", description: "Onion-chilli flavored flatbread", special: false, price: "₹126"},
    {name: "Rumali Roti", description: "Thin, soft rumali roti", special: false, price: "₹106"},
    {name: "Tandoori (Plain/Butter)", description: "Tandoor-baked roti, plain or buttered", special: false, price: "₹86"}
]
const noodlesRice = [
    {name: "Hakka/Chilli Garlic/Schezwan Noodles", description: "Choice of Indo-Chinese noodle preparations", special: false, price: "₹326"},
    {name: "Burnt Garlic/Mongolian/Schezwan Fried Rice", description: "Choice of flavorful fried rice styles", special: false, price: "₹326"},
    {name: "Jeera Rice", description: "Fragrant cumin-scented rice", special: false, price: "₹226"},
    {name: "Hyderabadi Biryani", description: "Served with salan & raita (special)", special: true, price: "₹426"}
]
const mocktails = [
    {name: "Black Tango", description: "Fresh black grapes, cranberry & house masala", special: false, price: "₹296"},
    {name: "O.K.", description: "Orange, kaffir lime, vanilla & yuzu blend", special: false, price: "₹296"},
    {name: "Watermelon Basil Cooler", description: "Watermelon, apple, basil & lime refreshment", special: false, price: "₹276"},
    {name: "Wall-E", description: "Musk melon, dragon fruit, kiwi & apple juice mix", special: false, price: "₹296"},
    {name: "Chilli Guava", description: "Guava with worcestershire and house spices", special: false, price: "₹276"},
    {name: "Foxy Lemonade", description: "Classic freshly squeezed lemonade", special: false, price: "₹246"},
    {name: "Iced Tea", description: "Elderflower Hibiscus/Green Apple/Peach/Lemon options", special: false, price: "₹246"},
    {name: "Detox Matrix", description: "Rocket, apple, grapes, coriander, honey & lime", special: false, price: "₹326"},
    {name: "Pom-e-Twist", description: "Pomegranate, pineapple, orange, ginger & lime", special: false, price: "₹346"},
    {name: "Kiwi Ice Pop", description: "Kiwi, apple, celery, galangal, star anise & lime", special: false, price: "₹346"}
]
const shakesJuices = [
    {name: "Biscoff Melted Cheesecake", description: "Shake (Original/Strawberry/Blueberry)", special: false, price: "₹346"},
    {name: "Bubble Tea", description: "Iced Mocha/Caramel/Berry bubble tea", special: false, price: "₹296"},
    {name: "KitKat/Oreo/Chocolate Shake", description: "Choice of classic chocolate shakes", special: false, price: "₹296"},
    {name: "Classic Cold Coffee", description: "Chilled cold coffee with milk and ice", special: false, price: "₹266"}
]
const teaCoffee = [
    {name: "Marshmallow Hot Chocolate", description: "Rich hot chocolate topped with marshmallows", special: false, price: "₹296"},
    {name: "Jasmine Pearl Tea", description: "Delicate jasmine-scented tea", special: false, price: "₹226"},
    {name: "Lapsang Souchong Tea", description: "Smoky black tea", special: false, price: "₹226"},
    {name: "Yerba Mate Tea", description: "Herbal yerba mate infusion", special: false, price: "₹226"},
    {name: "Darjeeling Tea", description: "Aromatic Darjeeling tea", special: false, price: "₹176"},
    {name: "Assam Tea", description: "Robust Assam brew", special: false, price: "₹176"},
    {name: "Green Tea", description: "Refreshing green tea", special: false, price: "₹176"},
    {name: "Earl Grey Tea", description: "Bergamot-flavored black tea", special: false, price: "₹176"},
    {name: "Chamomile Tea", description: "Soothing chamomile infusion", special: false, price: "₹176"},
    {name: "English Breakfast Tea", description: "Classic strong breakfast tea", special: false, price: "₹176"},
    {name: "Espresso", description: "Concentrated coffee shot", special: false, price: "₹146"},
    {name: "Americano", description: "Espresso with hot water", special: false, price: "₹186"},
    {name: "Cappuccino", description: "Espresso with steamed milk and foam", special: false, price: "₹226"},
    {name: "Doppio", description: "Double shot espresso", special: false, price: "₹196"},
    {name: "Café Latte", description: "Smooth espresso with steamed milk", special: false, price: "₹226"},
    {name: "Vanis Coffee", description: "Vanilla-flavored coffee", special: false, price: "₹196"},
    {name: "Iced Latte", description: "Chilled espresso with milk and ice", special: false, price: "₹226"},
    {name: "Flavoured Cappuccino", description: "Vanilla or caramel flavored cappuccino", special: false, price: "₹246"},
    {name: "Belgium Café Mocha", description: "Chocolatey café mocha with Belgian chocolate", special: false, price: "₹226"}
]
const otherBeverages = [
    {name: "Bottled Water", description: "Still bottled water", special: false, price: "₹140"},
    {name: "Aerated Drinks", description: "Assorted carbonated soft drinks", special: false, price: "₹166"},
    {name: "Tonic Water", description: "Tonic water for mixers", special: false, price: "₹146"},
    {name: "Ginger Ale", description: "Sparkling ginger ale", special: false, price: "₹166"},
    {name: "Fresh Lime Soda", description: "Classic salted or sweet lime soda", special: false, price: "₹196"},
    {name: "Red Bull", description: "Energy drink", special: false, price: "₹246"},
    {name: "Sparkling Water", description: "Premium sparkling water", special: false, price: "₹296"}
]
const dessert = [
    {name: "Gulab Jamun Cheesecake", description: "Fusion cheesecake topped with gulab jamun", special: false, price: "₹346"},
    {name: "Callebaut Crunch Cheesecake", description: "Crunchy chocolate cheesecake with Callebaut", special: false, price: "₹376"},
    {name: "Biscoff Crumble", description: "Biscoff cookie crumble served with cream", special: false, price: "₹376"},
    {name: "Tiramisu", description: "Classic coffee-flavored Italian dessert", special: false, price: "₹396"},
    {name: "Hazelnut Mousse", description: "Light hazelnut mousse with crunchy praline", special: false, price: "₹346"},
    {name: "Sizzling Brownie", description: "Warm brownie served on a sizzling hot plate with ice cream", special: false, price: "₹296"},
    {name: "Foxy Sundae", description: "Signature sundae with assorted toppings", special: false, price: "₹326"},
    {name: "Choice of Kulfi", description: "Selection of kulfi flavors", special: false, price: "₹276"}
]
const menu = [
    {name: "Soup", content: soup},
    {name: "Salad", content: salad},
    {name: "Sushi", content: sushi},
    {name: "Appetizer", content: appetizer},
    {name: "Kebaberie", content: kebaberie},
    {name: "Pasta", content: pasta},
    {name: "Gourmet Pizza", content: gourmetPizza},
    {name: "Main Course", content: mainCourse},
    {name: "Dals & More", content: dalsMore},
    {name: "Accompaniments", content: accompaniments},
    {name: "Indian Breads", content: indianBread},
    {name: "Noodles & Rice", content: noodlesRice},
    {name: "Mocktails", content: mocktails},
    {name: "Shakes & Juices", content: shakesJuices},
    {name: "Tea & Coffee", content: teaCoffee},
    {name: "Other Beverages", content: otherBeverages},
    {name: "Dessert", content: dessert}
]

export default menu