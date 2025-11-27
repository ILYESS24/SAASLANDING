// REMPLACER L'ESPACE BLANC DIRECTEMENT DANS LE HTML
const fs = require('fs');

console.log('🔍 Recherche de l\'espace blanc dans le HTML...');

let html = fs.readFileSync('index.html', 'utf-8');

console.log('📄 Taille du HTML:', html.length);

// Chercher le div#main (c'est une ligne énorme)
const mainMatch = html.match(/<div id="main"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<!--\/\$-->/);

if (mainMatch) {
    console.log('✅ Div #main trouvé');
    
    const mainContent = mainMatch[0];
    console.log('📏 Taille du contenu main:', mainContent.length);
    
    // Section AURION à injecter
    const aurionSection = `
    <div class="framer-aurion-section" style="text-align: center; padding: 100px 20px; background: rgb(248, 248, 248); width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 500px;">
      <p style="font-size: 14px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px; color: rgb(102, 102, 102); font-weight: 500; font-family: Inter, sans-serif;">GET STARTED</p>
      <h2 style="font-size: 64px; font-weight: 700; line-height: 1.2; margin: 0 0 20px 0; color: rgb(0, 0, 0); font-family: Inter, sans-serif;">Ready to replace 10,000 tools with one platform?</h2>
      <p style="font-size: 18px; color: rgb(102, 102, 102); margin: 0 auto 40px auto; max-width: 600px; font-family: Inter, sans-serif;">Join 5,000+ entrepreneurs who revolutionized their workflow with AURION</p>
      <a href="#contact" style="display: inline-block; background: rgb(0, 0, 0); color: rgb(255, 255, 255); padding: 18px 40px; border-radius: 50px; text-decoration: none; font-size: 16px; font-weight: 500; cursor: pointer; font-family: Inter, sans-serif;">START FREE TRIAL</a>
    </div>`;
    
    // Injecter AVANT la fin du main (avant les derniers </div>)
    const injectionPoint = mainContent.lastIndexOf('<!--/$-->');
    
    if (injectionPoint !== -1) {
        const newMainContent = mainContent.substring(0, injectionPoint) + aurionSection + mainContent.substring(injectionPoint);
        html = html.replace(mainContent, newMainContent);
        
        fs.writeFileSync('index.html', html);
        console.log('✅ Section AURION injectée dans le HTML statique!');
        console.log('📄 Nouvelle taille:', html.length);
    } else {
        console.log('❌ Point d\'injection non trouvé');
    }
} else {
    console.log('❌ Div #main non trouvé');
}

