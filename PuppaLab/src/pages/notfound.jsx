import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

export default function NotFound() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      <motion.h1 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-9xl font-bold text-[#008577]"
      >
        404
      </motion.h1>
      <p className="text-xl opacity-60 mb-8">Parece que te perdiste en el laboratorio.</p>
      <Link to="/" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-[#008577] hover:text-white transition-all">
        Volver al inicio
      </Link>
    </main>
  );
}