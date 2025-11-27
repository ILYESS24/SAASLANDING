// REBRANDING COMPLET : ARKITECT → AURION
(function() {
  'use strict';

  const newBranding = {
    // Nom de la marque
    brandName: 'AURION',
    
    // Titre principal
    heroTitle: 'The All-in-One Platform That Replaces 10,000 Tools',
    heroSubtitle: 'Build AI Apps & Websites, Edit Code with AI, Generate Images & Videos, Create AI Agents - All in One Revolutionary SaaS',
    
    // CTA
    ctaButton: 'Start Building Now',
    
    // Section About
    aboutTitle: 'One Platform. Infinite Possibilities.',
    aboutText: 'AURION is the world\'s first and only all-in-one SaaS platform designed for entrepreneurs and content creators. Stop juggling between dozens of tools and browser tabs. We\'ve unified everything you need to grow your business in one powerful, connected ecosystem.',
    
    // Features
    features: [
      {
        title: 'AI App & Website Builder',
        description: 'Build stunning applications and websites with AI-powered tools. No coding required, but full code access when you need it.'
      },
      {
        title: 'AI Code Editor',
        description: 'Edit and generate code with advanced AI assistance. From simple scripts to complex applications, AURION helps you code faster.'
      },
      {
        title: 'Next-Gen Media Creation',
        description: 'Create professional images and videos with cutting-edge AI generation. Latest models, unlimited creativity.'
      },
      {
        title: 'AI Assistant & Agents',
        description: 'Deploy intelligent AI agents with pre-built component libraries and workflow automation. Scale your operations effortlessly.'
      }
    ],
    
    // Stats
    stats: {
      projects: '10,000+',
      clients: '5,000+',
      satisfaction: '99%',
      tools: '1'
    },
    
    // Contact
    contactTitle: 'Ready to revolutionize your workflow?',
    contactSubtitle: 'Join thousands of entrepreneurs who replaced their entire tool stack with AURION',
    contactButton: 'Get Started Free'
  };

  function rebrandContent() {
    console.log('🔄 Rebranding vers AURION...');
    
    // Remplacer le titre de la page
    document.title = 'AURION - The All-in-One SaaS Platform for Entrepreneurs';
    
    // Remplacer tous les "Arkitect" par "AURION"
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
      if (el.children.length === 0) { // Seulement les éléments texte
        const text = el.textContent;
        if (text.match(/arkitect/i)) {
          el.textContent = text.replace(/arkitect/gi, 'AURION');
          console.log('✅ Remplacé:', text, '→', el.textContent);
        }
      }
    });
    
    // Remplacer les meta descriptions
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = 'AURION is the world\'s first all-in-one SaaS platform. Build AI apps, edit code with AI, generate images & videos, and create AI agents - all in one revolutionary platform.';
    }
    
    // Remplacer les titres Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.content = 'AURION - The All-in-One SaaS Revolution';
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.content = 'Replace 10,000 tools with one platform. Build, create, automate - everything in AURION.';
    }
    
    console.log('✅ Rebranding AURION terminé!');
  }

  // Exécuter le rebranding
  setTimeout(rebrandContent, 500);
  setTimeout(rebrandContent, 1000);
  setTimeout(rebrandContent, 2000);
  
  // Exécuter au chargement
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', rebrandContent);
  }
  
  window.addEventListener('load', rebrandContent);
  
  console.log('🚀 Script de rebranding AURION activé');
})();

