import React from 'react';
import { motion } from 'framer-motion';
import PortfolioGrid from '../components/portfoliogrid';

// Variantes para el texto descriptivo
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Encabezado Estilo Editorial Animado */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="border-b border-white/10 pb-12 mb-20"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
            Sobre <span className="text-[#008577]">nosotros</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-60 font-light text-center max-w-2xl">
            Un estudio creativo enfocado en estrategia, diseño y comunicación.
          </p>
        </motion.div>

        {/* Cuerpo de Texto con Layout Dividido y Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <motion.div 
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 text-lg opacity-80 leading-relaxed"
          >
            <p>
              <span className="text-white font-semibold">PupaLab</span> es un estudio creativo 
              especializado en <span className="text-[#008577]">Marketing Digital</span> y 
              <span className="text-[#008577]"> Diseño Gráfico</span>, con una visión moderna 
              orientada a construir marcas simples, directas y con identidad.
            </p>
            <p>
              Nuestro enfoque combina estrategia, diseño visual y narrativa para que 
              cada proyecto comunique con claridad.
            </p>
          </motion.div>
          
          <motion.div 
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }} // Ligero retraso para la segunda columna
            className="space-y-8 text-lg opacity-80 leading-relaxed"
          >
            <p>
              Actualmente estamos expandiendo nuestra propuesta hacia el mundo 
              <span className="text-white font-semibold underline decoration-[#008577] decoration-2 underline-offset-4"> editorial</span>. 
              Nuestro objetivo es llevar la sensibilidad estética de PupaLab a nuevos formatos.
            </p>
            <p>
              Creemos en el poder de la <span className="italic">simplicidad bien aplicada</span>. 
              Un mensaje claro transforma la percepción de una marca.
            </p>
          </motion.div>
        </div>

        {/* Separador de Sección Animado */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px bg-[#008577] w-12"></div>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight whitespace-nowrap">
            Nuestra Selección
          </h2>
        </motion.div>

        {/* El Grid ya tiene sus propias animaciones internas */}
        <PortfolioGrid />

        {/* CTA Final con Escala Suave */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 py-20 border-t border-white/5 text-center"
        >
          <h3 className="text-2xl mb-8 opacity-60"> ¿Qué servicio estás buscando?</h3>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-[#008577] hover:text-white transition-colors duration-300 inline-block"
          >
            Contactar al estudio
          </motion.a>
        </motion.div>
      </section>

      {/* Fondos Decorativos Animados (Blobs) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#008577]/10 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#008577]/5 blur-[100px]"
        />
      </div>
    </main>
  );
}