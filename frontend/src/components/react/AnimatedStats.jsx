// src/components/react/AnimatedStats.jsx
import React, { useEffect, useState, useRef } from 'react';

const StatItem = ({ endValue, label, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 2000; // 2 segundos de animación
        const increment = endValue / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= endValue) {
            setCount(endValue);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        observer.disconnect(); // Solo anima una vez
      }
    }, { threshold: 0.5 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [endValue]);

  return (
    <div ref={ref} className="animate-fade-in-up">
      <h3 className="text-4xl md:text-5xl font-extrabold text-[#333333]">
        {prefix}{count.toLocaleString()}{suffix}
      </h3>
      <p className="text-xs uppercase font-bold text-slate-500 mt-2">{label}</p>
    </div>
  );
};

export default function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-slate-200 pt-12">
       <StatItem prefix="S/" endValue={821} suffix="MM" label="En ventas anuales" />
       <StatItem endValue={100} suffix="%" label="Clientes sector privado" />
       <StatItem endValue={19} label="Contratos ejecutados" />
       <StatItem endValue={3800} prefix="+" label="Trabajadores" />
       <StatItem endValue={100} suffix="%" label="Casos atendidos ética" />
    </div>
  );
}