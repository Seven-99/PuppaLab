import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PortfolioGrid from "../components/portfoliogrid";

// 1. Variantes para animar los servicios en cascada (stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const services = [
    { title: "Diseño gráfico & Branding", desc: "Creamos identidades visuales claras, memorables y alineadas a la esencia de tu marca.", icon: "🎨" },
    { title: "Estrategia Digital", desc: "Definimos objetivos, mensajes y canales para que tu marca crezca con coherencia, foco y dirección.", icon: "📈" },
    { title: "Redes Sociales & Community ", desc: "Gestionamos tu presencia digital con contenido estratégico, consistencia y criterio de marca.", icon: "📖" }
  ];

  const steps = [
    { num: "01", title: "Inmersión", text: "Analizamos tu marca, mercado y objetivos para entender el contexto completo." },
    { num: "02", title: "Estrategia", text: "Diseñamos un plan de acción creativo y técnico a medida de cada proyecto." },
    { num: "03", title: "Ejecución", text: "Transformamos ideas en piezas visuales y digitales de alto impacto." },
    { num: "04", title: "Impacto", text: "Medimos resultados y optimizamos para lograr crecimiento real." }
  ];

  return (
    <main className="w-full bg-black text-white">
      
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* CORRECCIÓN: El motion.div ahora envuelve todo el contenido */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl z-10"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            PupaLab — Creative Studio
          </h1>

          <h2 className="text-lg md:text-xl opacity-70 mt-4 tracking-wide text-[#008577]">
            Diseño, Desarrollo & Visión Digital
          </h2>

          <p className="mt-6 text-sm md:text-base opacity-60 leading-relaxed">
            Transformamos ideas en experiencias digitales simples, elegantes y funcionales.
          </p>

          <div className="flex gap-4 justify-center mt-10">
            <Link to="/about" className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all font-medium">
              Sobre Nosotros
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-300 transition-all">
              Contactarme
            </Link>
          </div>
        </motion.div>

        {/* Fondo sutil animado */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,rgba(0,133,119,0.15)_0%,transparent_70%)] animate-pulse"></div>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS - Con animación en cascada */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#008577]/50 transition-all duration-500"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECCIÓN DE PROCESO */}
      <section className="w-full py-24 bg-zinc-950/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center italic"
          >
            Nuestro <span className="text-[#008577]">Proceso</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative p-10 bg-zinc-900/80 border-l-2 border-[#008577] flex flex-col justify-between h-64 hover:bg-[#008577]/5 transition-colors group"
              >
                <span className="text-6xl font-black opacity-5 absolute top-4 right-4 group-hover:opacity-10 transition-opacity">
                  {step.num}
                </span>
                <h4 className="text-xl font-semibold z-10">{step.title}</h4>
                <p className="text-gray-500 text-sm z-10 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section>
        <PortfolioGrid />
      </section>

    </main>
  );
}