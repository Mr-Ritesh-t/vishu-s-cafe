const fs = require('fs');

let content = fs.readFileSync('menuData.js', 'utf-8');

// We will use regex to find items and replace them
// But menuData.js is a module that exports menuData. Let's just import it, mutate it, and rewrite the file.
// Since it's ES module syntax `export const menuData = [...]`, we might need to change it to CJS or just parse it.

// Let's parse it manually or execute it by temporarily changing to CJS.
const tempFile = 'tempData.js';
fs.writeFileSync(tempFile, content.replace('export const menuData', 'exports.menuData'));

const { menuData } = require('./tempData.js');

const categoryImages = {
  pizza: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop',
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop',
  fries: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop',
  sandwich: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop',
  pasta: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=600&auto=format&fit=crop',
  maggi: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=600&auto=format&fit=crop',
  momos: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=600&auto=format&fit=crop',
  special: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=600&auto=format&fit=crop',
  mocktails: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop',
  coldcoffee: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop',
  shakes: 'https://images.unsplash.com/photo-1572656306390-40a9fc3899f7?q=80&w=600&auto=format&fit=crop',
  dessert: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop',
  hotbeverages: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop'
};

const defaultImage = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop';

menuData.forEach(cat => {
  cat.items.forEach((item, index) => {
    // skip if already has image
    if (!item.image) {
      item.image = categoryImages[cat.id] || defaultImage;
    }
    if (!item.description) {
      item.description = `Delicious and freshly prepared ${item.name.toLowerCase()} made with premium ingredients.`;
    }
    // Set some as best sellers randomly or first 2 items
    if (item.isBestSeller === undefined) {
      item.isBestSeller = index < 2; 
    }
  });
});

const fileOutput = `export const menuData = ${JSON.stringify(menuData, null, 2)};
`;

fs.writeFileSync('menuData.js', fileOutput);
fs.unlinkSync(tempFile);
console.log('Success');
