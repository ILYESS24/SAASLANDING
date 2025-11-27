// ÉRADICATION TOTALE DE FRAMER DU CODE SOURCE
const fs = require('fs');

console.log('🔥 ÉRADICATION TOTALE DE FRAMER EN COURS...');

// Lire le fichier JavaScript principal
let js = fs.readFileSync('assets/script_main.CekEp3y2.mjs', 'utf-8');

console.log('📄 Taille originale:', js.length);

// Liste de TOUTES les chaînes Framer à supprimer/remplacer
const eradications = [
  // Remplacer les textes Framer
  { from: /Made in Framer/g, to: '' },
  { from: /made in framer/g, to: '' },
  { from: /More Templates/g, to: '' },
  { from: /more templates/g, to: '' },
  { from: /Buy Template/g, to: '' },
  { from: /buy template/g, to: '' },
  { from: /framer\.com\/marketplace/g, to: '' },
  { from: /framer\.com/g, to: '' },
  { from: /gola\.supply/g, to: '' },
  
  // Remplacer les classes CSS Framer de badges
  { from: /framer-badge/g, to: 'hidden-element' },
  { from: /__framer-badge/g, to: 'hidden-element' },
  { from: /framer-1s8yvgx/g, to: 'hidden-element' },
  { from: /framer-n4vz6i/g, to: 'hidden-element' },
  { from: /framer-IQfUg/g, to: 'hidden-element' },
  { from: /framer-10ammzf/g, to: 'hidden-element' },
  { from: /framer-eh1n2m/g, to: 'hidden-element' },
  { from: /framer-o43rl7/g, to: 'hidden-element' },
  
  // Remplacer les data attributes Framer
  { from: /data-framer-appear-id="n0ccwk"/g, to: 'data-hidden="true"' },
  
  // Neutraliser les composants React qui créent des badges
  { from: /pa=W\(Ci\)/g, to: 'pa=()=>null' },
  { from: /Ha=W\(Ci\)/g, to: 'Ha=()=>null' },
];

let totalReplacements = 0;

eradications.forEach((eradication, index) => {
  const matches = js.match(eradication.from);
  if (matches) {
    console.log(`✅ Pattern ${index + 1}: ${matches.length} occurrences trouvées - "${eradication.from}"`);
    js = js.replace(eradication.from, eradication.to);
    totalReplacements += matches.length;
  }
});

// Supprimer les URLs complètes vers Framer/Twitter/Instagram
const urlPatterns = [
  /https?:\/\/[^"']*framer[^"']*/g,
  /https?:\/\/[^"']*gola\.supply[^"']*/g,
  /https?:\/\/[^"']*twitter\.com[^"']*/g,
  /https?:\/\/[^"']*x\.com[^"']*/g,
  /https?:\/\/[^"']*instagram\.com[^"']*/g,
];

urlPatterns.forEach((pattern, index) => {
  const matches = js.match(pattern);
  if (matches) {
    console.log(`✅ URL Pattern ${index + 1}: ${matches.length} URLs trouvées`);
    console.log('   Exemples:', matches.slice(0, 3));
    js = js.replace(pattern, '');
    totalReplacements += matches.length;
  }
});

if (totalReplacements > 0) {
  fs.writeFileSync('assets/script_main.CekEp3y2.mjs', js);
  console.log(`\n🔥 ${totalReplacements} éradications effectuées!`);
  console.log('📄 Taille finale:', js.length);
  console.log('✅ Fichier script_main.CekEp3y2.mjs nettoyé');
} else {
  console.log('❌ Aucune occurrence Framer trouvée (déjà nettoyé?)');
}

console.log('\n🎉 ÉRADICATION TERMINÉE!');

