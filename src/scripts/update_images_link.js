const fs = require('fs');

const files = [
    'src/app/koleksiyonlar/anit/page.tsx',
    'src/app/koleksiyonlar/cesme/page.tsx',
    'src/app/koleksiyonlar/denizlik/page.tsx',
    'src/app/koleksiyonlar/harpusta/page.tsx',
    'src/app/koleksiyonlar/kaldirim-tasi-bordur/page.tsx',
    'src/app/koleksiyonlar/merdiven/page.tsx',
    'src/app/koleksiyonlar/mermer-bordur/page.tsx',
    'src/app/koleksiyonlar/mermer-kaplama/MermerKaplamaClient.tsx',
    'src/app/koleksiyonlar/mermer-sehpa/page.tsx',
    'src/app/koleksiyonlar/mermer-supurgelik/page.tsx',
    'src/app/koleksiyonlar/mezar-tasi/page.tsx',
    'src/app/koleksiyonlar/somine/SomineClient.tsx',
    'src/app/koleksiyonlar/tezgah/page.tsx',
    'src/app/koleksiyonlar/mermer-doseme/MermerDosemeClient.tsx',
    'src/app/koleksiyonlar/banyo-hamam/BanyoHamamClient.tsx',
    'src/app/koleksiyonlar/mermer-bas-tasi/page.tsx',
];

let totalChanged = 0;

for (const file of files) {
    if (!fs.existsSync(file)) {
        console.log('SKIP (not found):', file);
        continue;
    }

    let content = fs.readFileSync(file, 'utf8');
    const original = content;

    // image: "/foo.png" → image: img("/foo.png")
    content = content.replace(/image: "(\/[^"]+)"/g, 'image: img("$1")');

    if (content !== original) {
        // Add import if not already present
        if (!content.includes('import { img }') && !content.includes("import {img}")) {
            content = content.replace(/(import [^\n]+\n)/, '$1import { img } from "@/lib/supabase";\n');
        }
        fs.writeFileSync(file, content, 'utf8');
        const count = (original.match(/image: "\/[^"]+"/g) || []).length;
        console.log('OK', file, '—', count, 'images');
        totalChanged += count;
    } else {
        console.log('--', file, '(no match)');
    }
}

console.log('\nTotal images updated:', totalChanged);
