import React from 'react';

export default function PortfolioGrid() {
  const projects = [
    { title: "Identidad Visual - Branding", size: "md:col-span-2", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" },
    { title: "Estrategia Marketing", size: "md:col-span-1", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400" },
    { title: "Diseño Editorial", size: "md:col-span-1", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400" },
    { title: "Web Design UI/UX", size: "md:col-span-2", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-black">
      <h2 className="text-3xl font-bold mb-10 text-white italic border-l-4 border-[#008577] pl-4">
        Proyectos Seleccionados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className={`${p.size} relative group overflow-hidden rounded-2xl bg-zinc-900 h-80 border border-white/5`}>
            <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-[#008577] text-xs font-bold tracking-widest uppercase mb-2">Caso de Estudio</p>
              <h3 className="text-white text-xl font-bold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}