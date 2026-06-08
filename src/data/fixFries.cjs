const fs = require('fs');

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
  if (cat.id === 'fries') {
    cat.items.forEach((item, i) => {
      // Just assign the working fries picture to all of them
      item.image = "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=600&auto=format&fit=crop";
    });
  }
});

const fileOutput = `export const menuData = ${JSON.stringify(menuData, null, 2)};\n`;
fs.writeFileSync('d:/coding/cafe/src/data/menuData.js', fileOutput);
console.log('Fries images updated successfully!');
