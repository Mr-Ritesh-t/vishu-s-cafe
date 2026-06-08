const fs = require('fs');
const https = require('https');

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

const checkUrl = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', () => {
      resolve(500);
    });
  });
};

const defaultImages = {
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
  fries: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop",
  sandwich: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop",
  pasta: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=600&auto=format&fit=crop",
  maggi: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=600&auto=format&fit=crop",
  momos: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=600&auto=format&fit=crop",
  mocktails: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop",
  coldcoffee: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop",
  shakes: "https://images.unsplash.com/photo-1572656306390-40a9fc3899f7?q=80&w=600&auto=format&fit=crop",
  dessert: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop",
  hotbeverages: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop",
  special: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=600&auto=format&fit=crop"
};

async function fixBroken() {
  for (const cat of menuData) {
    // Collect working images for this category
    let workingImages = [];
    for (const item of cat.items) {
      const status = await checkUrl(item.image);
      if (status === 200 || status === 302) {
        workingImages.push(item.image);
      }
    }
    
    // If no working images found in category, use the default fallback
    if (workingImages.length === 0) {
      workingImages.push(defaultImages[cat.id] || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop");
    }

    // Replace broken ones
    for (const item of cat.items) {
      const status = await checkUrl(item.image);
      if (status >= 400) {
        // Pick a random working image from the same category
        item.image = workingImages[Math.floor(Math.random() * workingImages.length)];
        console.log(`Fixed ${item.name}`);
      }
    }
  }

  const fileOutput = `export const menuData = ${JSON.stringify(menuData, null, 2)};\n`;
  fs.writeFileSync('d:/coding/cafe/src/data/menuData.js', fileOutput);
  console.log('Fixed broken images successfully!');
}

fixBroken();
