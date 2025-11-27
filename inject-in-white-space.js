// INJECTER DANS L'ESPACE BLANC EXISTANT (PAS À LA FIN)
(function() {
  'use strict';

  const contactHTML = `
    <div id="aurion-contact-section" style="text-align: center; padding: 100px 20px; margin: 0;">
      <p style="font-size: 14px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px; color: #666; font-weight: 500; font-family: 'Inter', sans-serif;">GET STARTED</p>
      
      <h2 style="font-size: 64px; font-weight: 700; line-height: 1.2; margin: 0 0 20px 0; color: #000; font-family: 'Inter', sans-serif;">Ready to replace 10,000<br>tools with one platform?</h2>
      
      <p style="font-size: 18px; color: #666; margin: 0 auto 40px auto; max-width: 600px; font-family: 'Inter', sans-serif;">Join 5,000+ entrepreneurs who revolutionized their workflow with AURION</p>
      
      <a href="#contact" style="display: inline-block; background: #000; color: #fff; padding: 18px 40px; border-radius: 50px; text-decoration: none; font-size: 16px; font-weight: 500; transition: all 0.3s ease; cursor: pointer; font-family: 'Inter', sans-serif;">START FREE TRIAL</a>
    </div>
  `;

  function findAndReplaceWhiteSpace() {
    if (document.getElementById('aurion-contact-section')) {
      return; // Déjà injecté
    }

    const main = document.getElementById('main');
    if (!main) return;

    // Chercher tous les divs enfants de main
    const children = Array.from(main.querySelectorAll(':scope > div'));
    
    console.log('🔍 Recherche de l\'espace blanc...', children.length, 'divs trouvés');

    // Chercher le dernier grand div vide ou presque vide
    for (let i = children.length - 1; i >= 0; i--) {
      const div = children[i];
      const height = div.offsetHeight;
      const text = div.textContent.trim();
      const hasImages = div.querySelectorAll('img, video').length > 0;
      
      console.log(`Div ${i}: height=${height}px, text=${text.length} chars, images=${hasImages}`);
      
      // Si c'est un grand div (> 300px) avec peu de contenu et pas d'images
      if (height > 300 && text.length < 100 && !hasImages) {
        console.log('🎯 ESPACE BLANC TROUVÉ! Remplacement...');
        div.innerHTML = contactHTML;
        div.style.background = '#f8f8f8';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
        console.log('✅ Section AURION injectée dans l\'espace blanc!');
        return;
      }
    }
    
    console.log('❌ Espace blanc non trouvé, injection à la fin de #main');
    main.insertAdjacentHTML('beforeend', contactHTML);
  }

  // Exécuter plusieurs fois
  setTimeout(findAndReplaceWhiteSpace, 500);
  setTimeout(findAndReplaceWhiteSpace, 1000);
  setTimeout(findAndReplaceWhiteSpace, 2000);
  setTimeout(findAndReplaceWhiteSpace, 3000);
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(findAndReplaceWhiteSpace, 500);
    });
  }
  
  window.addEventListener('load', () => {
    setTimeout(findAndReplaceWhiteSpace, 500);
  });

  console.log('🔍 Script de recherche d\'espace blanc activé');
})();

