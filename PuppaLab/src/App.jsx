import React from 'react' 
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import './App.css'
import Header from './components/header'
import Home from './pages/home'
import Footer from './components/footer'
import About from './pages/about'
import Contact from './pages/contact'
import NotFound from './pages/notfound';

// Envoltorio para animar la transición entre páginas
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <div className="flex-grow">
        {/* AnimatePresence necesita la location y la key para saber cuándo cambiar */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;