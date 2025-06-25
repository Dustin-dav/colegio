window.addEventListener('load', () => {
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        const contenido = document.getElementById('contenido');
        
        preloader.classList.add('hidden');
        contenido.style.display = 'block';
      }, 3000); 
    });
      const presidentes = [
      {
        id: 1,
        nombre: "Vicente Rocafuerte",
        periodo: "1835–1839",
        biografia: "Uno de los fundadores del Ecuador moderno. Defensor de la educación pública."
      },
      {
        id: 2,
        nombre: "Gabriel García Moreno",
        periodo: "1861–1865 / 1869–1875",
        biografia: "Destacado presidente conservador, defensor de la moral y la religión católica."
      },
      // Agrega aquí los otros 17 presidentes con sus datos
    ];

    const container = document.getElementById('presidentes-container');
    presidentes.forEach(p => {
      const card = document.createElement('div');
      card.className = 'col';
      card.innerHTML = `
        <div class="card h-100">
          <img src="assets/img/presidentes/presidente${p.id}.jpg" class="card-img-top" alt="${p.nombre}">
          <div class="card-body">
            <h5 class="card-title">${p.nombre}</h5>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalPresidente${p.id}">Ver más</button>
          </div>
        </div>
      `;
      container.appendChild(card);

      const modal = document.createElement('div');
      modal.className = 'modal fade';
      modal.id = `modalPresidente${p.id}`;
      modal.tabIndex = -1;
      modal.innerHTML = `
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${p.nombre}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p><strong>Período:</strong> ${p.periodo}</p>
              <p><strong>Biografía:</strong> ${p.biografia}</p>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    });

    window.addEventListener('load', () => {
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        const contenido = document.getElementById('contenido');

        preloader.classList.add('hidden');
        contenido.style.display = 'block';
      }, 3000);
    });