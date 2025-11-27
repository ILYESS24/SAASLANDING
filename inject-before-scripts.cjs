// INJECTER LA SECTION AURION JUSTE AVANT LES SCRIPTS
const fs = require('fs');

console.log('🔍 Injection de la section AURION avant les scripts...');

let html = fs.readFileSync('index.html', 'utf-8');

const aurionSection = `
    <!-- SECTION AURION CONTACT - INJECTÉE AVANT LES SCRIPTS -->
    <div class="framer-aurion-contact" style="text-align: center; padding: 100px 20px; background: rgb(248, 248, 248); width: 100%; min-height: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <p style="font-size: 14px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px; color: rgb(102, 102, 102); font-weight: 500; font-family: Inter, sans-serif;">GET STARTED</p>
      <h2 style="font-size: 64px; font-weight: 700; line-height: 1.2; margin: 0 0 20px 0; color: rgb(0, 0, 0); font-family: Inter, sans-serif; max-width: 900px;">Ready to replace 10,000 tools with one platform?</h2>
      <p style="font-size: 18px; color: rgb(102, 102, 102); margin: 0 auto 40px auto; max-width: 600px; font-family: Inter, sans-serif;">Join 5,000+ entrepreneurs who revolutionized their workflow with AURION</p>
      <a href="#contact" style="display: inline-block; background: rgb(0, 0, 0); color: rgb(255, 255, 255); padding: 18px 40px; border-radius: 50px; text-decoration: none; font-size: 16px; font-weight: 500; cursor: pointer; font-family: Inter, sans-serif;">START FREE TRIAL</a>
    </div>
`;

// Chercher où injecter (juste avant les <link rel="modulepreload")
const injectionPoint = html.indexOf('<link rel="modulepreload" fetchpriority="low"');

if (injectionPoint !== -1) {
    html = html.substring(0, injectionPoint) + aurionSection + '\n    ' + html.substring(injectionPoint);
    fs.writeFileSync('index.html', html);
    console.log('✅ Section AURION injectée AVANT les scripts!');
} else {
    console.log('❌ Point d\'injection non trouvé');
}

