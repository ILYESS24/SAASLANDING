// REBRANDING COMPLET + COPYWRITING AURION
const fs = require('fs');

console.log('🚀 REBRANDING COMPLET AURION + COPYWRITING');

// Lire le fichier JavaScript principal
let js = fs.readFileSync('assets/script_main.CekEp3y2.mjs', 'utf-8');

console.log('📄 Taille originale:', js.length);

// REBRANDING + NOUVEAU COPYWRITING
const rebrandingMap = [
  // Nom de marque
  { from: /Arkitect/g, to: 'AURION' },
  { from: /arkitect/g, to: 'AURION' },
  { from: /ARKITECT/g, to: 'AURION' },
  
  // Architecture → SaaS
  { from: /Architecture/g, to: 'All-in-One SaaS Platform' },
  { from: /architecture/g, to: 'all-in-one SaaS platform' },
  { from: /architectural/g, to: 'revolutionary' },
  { from: /Architectural/g, to: 'Revolutionary' },
  
  // Real estate → Entrepreneurs
  { from: /real estate/g, to: 'entrepreneurs and creators' },
  { from: /Real estate/g, to: 'Entrepreneurs and creators' },
  { from: /Real Estate/g, to: 'Entrepreneurs and Creators' },
  
  // Building/Construction → Building Apps
  { from: /building design/g, to: 'app building' },
  { from: /Building design/g, to: 'App building' },
  { from: /construction/g, to: 'development' },
  { from: /Construction/g, to: 'Development' },
  
  // Projects → Tools
  { from: /300 projects/g, to: '10,000+ tools replaced' },
  { from: /300\+/g, to: '10,000+' },
  
  // Clients
  { from: /200 clients/g, to: '5,000+ entrepreneurs' },
  { from: /200\+/g, to: '5,000+' },
  
  // Satisfaction
  { from: /100%/g, to: '99%' },
  { from: /110%/g, to: '100%' },
  
  // Copywriting spécifique
  { from: /We have designed and completed over 300 projects/g, to: 'We have helped 10,000+ entrepreneurs replace their entire tool stack' },
  { from: /designed and completed/g, to: 'revolutionized workflows for' },
  { from: /innovation, precision, and timeless/g, to: 'AI-powered tools, seamless integration, and unlimited' },
  { from: /excellence/g, to: 'possibilities' },
  
  // CTA
  { from: /Get in touch/g, to: 'Start Building Now' },
  { from: /Get In Touch/g, to: 'Start Building Now' },
  { from: /GET IN TOUCH/g, to: 'START BUILDING NOW' },
  { from: /Contact us/g, to: 'Get Started Free' },
  { from: /Contact Us/g, to: 'Get Started Free' },
];

let totalReplacements = 0;

rebrandingMap.forEach((replacement, index) => {
  const matches = js.match(replacement.from);
  if (matches) {
    console.log(`✅ Pattern ${index + 1}: ${matches.length} occurrences - "${replacement.from}"`);
    js = js.replace(replacement.from, replacement.to);
    totalReplacements += matches.length;
  }
});

if (totalReplacements > 0) {
  fs.writeFileSync('assets/script_main.CekEp3y2.mjs', js);
  console.log(`\n✅ ${totalReplacements} remplacements effectués!`);
  console.log('📄 Taille finale:', js.length);
} else {
  console.log('❌ Aucune occurrence trouvée');
}

// Modifier aussi le HTML
let html = fs.readFileSync('index.html', 'utf-8');

const htmlReplacements = [
  { from: /Arkitect/g, to: 'AURION' },
  { from: /Architecture/g, to: 'All-in-One SaaS' },
  { from: /architecture/g, to: 'all-in-one SaaS' },
  { from: /Curious about what we can do for you\?/g, to: 'Ready to replace 10,000 tools with one platform?' },
  { from: /GET IN TOUCH/g, to: 'START FREE TRIAL' },
];

htmlReplacements.forEach(replacement => {
  html = html.replace(replacement.from, replacement.to);
});

fs.writeFileSync('index.html', html);
console.log('✅ index.html modifié');

console.log('\n🎉 REBRANDING + COPYWRITING TERMINÉ!');
console.log('\n📝 NOUVEAU POSITIONNEMENT:');
console.log('   • Marque: AURION');
console.log('   • Positionnement: All-in-One SaaS Platform');
console.log('   • Cible: Entrepreneurs & Creators');
console.log('   • USP: Replace 10,000 tools with one platform');

