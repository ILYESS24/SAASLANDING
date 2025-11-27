const fs = require('fs');

// Lire le fichier HTML
let html = fs.readFileSync('index.html', 'utf8');

console.log('Taille originale:', html.length);

// Chercher et supprimer le bloc framer-1s8yvgx-container
// On doit trouver le début et la fin manuellement

const startMarker = '<div class="framer-1s8yvgx-container">';
const startIndex = html.indexOf(startMarker);

if (startIndex !== -1) {
    console.log('Trouvé framer-1s8yvgx-container à la position:', startIndex);
    
    // Trouver la fin du bloc (chercher le </div> correspondant)
    // Le bloc se termine par </div></div></div>
    let depth = 0;
    let endIndex = startIndex;
    let inTag = false;
    
    for (let i = startIndex; i < html.length; i++) {
        if (html[i] === '<') {
            inTag = true;
            if (html.substring(i, i + 4) === '<div') {
                depth++;
            } else if (html.substring(i, i + 6) === '</div>') {
                depth--;
                if (depth === 0) {
                    endIndex = i + 6;
                    break;
                }
            }
        }
        if (html[i] === '>') {
            inTag = false;
        }
    }
    
    console.log('Fin du bloc à la position:', endIndex);
    console.log('Contenu à supprimer (premiers 200 chars):', html.substring(startIndex, startIndex + 200));
    
    // Supprimer le bloc
    html = html.substring(0, startIndex) + html.substring(endIndex);
    console.log('Bloc supprimé!');
}

// Vérifier s'il y a d'autres occurrences
const remaining = html.indexOf('framer-1s8yvgx-container');
if (remaining !== -1) {
    console.log('ATTENTION: Il reste encore des occurrences à la position:', remaining);
    // C'est probablement dans le CSS, on le laisse
}

// Supprimer aussi tous les liens vers gola.supply et framer.com/marketplace
html = html.replace(/<!--\$--><a class="framer-eh1n2m[^>]*>[\s\S]*?<\/a><!--\/\$-->/g, '');
html = html.replace(/<!--\$--><a class="framer-o43rl7[^>]*>[\s\S]*?<\/a><!--\/\$-->/g, '');

fs.writeFileSync('index.html', html);
console.log('Taille finale:', html.length);
console.log('HTML nettoyé!');
