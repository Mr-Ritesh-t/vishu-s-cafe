const fs = require('fs');

const descriptionsMap = {
  // Pizza
  "Margherita": "Classic cheese pizza with rich mozzarella",
  "Onion Pizza": "Cheese pizza topped with fresh onions",
  "Veggie Feast": "Capsicum, onion, tomato & cheese",
  "Cheese Paneer": "Loaded with paneer and cheese",
  "Tandoori Paneer": "Spicy tandoori paneer topping",
  "Zesty Paneer Spicy": "Paneer with spicy Indian flavors",
  "Cheese Corn": "Sweet corn & extra cheese",
  "Schezwan Pizza": "Spicy Schezwan sauce & cheese",
  "Paneer Corn": "Paneer & sweet corn combo",
  "Paneer Makhani": "Creamy makhani gravy with paneer",
  "Veg Farm House": "Loaded with fresh vegetables",
  "Veg Mexicana": "Mexican spices & crunchy veggies",
  "Vishu's Special Pizza": "Signature chef special pizza",
  "Cheese Burst": "Double cheese loaded pizza",

  // Burger
  "Classic Burger": "Crispy veggie patty burger",
  "Mayo Overloaded Burger": "Loaded with creamy mayo",
  "Spicy Mayo Burger": "Mayo burger with spicy kick",
  "Cheesy Burger": "Burger topped with cheese",
  "Spicy Corn Chat Burger": "Crunchy corn chat filling",
  "Schezwan Burger": "Spicy Schezwan flavored burger",
  "Spinach Corn Burger": "Healthy spinach & corn patty",
  "Chef Special Burger": "Special recipe by chef",
  "Double Tikki Burger": "Double crispy patty burger",
  "Vishu's Special Burger": "Signature burger of the cafe",
  "Special Mexican Burger": "Mexican style spicy burger",
  "Paneer Burger": "Paneer patty with fresh veggies",
  "Jumbo Burger": "Bigger burger for bigger hunger",
  "Maharaja Special Burger": "Premium loaded burger",

  // Fries
  "French Fries": "Crispy salted fries",
  "Peri Peri Fries": "Fries tossed in peri peri seasoning",
  "Masala Peri Peri Fries": "Extra spicy masala fries",
  "Classic Cheese Fries": "Fries topped with cheese",
  "Peri Peri Cheese Fries": "Cheese & peri peri combo",
  "Masala Cheese Fries": "Cheesy spicy loaded fries",

  // Sandwich
  "Veg Grilled Sandwich": "Crispy grilled vegetable sandwich",
  "Cheese Grilled Sandwich": "Grilled sandwich with cheese",
  "Cheese Corn Sandwich": "Sweet corn & cheese filling",
  "Tandoori Paneer Sandwich": "Tandoori paneer stuffing",
  "Club Sandwich": "Triple layer loaded sandwich",

  // Pasta
  "Red Sauce Pasta": "Tangy tomato sauce pasta",
  "White Sauce Pasta": "Creamy white sauce pasta",

  // Maggi
  "Plain Maggi": "Classic masala Maggi",
  "Masala Maggi": "Extra spicy masala flavor",
  "Cheese Maggi": "Cheesy loaded Maggi",

  // Fried Momos
  "Schezwan Momos": "Spicy Schezwan fried momos",
  "Mix Veg Momos": "Stuffed mixed vegetable momos",
  "Paneer Tikka Momos": "Paneer tikka flavored momos",
  "Cheese Corn Momos": "Cheese & corn filling",
  "Kurkure Momos": "Extra crispy crunchy momos",

  // Shakes
  "Oreo Shake": "Creamy Oreo milkshake",
  "KitKat Shake": "Chocolate KitKat shake",
  "Sitafal Shake": "Fresh custard apple shake",
  "CAD-B Dark Choco": "Rich dark chocolate shake",
  "CAD-M Milk Choco": "Smooth milk chocolate shake",

  // Cold Coffee
  "Cold Coffee": "Chilled coffee delight",
  "Thick Cold Coffee": "Extra thick & creamy coffee",
  "Cold Coffee with Crush": "Coffee topped with crush",
  "Cold Coffee with Ice Cream": "Coffee with vanilla ice cream",

  // Mocktails
  "Blue Lagoon": "Refreshing blue citrus mocktail",
  "Bubble Gum": "Sweet bubble gum flavor",
  "Cotton Candy": "Candy flavored mocktail",
  "Kalla Khatta": "Tangy Indian flavor drink",
  "Virgin Mojito": "Mint & lemon refresher"
};

let content = fs.readFileSync('d:/coding/cafe/src/data/menuData.js', 'utf8');

const match = content.match(/export const menuData = (\[[\s\S]+\]);/);
if (!match) {
  console.error("Could not find menuData array in file.");
  process.exit(1);
}

let menuData;
try {
  menuData = eval(match[1]);
} catch (e) {
  console.error("Error parsing menuData:", e);
  process.exit(1);
}

menuData.forEach(cat => {
  cat.items.forEach(item => {
    // We check if we have a new description, else we keep the existing one or fallback
    if (descriptionsMap[item.name]) {
      item.description = descriptionsMap[item.name];
    }
  });
});

const fileOutput = `export const menuData = ${JSON.stringify(menuData, null, 2)};\n`;
fs.writeFileSync('d:/coding/cafe/src/data/menuData.js', fileOutput);
console.log('Descriptions updated successfully!');
