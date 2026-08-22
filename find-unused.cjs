const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

const publicFiles = [];
function walkPublic(dir) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
        const full = path.join(dir, f);
        if (fs.statSync(full).isDirectory()) walkPublic(full);
        else publicFiles.push(full);
    }
}
walkPublic(publicDir);

const hashes = {};
const duplicates = [];
for (const file of publicFiles) {
    const content = fs.readFileSync(file);
    const hash = crypto.createHash('md5').update(content).digest('hex');
    if (hashes[hash]) {
        duplicates.push({ original: hashes[hash], duplicate: file });
    } else {
        hashes[hash] = file;
    }
}

const srcFiles = [];
function walkSrc(dir) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
        const full = path.join(dir, f);
        if (fs.statSync(full).isDirectory()) walkSrc(full);
        else if (full.endsWith('.tsx') || full.endsWith('.ts')) srcFiles.push(full);
    }
}
walkSrc(srcDir);

let allSrcContent = '';
for (const f of srcFiles) {
    allSrcContent += fs.readFileSync(f, 'utf8') + '\n';
}

const unused = [];
for (const file of publicFiles) {
    const relPath = path.relative(publicDir, file).replace(/\\/g, '/');
    const basename = path.basename(file);
    if (!allSrcContent.includes(basename) && basename !== 'vite.svg' && basename !== 'robots.txt' && !relPath.startsWith('dist/')) {
        unused.push(relPath);
    }
}

fs.writeFileSync('unused-report.json', JSON.stringify({
    unused: unused,
    duplicates: duplicates.map(d => ({
        original: path.relative(publicDir, d.original).replace(/\\/g, '/'),
        duplicate: path.relative(publicDir, d.duplicate).replace(/\\/g, '/')
    }))
}, null, 2));

console.log('Done');
