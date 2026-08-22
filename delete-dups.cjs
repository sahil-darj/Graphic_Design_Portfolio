const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const assetsDir = path.join(__dirname, 'public', 'Assets');
const hashes = {};
let deleted = 0;

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (/\.(png|jpe?g|webp)$/i.test(file)) {
      const data = fs.readFileSync(fullPath);
      const hash = crypto.createHash('md5').update(data).digest('hex');
      if (hashes[hash]) {
        console.log(`Deleting duplicate: ${fullPath} (matches ${hashes[hash]})`);
        fs.unlinkSync(fullPath);
        deleted++;
      } else {
        hashes[hash] = fullPath;
      }
    }
  }
}

walk(assetsDir);
console.log(`Deleted ${deleted} duplicate images.`);
