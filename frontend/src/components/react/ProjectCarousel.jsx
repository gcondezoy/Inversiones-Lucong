// src/components/react/ProjectCarousel.jsx
import React, { useRef } from 'react';
import { obrasDestacadas } from '../../data/obras.js';

export default function ProjectCarousel() {
  const scrollRef = useRef(null);

  // Mueve el carrusel de forma fluida el ancho visible exacto
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative">

      {/* CABECERA: Título + navegación */}
      <div className="flex justify-between items-end mb-8 md:mb-12">
        <h2 className="text-[28px] md:text-[38px] font-semibold text-[#333333] tracking-tight leading-tight">
          Nuestras Obras
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#e66c37] hover:text-white hover:border-[#e66c37] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#e66c37] focus-visible:ring-offset-2 outline-none"
            aria-label="Ver obras anteriores"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#e66c37] hover:text-white hover:border-[#e66c37] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#e66c37] focus-visible:ring-offset-2 outline-none"
            aria-label="Ver siguientes obras"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* CARRUSEL */}
      <div
        ref={scrollRef}
        className="hide-scrollbar flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
      >
        {obrasDestacadas.map((p) => (
          <a
            href={`/obras/${p.id}`}
            key={p.id}
            className="snap-start shrink-0 w-[280px] md:w-[350px] lg:w-[380px] bg-slate-50 flex flex-col group rounded-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-200">
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6 md:p-8 flex-grow flex flex-col border-t border-slate-100 bg-white">
              <span className="text-[#e66c37] text-[11px] font-semibold uppercase tracking-wider mb-2 block">
                {p.subcategoria || p.categoria}
              </span>
              <h3 className="text-[17px] md:text-[19px] font-semibold text-[#333333] mb-3 leading-snug group-hover:text-[#e66c37] transition-colors">
                {p.titulo}
              </h3>
              <span className="text-slate-500 font-medium flex items-center gap-2 text-[13px] mt-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-[#e66c37]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {p.ubicacion}
              </span>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}
