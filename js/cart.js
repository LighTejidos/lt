   //LIGHTEJIDOS — Lógica del Carrito
   //Persiste en localStorage

const Carrito = (() => {
  const CLAVE_STORAGE = 'lightejidos_carrito';

  /* ---- Almacenamiento ---- */
  function cargar() {
    try {
      return JSON.parse(localStorage.getItem(CLAVE_STORAGE)) || [];
    } catch {
      return [];
    }
  }

  function guardar(articulos) {
    try {
      localStorage.setItem(CLAVE_STORAGE, JSON.stringify(articulos));
    } catch (error) {
      console.error('Error al guardar el carrito:', error);
    }
  }

  /* ---- Estado ---- */
  let articulos = cargar();

  /* ---- Helpers ---- */
  function buscarArticulo(id) {
    return articulos.find(a => a.id === id);
  }

  function calcularRango() {
    if (!articulos.length) return '$0';
    let minTotal = 0, maxTotal = 0;
    articulos.forEach(a => {
      minTotal += a.precioMin * a.cantidad;
      maxTotal += a.precioMax * a.cantidad;
    });
    const formatear = n => '$' + n.toLocaleString('es-CO');
    if (minTotal === maxTotal) return formatear(minTotal);
    return `${formatear(minTotal)} – ${formatear(maxTotal)}`;
  }

  /* ---- API pública ---- */
  function agregar(producto) {
    const existente = buscarArticulo(producto.id);
    if (existente) {
      existente.cantidad += 1;
    } else {
      articulos.push({ ...producto, cantidad: 1 });
    }
    guardar(articulos);
    renderizar();
    abrirSidebar();
  }

  /* Elimina el artículo completo */
  function eliminar(id) {
    articulos = articulos.filter(a => a.id !== id);
    guardar(articulos);
    renderizar();
  }

  /* Incrementa cantidad en 1 */
  function incrementar(id) {
    const articulo = buscarArticulo(id);
    if (articulo) {
      articulo.cantidad += 1;
      guardar(articulos);
      renderizar();
    }
  }

  /* Decrementa cantidad en 1; si llega a 0 elimina el artículo */
  function decrementar(id) {
    const articulo = buscarArticulo(id);
    if (articulo) {
      articulo.cantidad -= 1;
      if (articulo.cantidad <= 0) {
        articulos = articulos.filter(a => a.id !== id);
      }
      guardar(articulos);
      renderizar();
    }
  }

  function totalArticulos() {
    return articulos.reduce((total, a) => total + a.cantidad, 0);
  }

  /* ---- DOM ---- */
  function renderizar() {
    const cuerpo   = document.getElementById('carrito-cuerpo');
    const contador = document.getElementById('contador-carrito');
    const rangoEl  = document.getElementById('carrito-rango-valor');

    /* Badge del navbar */
    const total = totalArticulos();
    if (contador) {
      contador.textContent = total;
      contador.classList.toggle('oculto', total === 0);
    }

    /* Rango de precio total */
    if (rangoEl) rangoEl.textContent = calcularRango();

    if (!cuerpo) return;

    if (!articulos.length) {
      cuerpo.innerHTML = `
        <div class="carrito-vacio">
          <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <p>Tu carrito está vacío</p>
        </div>`;
      return;
    }

    cuerpo.innerHTML = articulos.map(articulo => {
      return `
        <div class="carrito-item" id="item-${articulo.id}">
          <div class="carrito-item__miniatura">
            ${articulo.img
              ? `<img src="${articulo.img}" alt="${articulo.imgAlt || articulo.nombre}" onerror="this.parentElement.innerHTML='<span>${articulo.nombre[0]}</span>'">`
              : `<span>${articulo.nombre[0]}</span>`}
          </div>
          <div class="carrito-item__info">
            <div class="carrito-item__nombre">${articulo.nombre}</div>
            <div class="carrito-item__precio">${articulo.rangoPrecios || ''}</div>
            <div class="carrito-item__controles">
              <button class="btn-cantidad btn-eliminar"
                      onclick="Carrito.eliminar('${articulo.id}')"
                      aria-label="Eliminar ${articulo.nombre}" title="Quitar del carrito">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6l-1 14H6L5 6"/>
                  <path d="M10 11v6M14 11v6M9 6V4h6v2"/>
                </svg>
              </button>
              <button class="btn-cantidad btn-decrementar"
                      onclick="Carrito.decrementar('${articulo.id}')"
                      aria-label="Reducir cantidad de ${articulo.nombre}">−</button>
              <span class="carrito-cantidad">${articulo.cantidad}</span>
              <button class="btn-cantidad"
                      onclick="Carrito.incrementar('${articulo.id}')"
                      aria-label="Aumentar cantidad de ${articulo.nombre}">+</button>
            </div>
          </div>
        </div>`;
    }).join('');
  }

  /* ---- Sidebar sin overlay bloqueante ---- */
  function abrirSidebar() {
    document.getElementById('sidebar-carrito')?.classList.add('abierto');
  }

  function cerrarSidebar() {
    document.getElementById('sidebar-carrito')?.classList.remove('abierto');
  }

  /* ---- Mensaje de WhatsApp ---- */
  function construirMensajeWhatsapp() {
    if (!articulos.length) {
      alert('Tu carrito está vacío. Agrega productos antes de cotizar.');
      return;
    }
    let mensaje = '¡Hola! Me gustaría cotizar los siguientes productos de LIGHTEJIDOS:\n\n';
    articulos.forEach(a => {
      mensaje += `• ${a.nombre} (x${a.cantidad}) — ${a.rangoPrecios}\n`;
    });
    mensaje += `\nRango de precio total: ${calcularRango()}`;
    const url = `https://wa.me/573003925381?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }

  /* ---- Inicialización ---- */
  function inicializar() {
    document.addEventListener('click', (evento) => {
      const objetivo = evento.target;
      if (objetivo.closest('#btn-carrito'))    abrirSidebar();
      if (objetivo.closest('#cerrar-carrito')) cerrarSidebar();
      if (objetivo.closest('#btn-cotizar'))    construirMensajeWhatsapp();
    });
    renderizar();
  }

  return { agregar, eliminar, incrementar, decrementar, inicializar, abrirSidebar, cerrarSidebar };
})();

document.addEventListener('DOMContentLoaded', () => Carrito.inicializar());
