const fs = require('fs');

const idPools = {
  pizza: [
    "1513104890138-7c749659a591",
    "1565299624946-b28f40a0ae38",
    "1593560708920-61dd98c46a4e",
    "1574071318508-1cdbab80d002",
    "1604382354936-07c5d9983bd3",
    "1571407970349-bc81e73b6680",
    "1576458088443-04a19bb13da6",
    "1628840042765-356cda07504e",
    "1588315029750-9fd7ac80d590",
    "1604382355076-af4b0732386a",
    "1590947132387-155cc3be7ceb",
    "1552539618-7eec9b4d1796",
    "1573821663172-440120bf31b9",
    "1534308983496-4f4dcce8b4c0",
    "1613564834361-9436948817d1"
  ],
  burger: [
    "1568901346375-23c9450c58cd",
    "1586190848861-99aa4a171e90",
    "1594212202878-436622df14ee",
    "1550547660-d154283c441b",
    "1606131731446-5568d87113e6",
    "1553979459-d2229ba7433b",
    "1625860341738-4e3ed993e3ed",
    "1586816001966-79b736744398",
    "1572802419224-296b0aeb0c07",
    "1610440042712-0f04e1bc2e86",
    "1593504049898-0cc226685826",
    "1605371302834-ff4c5f949437",
    "1571091718767-18b5b1457add",
    "1551782450-a2132b4ba21d"
  ],
  fries: [
    "1572490122747-3968b75cc699",
    "1630431341018-b22da9f929d0",
    "1585109649288-ee36df325859",
    "1534422298391-e4f8c819e6eb",
    "1541592102-8114f7514592",
    "1603569283847-3295e2cd1e86"
  ],
  sandwich: [
    "1528735602780-2552fd46c7af",
    "1550508493-27083a21644d",
    "1628191079373-19bd691efdf6",
    "1567220015505-1a2c3a506161",
    "1619895319808-724e5d6d845e"
  ],
  pasta: [
    "1473093295043-cdd812d0e601",
    "1621996311202-bcfaf4017e2e"
  ],
  maggi: [
    "1612929633738-8fe44f7ec841",
    "1585032226651-72f45ce7980e",
    "1600335895289-447a16b9b1e2"
  ],
  momos: [
    "1625220194771-7ebdea0b70b9",
    "1496116218417-1f4803923c72",
    "1541529086526-db283c563270",
    "1626804475297-41609ae08ec0",
    "1534422298391-e4f8c819e6eb"
  ],
  mocktails: [
    "1513558161293-cdaf765ed2fd",
    "1551024709-8f23befc6f87",
    "1536934331453-f596200e0000",
    "1544145945-f90425340c7e",
    "1556881286-fc6915169721",
    "1587223962930-cb7f31384c19"
  ],
  coldcoffee: [
    "1461023058943-07fcbe16d735",
    "1578314675249-1694ef6d00cb",
    "1558500216-724584061a9a",
    "1572442388788-d56f56d05f31"
  ],
  shakes: [
    "1572656306390-40a9fc3899f7",
    "1553177595-bde27003c004",
    "1551024601-bec78aea704b",
    "1579954115545-d41c9bc88a4c",
    "1587223962930-cb7f31384c19"
  ],
  dessert: [
    "1551024601-bec78aea704b",
    "1550617931-e17a7b70dce7",
    "1587314168485-64bc63b4685f",
    "1563729784-0994f57b01b6"
  ],
  hotbeverages: [
    "1541167760496-1628856ab772",
    "1558500216-724584061a9a",
    "1497935586351-b67a49e012bf"
  ],
  special: [
    "1541529086526-db283c563270",
    "1625220194771-7ebdea0b70b9",
    "1564834724105-918b73d1b9e0",
    "1534422298391-e4f8c819e6eb",
    "1585109649288-ee36df325859",
    "1630431341018-b22da9f929d0"
  ]
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
  let pool = idPools[cat.id];
  if (!pool) {
    console.warn("No pool for category:", cat.id);
    // fallback to generic food image
    pool = ["1546069901-ba9599a7e63c", "1497034825429-c343d7c6a68f"];
  }
  
  cat.items.forEach((item, index) => {
    // pick an image from the pool based on index
    const imageId = pool[index % pool.length];
    item.image = `https://images.unsplash.com/photo-${imageId}?q=80&w=600&auto=format&fit=crop`;
  });
});

const fileOutput = `export const menuData = ${JSON.stringify(menuData, null, 2)};\n`;
fs.writeFileSync('d:/coding/cafe/src/data/menuData.js', fileOutput);
console.log('Images updated successfully!');
