// src/components/react/AnimatedStats.jsx
import React, { useState, useEffect, useRef } from 'react';

const statsData = [
  { id: 1, end: 22, suffix: '+', title: 'AÑOS DE TRAYECTORIA' },
  { id: 2, end: 150, suffix: '+', title: 'OBRAS COMPLETADAS' },
  { id: 3, end: 80, suffix: '+', title: 'PROFESIONALES CALIFICADOS' },
  { id: 4, end: 40, suffix: '+', title: 'CLIENTES CORPORATIVOS' },
  { id: 5, end: 100, suffix: '%', title: 'CUMPLIMIENTO EN SEGURIDAD' },
];

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Solo se anima una vez
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full flex flex-wrap justify-between items-start gap-8 py-10 border-t border-b border-slate-100">
      {statsData.map((stat, index) => (
        <StatCounter 
          key={stat.id} 
          end={stat.end} 
          suffix={stat.suffix} 
          title={stat.title} 
          isVisible={isVisible}
          delay={index * 150} // Efecto en cascada
        />
      ))}
    </div>
  );
}

// Subcomponente para manejar el conteo individual de cada número
function StatCounter({ end, suffix, title, isVisible, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 2000; // 2 segundos de animación

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Función easeOutQuad para que el contador desacelere al final
      const easeOut = progress * (2 - progress);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    if (isVisible) {
      const timeout = setTimeout(() => {
        window.requestAnimationFrame(step);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, end, delay]);

  return (
    <div className="flex-1 min-w-[120px]">
      <div className="text-[40px] md:text-[50px] font-black text-[#333333] tracking-tighter leading-none mb-2">
        {count}{suffix}
      </div>
      <div className="text-[11px] md:text-[12px] font-bold text-slate-500 uppercase tracking-widest max-w-[140px] leading-tight">
        {title}
      </div>
    </div>
  );
}