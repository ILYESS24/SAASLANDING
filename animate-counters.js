// ANIMER LES COMPTEURS DE STATISTIQUES
(function() {
  'use strict';

  function animateCounter(element, target, suffix = '', duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + suffix;
    }, 16);
  }

  function initCounters() {
    // Chercher tous les éléments qui ressemblent à des compteurs
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach(el => {
      const text = el.textContent.trim();
      
      // Pattern pour détecter les compteurs : "0+", "0%", etc.
      if (text.match(/^0\+$/)) {
        // Déterminer la valeur cible en fonction du contexte
        const parent = el.closest('div');
        const context = parent ? parent.textContent.toLowerCase() : '';
        
        if (context.includes('project')) {
          // 300+ PROJECTS
          animateCounter(el, 300, '+', 2500);
          console.log('✅ Compteur PROJECTS animé: 0 → 300+');
        } else if (context.includes('client')) {
          // 200+ CLIENTS
          animateCounter(el, 200, '+', 2500);
          console.log('✅ Compteur CLIENTS animé: 0 → 200+');
        }
      } else if (text.match(/^0%$/)) {
        // Déterminer si c'est HAPPY CLIENTS ou COMMITMENT
        const parent = el.closest('div');
        const context = parent ? parent.textContent.toLowerCase() : '';
        
        if (context.includes('happy')) {
          // 100% HAPPY CLIENTS
          animateCounter(el, 100, '%', 2500);
          console.log('✅ Compteur HAPPY CLIENTS animé: 0% → 100%');
        } else if (context.includes('commitment')) {
          // 110% COMMITMENT
          animateCounter(el, 110, '%', 2500);
          console.log('✅ Compteur COMMITMENT animé: 0% → 110%');
        }
      }
    });
  }

  // Observer pour détecter quand les éléments entrent dans le viewport
  function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // L'élément est visible, lancer l'animation
          initCounters();
          observer.disconnect(); // Animer une seule fois
        }
      });
    }, {
      threshold: 0.3 // Déclencher quand 30% de l'élément est visible
    });

    // Observer le conteneur des statistiques
    setTimeout(() => {
      const statsContainers = document.querySelectorAll('div');
      statsContainers.forEach(container => {
        const text = container.textContent;
        if (text.includes('PROJECTS') || text.includes('CLIENTS') || text.includes('HAPPY')) {
          observer.observe(container);
        }
      });
    }, 1000);
  }

  // Exécuter quand le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(setupIntersectionObserver, 2000);
    });
  } else {
    setTimeout(setupIntersectionObserver, 2000);
  }

  // Fallback: exécuter après 3 secondes si l'observer ne fonctionne pas
  setTimeout(initCounters, 3000);

  console.log('🔢 Script d\'animation des compteurs activé');
})();

