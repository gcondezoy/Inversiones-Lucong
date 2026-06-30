// src/data/obras.js
// Fuente única de datos de obras. La consumen ProjectTabs (página /obras)
// y ProjectCarousel (inicio). Las imágenes viven en /public/obras.

export const categorias = ['Edificaciones', 'Industrial', 'Infraestructura'];

// Subcategorías que aplican solo a "Edificaciones"
export const subcategoriasEdificaciones = ['Residencial', 'Comercial', 'Hotelería', 'Oficinas'];

export const obras = [
  // --- RESIDENCIAL ---
  {
    id: 'multifamiliar-continental-comas',
    categoria: 'Edificaciones',
    subcategoria: 'Residencial',
    titulo: 'Edificio Multifamiliar Continental',
    ubicacion: 'Comas, Lima',
    cliente: 'Propio',
    estado: 'Ejecutado',
    descripcion:
      'Construcción de un edificio multifamiliar de seis pisos con 16 departamentos y 8 cocheras, diseñado para ofrecer espacios modernos, funcionales y seguros, con acabados de calidad y una distribución eficiente para el confort de sus residentes.',
    img: '/obras/edificio-multifamiliar-continental-comas.jpg',
    alt: 'Edificio multifamiliar Continental de seis pisos construido por Inversiones Lucong en Comas, Lima',
    destacada: true,
  },
  {
    id: 'vivienda-unifamiliar-la-molina',
    categoria: 'Edificaciones',
    subcategoria: 'Residencial',
    titulo: 'Vivienda Unifamiliar',
    ubicacion: 'La Molina, Lima',
    cliente: '',
    estado: 'Ejecutado',
    descripcion:
      'Construcción de una vivienda unifamiliar en La Molina, diseñada con un enfoque moderno y funcional, ofreciendo espacios cómodos, acabados de alta calidad y una infraestructura segura y duradera.',
    img: '/obras/vivienda-unifamiliar-la-molina.jpg',
    alt: 'Vivienda unifamiliar construida por Inversiones Lucong en La Molina, Lima',
    destacada: false,
  },
  {
    id: 'casona-san-blas-junin',
    categoria: 'Edificaciones',
    subcategoria: 'Residencial',
    titulo: 'Remodelación Casona San Blas',
    ubicacion: 'San Blas, Junín',
    cliente: '',
    estado: 'Ejecutado',
    descripcion:
      'Remodelación integral de la Casona San Blas en Junín, recuperando el valor arquitectónico de la edificación mediante un trabajo cuidadoso de restauración y modernización. Se intervinieron estructuras y acabados respetando el carácter original de la casona, logrando un resultado funcional, seguro y de calidad.',
    img: '/obras/remodelacion-casona-san-blas-junin.jpg',
    alt: 'Remodelación de la casona San Blas en Junín por Inversiones Lucong',
    destacada: false,
  },
  {
    id: 'hotel-ginebra',
    categoria: 'Edificaciones',
    subcategoria: 'Hotelería',
    titulo: 'Hotel Ginebra',
    ubicacion: 'Independencia, Lima',
    cliente: '',
    estado: 'Ejecutado',
    descripcion:
      'Construcción del Hotel Ginebra, de seis niveles y un sótano, ejecutado con altos estándares de calidad, integrando una infraestructura moderna, segura y funcional para brindar comodidad y una óptima experiencia a sus huéspedes.',
    img: '/obras/hotel-ginebra.jpg',
    alt: 'Construcción del Hotel Ginebra de seis niveles por Inversiones Lucong en Independencia, Lima',
    destacada: true,
  },

  // --- INDUSTRIAL ---
  {
    id: 'nave-industrial-efco-chilca',
    categoria: 'Industrial',
    titulo: 'Nave Industrial EFCO',
    ubicacion: 'Chilca, Lima',
    cliente: 'EFCO',
    estado: 'Ejecutado',
    descripcion:
      'Construcción de una nave industrial diseñada para optimizar los procesos operativos, con una infraestructura resistente, funcional y adaptada a las necesidades de producción, almacenamiento y logística.',
    img: '/obras/nave-industrial-efco-chilca.jpg',
    alt: 'Nave industrial EFCO construida por Inversiones Lucong en Chilca, Lima',
    destacada: true,
  },
  {
    id: 'planta-agroindustrial-grupo-silvestre',
    categoria: 'Industrial',
    titulo: 'Planta Agroindustrial Grupo Silvestre',
    ubicacion: 'Cajamarquilla, Lima',
    cliente: 'Neo Agrum SAC',
    estado: 'Ejecutado',
    descripcion:
      'Construcción de una planta industrial de agroquímicos, desarrollada con una infraestructura moderna, segura y funcional, diseñada para optimizar los procesos de producción y cumplir con los estándares de calidad del sector.',
    img: '/obras/planta-agroindustrial-grupo-silvestre.jpg',
    alt: 'Planta industrial de agroquímicos del Grupo Silvestre construida por Inversiones Lucong en Cajamarquilla, Lima',
    destacada: true,
  },
  {
    id: 'fabrica-cemento-huachipa',
    categoria: 'Industrial',
    titulo: 'Fábrica de Cemento',
    ubicacion: 'Huachipa, Lima',
    cliente: '',
    estado: 'Ejecutado',
    descripcion:
      'Construcción de infraestructura para una fábrica de cemento en Huachipa, ejecutada con altos estándares técnicos y de seguridad. Se desarrollaron estructuras resistentes y funcionales, capaces de soportar las exigencias de un proceso productivo industrial de gran escala y de operación continua.',
    img: '/obras/fabrica-de-cemento-huachipa.png',
    alt: 'Fábrica de cemento construida por Inversiones Lucong en Huachipa, Lima',
    destacada: false,
  },
  {
    id: 'planta-cementos-inka-pisco',
    categoria: 'Industrial',
    titulo: 'Planta Cementos Inka',
    ubicacion: 'Pisco, Ica',
    cliente: 'Cementos Inka',
    estado: 'Ejecutado',
    descripcion:
      'Trabajos de construcción en la planta de Cementos Inka en Pisco, desarrollados con una infraestructura moderna y resistente. La obra estuvo orientada a optimizar los procesos productivos y a cumplir con los estándares técnicos y de seguridad propios de la industria cementera.',
    img: '/obras/planta-cementos-inka-pisco.jpg',
    alt: 'Obra en la planta de Cementos Inka en Pisco, Ica, por Inversiones Lucong',
    destacada: false,
  },
  {
    id: 'polvorin-caraz',
    categoria: 'Infraestructura',
    titulo: 'Polvorín',
    ubicacion: 'Caraz, Áncash',
    cliente: '',
    estado: 'Ejecutado',
    descripcion:
      'Construcción de un polvorín en Caraz, edificación especializada para el almacenamiento seguro de explosivos. La obra se ejecutó conforme a la normativa de seguridad vigente, con una infraestructura resistente que garantiza el resguardo, la ventilación y el control adecuado de los materiales.',
    img: '/obras/polvorin-caraz.jpg',
    alt: 'Construcción de polvorín en Caraz, Áncash, por Inversiones Lucong',
    destacada: false,
  },
  {
    id: 'polvorin-huanuco',
    categoria: 'Infraestructura',
    titulo: 'Polvorín',
    ubicacion: 'Huánuco',
    cliente: '',
    estado: 'Ejecutado',
    descripcion:
      'Construcción de un polvorín en Huánuco para el almacenamiento controlado y seguro de material explosivo. Desarrollado bajo estrictos estándares técnicos y de seguridad, con una estructura sólida, ventilada y funcional acorde a la normativa aplicable para este tipo de instalaciones.',
    img: '/obras/polvorin-huanuco.jpg',
    alt: 'Construcción de polvorín en Huánuco por Inversiones Lucong',
    destacada: false,
  },
  {
    id: 'polvorin-satipo',
    categoria: 'Infraestructura',
    titulo: 'Polvorín',
    ubicacion: 'Satipo, Junín',
    cliente: '',
    estado: 'Ejecutado',
    descripcion:
      'Construcción de un polvorín en Satipo, infraestructura diseñada para el almacenamiento seguro de explosivos. Se ejecutó con materiales resistentes y bajo rigurosos protocolos de seguridad, garantizando el correcto resguardo de los materiales y el cumplimiento de la normativa vigente.',
    img: '/obras/polvorin-satipo.jpg',
    alt: 'Construcción de polvorín en Satipo, Junín, por Inversiones Lucong',
    destacada: false,
  },

  // --- INFRAESTRUCTURA ---
  {
    id: 'adoquinado-carmen-de-la-legua',
    categoria: 'Infraestructura',
    titulo: 'Adoquinado',
    ubicacion: 'Carmen de la Legua Reynoso, Callao',
    cliente: 'Municipalidad de Carmen de la Legua Reynoso',
    estado: 'Ejecutado',
    descripcion:
      'Obra de adoquinado ejecutada en Carmen de la Legua, desarrollada con altos estándares de calidad para brindar una superficie resistente, funcional y de excelente acabado.',
    img: '/obras/adoquinado-carmen-de-la-legua.jpg',
    alt: 'Obra de adoquinado en Carmen de la Legua Reynoso, Callao, por Inversiones Lucong',
    destacada: true,
  },
  {
    id: 'pistas-y-veredas-comas',
    categoria: 'Infraestructura',
    titulo: 'Pistas',
    ubicacion: 'Comas, Lima',
    cliente: 'Municipalidad de Comas',
    estado: 'Ejecutado',
    descripcion:
      'Construcción de pistas con altos estándares de calidad, garantizando vías seguras, duraderas y funcionales que mejoran la transitabilidad y contribuyen al desarrollo de la infraestructura urbana.',
    img: '/obras/pistas-y-veredas-comas.jpg',
    alt: 'Construcción de pistas en Comas, Lima, por Inversiones Lucong',
    destacada: false,
  },
  {
    id: 'canaletas-alto-peru',
    categoria: 'Infraestructura',
    titulo: 'Canaletas',
    ubicacion: 'Alto Perú, Tacna',
    cliente: 'Aldesa',
    estado: 'Ejecutado',
    descripcion:
      'Construcción de canaletas de concreto en Alto Perú, mejorando el sistema de drenaje mediante una ejecución eficiente y conforme a los estándares técnicos de calidad.',
    img: '/obras/canaletas-alto-peru.jpg',
    alt: 'Construcción de canaletas de concreto en Alto Perú, Tacna, por Inversiones Lucong',
    destacada: false,
  },
  {
    id: 'mercado-conzac',
    categoria: 'Edificaciones',
    subcategoria: 'Comercial',
    titulo: 'Mercado Conzac',
    ubicacion: 'Los Olivos, Lima',
    cliente: 'Mercados Conzac',
    estado: 'Ejecutado',
    descripcion:
      'Construcción del Gran Mercado Conzac, ejecutado con una infraestructura funcional y segura, diseñada para optimizar la actividad comercial, brindar comodidad a los comerciantes y mejorar la experiencia de los usuarios con espacios ordenados y de calidad.',
    img: '/obras/mercado-conzac.jpg',
    alt: 'Construcción del Gran Mercado Conzac por Inversiones Lucong en Los Olivos, Lima',
    destacada: true,
  },
  {
    id: 'centro-comercial-mexico-comas',
    categoria: 'Edificaciones',
    subcategoria: 'Comercial',
    titulo: 'Centro Comercial México',
    ubicacion: 'Comas, Lima',
    cliente: '',
    estado: 'Ejecutado',
    descripcion:
      'Construcción de una galería comercial de dos niveles para el sector ferretero, con una infraestructura moderna, espacios funcionales y una distribución eficiente, diseñada para brindar seguridad, comodidad y un óptimo desarrollo de la actividad comercial.',
    img: '/obras/centro-comercial-mexico-comas.jpg',
    alt: 'Galería comercial México de dos niveles construida por Inversiones Lucong en Comas, Lima',
    destacada: false,
  },
];

export const obrasDestacadas = obras.filter((o) => o.destacada);
