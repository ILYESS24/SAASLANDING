const fs = require('fs');

// Lire le fichier script_main
let content = fs.readFileSync('assets/script_main.CekEp3y2.mjs', 'utf8');

console.log('Taille originale:', content.length);

// APPROCHE NUCLÉAIRE: Remplacer le composant Ci pour qu'il retourne null
// Le composant Ci génère les boutons "Buy Template" et "More Templates"

// Trouver et remplacer pa=W(Ci) par pa=()=>null
content = content.replace(/pa=W\(Ci\)/g, 'pa=()=>null');
content = content.replace(/Ha=W\(Ci\)/g, 'Ha=()=>null');

// Aussi supprimer les références à Ci dans les templates
content = content.replace(/g\(Ci,\{[^}]*\}\)/g, 'null');

console.log('Taille après modification:', content.length);

// Écrire le fichier modifié
fs.writeFileSync('assets/script_main.CekEp3y2.mjs', content);

console.log('COMPOSANT Ci NEUTRALISÉ - Les boutons ne seront plus générés!');

