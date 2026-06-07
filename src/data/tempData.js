exports.menuData = [
  {
    id: 'pizza',
    category: 'Pizza',
    icon: '🍕',
    hasSizes: true,
    items: [
      { id: 'p1', name: 'Margherita', prices: { Small: 129, Medium: 159, Large: 209 }, description: 'Classic delight with 100% real mozzarella cheese & fresh basil.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop', isBestSeller: true },
      { id: 'p2', name: 'Onion Pizza', prices: { Small: 129, Medium: 159, Large: 209 }, description: 'Delicious combination of onions, capsicum, olives & cheese.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop', isBestSeller: false },
      { id: 'p3', name: 'Veggie Feast', prices: { Small: 149, Medium: 179, Large: 229 }, description: 'Loaded with fresh veggies, paneer & mozzarella cheese.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop', isBestSeller: true },
      { id: 'p14', name: 'Cheese Burst', prices: { Small: 239, Medium: 279, Large: 329 }, description: 'Double cheese with mozzarella burst in every bite.', image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=600&auto=format&fit=crop', isBestSeller: true },
      { id: 'p4', name: 'Cheese Paneer', prices: { Small: 149, Medium: 179, Large: 229 } },
      { id: 'p5', name: 'Tandoori Paneer', prices: { Small: 149, Medium: 179, Large: 229 } },
      { id: 'p6', name: 'Zesty Paneer Spicy', prices: { Small: 149, Medium: 179, Large: 229 } },
      { id: 'p7', name: 'Cheese Corn', prices: { Small: 149, Medium: 179, Large: 229 } },
      { id: 'p8', name: 'Schezwan Pizza', prices: { Small: 149, Medium: 179, Large: 229 } },
      { id: 'p9', name: 'Paneer Corn', prices: { Small: 179, Medium: 229, Large: 289 } },
      { id: 'p10', name: 'Paneer Makhani', prices: { Small: 179, Medium: 229, Large: 289 } },
      { id: 'p11', name: 'Veg Farm House', prices: { Small: 219, Medium: 269, Large: 319 } },
      { id: 'p12', name: 'Veg Mexicana', prices: { Small: 219, Medium: 269, Large: 319 } },
      { id: 'p13', name: "Vishu's Special Pizza", prices: { Small: 219, Medium: 269, Large: 319 } }
    ]
  },
  {
    id: 'burger',
    category: 'Burger',
    icon: '🍔',
    hasSizes: false,
    items: [
      { id: 'b1', name: 'Classic Burger', price: 49 },
      { id: 'b2', name: 'Mayo Overloaded Burger', price: 59 },
      { id: 'b3', name: 'Spicy Mayo Burger', price: 59 },
      { id: 'b4', name: 'Cheesy Burger', price: 69 },
      { id: 'b5', name: 'Spicy Corn Chat Burger', price: 79 },
      { id: 'b6', name: 'Schezwan Burger', price: 79 },
      { id: 'b7', name: 'Spinach Corn Burger', price: 89 },
      { id: 'b8', name: 'Chef Special Burger', price: 99 },
      { id: 'b9', name: 'Double Tikki Burger', price: 109 },
      { id: 'b10', name: "Vishu's Special Burger", price: 109 },
      { id: 'b11', name: 'Special Mexican Burger', price: 119 },
      { id: 'b12', name: 'Paneer Burger', price: 119 },
      { id: 'b13', name: 'Jumbo Burger', price: 119 },
      { id: 'b14', name: 'Maharaja Special Burger', price: 129 }
    ]
  },
  {
    id: 'fries',
    category: 'Fries',
    icon: '🍟',
    hasSizes: false,
    items: [
      { id: 'f1', name: 'French Fries', price: 79 },
      { id: 'f2', name: 'Peri Peri Fries', price: 89 },
      { id: 'f3', name: 'Masala Peri Peri Fries', price: 99 },
      { id: 'f4', name: 'Classic Cheese Fries', price: 99 },
      { id: 'f5', name: 'Peri Peri Cheese Fries', price: 109 },
      { id: 'f6', name: 'Masala Cheese Peri Peri Fries', price: 119 }
    ]
  },
  {
    id: 'sandwich',
    category: 'Sandwich',
    icon: '🥪',
    hasSizes: false,
    items: [
      { id: 's1', name: 'Veg Grilled Sandwich', price: 79 },
      { id: 's2', name: 'Cheese Grilled Sandwich', price: 99 },
      { id: 's3', name: 'Cheese Corn Sandwich', price: 99 },
      { id: 's4', name: 'Tandoori Paneer Sandwich', price: 109 },
      { id: 's5', name: 'Club Sandwich', price: 129 }
    ]
  },
  {
    id: 'pasta',
    category: 'Pasta',
    icon: '🍝',
    hasSizes: false,
    items: [
      { id: 'pa1', name: 'Red Sauce Pasta', price: 129 },
      { id: 'pa2', name: 'White Sauce Pasta', price: 129 }
    ]
  },
  {
    id: 'maggi',
    category: 'Maggi',
    icon: '🍜',
    hasSizes: false,
    items: [
      { id: 'm1', name: 'Plain Maggi', price: 59 },
      { id: 'm2', name: 'Masala Maggi', price: 79 },
      { id: 'm3', name: 'Cheese Maggi', price: 89 }
    ]
  },
  {
    id: 'momos',
    category: 'Fried Momos',
    icon: '🥟',
    hasSizes: false,
    items: [
      { id: 'mo1', name: 'Schezwan Momos', price: 89 },
      { id: 'mo2', name: 'Mix Veg Momos', price: 89 },
      { id: 'mo3', name: 'Paneer Tikka Momos', price: 99 },
      { id: 'mo4', name: 'Cheese Corn Momos', price: 99 },
      { id: 'mo5', name: 'Kurkure Momos', price: 129 }
    ]
  },
  {
    id: 'special',
    category: 'Special Stuff',
    icon: '⭐',
    hasSizes: false,
    items: [
      { id: 'sp1', name: 'Cheese Garlic Bread (4 pcs)', price: 89 },
      { id: 'sp2', name: 'Veg Spring Roll (4 pcs)', price: 89 },
      { id: 'sp3', name: 'Cheese Corn Triangle (6 pcs)', price: 89 },
      { id: 'sp4', name: 'Cheesy Nuggets (6 pcs)', price: 79 },
      { id: 'sp5', name: 'Harbhara Kebab (6 pcs)', price: 89 },
      { id: 'sp6', name: 'Wafers Bhel', price: 39 }
    ]
  },
  {
    id: 'mocktails',
    category: 'Mocktails',
    icon: '🍹',
    hasSizes: false,
    items: [
      { id: 'mk1', name: 'Blue Lagoon', price: 59 },
      { id: 'mk2', name: 'Bubble Gum', price: 59 },
      { id: 'mk3', name: 'Cotton Candy', price: 59 },
      { id: 'mk4', name: 'Kalla Khatta', price: 59 },
      { id: 'mk5', name: 'Virgin Mojito', price: 69 },
      { id: 'mk6', name: 'Fresh Jeera Soda', price: 29 }
    ]
  },
  {
    id: 'coldcoffee',
    category: 'Crazy Cold Coffee',
    icon: '☕',
    hasSizes: false,
    items: [
      { id: 'cc1', name: 'Cold Coffee', price: 69 },
      { id: 'cc2', name: 'Thick Cold Coffee', price: 99 },
      { id: 'cc3', name: 'Cold Coffee with Crush', price: 99 },
      { id: 'cc4', name: 'Cold Coffee with Ice Cream', price: 109 }
    ]
  },
  {
    id: 'shakes',
    category: 'Funky Shakes',
    icon: '🥤',
    hasSizes: false,
    items: [
      { id: 'sh1', name: 'Oreo Shake', price: 99 },
      { id: 'sh2', name: 'KitKat Shake', price: 99 },
      { id: 'sh3', name: 'Sitafal Shake', price: 109 },
      { id: 'sh4', name: 'CAD-B Dark Choco', price: 109 },
      { id: 'sh5', name: 'CAD-M Milk Choco', price: 109 }
    ]
  },
  {
    id: 'dessert',
    category: 'Dessert',
    icon: '🍰',
    hasSizes: false,
    items: [
      { id: 'd1', name: 'Muffin', price: 29 },
      { id: 'd2', name: 'Waffles', price: 39 },
      { id: 'd3', name: 'Chocolate Sandwich', price: 89 },
      { id: 'd4', name: 'Hot Sizzling Brownie', price: 129 }
    ]
  },
  {
    id: 'hotbeverages',
    category: 'Refreshing Beverages',
    icon: '☕',
    hasSizes: false,
    items: [
      { id: 'hb1', name: 'Black Coffee', price: 29 },
      { id: 'hb2', name: 'Hot Coffee', price: 39 },
      { id: 'hb3', name: 'Hot Chocolate', price: 49 }
    ]
  }
];
