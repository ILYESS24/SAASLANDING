// WRAP SHADER EFFECT - Effet de distorsion visuelle
(function() {
  'use strict';

  // Créer un canvas pour l'effet shader
  const canvas = document.createElement('canvas');
  canvas.id = 'wrap-shader-canvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: overlay;
    opacity: 0.15;
  `;

  const ctx = canvas.getContext('2d');
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Effet de distorsion animé
  let time = 0;
  
  function drawShader() {
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);
    
    // Créer un gradient animé
    const gradient = ctx.createRadialGradient(
      width / 2 + Math.cos(time * 0.001) * 100,
      height / 2 + Math.sin(time * 0.001) * 100,
      0,
      width / 2,
      height / 2,
      Math.max(width, height) / 2
    );
    
    gradient.addColorStop(0, `rgba(59, 130, 246, ${Math.abs(Math.sin(time * 0.0005))})`);
    gradient.addColorStop(0.5, `rgba(147, 51, 234, ${Math.abs(Math.cos(time * 0.0007))})`);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    time++;
    requestAnimationFrame(drawShader);
  }

  // Ajouter le canvas au body
  if (document.body) {
    document.body.appendChild(canvas);
    drawShader();
    console.log('✅ Wrap Shader effect activé');
  } else {
    window.addEventListener('load', () => {
      document.body.appendChild(canvas);
      drawShader();
      console.log('✅ Wrap Shader effect activé');
    });
  }
})();

