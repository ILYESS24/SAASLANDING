// VERSION ULTRA-SIMPLE : EFFET VISUEL IMMÉDIAT
(function() {
  console.log('🚀 MOUSE SPARK: DÉMARRAGE IMMÉDIAT...');

  // Créer un canvas visible pour debug
  const canvas = document.createElement('canvas');
  canvas.id = 'mouse-spark-canvas';
  canvas.style.cssText = `
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    pointer-events: none !important;
    z-index: 99999 !important;
    background: rgba(255, 0, 0, 0.1) !important; /* Fond rouge transparent pour debug */
    border: 2px solid red !important;
  `;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Ajouter immédiatement au body
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  let particles = [];

  console.log('✅ Canvas créé et ajouté à la page');

  // Fonction pour créer des particules VISIBLES
  function createParticle(x, y) {
    console.log('✨ Création particule à:', x, y);
    particles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      color: '#ff0000', // Rouge pour visibilité
      life: 100,
      size: 10 // Grande taille pour visibilité
    });
  }

  // Animation simple
  function animate() {
    if (!ctx) return;

    // Fond semi-transparent
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dessiner et mettre à jour les particules
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.98;
      p.vy *= 0.98;
      p.life--;

      // Cercle rouge visible
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Texte de debug
      ctx.fillStyle = 'white';
      ctx.font = '12px Arial';
      ctx.fillText('PARTICLE', p.x - 20, p.y - 15);

      if (p.life <= 0) {
        particles.splice(i, 1);
      }
    });

    requestAnimationFrame(animate);
  }

  // Événement souris
  document.addEventListener('click', function(e) {
    console.log('🖱️ Clic détecté, création particule');
    createParticle(e.clientX, e.clientY);
  });

  document.addEventListener('mousemove', function(e) {
    if (Math.random() < 0.1) { // 10% de chance à chaque mouvement
      createParticle(e.clientX, e.clientY);
    }
  });

  // Démarrer l'animation
  animate();

  console.log('🎉 MOUSE SPARK ACTIF ! Cliquez ou déplacez la souris pour voir les particules rouges.');

  // Fonction pour désactiver
  window.disableMouseSpark = function() {
    canvas.remove();
    console.log('❌ Mouse Spark désactivé');
  };

})();
