// AJOUTER LA SECTION CONTACT AVANT LE FOOTER
(function() {
  'use strict';

  function addContactSection() {
    try {
      // Vérifier si la section n'existe pas déjà
      if (document.getElementById('custom-contact-section')) {
        return;
      }

      // Créer le contenu HTML à injecter - AURION
      const contactHTML = `
        <div id="custom-contact-section" style="
          text-align: center;
          padding: 80px 20px;
          background: #f8f8f8;
        ">
          <p style="
            font-size: 14px;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 20px;
            color: #666;
            font-weight: 500;
            font-family: 'Inter', sans-serif;
          ">GET STARTED</p>
          
          <h2 style="
            font-size: 64px;
            font-weight: 700;
            line-height: 1.2;
            margin: 0 0 20px 0;
            color: #000;
            font-family: 'Inter', sans-serif;
          ">Ready to replace 10,000<br>tools with one platform?</h2>
          
          <p style="
            font-size: 18px;
            color: #666;
            margin: 0 0 40px 0;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            font-family: 'Inter', sans-serif;
          ">Join 5,000+ entrepreneurs who revolutionized their workflow with AURION</p>
          
          <a href="#contact" style="
            display: inline-block;
            background: #000;
            color: #fff;
            padding: 18px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            transition: all 0.3s ease;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
          " onmouseover="this.style.background='#333'" onmouseout="this.style.background='#000'">START FREE TRIAL</a>
        </div>
      `;

      // STRATÉGIE 1: Chercher un div vide ou presque vide avec beaucoup de hauteur
      const allDivs = document.querySelectorAll('div, section');
      let targetDiv = null;

      allDivs.forEach(div => {
        const style = window.getComputedStyle(div);
        const height = div.offsetHeight;
        const textContent = div.textContent.trim();
        
        // Si c'est un grand div (> 200px) avec peu ou pas de contenu
        if (height > 200 && textContent.length < 50 && !div.querySelector('img, video')) {
          // Vérifier si c'est bien un espace blanc (background blanc ou gris clair)
          const bgColor = style.backgroundColor;
          if (bgColor === 'rgb(255, 255, 255)' || bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent' || bgColor.match(/rgb\(2[0-5][0-9]/)) {
            targetDiv = div;
            console.log('🎯 Espace blanc trouvé:', div, 'Hauteur:', height, 'Background:', bgColor);
          }
        }
      });

      if (targetDiv) {
        // Injecter dans l'espace blanc trouvé
        targetDiv.innerHTML = contactHTML;
        targetDiv.style.display = 'flex';
        targetDiv.style.alignItems = 'center';
        targetDiv.style.justifyContent = 'center';
        console.log('✅ Section CONTACT injectée dans l\'espace blanc existant');
      } else {
        // STRATÉGIE 2: Chercher le dernier grand div avant le footer
        const mainContent = document.querySelector('#main');
        if (mainContent) {
          const children = Array.from(mainContent.children);
          // Prendre l'avant-dernier ou dernier enfant
          const lastChild = children[children.length - 1];
          if (lastChild && lastChild.offsetHeight > 200) {
            lastChild.innerHTML = contactHTML;
            lastChild.style.display = 'flex';
            lastChild.style.alignItems = 'center';
            lastChild.style.justifyContent = 'center';
            console.log('✅ Section CONTACT injectée dans le dernier grand div');
          }
        }
      }
    } catch (e) {
      console.error('❌ Erreur lors de l\'ajout de la section CONTACT:', e);
    }
  }

  // Exécuter immédiatement
  addContactSection();

  // Exécuter quand le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addContactSection);
  }

  // Exécuter après un délai pour être sûr
  setTimeout(addContactSection, 1000);
  setTimeout(addContactSection, 3000);

  console.log('📝 Script d\'ajout de section CONTACT activé');
})();

