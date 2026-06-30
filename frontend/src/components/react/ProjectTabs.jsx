// src/components/react/ProjectTabs.jsx
import React, { useState, useRef } from 'react';
import { obras, categorias, subcategoriasEdificaciones } from '../../data/obras.js';

// Subcategorías de Edificaciones que realmente tienen obras (en su orden oficial)
const subcatsConObras = subcategoriasEdificaciones.filter((sub) =>
  obras.some((o) => o.categoria === 'Edificaciones' && o.subcategoria === sub)
);

export default function ProjectTabs() {
  const [activeCat, setActiveCat] = useState(categorias[0]); // 'Edificaciones'
  const [activeSub, setActiveSub] = useState('Todas');
  const tabsContainerRef = useRef(null);

  const handleCategoryClick = (cat) => {
    setActiveCat(cat);
    setActiveSub('Todas'); // al cambiar de categoría, reinicia el sub-filtro

    if (window.innerWidth < 768 && tabsContainerRef.current) {
      setTimeout(() => {
        tabsContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  };

  const filteredProjects = obras.filter((p) => {
    if (p.categoria !== activeCat) return false;
    if (activeCat === 'Edificaciones' && activeSub !== 'Todas') {
      return p.subcategoria === activeSub;
    }
    return true;
  });

  const subFilters = ['Todas', ...subcatsConObras];

  return (
    <div className="w-full max-w-[1050px] mx-auto">
      <style>{`
        @keyframes fadeInSoft {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-soft {
          animation: fadeInSoft 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      {/* BARRA DE CATEGORÍAS PRINCIPALES */}
      <div ref={tabsContainerRef} className="w-full mb-6 scroll-mt-[96px] md:scroll-mt-[112px]">
        <div className="flex flex-col sm:flex-row w-full gap-2 md:gap-3">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`flex-1 py-4 px-4 text-center text-[15px] lg:text-[16px] rounded-lg transition-all duration-300 ${
                activeCat === cat
                  ? 'bg-[#e66c37] text-white font-semibold shadow-lg shadow-[#e66c37]/20'
                  : 'bg-slate-100 text-slate-500 font-medium hover:bg-slate-200 hover:text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* SUB-FILTRO (solo en Edificaciones) */}
      {activeCat === 'Edificaciones' && (
        <div className="w-full mb-10 flex flex-wrap items-center gap-2">
          {subFilters.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSub(sub)}
              className={`px-4 py-2 text-[13px] rounded-full border transition-all duration-200 ${
                activeSub === sub
                  ? 'bg-[#333333] text-white border-[#333333] font-medium'
                  : 'bg-white text-slate-500 border-slate-200 font-normal hover:border-slate-400 hover:text-slate-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* GRILLA DE PROYECTOS */}
      <div key={activeCat + activeSub} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-soft">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((p) => (
            <a
              href={`/obras/${p.id}`}
              key={p.id}
              className="bg-white flex flex-col group rounded-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-200">
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex-grow flex flex-col border-t border-slate-100">
                <span className="text-[#e66c37] text-[11px] font-semibold uppercase tracking-wider mb-2 block">
                  {p.subcategoria || p.categoria}
                </span>
                <h3 className="text-[19px] font-semibold text-[#333333] mb-3 leading-snug group-hover:text-[#e66c37] transition-colors">
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
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center bg-slate-50 rounded-lg border border-dashed border-slate-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-slate-400 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 12.839a2.25 2.25 0 00-.1.661z" />
            </svg>
            <p className="text-slate-500 font-medium text-lg">Aún no hay obras en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
}
