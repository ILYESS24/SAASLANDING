// AJOUTER LA SECTION CONTACT AVANT LE FOOTER
(function() {
  'use strict';

  function addContactSection() {
    try {
      // Créer la section HTML
      const contactHTML = `
        <div id="custom-contact-section" style="
          background: #f5f5f5;
          padding: 80px 20px;
          text-align: center;
          margin: 0;
        ">
          <div style="max-width: 1200px; margin: 0 auto;">
            <p style="
              font-size: 14px;
              letter-spacing: 2px;
              text-transform: uppercase;
              margin-bottom: 20px;
              color: #666;
              font-weight: 500;
            ">CONTACT</p>
            
            <h2 style="
              font-size: 64px;
              font-weight: 700;
              line-height: 1.2;
              margin: 0 0 40px 0;
              color: #000;
            ">Curious about what<br>we can do for you?</h2>
            
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
            " onmouseover="this.style.background='#333'" onmouseout="this.style.background='#000'">GET IN TOUCH</a>
          </div>
        </div>
      `;

      // Trouver le footer ou le dernier élément de la page
      const footer = document.querySelector('footer') || 
                     document.querySelector('[role="contentinfo"]') ||
                     document.querySelector('#main > div:last-child');

      // Vérifier si la section n'existe pas déjà
      if (document.getElementById('custom-contact-section')) {
        return;
      }

      if (footer) {
        // Insérer avant le footer
        footer.insertAdjacentHTML('beforebegin', contactHTML);
        console.log('✅ Section CONTACT ajoutée avant le footer');
      } else {
        // Si pas de footer trouvé, ajouter à la fin du body
        document.body.insertAdjacentHTML('beforeend', contactHTML);
        console.log('✅ Section CONTACT ajoutée à la fin du body');
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

