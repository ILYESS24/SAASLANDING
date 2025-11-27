// ANIMER LES COMPTEURS DE STATISTIQUES - VERSION ULTRA AGRESSIVE
(function() {
  'use strict';

  let animated = false;

  function animateCounter(element, target, suffix = '', duration = 2000) {
    // FORCER LA TAILLE DU COMPTEUR (80px, pas gras)
    element.style.setProperty('font-size', '80px', 'important');
    element.style.setProperty('font-weight', '400', 'important');
    element.style.setProperty('line-height', '1.2', 'important');
    element.style.display = 'block';
    
    // Forcer le texte à 0 d'abord
    element.textContent = '0' + suffix;
    
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

  function findAndAnimateCounters() {
    if (animated) return;
    
    console.log('🔍 Recherche des compteurs...');
    
    // Chercher TOUS les éléments texte
    const allElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div');
    let foundCounters = 0;
    
    allElements.forEach(el => {
      const text = el.textContent.trim();
      
      // Chercher n'importe quel nombre suivi de + ou %
      const numberMatch = text.match(/^(\d+)(\+|%)$/);
      
      if (numberMatch) {
        const value = parseInt(numberMatch[1]);
        const suffix = numberMatch[2];
        
        // Trouver le contexte
        let parent = el.parentElement;
        let context = '';
        for (let i = 0; i < 5 && parent; i++) {
          context += parent.textContent.toLowerCase();
          parent = parent.parentElement;
        }
        
        console.log('🎯 Compteur trouvé:', text, 'Contexte:', context.substring(0, 50));
        
        // FORCER LA TAILLE (80px, pas gras)
        el.style.setProperty('font-size', '80px', 'important');
        el.style.setProperty('font-weight', '400', 'important');
        el.style.setProperty('line-height', '1.2', 'important');
        
        // Déterminer la valeur cible
        if (context.includes('project')) {
          animateCounter(el, 300, '+', 2500);
          console.log('✅ Animation PROJECTS: 0 → 300+ (80px, regular)');
          foundCounters++;
        } else if (context.includes('client') && !context.includes('happy')) {
          animateCounter(el, 200, '+', 2500);
          console.log('✅ Animation CLIENTS: 0 → 200+ (80px, regular)');
          foundCounters++;
        } else if (context.includes('happy')) {
          animateCounter(el, 100, '%', 2500);
          console.log('✅ Animation HAPPY CLIENTS: 0% → 100% (80px, regular)');
          foundCounters++;
        } else if (context.includes('commitment')) {
          animateCounter(el, 110, '%', 2500);
          console.log('✅ Animation COMMITMENT: 0% → 110% (80px, regular)');
          foundCounters++;
        }
      }
    });
    
    if (foundCounters > 0) {
      animated = true;
      console.log(`✅ ${foundCounters} compteurs animés avec taille 80px (regular)!`);
    } else {
      console.log('❌ Aucun compteur trouvé');
    }
  }

  // Exécuter immédiatement
  setTimeout(findAndAnimateCounters, 1000);
  setTimeout(findAndAnimateCounters, 2000);
  setTimeout(findAndAnimateCounters, 3000);
  setTimeout(findAndAnimateCounters, 5000);

  // Exécuter au scroll
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(findAndAnimateCounters, 200);
  });

  // Exécuter au chargement
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(findAndAnimateCounters, 1000);
    });
  }

  window.addEventListener('load', () => {
    setTimeout(findAndAnimateCounters, 1000);
  });

  console.log('🔢 Script d\'animation des compteurs ULTRA-AGRESSIF activé');
})();

