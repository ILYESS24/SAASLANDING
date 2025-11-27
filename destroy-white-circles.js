// SCRIPT POUR DÉTRUIRE DÉFINITIVEMENT LES RONDS BLANCS
const fs = require('fs');

let js = fs.readFileSync('assets/script_main.CekEp3y2.mjs', 'utf-8');

console.log('Taille originale:', js.length);

// Chercher tous les composants qui créent des éléments ronds blancs
// On va chercher les patterns de création d'éléments avec border-radius

// Pattern 1: Chercher les créations d'éléments avec style inline
const patterns = [
    // Remplacer les créations d'éléments ronds blancs
    /style:\s*{[^}]*borderRadius:\s*["']50%["'][^}]*backgroundColor:\s*["']rgb\(255,\s*255,\s*255\)["'][^}]*}/g,
    /style:\s*{[^}]*backgroundColor:\s*["']rgb\(255,\s*255,\s*255\)["'][^}]*borderRadius:\s*["']50%["'][^}]*}/g,
    /style:\s*{[^}]*background:\s*["']rgb\(255,\s*255,\s*255\)["'][^}]*borderRadius:\s*["']50%["'][^}]*}/g,
];

let replacements = 0;

patterns.forEach((pattern, index) => {
    const matches = js.match(pattern);
    if (matches) {
        console.log(`Pattern ${index + 1} trouvé ${matches.length} fois`);
        js = js.replace(pattern, 'style:{display:"none"}');
        replacements += matches.length;
    }
});

// Chercher aussi les composants avec des classes spécifiques
// qui pourraient créer des ronds blancs
const classPatterns = [
    /className:\s*["'][^"']*social[^"']*["']/gi,
    /className:\s*["'][^"']*circle[^"']*["']/gi,
    /className:\s*["'][^"']*round[^"']*["']/gi,
];

classPatterns.forEach((pattern, index) => {
    const matches = js.match(pattern);
    if (matches) {
        console.log(`Class pattern ${index + 1} trouvé ${matches.length} fois`);
        console.log('Exemples:', matches.slice(0, 3));
    }
});

if (replacements > 0) {
    fs.writeFileSync('assets/script_main.CekEp3y2.mjs', js);
    console.log(`✅ ${replacements} remplacements effectués!`);
    console.log('Taille finale:', js.length);
} else {
    console.log('❌ Aucun pattern trouvé. Les ronds blancs sont probablement créés différemment.');
    console.log('Recherche de patterns alternatifs...');
    
    // Chercher des patterns plus génériques
    const genericPatterns = [
        /width:\s*48/g,
        /width:\s*40/g,
        /width:\s*56/g,
        /height:\s*48/g,
        /height:\s*40/g,
        /height:\s*56/g,
    ];
    
    genericPatterns.forEach((pattern, index) => {
        const matches = js.match(pattern);
        if (matches) {
            console.log(`Generic pattern ${index + 1} trouvé ${matches.length} fois`);
        }
    });
}

