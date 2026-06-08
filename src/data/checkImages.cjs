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
      // Unsplash returns 302 or 200 usually. If it's a 404, it means the photo doesn't exist.
      resolve(res.statusCode);
    }).on('error', (e) => {
      resolve(500);
    });
  });
};

async function checkAll() {
  const broken = [];
  for (const cat of menuData) {
    for (const item of cat.items) {
      const status = await checkUrl(item.image);
      if (status === 404 || status >= 400) {
        broken.push({ id: item.id, name: item.name, url: item.image, status });
        console.log(`[BROKEN] ${item.name} (${status})`);
      } else {
        console.log(`[OK] ${item.name} (${status})`);
      }
    }
  }
  fs.writeFileSync('d:/coding/cafe/src/data/brokenImages.json', JSON.stringify(broken, null, 2));
  console.log(`Done. Found ${broken.length} broken images.`);
}

checkAll();
