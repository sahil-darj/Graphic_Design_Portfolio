const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

// Map of converted files (original relative path -> webp relative path)
const convertedMap = {};

async function convertDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const relativePath = path.relative(publicDir, fullPath).replace(/\\/g, '/');
        
        if (fs.statSync(fullPath).isDirectory()) {
            await convertDirectory(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const webpPath = fullPath.substring(0, fullPath.length - ext.length) + '.webp';
                const relativeWebpPath = relativePath.substring(0, relativePath.length - ext.length) + '.webp';
                const stats = fs.statSync(fullPath);
                
                console.log(`Processing: ${relativePath} (${(stats.size/1024).toFixed(1)} KB)`);
                try {
                    let image = sharp(fullPath);
                    const metadata = await image.metadata();
                    
                    // Resize to a maximum width of 1600px if it's wider
                    if (metadata.width > 1600) {
                        image = image.resize({ width: 1600, withoutEnlargement: true });
                    }
                    
                    // Convert to webp with quality 75 (excellent balance of size and quality)
                    await image.webp({ quality: 75 }).toFile(webpPath);
                    
                    const newStats = fs.statSync(webpPath);
                    console.log(` -> Converted to WebP: ${relativeWebpPath} (${(newStats.size/1024).toFixed(1)} KB) [Saved ${((1 - newStats.size/stats.size)*100).toFixed(1)}%]`);
                    
                    // Remove original file
                    fs.unlinkSync(fullPath);
                    
                    // Record conversion
                    convertedMap['/' + relativePath] = '/' + relativeWebpPath;
                } catch (err) {
                    console.error(`Error converting ${relativePath}:`, err.message);
                }
            }
        }
    }
}

function updateReferences(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            updateReferences(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            if (['.tsx', '.ts', '.jsx', '.js', '.html', '.css'].includes(ext)) {
                let content = fs.readFileSync(fullPath, 'utf8');
                let modified = false;
                
                // Replace all occurrences of original paths with webp paths
                for (const [orig, webp] of Object.entries(convertedMap)) {
                    if (content.includes(orig)) {
                        // Standard replace
                        content = content.split(orig).join(webp);
                        modified = true;
                    }
                    
                    // Also handle relative references or references without leading slash if any
                    const origNoSlash = orig.startsWith('/') ? orig.substring(1) : orig;
                    const webpNoSlash = webp.startsWith('/') ? webp.substring(1) : webp;
                    if (content.includes(origNoSlash)) {
                        content = content.split(origNoSlash).join(webpNoSlash);
                        modified = true;
                    }
                }
                
                if (modified) {
                    fs.writeFileSync(fullPath, content, 'utf8');
                    console.log(`Updated references in: ${path.relative(__dirname, fullPath)}`);
                }
            }
        }
    }
}

async function main() {
    console.log('--- Starting Image Conversion to WebP ---');
    await convertDirectory(publicDir);
    console.log('\n--- Updating Code References ---');
    updateReferences(srcDir);
    
    // Also run update-gallery-data.cjs if it exists
    const updateGalleryScript = path.join(__dirname, 'update-gallery-data.cjs');
    if (fs.existsSync(updateGalleryScript)) {
        console.log('\n--- Running update-gallery-data.cjs ---');
        try {
            require(updateGalleryScript);
        } catch (e) {
            console.error('Error running update-gallery-data.cjs:', e.message);
        }
    }
    
    console.log('\nWebP Optimization completed successfully!');
}

main().catch(console.error);
