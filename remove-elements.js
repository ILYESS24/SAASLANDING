// SUPPRESSION TOTALE DES ÉLÉMENTS FRAMER - VERSION FINALE
(function() {
  'use strict';

  // CSS ULTRA-AGRESSIF - Injecté IMMÉDIATEMENT dans le head
  const css = `
    /* ========================================= */
    /* SUPPRIMER ABSOLUMENT TOUT CE QUI EST FRAMER */
    /* ========================================= */

    /* Badge Framer et conteneur */
    #__framer-badge-container,
    .__framer-badge,
    [class*="__framer-badge"],
    [id*="framer-badge"],
    a[href*="framer.com"],
    a[href*="framer"],
    [data-framer-appear-id="n0ccwk"] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      width: 0 !important;
      height: 0 !important;
      max-width: 0 !important;
      max-height: 0 !important;
      overflow: hidden !important;
      position: absolute !important;
      left: -99999px !important;
      top: -99999px !important;
      pointer-events: none !important;
      z-index: -99999 !important;
    }

    /* Tous les éléments Framer décoratifs */
    [data-framer-name="Backdrop"],
    [data-framer-name="Border"],
    [data-framer-name="Bottom"],
    [data-framer-name="Content"],
    [data-framer-name="Logo"],
    [data-framer-name="Text"],
    [data-framer-name="Light"] {
      display: none !important;
    }

    /* Classes spécifiques du badge */
    .framer-6jWyo,
    .framer-n0ccwk,
    .framer-v-n0ccwk,
    .framer-bmpgw8,
    .framer-13yxzio,
    .framer-19yaanm,
    .framer-1kflzx5,
    .framer-7bbT5,
    .framer-e50co,
    .framer-mcUZK,
    .framer-1um7t9d,
    .framer-j4ugry,
    .framer-jnuwbw {
      display: none !important;
    }

    /* SUPPRIMER TOUS LES RONDS BLANCS */
    div[style*="background-color:rgb(255, 255, 255)"][style*="border-radius"],
    div[style*="background-color: rgb(255, 255, 255)"][style*="border-radius"],
    div[style*="background-color:rgb(255,255,255)"][style*="border-radius"],
    a[style*="background-color:rgb(255, 255, 255)"],
    a[style*="background-color: rgb(255, 255, 255)"] {
      display: none !important;
    }

    /* Supprimer les boutons More Templates et Made in Framer */
    a[title*="Framer"],
    a[title*="template"],
    a[title*="Template"],
    button[class*="framer"],
    div[class*="framer-badge"] {
      display: none !important;
    }
  `;

  // Injecter le CSS immédiatement
  const style = document.createElement('style');
  style.id = 'remove-framer-css';
  style.textContent = css;
  
  // Injecter dans head ou au début du document
  if (document.head) {
    document.head.insertBefore(style, document.head.firstChild);
  } else if (document.documentElement) {
    document.documentElement.insertBefore(style, document.documentElement.firstChild);
  }

  // Fonction pour supprimer physiquement les éléments
  function removeAllFramerElements() {
    let count = 0;

    // 1. Supprimer le conteneur du badge Framer
    const badge = document.getElementById('__framer-badge-container');
    if (badge) {
      badge.parentNode.removeChild(badge);
      count++;
      console.log('❌ Badge container supprimé');
    }

    // 2. Supprimer tous les liens vers Framer
    document.querySelectorAll('a[href*="framer.com"], a[href*="framer"]').forEach(el => {
      el.parentNode.removeChild(el);
      count++;
    });

    // 3. Supprimer les éléments avec data-framer-appear-id="n0ccwk"
    document.querySelectorAll('[data-framer-appear-id="n0ccwk"]').forEach(el => {
      el.parentNode.removeChild(el);
      count++;
    });

    // 4. Supprimer les éléments avec classes framer-badge
    document.querySelectorAll('.__framer-badge, [class*="framer-badge"]').forEach(el => {
      el.parentNode.removeChild(el);
      count++;
    });

    // 5. SUPPRIMER LES RONDS BLANCS - Chercher tous les divs
    document.querySelectorAll('div, a, span').forEach(el => {
      try {
        const style = window.getComputedStyle(el);
        const bgColor = style.backgroundColor;
        const borderRadius = style.borderRadius;
        const width = el.offsetWidth;
        const height = el.offsetHeight;

        // Si c'est blanc avec border-radius et petite taille = SUPPRIMER
        const isWhite = bgColor === 'rgb(255, 255, 255)' || bgColor === 'white';
        const isRounded = borderRadius && (borderRadius.includes('50%') || parseFloat(borderRadius) > 5);
        const isSmall = width < 200 && height < 100;
        const isEmpty = !el.textContent.trim() || el.textContent.includes('Framer') || el.textContent.includes('Template');

        if (isWhite && isRounded && isSmall) {
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          count++;
        }

        // Supprimer spécifiquement les boutons Framer
        if (el.textContent && (el.textContent.includes('Made in Framer') || el.textContent.includes('More Templates'))) {
          el.parentNode.removeChild(el);
          count++;
        }
      } catch (e) {}
    });

    // 6. Supprimer les scripts Framer analytics
    document.querySelectorAll('script[src*="framer.com"]').forEach(el => {
      el.parentNode.removeChild(el);
      count++;
    });

    return count;
  }

  // Exécuter immédiatement
  removeAllFramerElements();

  // Exécuter quand le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeAllFramerElements);
  }

  // Exécuter plusieurs fois pour être sûr
  setTimeout(removeAllFramerElements, 0);
  setTimeout(removeAllFramerElements, 100);
  setTimeout(removeAllFramerElements, 500);
  setTimeout(removeAllFramerElements, 1000);
  setTimeout(removeAllFramerElements, 2000);
  setTimeout(removeAllFramerElements, 5000);

  // Observer les changements du DOM
  const observer = new MutationObserver(removeAllFramerElements);
  
  const startObserver = () => {
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }
  };

  if (document.body) {
    startObserver();
  } else {
    document.addEventListener('DOMContentLoaded', startObserver);
  }

  // Exécuter au chargement complet
  window.addEventListener('load', () => {
    removeAllFramerElements();
    setTimeout(removeAllFramerElements, 1000);
  });

  console.log('🔥 Script de suppression Framer ULTRA-AGRESSIF activé');
})();