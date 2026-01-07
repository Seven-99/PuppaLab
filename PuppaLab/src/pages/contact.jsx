import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("enviando");

    emailjs.sendForm(
      'service_v089rvh', 
      'template_abvthgr', 
      form.current,
      'HHePpcopFL0-GqV0m'
    )
    .then((result) => {
        setStatus("success");
        form.current.reset();
    }, (error) => {
        setStatus("error");
    });
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 overflow-hidden">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Hablemos de tu <span className="text-[#008577]">proyecto</span>
          </h1>
          <p className="opacity-60 text-lg max-w-xl mx-auto">
            ¿Tenés una idea en mente? Contanos qué necesitás y vemos cómo ayudarte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-[#008577] font-semibold uppercase tracking-widest text-sm mb-2">Email</h3>
              <a className="text-xl hover:text-[#008577] transition-colors cursor-pointer" href="mailto:pupalab.ar@gmail.com">Envianos un mail</a>
            </div>
            <div>
              <h3 className="text-[#008577] font-semibold uppercase tracking-widest text-sm mb-2">Ubicación</h3>
              <p className="text-xl">Remoto — Disponible para todo el mundo.</p>
            </div>
            <div>
              <h3 className="text-[#008577] font-semibold uppercase tracking-widest text-sm mb-2">WhatsApp</h3>
              <a href="https://wa.me/5493584326935?text=Hola%20necesito%20un%20presupuesto..." className="text-xl hover:text-[#008577]">Chatea con nosotros por WhatsApp</a>
            </div>
            <div>
              <h3 className="text-[#008577] font-semibold uppercase tracking-widest text-sm mb-2">Instagram</h3>
              <a className="text-xl hover:text-[#008577]" href="https://instagram.com/pupalab.ar">Contactanos a través de Instagram</a>
            </div>
            <div>
              <h3 className="text-[#008577] font-semibold uppercase tracking-widest text-sm mb-2">LinkedIn</h3>
              <a className="text-xl hover:text-[#008577]" href="https://www.linkedin.com/in/sharon-victoria-guti%C3%A9rrez-b6657426b/">Mi perfil de LinkedIn</a>
            </div>
          </motion.div>

          {/* FORMULARIO CONECTADO */}
          <motion.form 
            ref={form}            // Conectamos la referencia
            onSubmit={sendEmail}  // Conectamos la función
            variants={itemVariants}
            className="space-y-6 bg-zinc-900/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-xs uppercase text-white/40 mb-2">Nombre Completo</label>
                <input 
                  name="user_name" // Importante para EmailJS
                  type="text" 
                  required
                  placeholder="Tu nombre"
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#008577] transition-all text-white"
                />
              </div>
              <div>
                <label className="block text-xs uppercase text-white/40 mb-2">Email de contacto</label>
                <input 
                  name="user_email" // Importante para EmailJS
                  type="email" 
                  required
                  placeholder="email@ejemplo.com"
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#008577] transition-all text-white"
                />
              </div>
              <div>
                <label className="block text-xs uppercase text-white/40 mb-2">Mensaje</label>
                <textarea 
                  name="message" // Importante para EmailJS
                  rows="4" 
                  required
                  placeholder="Cuéntanos un poco..."
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#008577] transition-all resize-none text-white"
                ></textarea>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "enviando"}
              type="submit" 
              className={`w-full py-4 text-white font-bold rounded-xl transition-all ${
                status === "enviando" ? "bg-zinc-700" : "bg-[#008577] hover:bg-[#007066]"
              }`}
            >
              {status === "enviando" ? "Enviando..." : "Enviar Mensaje"}
            </motion.button>

            {/* MENSAJES DE ESTADO */}
            {status === "success" && <p className="text-[#008577] text-center text-sm">¡Mensaje enviado con éxito!</p>}
            {status === "error" && <p className="text-red-500 text-center text-sm">Error al enviar. Intenta de nuevo.</p>}
          </motion.form>
        </div>
      </motion.div>

      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#008577]/5 blur-[120px]"></div>
      </div>
    </main>
  );
}