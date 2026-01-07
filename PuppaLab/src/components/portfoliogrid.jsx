import React from 'react';
import Mockup1 from '../assets/mockup1.png'
import Office1 from '../assets/office1.jpeg'
import Working1 from '../assets/working1.jpeg'
import Marketing1 from '../assets/marketing1.jpg'

export default function PortfolioGrid() {
  const projects = [
    { title: "Diseño gráfico & Branding", size: "md:col-span-2", img: Office1 },
    { title: "Estrategia Marketing", size: "md:col-span-1", img: Marketing1 },
    { title: "Diseño Editorial", size: "md:col-span-1", img: Mockup1 },
    { title: "Web Design UI/UX", size: "md:col-span-2", img: Working1 },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-black">
      <h2 className="text-3xl font-bold mb-10 text-white italic border-l-4 border-[#008577] pl-4">
        Lo que hacemos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className={`${p.size} relative group overflow-hidden rounded-2xl bg-zinc-900 h-80 border border-white/5`}>
            <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-[#008577] text-xs font-bold tracking-widest uppercase mb-2"></p>
              <h3 className="text-white text-xl font-bold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}