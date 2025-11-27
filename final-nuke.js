const fs = require('fs');

// Lire le fichier script_main
let content = fs.readFileSync('assets/script_main.CekEp3y2.mjs', 'utf8');

console.log('Taille originale:', content.length);

// SUPPRIMER TOUTES les références aux boutons
const replacements = [
    // Textes des boutons
    [/`Buy Template \$79`/g, '``'],
    [/`More Templates`/g, '``'],
    [/Buy Template/g, ''],
    [/More Templates/g, ''],
    
    // URLs
    [/https:\/\/www\.gola\.supply[^`]*/g, ''],
    [/https:\/\/www\.framer\.com\/marketplace[^`]*/g, ''],
    [/gola\.supply/g, ''],
    
    // Classes CSS des conteneurs
    [/\.framer-IQfUg[^{]*\{[^}]*\}/g, ''],
    [/\.framer-10ammzf[^{]*\{[^}]*\}/g, ''],
    [/framer-IQfUg/g, 'framer-REMOVED'],
    [/framer-10ammzf/g, 'framer-REMOVED'],
    
    // Composant Ci - le neutraliser complètement
    [/wi,Ci=/g, 'wi,Ci=()=>null,Ci_DISABLED='],
];

let count = 0;
for (const [pattern, replacement] of replacements) {
    const matches = content.match(pattern);
    if (matches) {
        console.log(`Pattern ${pattern}: ${matches.length} occurrences`);
        count += matches.length;
    }
    content = content.replace(pattern, replacement);
}

console.log(`Total remplacements: ${count}`);
console.log('Taille après modification:', content.length);

// Écrire le fichier modifié
fs.writeFileSync('assets/script_main.CekEp3y2.mjs', content);

console.log('FICHIER NETTOYÉ!');

