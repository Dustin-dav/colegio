window.addEventListener('load', () => {
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        const contenido = document.getElementById('contenido');
        
        preloader.classList.add('hidden');
        contenido.style.display = 'block';
      }, 2500); 
    });
      const presidentes = [
        {
          id: 1,
          nombre: "José María Plácido Caamaño",
          periodo: "1884–1888",
          biografia: `José María Plácido Caamaño nació en Guayaquil en 1837 en una familia influyente. Estudió en el Instituto Vicente Rocafuerte y se formó en jurisprudencia en Quito, aunque su vida profesional se volcó al comercio cacaotero. Participó en la Revolución de Veintemilla y fue figura clave en el Gobierno Provisorio de 1883. Como presidente, convocó la Asamblea Constituyente, defendió la unidad nacional y se convirtió en símbolo de legalidad republicana. Tras su mandato, fue embajador en EE.UU. y gobernador del Guayas. Su legado se vio empañado por el escándalo de la Venta de la Bandera, por lo que terminó sus días exiliado en Sevilla, España, donde falleció en 1900 en la pobreza.`
        },
        {
          id: 2,
          nombre: "Emilio Estrada Carmona",
          periodo: "1911",
          biografia: `Nacido en Quito en 1855, Emilio Estrada fue un ferviente liberal. Desde joven vivió las consecuencias de los conflictos políticos que llevaron al exilio a su padre. Estudió en Guayaquil y se dedicó al comercio antes de entrar a la vida política. Se unió a la Revolución Liberal de 1895 y participó activamente en la reconstrucción de Guayaquil tras el incendio de 1896. Fue senador, gobernador del Guayas y firme defensor de la justicia y los derechos humanos. Aunque su aspecto severo le ganó el apodo de “El Ogro”, sus contemporáneos lo recordaron como un hombre generoso, incorruptible y profundamente humano.`
        },
        {
          id: 3,
          nombre: "Alfredo Baquerizo Moreno",
          periodo: "1912 / 1916–1920 / 1931–1932",
          biografia: `Alfredo Baquerizo Moreno nació en Guayaquil en 1859, proveniente de una familia acomodada. Estudió en el Colegio San Vicente y el Colegio San Gabriel, además del Conservatorio Nacional de Música. Obtuvo su título de abogado y desempeñó varios cargos públicos: canciller, vicepresidente, presidente del Congreso y presidente del Ecuador en tres ocasiones. Su gobierno (1916–1920) se caracterizó por un enfoque humanista y reformista: impulsó la jornada laboral de 8 horas, abolió el apremio personal y promovió la educación y la infraestructura. Fue un intelectual destacado, poeta, músico y diplomático. Murió a los 92 años, dejando un legado de progreso y civilidad política.`
        },
        {
          id: 4,
          nombre: "José Luis Tamayo",
          periodo: "1920–1924",
          biografia: `Nacido en Chanduy, Guayas, en 1858, quedó huérfano joven. Estudió Derecho y se convirtió en abogado y periodista comprometido con el liberalismo. Luchó en la Revolución de 1895 y defendió la libertad de prensa, lo que lo llevó al exilio. Como presidente, enfrentó la crisis cacaotera y los efectos de la Primera Guerra Mundial con honradez y austeridad. Fue un político firme, ético y profundamente comprometido con el servicio público. Tras dejar la presidencia, rechazó una pensión vitalicia y se mantuvo como abogado. En 1947 fue declarado “Mejor Ciudadano de Guayaquil”. Murió en 1947 dejando un legado de integridad.`
        },
        {
          id: 5,
          nombre: "Alberto Guerrero Martínez",
          periodo: "1932",
          biografia: `Nacido en Guayaquil en 1878, fue abogado, profesor y periodista. Se destacó como legislador y presidente del Congreso Nacional. En 1932 asumió la presidencia provisional tras la caída de Bonifaz. Su corto mandato se centró en restablecer el orden constitucional y convocar elecciones libres. Tras su mandato continuó su carrera como legislador y diplomático. Fue un ferviente defensor de la institucionalidad, la educación y los valores democráticos. Murió en 1941 siendo recordado como un intelectual comprometido con el desarrollo del Ecuador.`
        },
        {
          id: 6,
          nombre: "Francisco Arízaga Luque",
          periodo: "1925–1926 (Junta Provisional)",
          biografia: `Nació el 6 de febrero de 1900 en Barranco, Perú, donde su familia se encontraba exiliada. Estudió en los colegios Cristóbal Colón y Vicente Rocafuerte, y se graduó como abogado en la Universidad de Guayaquil. Participó en la Revolución Juliana de 1925, integrando la Primera Junta Provisional. En 1938 y 1944 fue presidente de las Asambleas Constituyentes, impulsando reformas fundamentales. Fue también ministro de Educación y embajador en el Reino Unido y Venezuela. Destacado jurista y político, su legado está vinculado al constitucionalismo y la diplomacia ecuatoriana.`
        },
        {
          id: 7,
          nombre: "Francisco José Boloña",
          periodo: "Dato no especificado",
          biografia: `Francisco José Boloña Rolando nació en Guayaquil. Fue educado en el Colegio Vicente Rocafuerte y luego cursó estudios superiores de medicina en Europa. Su carrera política estuvo marcada por su compromiso con el bienestar social, la educación y la salud pública. Fue presidente en un momento complejo de la historia nacional, durante el cual promovió el fortalecimiento institucional y políticas sociales. Médico de formación, impulsó reformas sanitarias y educativas. Es recordado como un líder íntegro, progresista y humanista que promovió el desarrollo nacional.`
        },
        {
          id: 8,
          nombre: "Pedro Pablo Garaycoa",
          periodo: "1925–1926 (Junta Provisional)",
          biografia: `Nació en Babahoyo en 1874. Se graduó en el Colegio San Vicente del Guayas y se destacó como intelectual y periodista. Fundó la Sociedad Literaria de Babahoyo y cofundó la revista “Crepúsculo”. Fue diputado, senador y ministro de Obras Públicas. Tras la Revolución Juliana, integró la Junta Provisional de 1925, trabajando por la modernización del país. Posteriormente dirigió la sucursal del Banco Central en Guayaquil. Hombre culto, orador y reformista, murió en 1936 dejando un legado de justicia, libertad y progreso.`
        },
        {
          id: 9,
          nombre: "Pedro Pablo Egüez Baquerizo",
          periodo: "1925–1926 / 1938 / 1944 (Asambleas y Junta)",
          biografia: `Nació en Portoviejo. Abogado graduado en la Universidad de Guayaquil, participó en la Junta Provisional de 1925 y presidió las Asambleas Constituyentes de 1938 y 1944. Fue ministro de Educación, embajador en Venezuela y Reino Unido, y defensor del acceso equitativo a la educación. Impulsó la democracia, las reformas sociales y la institucionalidad. Su legado se mantiene vivo en instituciones educativas que llevan su nombre.`
        },
        {
          id: 10,
          nombre: "José Antonio Gómez Gault",
          periodo: "1926 (Junta Provisional)",
          biografia: `Nació en Guayaquil en 1886. Estudió Ingeniería Civil en la Universidad de Cornell (EE.UU.), participando en grandes obras de infraestructura. Fue decano fundador de la Facultad de Ingeniería de la Universidad de Guayaquil y ocupó múltiples cargos públicos, entre ellos gobernador del Guayas, diputado y ministro de Obras Públicas. Fue miembro de la Segunda Junta de Gobierno en 1926. Impulsó grandes proyectos viales y educativos. Murió en Nueva York en 1948. Su legado destaca por su visión técnica, ética y compromiso urbano.`
        },
        {
          id: 11,
          nombre: "Luis Larrea Alba",
          periodo: "1931",
          biografia: `Militar y político nacido en Guayaquil en 1894. Estudió en el Colegio Vicente Rocafuerte e ingresó al Ejército Nacional en 1911. Ocupó cargos como director de la Escuela Militar y subjefe del Estado Mayor. Fue nombrado Encargado del Poder Ejecutivo en 1931 tras la renuncia de Isidro Ayora. Intentó implementar reformas, pero renunció por falta de apoyo político. También fue escritor, autor de obras sobre temas militares y políticos. Participó en la Revolución de Mayo de 1944. Falleció en 1979.`
        },
        {
          id: 12,
          nombre: "Juan de Dios Martínez Mera",
          periodo: "1932–1933",
          biografia: `Nacido en Guayaquil en 1875, fue educador, liberal y defensor de los derechos laborales. Participó con Eloy Alfaro en su juventud. Fue diputado, ministro y presidente en 1932, aunque su mandato fue interrumpido por el Congreso. Implantó beneficios sociales como vacaciones pagadas y asistencia médica en la empresa privada antes de que existiera el Código de Trabajo. Murió en 1955. Fue un ejemplo de integridad y servicio público.`
        },
        {
          id: 13,
          nombre: "Antonio Pons Campuzano",
          periodo: "1935",
          biografia: `Médico nacido en Guayaquil en 1897. Presidente del Concejo Municipal y luego gobernador del Guayas. Tras el derrocamiento de Velasco Ibarra en 1935, fue nombrado Encargado del Poder Ejecutivo por poco más de un mes. Luego fue embajador en Argentina y se retiró de la política. Dedicó el resto de su vida a la medicina. Murió en 1980. Fue recordado como una figura de transición honesta y democrática.`
        },
        {
          id: 14,
          nombre: "Carlos Arroyo del Río",
          periodo: "1940–1944",
          biografia: `Nacido en Guayaquil en 1893. Abogado y político liberal, fue presidente durante la Guerra de 1941 con Perú. Firmó el Protocolo de Río, lo que generó fuerte rechazo popular por la pérdida territorial. Su gobierno sufrió inestabilidad política, lo que llevó a su derrocamiento en la Revolución de Mayo de 1944. Fue también representante ante la Sociedad de Naciones. Murió en 1969. Su figura sigue siendo objeto de debate histórico.`
        },
        {
          id: 15,
          nombre: "Carlos Julio Arosemena Monroy",
          periodo: "1961–1963",
          biografia: `Nacido en Guayaquil en 1919, hijo del expresidente Carlos Julio Arosemena Tola y primo de Otto Arosemena. Estudió Derecho en la Universidad de Guayaquil. Desde joven se involucró en la política nacional. Como presidente, asumió el poder tras la renuncia de Velasco Ibarra. Su mandato se caracterizó por enfrentamientos con el Congreso y posturas críticas frente a Estados Unidos. Fue derrocado en 1963 por las Fuerzas Armadas.`
        },
        {
          id: 16,
          nombre: "Otto Arosemena Gómez",
          periodo: "1966–1968",
          biografia: `Nacido en Guayaquil en 1925. Doctor en Jurisprudencia, fue sobrino y primo de presidentes. Fundó un partido político moderado y asumió la presidencia en una etapa de transición. Se destacó por su vocación democrática, su enfoque conciliador y su gestión en momentos críticos. Fue autor del libro “Infamia y verdad sobre un presidente”.`
        },
        {
          id: 17,
          nombre: "Jaime Roldós Aguilera",
          periodo: "1979–1981",
          biografia: `Nacido en Guayaquil en 1940. Fue un brillante orador y defensor de los derechos humanos. Asumió la presidencia en 1979 con solo 38 años, marcando el retorno a la democracia tras las dictaduras militares. Implementó reformas laborales y sociales. Murió trágicamente en un accidente aéreo en 1981 junto a su esposa Martha Bucaram. Su muerte aún genera debate. Es recordado como símbolo de integridad política.`
        },
        {
          id: 18,
          nombre: "Alfredo Palacio",
          periodo: "2005–2007",
          biografia: `Nacido en Guayaquil en 1939. Cardiólogo de profesión, se formó en EE.UU. Fundó el Instituto Nacional de Cardiología. Fue ministro de Salud y vicepresidente. Asumió la presidencia tras la destitución de Lucio Gutiérrez. Gobernó con independencia política y se enfocó en salud, educación y desarrollo social. Falleció en 2025.`
        },
        {
          id: 19,
          nombre: "Lizardo García",
          periodo: "1905–1906",
          biografia: `Nacido en Guayaquil en 1844. Comerciante, político liberal y fundador de la Cámara de Comercio de Guayaquil. Fue ministro, senador y gobernador del Guayas. Asumió la presidencia en 1905, pero fue derrocado por Eloy Alfaro en 1906. Tras su caída, se retiró de la política. Murió en 1937. Representó al empresariado costeño y promovió la institucionalidad del país.`
        }
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
            <p class="card-text">${p.periodo}</p>
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
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-4">
                  <img src="assets/img/presidentes/presidente${p.id}.jpg" class="img-fluid rounded" alt="${p.nombre}">
                </div>
                <div class="col-md-8">
                  ${p.biografia}
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
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
      }, 2500);
    });