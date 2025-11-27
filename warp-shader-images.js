// WARP SHADER EFFECT - Remplacer les images par des shaders animés
(function() {
  'use strict';

  // Palettes de couleurs différentes pour chaque shader
  const colorPalettes = [
    // Palette 1 - Bleu/Turquoise
    ["hsl(200, 100%, 20%)", "hsl(160, 100%, 75%)", "hsl(180, 90%, 30%)", "hsl(170, 100%, 80%)"],
    
    // Palette 2 - Violet/Rose
    ["hsl(280, 100%, 30%)", "hsl(320, 100%, 70%)", "hsl(300, 90%, 40%)", "hsl(340, 100%, 75%)"],
    
    // Palette 3 - Orange/Jaune
    ["hsl(30, 100%, 40%)", "hsl(50, 100%, 60%)", "hsl(40, 90%, 50%)", "hsl(60, 100%, 70%)"],
    
    // Palette 4 - Vert/Cyan
    ["hsl(140, 100%, 30%)", "hsl(180, 100%, 60%)", "hsl(160, 90%, 40%)", "hsl(200, 100%, 70%)"],
    
    // Palette 5 - Rouge/Pink
    ["hsl(0, 100%, 40%)", "hsl(340, 100%, 70%)", "hsl(20, 90%, 50%)", "hsl(320, 100%, 75%)"],
    
    // Palette 6 - Bleu foncé/Indigo
    ["hsl(220, 100%, 25%)", "hsl(260, 100%, 65%)", "hsl(240, 90%, 35%)", "hsl(280, 100%, 75%)"],
  ];

  class WarpShader {
    constructor(canvas, colors) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.colors = colors;
      this.time = Math.random() * 1000; // Offset aléatoire
      this.resizeCanvas();
    }

    resizeCanvas() {
      const rect = this.canvas.getBoundingClientRect();
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
    }

    // Générer un pattern de distorsion
    drawWarpPattern() {
      const { width, height } = this.canvas;
      const ctx = this.ctx;
      
      ctx.clearRect(0, 0, width, height);

      // Créer plusieurs gradients animés qui se superposent
      for (let i = 0; i < 4; i++) {
        const offsetX = Math.cos(this.time * 0.0005 + i) * width * 0.3;
        const offsetY = Math.sin(this.time * 0.0007 + i) * height * 0.3;
        
        const gradient = ctx.createRadialGradient(
          width / 2 + offsetX,
          height / 2 + offsetY,
          0,
          width / 2 + offsetX,
          height / 2 + offsetY,
          Math.max(width, height) * 0.8
        );
        
        const color = this.colors[i % this.colors.length];
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.globalCompositeOperation = i === 0 ? 'source-over' : 'lighter';
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Ajouter un effet de swirl/tourbillon
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.4;
      
      for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
        const x = centerX + Math.cos(angle + this.time * 0.001) * radius;
        const y = centerY + Math.sin(angle + this.time * 0.001) * radius;
        const size = 50 + Math.sin(this.time * 0.002 + angle) * 30;
        
        const grd = ctx.createRadialGradient(x, y, 0, x, y, size);
        grd.addColorStop(0, this.colors[Math.floor(angle / (Math.PI / 2)) % this.colors.length]);
        grd.addColorStop(1, 'transparent');
        
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = grd;
        ctx.fillRect(x - size, y - size, size * 2, size * 2);
      }

      this.time++;
    }

    animate() {
      this.drawWarpPattern();
      requestAnimationFrame(() => this.animate());
    }
  }

  function replaceImagesWithShaders() {
    console.log('🎨 Remplacement des images par des shaders...');
    
    const images = document.querySelectorAll('img');
    let shaderIndex = 0;
    
    images.forEach((img, index) => {
      // Ne remplacer que les grandes images (pas les logos, icônes, etc.)
      if (img.offsetWidth > 200 && img.offsetHeight > 200) {
        const parent = img.parentElement;
        
        // Créer un canvas
        const canvas = document.createElement('canvas');
        canvas.className = 'warp-shader-replacement';
        canvas.style.cssText = `
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        `;
        
        // Remplacer l'image par le canvas
        parent.replaceChild(canvas, img);
        
        // Créer et animer le shader
        const palette = colorPalettes[shaderIndex % colorPalettes.length];
        const shader = new WarpShader(canvas, palette);
        shader.animate();
        
        console.log(`✅ Image ${index + 1} remplacée par shader (palette ${shaderIndex + 1})`);
        shaderIndex++;
      }
    });
    
    console.log(`🎨 ${shaderIndex} images remplacées par des shaders animés`);
  }

  // Exécuter après le chargement
  window.addEventListener('load', () => {
    setTimeout(replaceImagesWithShaders, 2000);
  });

  console.log('🎨 Script de remplacement d\'images par shaders activé');
})();

