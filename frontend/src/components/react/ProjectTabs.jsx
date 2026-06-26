// src/components/react/ProjectTabs.jsx
import React, { useState, useRef } from 'react';

const proyectosDb = [
  { id: 1, mainCat: 'Residencial', title: 'Edificio Residencial Los Alamos', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00', status: 'En ejecución', slug: '/proyectos/residencial-los-alamos' },
  { id: 2, mainCat: 'Industrial', title: 'Planta de Procesamiento de Acero', img: 'https://images.unsplash.com/photo-1565463299128-95d8208a0d0d', status: 'Completado', slug: '/proyectos/planta-acero' },
  { id: 3, mainCat: 'Comercial', title: 'Centro Comercial Miraflores', img: 'https://images.unsplash.com/photo-1562664376-7fb640b8b8ce', status: 'En ejecución', slug: '/proyectos/centro-comercial-miraflores' },
  { id: 4, mainCat: 'Infraestructura', title: 'Puente Vehicular Rio Verde', img: 'https://images.unsplash.com/photo-1581092160607-ee22530dd83a', status: 'Completado', slug: '/proyectos/puente-rio-verde' },
  { id: 5, mainCat: 'Hotelero', title: 'Hotel Boutique Cusco', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b', status: 'En ejecución', slug: '/proyectos/hotel-cusco' },
  { id: 6, mainCat: 'Pistas y veredas', title: 'Pavimentación de Av. Principal', img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9', status: 'En ejecución', slug: '/proyectos/pavimentacion-av' }
];

// Eliminamos "Todos" de aquí, tal como pediste
const categories = ['Residencial', 'Industrial', 'Comercial', 'Infraestructura', 'Hotelero', 'Pistas y veredas'];
// Mantenemos "Todos" solo en los estados (barra oscura)
const statuses = ['Todos', 'En ejecución', 'Completado'];

export default function ProjectTabs() {
  const [activeCat, setActiveCat] = useState('Residencial'); // Vuelve a Residencial por defecto
  const [activeStatus, setActiveStatus] = useState('Todos');
  
  const tabsContainerRef = useRef(null);

  const handleCategoryClick = (cat) => {
    setActiveCat(cat);
    
    // El scroll inteligente solo se activa en celulares (pantallas < 768px)
    if (window.innerWidth < 768 && tabsContainerRef.current) {
      setTimeout(() => {
        tabsContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  };

  const filteredProjects = proyectosDb.filter(p => {
    const matchCat = p.mainCat === activeCat;
    const matchStatus = activeStatus === 'Todos' ? true : p.status === activeStatus;
    return matchCat && matchStatus;
  });

  return (
    // LA CLAVE ESTÁ AQUÍ: Todo el componente ahora está limitado a 1050px de ancho máximo
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
      
      <div ref={tabsContainerRef} className="w-full mb-12 scroll-mt-[96px] md:scroll-mt-[112px]">
        
        {/* 1. BARRA DE CATEGORÍAS */}
        <div className="flex flex-col md:flex-row w-full gap-1 md:gap-[2px]">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`flex-1 py-4 px-2 text-center text-[14px] lg:text-[15px] transition-all duration-300 md:rounded-t-lg ${
                activeCat === cat
                  ? 'bg-white text-[#333333] font-medium shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.05)] z-10 relative'
                  : 'bg-slate-100 text-slate-500 font-normal hover:bg-slate-200 hover:text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2. BARRA DE ESTADOS */}
        <div className="w-full bg-[#333333] rounded-b-lg shadow-xl px-6 md:px-16 py-5 flex items-center justify-center md:justify-evenly gap-4 md:gap-0 relative z-20">
          {statuses.map((stat, idx) => (
            <React.Fragment key={stat}>
              <button
                onClick={() => setActiveStatus(stat)}
                className={`text-[15px] md:text-[16px] tracking-wide transition-colors ${
                  activeStatus === stat ? 'text-white font-medium' : 'text-slate-400 font-normal hover:text-slate-200'
                }`}
              >
                {stat}
              </button>
              {idx < statuses.length - 1 && (
                <span className="text-slate-600 font-extralight hidden md:inline-block select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
        
      </div>

      {/* 3. GRILLA DE PROYECTOS (Ahora hereda el ancho máximo de 1050px de su padre) */}
      <div key={activeCat + activeStatus} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-soft">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(p => (
            <a 
              href={p.slug} 
              key={p.id} 
              className="bg-white flex flex-col group cursor-pointer hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden border border-slate-200"
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-200">
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {p.status === 'En ejecución' && (
                  <div className="absolute top-4 right-4 bg-[#e66c37] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider shadow-md rounded-sm">
                    En ejecución
                  </div>
                )}
              </div>
              
              <div className="p-8 flex-grow flex flex-col justify-between border-t border-slate-100">
                <div>
                  <span className="text-[#e66c37] text-[11px] font-semibold uppercase tracking-wider mb-2 block">
                    {p.mainCat}
                  </span>
                  <h3 className="text-[19px] font-semibold text-[#333333] mb-4 group-hover:text-[#e66c37] transition-colors leading-snug">
                    {p.title}
                  </h3>
                </div>
                <span className="text-[#333333] font-semibold flex items-center gap-2 text-xs mt-4 group-hover:text-[#e66c37] transition-colors">
                  Ver detalles 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3 transform transition-transform group-hover:translate-x-1"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                </span>
              </div>
            </a>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center bg-slate-50 rounded-lg border border-dashed border-slate-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-slate-400 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 12.839a2.25 2.25 0 00-.1.661z" />
            </svg>
            <p className="text-slate-500 font-medium text-lg">Aún no hay proyectos con este estado en esta categoría.</p>
          </div>
        )}
      </div>
      
    </div>
  );
}