const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            await processDirectory(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const stats = fs.statSync(fullPath);
                if (stats.size > 1024 * 1024) { // Larger than 1 MB
                    console.log(`Optimizing: ${fullPath} (${(stats.size/1024/1024).toFixed(2)} MB)`);
                    const tempPath = fullPath + '.tmp';
                    try {
                        let image = sharp(fullPath);
                        const metadata = await image.metadata();
                        
                        // Resize if huge
                        if (metadata.width > 2000) {
                            image = image.resize({ width: 2000 });
                        }
                        
                        if (ext === '.png') {
                            await image.png({ quality: 60, compressionLevel: 9, effort: 7 }).toFile(tempPath);
                        } else {
                            await image.jpeg({ quality: 70 }).toFile(tempPath);
                        }
                        
                        // Replace original
                        fs.renameSync(tempPath, fullPath);
                        const newSize = fs.statSync(fullPath).size;
                        console.log(` -> Done! New size: ${(newSize/1024/1024).toFixed(2)} MB`);
                    } catch (err) {
                        console.error(`Error processing ${fullPath}:`, err.message);
                        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
                    }
                }
            }
        }
    }
}

processDirectory(publicDir).then(() => console.log('Finished optimizing images!'));
