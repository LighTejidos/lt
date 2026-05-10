/* ================================================
   LIGHTEJIDOS — Datos de Productos
   ================================================ */

const WHATSAPP_NUMERO = '573003925381';

const categorias = [
  {
    id: 'bolsos',
    nombre: 'Bolsos',
    rangoPrecios: '$120 - 150 mil',
    precioMin: 120000,
    precioMax: 150000,
    productos: [
      {
        id: 'bolso-1',
        nombre: 'Bolsos tejidos',
        desc: 'Bolso grande crochet camel, forrado, tejido abierto.',
        img: 'imagenes/bolsos.png',
        imgAlt: 'Bolso tejido crochet camel'
      },
      {
        id: 'bolso-2',
        nombre: 'Bolsos tejidos',
        desc: 'Bolso amplio crochet verde oliva con asas de cuero café. Tejido geométrico calado, espacioso y elegante.',
        img: 'imagenes/productos/bolsos/b1.1.png',
        imgAlt: 'Bolso tejido verde oliva'
      },
      {
        id: 'bolso-3',
        nombre: 'Bolsos tejidos',
        desc: '  Bolso amplio tejido en rombos multicolor, tonos verde, rojo y naranja. Asas con cuentas turquesa.',
        img: 'imagenes/productos/bolsos/b2.1.png',
        imgAlt: 'Bolso tejido geométrico multicolor'
      },
      {
        id: 'bolso-4',
        nombre: 'Bolsos tejidos',
        desc: 'Bolso amplio crochet en cuadros florales mostaza, rojo y verde. Asas con cuentas de madera café.',
        img: 'imagenes/productos/bolsos/b3.1.png ',
        imgAlt: 'Bolso tejido artesanal'
      },
      {
        id: 'bolso-5',
        nombre: 'Bolsos tejidos',
        desc: 'Bolso crochet en motivos hexagonales mostaza y verde azulado sobre base café. Asas con cuentas de madera.',
        img: 'imagenes/productos/bolsos/b4.1.png',
        imgAlt: 'Bolso tejido geométrico multicolor'
      },
      {
        id: 'bolso-6',
        nombre: 'Bolsos tejidos',
        desc: 'Colección de bolsos y accesorios artesanales tejidos. Variedad de estilos, colores y materiales.',
        img: 'imagenes/productos/bolsos/b5.1.png',
        imgAlt: 'Bolso tejido artesanal'
      },
      {
        id: 'bolso-7',
        nombre: 'Bolsos tejidos',
        desc: 'Bolso de hombro crochet verde azulado con tapa de cuero grabado y correa ajustable. Artesanal y elegante.',
        img: 'imagenes/productos/bolsos/b6.1.png',
        imgAlt: 'Bolso tejido artesanal'
      },
      {
        id: 'bolso-8',
        nombre: 'Bolsos tejidos',
        desc: 'Bolso de mano crochet camel con motivo central en espiral. Asas largas, amplio y liviano.',
        img: 'imagenes/productos/bolsos/b7.1.png',
        imgAlt: 'Bolso tejido artesanal'
      },
     
    ]
  },
  {
    id: 'gorros',
    nombre: 'Gorros',
    rangoPrecios: 'Niños $20 - 30 mil · Adultos $25 - 30 mil',
    precioMin: 20000,
    precioMax: 30000,
    productos: [
      {
        id: 'gorro-1',
        nombre: 'Gorros Tejidos',
        desc: 'Par de gorros con orejeras y pompón en lana multicolor. Estilo andino, abrigador y artesanal.',
        img: 'imagenes/gorros.png',
        imgAlt: 'Gorro tejido con orejeras multicolor'
      },
      {
        id: 'gorro-2',
        nombre: 'Gorros Tejidos',
        desc: 'Pasamontañas tejido verde azulado que cubre cuello y rostro. Máxima protección para el frío.',
        img: 'imagenes/productos/gorros/g2.1.png',
        imgAlt: 'Gorro passamontañas verde azulado'
      },
      {
        id: 'gorro-3',
        nombre: 'Gorros Tejidos',
        desc: 'Conjunto gorro beige con rombos y cuello negro tejido grueso. Elegante y muy abrigador.',
        img: 'imagenes/productos/gorros/g3.1.png',
        imgAlt: 'Gorro beige con rombos'
      },
      {
        id: 'gorro-4',
        nombre: 'Gorros Tejidos',
        desc: 'Conjunto gorro gris con rombos y cuello negro tejido. Moderno, cálido y versátil.',
        img: 'imagenes/productos/gorros/g4.1.png',
        imgAlt: 'Gorro tejido artesanal'
      },
      {
        id: 'gorro-5',
        nombre: 'Gorros Tejidos',
        desc: 'Conjunto gorro y cuello tejido grueso en marrón moteado. Cálido y con estilo rústico.',
        img: 'imagenes/productos/gorros/g5.1.png',
        imgAlt: 'Gorro tejido artesanal'
      },
      {
        id: 'gorro-6',
        nombre: 'Gorros Tejidos',
        desc: 'Gorro tejido rojo con costillas pronunciadas. Clásico, abrigador y muy llamativo.',
        img: 'imagenes/productos/gorros/g6.1.png',
        imgAlt: 'Gorro tejido artesanal'
      },
      {
        id: 'gorro-7',
        nombre: 'Gorros Tejidos',
        desc: 'Sombrero de ala corta crochet color terracota con tejido calado. Ligero y muy tendencia.',
        img: 'imagenes/productos/gorros/g7.1.png',
        imgAlt: 'Gorro tejido artesanal'
      },
      {
        id: 'gorro-8',
        nombre: 'Gorros Tejidos',
        desc: ' Gorro tejido calado bicolor turquesa y gris. Estilo urbano con textura llamativa.',
        img: 'imagenes/productos/gorros/g8.1.png',
        imgAlt: 'Gorro tejido artesanal'
      },
    ]
  },
  {
    id: 'blusas',
    nombre: 'Blusas',
    rangoPrecios: '$55 - 70 mil',
    precioMin: 55000,
    precioMax: 70000,
    productos: [
      {
        id: 'blusa-1',
        nombre: 'Blusas Tejidas',
        desc: 'Cárdigan crochet en cuadros multicolor sobre base café. Cuello en V, botones oscuros y estilo retro.',
        img: 'imagenes/productos/blusas/bl1.1.png',
        imgAlt: 'Cárdigan crochet multicolor'
      },
      {
        id: 'blusa-2',
        nombre: 'Blusas Tejidas',
        desc: 'Suéter tejido liso morado, manga corta y cuello redondo. Suave, cómodo y muy versátil.',
        img: 'imagenes/productos/blusas/bl2.1.png',
        imgAlt: 'Suéter tejido morado'
      },
      {
        id: 'blusa-3',
        nombre: 'Blusas Tejidas',
        desc: 'Blusa crochet calada beige, escote en V y manga corta. Ligera y femenina, ideal para clima cálido.',
        img: 'imagenes/productos/blusas/bl3.1.png',
        imgAlt: 'Blusa crochet beige calada'
      },
      {
        id: 'blusa-4',
        nombre: 'Blusas Tejidas',
        desc: 'Chaleco crochet mostaza con motivos circulares calados. Sin mangas, escote en V y acabado festoneado.',
        img: 'imagenes/productos/blusas/bl4.1.png',
        imgAlt: 'Chaleco crochet mostaza calado'
      },
      {
        id: 'blusa-5',
        nombre: 'Blusas Tejidas',
        desc: 'Blusa crochet calada beige con escote en V y manga corta con volante. Artesanal y elegante.',
        img: 'imagenes/productos/blusas/bl5.1.png',
        imgAlt: 'Blusa crochet beige calada'
      },
      {
        id: 'blusa-6',
        nombre: 'Blusas Tejidas',
        desc: 'Chaleco crochet en cuadros gris neutro, sin mangas. Minimalista y fácil de combinar.',
        img: 'imagenes/productos/blusas/bl6.1.png',
        imgAlt: 'Chaleco crochet gris neutro'
      },
      {
        id: 'blusa-7',
        nombre: 'Blusas Tejidas',
        desc: 'Blusa escotada crochet en cuadros azul petróleo y beige con flecos. Estilo bohemio, ata al cuello.',
        img: 'imagenes/productos/blusas/bl7.1.png',
        imgAlt: 'Blusa escotada crochet'
      },
      {
        id: 'blusa-8',
        nombre: 'Blusas Tejidas',
        desc: 'Cárdigan crochet abierto azul y verde lima con rayas geométricas, mangas 3/4 y cuello camisero.',
        img: 'imagenes/productos/blusas/bl8.1.png',
        imgAlt: 'Cárdigan crochet azul verde'
      },
    ]
  },
  {
    id: 'ruanas',
    nombre: 'Ruanas',
    rangoPrecios: '$120 - 150 mil',
    precioMin: 120000,
    precioMax: 150000,
    productos: [
      {
        id: 'ruana-1',
        nombre: 'Ruanas tejidas',
        desc: 'Ruana tejida en cuadros multicolor fucsia, naranja y lila, con cuello y borlas mostaza. Amplia y muy abrigadora.',
        img: 'imagenes/productos/ruanas/r1.1.png',
        imgAlt: 'Ruana tejida fucsia naranja lila'
      },
      {
        id: 'ruana-2',
        nombre: 'Ruanas tejidas',
        desc: 'Ruana tejida a rayas en tonos tierra, rojo y naranja, con flecos. Estilo rústico y cálido.',
        img: 'imagenes/productos/ruanas/r2.1.png',
        imgAlt: 'Ruana tejida a rayas tonos tierra'
      },
      {
        id: 'ruana-3',
        nombre: 'Ruanas tejidas',
        desc: 'Ruana tejida en cuadros fucsia, naranja y lila con cuello mostaza y borlas. Vibrante y artesanal.',
        img: 'imagenes/productos/ruanas/r3.1.png',
        imgAlt: 'Ruana tejida colores tierra'
      },
      {
        id: 'ruana-4',
        nombre: 'Ruanas tejidas',
        desc: 'Ruana tejida multicolor en tonos arcoíris con cuello tejido y flecos mostaza. Alegre y muy abrigadora.',
        img: 'imagenes/productos/ruanas/r4.1.png',
        imgAlt: 'Ruana tejida multicolor arcoíris'
      },
        {
        id: 'ruana-5',
        nombre: 'Ruanas tejidas',
        desc: 'Ruana tejida en cuadros tonos tierra, naranja y turquesa. Amplia, cálida y de estilo bohemio.',
        img: 'imagenes/productos/ruanas/r5.1.png',
        imgAlt: 'Ruana tejida tonos tierra'
      },
        {
        id: 'ruana-6',
        nombre: 'Ruanas tejidas',
        desc: 'Ruana crochet a rayas multicolor con flecos y borlas mostaza. Incluye cuello tejido a juego.',
        img: 'imagenes/productos/ruanas/r6.1.png',
        imgAlt: 'Ruana crochet a rayas multicolor'
      },
        {
        id: 'ruana-7',
        nombre: 'Ruanas tejidas',
        desc: 'Ruana crochet en cuadros beige, blanco y naranja con largos flecos. Estilo bohemio y muy elegante.',
        img: 'imagenes/productos/ruanas/r7.1.png',
        imgAlt: 'Ruana crochet cuadros beige blanco naranja'
      },
    ]
  },
  {
    id: 'cuellos',
    nombre: 'Cuellos',
    rangoPrecios: 'Niños $20 - 30 mil · Adultos $25 - 30 mil',
    precioMin: 20000,
    precioMax: 30000,
    productos: [
      {
        id: 'cuello-1',
        nombre: 'Cuellos tejidos',
        desc: 'Cuello triangular tejido a rayas lila, morado y gris con largos flecos. Femenino y muy abrigador.',
        img: 'imagenes/productos/cuellos/c1.1.png',
        imgAlt: 'Cuello tejido lila morado gris'
      },
      {
        id: 'cuello-2',
        nombre: 'Cuellos tejidos',
        desc: 'Cuello triangular tejido en tonos pastel azul, verde y beige con flecos. Suave, delicado y versátil.',
        img: 'imagenes/productos/cuellos/c2.1.png',
        imgAlt: 'Cuello tejido pastel azul'
      },
      {
        id: 'cuello-3',
        nombre: 'Cuellos tejidos',
        desc: 'Cuello triangular tejido a rayas tonos tierra, verde y café con flecos. Rústico y muy cálido.',
        img: 'imagenes/productos/cuellos/c3.1.png',
        imgAlt: 'Cuello tejido a rayas tonos tierra'
      },
      {
        id: 'cuello-4',
        nombre: 'Cuellos tejidos',
        desc: ' Cuello triangular tejido en vino, turquesa y beige con flecos. Abrigador y de estilo bohemio. ',
        img: 'imagenes/productos/cuellos/c4.1.png',
        imgAlt: 'Cuello bufanda geométrico'
      },
      {
        id: 'cuello-5',
        nombre: 'Cuellos tejidos',
        desc: 'Cuello triangular crochet calado color vino con acabado en pompones. Elegante y artesanal.',
        img: 'imagenes/productos/cuellos/c5.1.png',
        imgAlt: 'Cuello bufanda geométrico'
      },
    ]
  },
  {
    id: 'mascotas',
    nombre: 'Ropa Para Mascotas',
    rangoPrecios: '$35 - 55 mil',
    precioMin: 35000,
    precioMax: 55000,
    productos: [
      {
        id: 'mascota-1',
        nombre: 'Saco Mascota Tejido',
        desc: 'Suéter tejido punto grueso rosa multicolor para gata. Suave, abrigador y muy tierno.',
        img: 'imagenes/productos/mascotas/m1.1.png',
        imgAlt: 'Suéter tejido para gato rosa'
      },
      {
        id: 'mascota-2',
        nombre: 'Saco Mascota Tejido',
        desc: 'Chaleco crochet en cuadros turquesa y fucsia para perro. Borde amarillo y cierre con botón.',
        img: 'imagenes/productos/mascotas/m2.1.png',
        imgAlt: 'Chaleco crochet mascota turquesa'
      },
      {
        id: 'mascota-3',
        nombre: 'Saco Mascota Tejido',
        desc: 'Suéter crochet arcoíris esponjoso con cuello alto para perro pequeño. Muy colorido y cálido.',
        img: 'imagenes/productos/mascotas/m3.1.png',
        imgAlt: 'Suéter crochet arcoíris perro'
      },
      {
        id: 'mascota-4',
        nombre: 'Saco Mascota Tejido',
        desc: 'Abrigo rojo en tela estampada para perro pequeño. Ligero, cálido y fácil de poner.',
        img: 'imagenes/productos/mascotas/m4.1.png',
        imgAlt: 'Abrigo tejido mascota artesanal'
      },
      {
        id: 'mascota-5',
        nombre: 'Saco Mascota Tejido',
        desc: 'Suéter tejido degradado arcoíris con cuello alto para perro pequeño. Alegre y muy abrigador.',
        img: 'imagenes/productos/mascotas/m5.1.png',
        imgAlt: 'Suéter tejido degradado arcoíris'
      },
      {
        id: 'mascota-6',
        nombre: 'Saco Mascota Tejido',
        desc: 'Suéter tejido punto grueso verde esmeralda con cuello alto para gato. Elegante y cálido.',
        img: 'imagenes/productos/mascotas/m6.1.png',
        imgAlt: 'Suéter tejido punto grueso verde esmeralda'
      },
      {
        id: 'mascota-7',
        nombre: 'Saco Mascota Tejido',
        desc: 'Suéter tejido a rayas naranja, fucsia y café con cuello alto para perro pequeño. Colorido y abrigador.',
        img: 'imagenes/productos/mascotas/m7.1.png',
        imgAlt: 'Suéter tejido a rayas naranja, fucsia y café'
      },
      {
        id: 'mascota-8',
        nombre: 'Saco Mascota Tejido',
        desc: ' Suéter tejido multicolor pastel lila, azul y verde con cuello alto para gata. Delicado y muy abrigador.',
        img: 'imagenes/productos/mascotas/m8.1.png',
        imgAlt: 'Suéter tejido multicolor pastel'
      },
    ]
  },
];

/* Productos destacados para el Home (uno por categoría) */
const productosDestacados = [
  { ...categorias[0].productos[0], rangoPrecios: categorias[0].rangoPrecios, precioMin: categorias[0].precioMin, precioMax: categorias[0].precioMax },
  { ...categorias[1].productos[0], rangoPrecios: categorias[1].rangoPrecios, precioMin: categorias[1].precioMin, precioMax: categorias[1].precioMax },
  { ...categorias[4].productos[0], rangoPrecios: categorias[4].rangoPrecios, precioMin: categorias[4].precioMin, precioMax: categorias[4].precioMax },
  { ...categorias[3].productos[0], rangoPrecios: categorias[3].rangoPrecios, precioMin: categorias[3].precioMin, precioMax: categorias[3].precioMax },
  { ...categorias[2].productos[2], rangoPrecios: categorias[2].rangoPrecios, precioMin: categorias[2].precioMin, precioMax: categorias[2].precioMax },
  { ...categorias[5].productos[2], rangoPrecios: categorias[5].rangoPrecios, precioMin: categorias[5].precioMin, precioMax: categorias[5].precioMax },
];

/* Helper: genera HTML seguro de una tarjeta de producto */
function htmlTarjetaProducto(p) {
  const datosSeguro = encodeURIComponent(JSON.stringify({
    id:          p.id,
    nombre:      p.nombre,
    desc:        p.desc,
    img:         p.img,
    imgAlt:      p.imgAlt,
    rangoPrecios: p.rangoPrecios,
    precioMin:   p.precioMin,
    precioMax:   p.precioMax,
  }));

  return `
    <div class="tarjeta-producto">
      <div class="tarjeta-producto__img">
        <img src="${p.img}" alt="${p.imgAlt}"
             onerror="this.parentElement.innerHTML='<div class=\\'img-ph\\'><svg viewBox=\\'0 0 24 24\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'/><polyline points=\\'21 15 16 10 5 21\\'/></svg><span>${p.imgAlt}</span></div>'">
      </div>
      <div class="tarjeta-producto__cuerpo">
        <div class="tarjeta-producto__nombre">${p.nombre}</div>
        <div class="tarjeta-producto__desc">${p.desc}</div>
        <div class="tarjeta-producto__precio">${p.rangoPrecios}</div>
        <div class="tarjeta-producto__boton">
          <button class="btn-vino" data-producto="${datosSeguro}" onclick="agregarAlCarrito(this)">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>`;
}

/* Función global para agregar al carrito desde atributo data */
function agregarAlCarrito(boton) {
  try {
    const producto = JSON.parse(decodeURIComponent(boton.dataset.producto));
    Carrito.agregar(producto);
  } catch (error) {
    console.error('Error al agregar producto al carrito:', error);
  }
}
