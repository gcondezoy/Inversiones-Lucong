// src/components/react/ProjectCarousel.jsx
import React, { useRef } from 'react';

// Los mismos proyectos exactos que definimos para la página de Proyectos
const proyectosDestacados = [
  { id: 1, mainCat: 'Residencial', title: 'Edificio Residencial Los Alamos', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00', status: 'En ejecución', slug: '/proyectos/residencial-los-alamos' },
  { id: 2, mainCat: 'Industrial', title: 'Planta de Procesamiento de Acero', img: 'https://images.unsplash.com/photo-1565463299128-95d8208a0d0d', status: 'Completado', slug: '/proyectos/planta-acero' },
  { id: 3, mainCat: 'Comercial', title: 'Centro Comercial Miraflores', img: 'https://images.unsplash.com/photo-1562664376-7fb640b8b8ce', status: 'En ejecución', slug: '/proyectos/centro-comercial-miraflores' },
  { id: 4, mainCat: 'Infraestructura', title: 'Puente Vehicular Rio Verde', img: 'https://images.unsplash.com/photo-1581092160607-ee22530dd83a', status: 'Completado', slug: '/proyectos/puente-rio-verde' },
  { id: 5, mainCat: 'Hotelero', title: 'Hotel Boutique Cusco', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b', status: 'En ejecución', slug: '/proyectos/hotel-cusco' },
  { id: 6, mainCat: 'Pistas y veredas', title: 'Pavimentación de Av. Principal', img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9', status: 'En ejecución', slug: '/proyectos/pavimentacion-av' }
];

export default function ProjectCarousel() {
  const scrollRef = useRef(null);

  // Función para mover el carrusel de forma fluida
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Desplaza el ancho exacto visible en pantalla para no cortar tarjetas
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative">
      
      {/* CABECERA: Título alineado con botones de navegación */}
      <div className="flex justify-between items-end mb-8 md:mb-12">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#333333] tracking-tight leading-none">
          Nuestras Obras
        </h2>
        
        {/* Flechas de Navegación */}
        <div className="flex gap-3">
          <button 
            onClick={() => scroll('left')} 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#e66c37] hover:text-white hover:border-[#e66c37] transition-all duration-300 focus:outline-none"
            aria-label="Ver proyectos anteriores"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#e66c37] hover:text-white hover:border-[#e66c37] transition-all duration-300 focus:outline-none"
            aria-label="Ver siguientes proyectos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* CONTENEDOR DEL CARRUSEL */}
      {/* Ocultamos la barra de scroll nativa usando clases CSS */}
      <div 
        ref={scrollRef} 
        className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
      >
        {/* Estilo extra en línea para ocultar scroll en Webkit (Chrome/Safari) si es necesario */}
        <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }`}} />

        {proyectosDestacados.map((p) => (
          <a 
            href={p.slug} 
            key={p.id} 
            className="snap-start shrink-0 w-[280px] md:w-[350px] lg:w-[380px] bg-slate-50 flex flex-col group cursor-pointer hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden border border-slate-200"
          >
            <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-200">
              <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              {p.status === 'En ejecución' && (
                <div className="absolute top-4 right-4 bg-[#e66c37] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider shadow-md rounded-sm">
                  En ejecución
                </div>
              )}
            </div>
            
            <div className="p-6 md:p-8 flex-grow flex flex-col justify-between border-t border-slate-100 bg-white">
              <div>
                <span className="text-[#e66c37] text-[11px] font-semibold uppercase tracking-wider mb-2 block">
                  {p.mainCat}
                </span>
                <h3 className="text-[17px] md:text-[19px] font-semibold text-[#333333] mb-4 group-hover:text-[#e66c37] transition-colors line-clamp-2 leading-snug">
                  {p.title}
                </h3>
              </div>
              <span className="text-[#333333] font-semibold flex items-center gap-2 text-xs mt-4 group-hover:text-[#e66c37] transition-colors">
                Ver más 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3 transform transition-transform group-hover:translate-x-1"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              </span>
            </div>
          </a>
        ))}
      </div>
      
    </div>
  );
}