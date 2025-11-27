// OPTION NUCLÉAIRE - DÉTRUIRE TOUS LES PETITS ÉLÉMENTS RONDS
const fs = require('fs');

let js = fs.readFileSync('assets/script_main.CekEp3y2.mjs', 'utf-8');

console.log('🔥 OPTION NUCLÉAIRE ACTIVÉE');
console.log('Taille originale:', js.length);

// Chercher TOUS les nombres entre 30 et 80 qui pourraient être des width/height
const sizes = [];
for (let i = 30; i <= 80; i++) {
    sizes.push(i);
}

console.log('Recherche de tous les éléments de taille 30-80px...');

// Pattern pour trouver les objets style avec width et height similaires
// Exemple: {width:48,height:48,borderRadius:"50%"}
const patterns = [];

sizes.forEach(size => {
    // Pattern 1: width:XX,height:XX
    patterns.push(new RegExp(`width:${size},height:${size}`, 'g'));
    // Pattern 2: width: XX, height: XX
    patterns.push(new RegExp(`width:\\s*${size}\\s*,\\s*height:\\s*${size}`, 'g'));
});

let totalMatches = 0;
let replacements = 0;

patterns.forEach((pattern, index) => {
    const matches = js.match(pattern);
    if (matches && matches.length > 0) {
        totalMatches += matches.length;
        console.log(`✅ Trouvé ${matches.length} éléments avec pattern ${index + 1}`);
        console.log(`   Exemple: ${matches[0]}`);
        
        // Remplacer par display:none
        js = js.replace(pattern, (match) => {
            replacements++;
            return match + ',display:"none"';
        });
    }
});

console.log(`\n📊 Résultats:`);
console.log(`   - ${totalMatches} patterns trouvés`);
console.log(`   - ${replacements} remplacements effectués`);

if (replacements > 0) {
    fs.writeFileSync('assets/script_main.CekEp3y2.mjs', js);
    console.log(`\n✅ Fichier modifié avec succès!`);
    console.log(`Taille finale: ${js.length}`);
} else {
    console.log(`\n❌ Aucun élément trouvé à modifier`);
    console.log(`Les éléments sont peut-être créés dynamiquement...`);
}

