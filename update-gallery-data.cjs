const fs = require('fs');
const path = require('path');

const publicAssetsDir = path.join(__dirname, 'public', 'Assets');
const galleryFile = path.join(__dirname, 'src', 'components', 'Gallery.tsx');

const folderMapping = {
  "Social Media": { category: "socialmedia", medium: "Social Media Design" },
  "order": { category: "digital", medium: "Digital Art" },
  "Handmade": { category: "handmade", medium: "Traditional Art" },
  "LFA": { category: "group", medium: "Graphic Design" },
  "celeb": { category: "celebrity", medium: "Digital Art" },
  "caricature": { category: "caricature", medium: "Digital Caricature" },
  "oil": { category: "oilpainting", medium: "Digital Oil Painting" },
  "Logos": { category: "Logo", medium: "Logo Design" },
  "stencil": { category: "stencil", medium: "Digital Stencil" },
  "uiux": { category: "UIUX", medium: "UI/UX Design" },
  "Certificate": { category: "certificate", medium: "Certificate Design" }
};

let artworks = [];
let idCounter = 1;

for (const [folder, data] of Object.entries(folderMapping)) {
  const folderPath = path.join(publicAssetsDir, folder);
  if (!fs.existsSync(folderPath)) continue;

  const files = fs.readdirSync(folderPath).sort((a, b) => {
    if (a.toLowerCase() === 'oil painting.png') return -1;
    if (b.toLowerCase() === 'oil painting.png') return 1;
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
  });
  for (const file of files) {
    if (!file.match(/\.(png|jpe?g|webp)$/i)) continue;

    // Create a nice title from the filename
    let title = path.parse(file).name;
    
    // Check if filename is a UUID/hash or generic camera file
    const isUUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i.test(title);
    const isHexHash = /^[0-9a-fA-F]{32,}$/i.test(title);
    const isGeneric = /^(WhatsApp Image|Screenshot|IMG[-_])/i.test(title);
    const isOnlyNumbers = /^\d+$/.test(title);
    const isLongRandomKey = /^[a-zA-Z0-9_-]{20,}$/.test(title) && !title.includes(' ');

    if (isUUID || isHexHash || isGeneric || isOnlyNumbers || isLongRandomKey) {
      title = `${data.medium} Project`;
    } else {
      // Clean up social media tags and CTA text
      title = title.replace(/Dm\s+me\s+for\s+order.*/i, '');
      title = title.replace(/Dm\s+me.*/i, '');
      title = title.replace(/#\w+/g, ''); // hashtags
      title = title.replace(/@\w+/g, ''); // social handles
      
      // Clean up double dots/dots/hyphens/underscores
      title = title.replace(/\.+/g, ' ');
      title = title.replace(/[-_]+/g, ' ');
      
      // Clean up extra spaces
      title = title.replace(/\s+/g, ' ').trim();
      
      if (!title) {
        title = `${data.medium} Project`;
      } else {
        // Capitalize words
        title = title.replace(/\b\w/g, l => l.toUpperCase());
        // Clean trailing ampersands/spaces
        title = title.replace(/\s*&\s*$/, '').trim();
      }
    }

    artworks.push({
      id: idCounter++,
      title: title,
      category: data.category,
      medium: data.medium,
      description: `Beautiful ${data.medium.toLowerCase()} project.`,
      image: `/Assets/${folder}/${file}`
    });
  }
}

// Read Gallery.tsx
let content = fs.readFileSync(galleryFile, 'utf8');

// We need to replace the entire artworks array definition.
// It starts at `const artworks: Artwork[] = [` and ends at `];\n\n  const [visibleCount, setVisibleCount] = useState(12);`

const startMarker = "const artworks: Artwork[] = [";
const endMarker = ";\n\n  // Filter artworks";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker, startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find artworks array in Gallery.tsx");
  process.exit(1);
}

const replacement = `const artworks: Artwork[] = ${JSON.stringify(artworks, null, 2)}`;

content = content.slice(0, startIndex) + replacement + content.slice(endIndex);

fs.writeFileSync(galleryFile, content);
console.log(`Successfully generated ${artworks.length} artworks and updated Gallery.tsx`);
