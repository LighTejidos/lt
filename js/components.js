/* ================================================
   LIGHTEJIDOS — Componentes compartidos
   Navbar, Footer, Carrito lateral
   ================================================ */

function renderizarNavbar(paginaActiva) {
  const paginas = [
    { href: 'index.html',    etiqueta: 'Inicio' },
    { href: 'productos.html',etiqueta: 'Nuestros Productos' },
    { href: 'contacto.html', etiqueta: 'Contáctanos' },
    { href: 'nosotros.html', etiqueta: 'Nuestra Historia' },
  ];
  const enlaces = paginas.map(p => `
    <li class="nav-item">
      <a class="nav-link${p.href === paginaActiva ? ' active' : ''}" href="${p.href}">${p.etiqueta}</a>
    </li>`).join('');

  return `
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <img src="imagenes/Logo_Lightejidos.png" alt="Lightejidos" class="logo-marca"
             onerror="this.outerHTML='<span class=\\'nombre-marca\\'>Lightejidos</span>'">
      </a>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navPrincipal"
              aria-controls="navPrincipal" aria-expanded="false" aria-label="Abrir menú">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navPrincipal">
        <ul class="navbar-nav me-3">${enlaces}</ul>
        <div class="acciones-nav">
        </div>
      </div>
      <button class="btn-icono-nav" id="btn-carrito" title="Mi carrito" aria-label="Abrir carrito">
        <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <span class="contador-carrito oculto" id="contador-carrito">0</span>
      </button>
    </div>
  </nav>`;
}

function renderizarPie() {
  return `
  <footer class="pie-pagina">
    <div class="container">
      <div class="row g-4 align-items-start">

        <!-- Marca -->
        <div class="col-lg-4">
          <div class="pie-marca">
            <img src="imagenes/Logo_Lightejidos.png" alt="Lightejidos" class="logo-pie"
                 onerror="this.outerHTML='<span class=\\'nombre-pie\\'>Lightejidos</span>'">
          </div>
          <div class="copyright-pie">Copyright ©LIGHTEJIDOS</div>
        </div>
        <!-- WhatsApp -->
        <div class="col-lg-4">
          <p class="pie-col-titulo">Contáctate con Nosotros:</p>
          <div class="pie-caja-wa">
            <input type="text" value="+573003925381" readonly aria-label="Número de WhatsApp">
            <button class="btn-wa" onclick="window.open('https://wa.me/573003925381','_blank')" aria-label="Escribir por WhatsApp">
              Escríbenos
            </button>
          </div>
        </div>

        <!-- Redes -->
        <div class="col-lg-4">
          <p class="pie-col-titulo">Síguenos</p>
          <div class="pie-redes">
            <a href="https://www.instagram.com/mascotaslightejidos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram de Lightejidos">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/LIGHTEJIDOS/" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook de Lightejidos">
              <svg viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </footer>`;
}

function renderizarSidebarCarrito() {
  return `
  <aside class="sidebar-carrito" id="sidebar-carrito" aria-label="Carrito de compras">
    <div class="carrito-cabecera">
      <h2>Mi carrito</h2>
      <button class="carrito-cerrar" id="cerrar-carrito" aria-label="Cerrar carrito">✕</button>
    </div>
    <div class="carrito-cuerpo" id="carrito-cuerpo">
      <div class="carrito-vacio">
        <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p>Tu carrito está vacío</p>
      </div>
    </div>
    <div class="carrito-pie">
      <div class="carrito-rango">
        <span>Rango de precio total:</span>
        <span id="carrito-rango-valor">$0</span>
      </div>
      <button class="btn-cotizar" id="btn-cotizar">
        Ir a cotizar
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  </aside>`;
}

/* Inyecta los componentes al cargar la página */
document.addEventListener('DOMContentLoaded', () => {
  const elNavbar  = document.getElementById('navbar-placeholder');
  const elPie     = document.getElementById('footer-placeholder');
  const elCarrito = document.getElementById('cart-placeholder');
  const paginaActiva = window.location.pathname.split('/').pop() || 'index.html';
  if (elNavbar)  elNavbar.innerHTML  = renderizarNavbar(paginaActiva);
  if (elPie)     elPie.innerHTML     = renderizarPie();
  if (elCarrito) elCarrito.innerHTML = renderizarSidebarCarrito();
});
