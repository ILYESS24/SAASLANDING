// FORCER LE REBRANDING ARKITECT → AURION DANS LE CODE SOURCE
const fs = require('fs');

console.log('🔄 Rebranding forcé : Arkitect → AURION');

// Lire le fichier JavaScript principal
let js = fs.readFileSync('assets/script_main.CekEp3y2.mjs', 'utf-8');

console.log('📄 Taille originale:', js.length);

// Remplacer TOUTES les occurrences de "Arkitect" (case insensitive)
const replacements = [
  { from: /Arkitect/g, to: 'AURION' },
  { from: /arkitect/g, to: 'AURION' },
  { from: /ARKITECT/g, to: 'AURION' },
  { from: /Architecture/g, to: 'All-in-One SaaS' },
  { from: /architecture/g, to: 'all-in-one SaaS' },
];

let totalReplacements = 0;

replacements.forEach((replacement, index) => {
  const matches = js.match(replacement.from);
  if (matches) {
    console.log(`✅ Pattern ${index + 1}: ${matches.length} occurrences trouvées`);
    js = js.replace(replacement.from, replacement.to);
    totalReplacements += matches.length;
  }
});

if (totalReplacements > 0) {
  fs.writeFileSync('assets/script_main.CekEp3y2.mjs', js);
  console.log(`✅ ${totalReplacements} remplacements effectués!`);
  console.log('📄 Taille finale:', js.length);
} else {
  console.log('❌ Aucune occurrence trouvée');
}

// Aussi modifier le fichier HTML
let html = fs.readFileSync('index.html', 'utf-8');
html = html.replace(/Arkitect/g, 'AURION');
html = html.replace(/arkitect/g, 'AURION');
html = html.replace(/Architecture/g, 'All-in-One SaaS');
fs.writeFileSync('index.html', html);
console.log('✅ index.html modifié');

console.log('🎉 Rebranding terminé!');

