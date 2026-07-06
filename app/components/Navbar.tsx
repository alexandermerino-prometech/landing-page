"use client";

import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const sections = [
  "flujo",
  "soluciones",
  "metodologia",
  "beneficios",
  "faq",
  "contacto",
];


export default function Navbar() {
    const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);

    const [activeSection, setActiveSection] = useState("flujo");

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
                }
            });
            },
            {
            threshold: 0.3,
            rootMargin: "-10% 0px -60% 0px"
            }
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
            observer.observe(section);
            }
        });

        return () => observer.disconnect();

        }, []);

    return (
            <header className="sticky top-0 z-50 border-b border-[#E4DDD4] bg-[#F7F3EE]/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-3">
                  
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
                  </Link>
        
                  <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#5E6B7A]">
                    <Link href="#flujo" className={`transition-colors duration-200 ${
                            activeSection === "flujo"? "text-[#16324F] font-bold": "text-[#5E6B7A] hover:text-[#16324F]"}`}>Flujo</Link>
                    <Link href="#soluciones" className={`transition-colors duration-200 ${
                            activeSection === "soluciones"? "text-[#16324F] font-bold": "text-[#5E6B7A] hover:text-[#16324F]"}`}>Soluciones</Link>
                    <Link href="#metodologia" className={`transition-colors duration-200 ${
                            activeSection === "metodologia"? "text-[#16324F] font-bold": "text-[#5E6B7A] hover:text-[#16324F]"}`}>Metodología</Link>
                    <Link href="#beneficios" className={`transition-colors duration-200 ${
                            activeSection === "beneficios"? "text-[#16324F] font-bold": "text-[#5E6B7A] hover:text-[#16324F]"}`}>Beneficios</Link>
                    <Link href="#faq" className={`transition-colors duration-200 ${
                            activeSection === "faq"? "text-[#16324F] font-bold": "text-[#5E6B7A] hover:text-[#16324F]"}`}>FAQ</Link>
                    <Link href="#contacto" className="bg-[#16324F] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#1d436a] hover:-translate-y-0.5 transition-all duration-300 shadow-sm shadow-[#16324F]/10">
                      Solicitar Demo
                    </Link>
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
                      <Link href="#flujo" onClick={() => setMenuMovilAbierto(false)} className="hover:text-[#16324F] py-1">Flujo</Link>
                      <Link href="#soluciones" onClick={() => setMenuMovilAbierto(false)} className="hover:text-[#16324F] py-1">Soluciones</Link>
                      <Link href="#metodologia" onClick={() => setMenuMovilAbierto(false)} className="hover:text-[#16324F] py-1">Metodología</Link>
                      <Link href="#beneficios" onClick={() => setMenuMovilAbierto(false)} className="hover:text-[#16324F] py-1">Beneficios</Link>
                      <Link href="#faq" onClick={() => setMenuMovilAbierto(false)} className="hover:text-[#16324F] py-1">FAQ</Link>
                      <Link href="#contacto" onClick={() => setMenuMovilAbierto(false)} className="bg-[#16324F] text-white text-center px-4 py-3 rounded-xl text-xs font-bold shadow-md">
                        Contacto Directo
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
            </header>
            
    );
}