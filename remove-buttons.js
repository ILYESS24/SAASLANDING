const fs = require('fs');

// Lire le fichier script_main
let content = fs.readFileSync('assets/script_main.CekEp3y2.mjs', 'utf8');

console.log('Taille originale:', content.length);

// Supprimer le composant qui génère les boutons dans le template "Inverse" (framer-o1x98)
// Pattern: g(M,{height:80,y:856,children:g(N,{className:`framer-1s8yvgx-container`...
content = content.replace(
    /,g\(M,\{height:80,y:856,children:g\(N,\{className:`framer-1s8yvgx-container`,layoutScroll:!0,nodeId:`e4pnsaWIj`,scopeId:`mYtsSdGm1`,children:g\(Ci,\{height:`100%`,id:`e4pnsaWIj`,layoutId:`e4pnsaWIj`,width:`100%`\}\)\}\)\}/g,
    ''
);

// Supprimer le composant qui génère les boutons dans le template "Default" (framer-Pn49r)
// Pattern: g(M,{height:80,y:856,children:g(N,{className:`framer-n4vz6i-container`...
content = content.replace(
    /,g\(M,\{height:80,y:856,children:g\(N,\{className:`framer-n4vz6i-container`,layoutScroll:!0,nodeId:`Ei5vYr8Eh`,scopeId:`PXsZ6HLmS`,children:g\(Ci,\{height:`100%`,id:`Ei5vYr8Eh`,layoutId:`Ei5vYr8Eh`,width:`100%`\}\)\}\)\}/g,
    ''
);

console.log('Nouvelle taille:', content.length);

fs.writeFileSync('assets/script_main.CekEp3y2.mjs', content);
console.log('Fichier modifié avec succès!');

// Vérifier si les patterns ont été supprimés
const check1 = content.includes('framer-1s8yvgx-container');
const check2 = content.includes('framer-n4vz6i-container');
console.log('framer-1s8yvgx-container reste:', check1);
console.log('framer-n4vz6i-container reste:', check2);
