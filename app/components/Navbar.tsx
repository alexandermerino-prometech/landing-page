"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);

export default function Navbar() {
    const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);

    return (
            <section className="sticky top-0 z-50 border-b border-[#E4DDD4] bg-[#F7F3EE]/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/Logo1.png"
                      alt="Logo Oficial de la plataforma ERP Prometech"
                      width={40}
                      height={40}
                      className="h-10 w-auto object-contain"
                      priority
                    />
                    <p className={`${montserrat.className} text-[24px] md:text-[26px] font-black tracking-[-0.04em] text-[#16324F] uppercase select-none`}>
                      PROMETECH
                    </p>
                  </div>
        
                  <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#5E6B7A]">
                    <a href="#flujo" className="hover:text-[#16324F] transition-colors duration-200">Flujo</a>
                    <a href="#soluciones" className="hover:text-[#16324F] transition-colors duration-200">Soluciones</a>
                    <a href="#metodologia" className="hover:text-[#16324F] transition-colors duration-200">Metodología</a>
                    <a href="#beneficios" className="hover:text-[#16324F] transition-colors duration-200">Beneficios</a>
                    <a href="#faq" className="hover:text-[#16324F] transition-colors duration-200">FAQ</a>
                    <a href="#contacto" className="bg-[#16324F] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#1d436a] hover:-translate-y-0.5 transition-all duration-300 shadow-sm shadow-[#16324F]/10">
                      Solicitar Demo
                    </a>
                  </nav>
        
                  <button 
                    className="block md:hidden text-[#16324F] p-2 hover:bg-slate-100 rounded-lg transition-colors" 
                    onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
                    aria-label={menuMovilAbierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                  >
                    {menuMovilAbierto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
        
                <AnimatePresence>
                  {menuMovilAbierto && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="md:hidden border-b border-[#E4DDD4] bg-[#F7F3EE] px-6 pb-6 pt-2 flex flex-col gap-4 text-sm font-semibold text-[#5E6B7A]"
                    >
                      <a href="#flujo" onClick={() => setMenuMovilAbierto(false)} className="hover:text-[#16324F] py-1">Flujo</a>
                      <a href="#soluciones" onClick={() => setMenuMovilAbierto(false)} className="hover:text-[#16324F] py-1">Soluciones</a>
                      <a href="#metodologia" onClick={() => setMenuMovilAbierto(false)} className="hover:text-[#16324F] py-1">Metodología</a>
                      <a href="#beneficios" onClick={() => setMenuMovilAbierto(false)} className="hover:text-[#16324F] py-1">Beneficios</a>
                      <a href="#faq" onClick={() => setMenuMovilAbierto(false)} className="hover:text-[#16324F] py-1">FAQ</a>
                      <a href="#contacto" onClick={() => setMenuMovilAbierto(false)} className="bg-[#16324F] text-white text-center px-4 py-3 rounded-xl text-xs font-bold shadow-md">
                        Contacto Directo
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
            </section>
            
    );
}