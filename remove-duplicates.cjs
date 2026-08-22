const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, 'unused-report.json');
const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(reportPath)) {
    console.error("Report not found!");
    process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
const duplicates = report.duplicates;

// Find all tsx files
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

let count = 0;

for (const dup of duplicates) {
    const originalUrl = '/' + dup.original;
    const duplicateUrl = '/' + dup.duplicate;
    
    // Update src files
    for (const file of srcFiles) {
        let content = fs.readFileSync(file, 'utf8');
        if (content.includes(duplicateUrl)) {
            content = content.split(duplicateUrl).join(originalUrl);
            fs.writeFileSync(file, content);
            console.log(`Updated ${path.basename(file)}: replaced ${duplicateUrl}`);
        }
    }
    
    // Delete the duplicate file
    const dupFilePath = path.join(publicDir, dup.duplicate);
    if (fs.existsSync(dupFilePath)) {
        fs.unlinkSync(dupFilePath);
        count++;
    }
}
console.log(`Finished! Successfully deleted ${count} duplicate image files and updated the code to point to the originals.`);
