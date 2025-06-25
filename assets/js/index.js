window.addEventListener('load', () => {
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        const contenido = document.getElementById('contenido');
        
        preloader.classList.add('hidden');
        contenido.style.display = 'block';
      }, 3000); 
    });