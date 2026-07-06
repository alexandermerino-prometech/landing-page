"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  "introduccion",
  "comparacion",
  "contenido",
  "flujo",
  "soluciones",
  "metodologia",
  "beneficios",
  "faq",
  "contacto",
];


export default function Navbar() {
    const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);

    const [activeSection, setActiveSection] = useState("introduccion");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
            const visibles = entries.filter((entry) => entry.isIntersecting);

            if (visibles.length > 0) {
                // nos quedamos con la sección MÁS visible, no la última del loop
                const masVisible = visibles.reduce((prev, curr) =>
                curr.intersectionRatio > prev.intersectionRatio ? curr : prev
                );
                setActiveSection(masVisible.target.id);
            }
            },
            {
            threshold: [0.1, 0.25, 0.5, 0.75],
            rootMargin: "-15% 0px -55% 0px",
            }
        );
        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
            observer.observe(section);
            } else if (process.env.NODE_ENV === "development") {
            console.warn(`Navbar: no se encontró la sección con id="${id}"`);
            }
        });

        return () => observer.disconnect();
        }, []);

    useEffect(() => {
        if (!menuMovilAbierto) return;

        const handleClickOutside = (e: MouseEvent) => {
            const header = document.getElementById("navbar-header");
            if (header && !header.contains(e.target as Node)) {
            setMenuMovilAbierto(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
        }, [menuMovilAbierto]);

    useEffect(() => {
        document.body.style.overflow = menuMovilAbierto ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
        }, [menuMovilAbierto]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuMovilAbierto(false);
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
        }, []);

    

    return (
            <header id="navbar-header" className="sticky top-0 z-50 border-b border-[#E4DDD4] bg-[#F7F3EE]/90 backdrop-blur-md">
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
                    <p className="font-montserrat text-[24px] md:text-[26px] font-black tracking-[-0.04em] text-[#16324F] uppercase select-none">
                      PROMETECH
                    </p>
                  </Link>
        
                  <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#5E6B7A]">
                    <a href="#introduccion" className={`transition-colors duration-200 ${
                            activeSection === "introduccion"? "text-[#16324F] font-bold": "text-[#5E6B7A] hover:text-[#16324F]"}`}>Introducción</a>
                    <a href="#comparacion" className={`transition-colors duration-200 ${
                            activeSection === "comparacion"? "text-[#16324F] font-bold": "text-[#5E6B7A] hover:text-[#16324F]"}`}>Comparación con ERP</a>
                    <a href="#contenido" className={`transition-colors duration-200 ${
                            activeSection === "contenido"? "text-[#16324F] font-bold": "text-[#5E6B7A] hover:text-[#16324F]"}`}>Contenido</a>
                    
                    <a href="#flujo" className={`transition-colors duration-200 ${
                            activeSection === "flujo"? "text-[#16324F] font-bold": "text-[#5E6B7A] hover:text-[#16324F]"}`}>Flujo</a>
                    <a href="#soluciones" className={`transition-colors duration-200 ${
                            activeSection === "soluciones"? "text-[#16324F] font-bold": "text-[#5E6B7A] hover:text-[#16324F]"}`}>Soluciones</a>
                    <a href="#metodologia" className={`transition-colors duration-200 ${
                            activeSection === "metodologia"? "text-[#16324F] font-bold": "text-[#5E6B7A] hover:text-[#16324F]"}`}>Metodología</a>
                    <a href="#beneficios" className={`transition-colors duration-200 ${
                            activeSection === "beneficios"? "text-[#16324F] font-bold": "text-[#5E6B7A] hover:text-[#16324F]"}`}>Beneficios</a>
                    <a href="#faq" className={`transition-colors duration-200 ${
                            activeSection === "faq"? "text-[#16324F] font-bold": "text-[#5E6B7A] hover:text-[#16324F]"}`}>FAQ</a>
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
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="md:hidden border-b border-[#E4DDD4] bg-[#F7F3EE] px-6 pb-6 pt-2 flex flex-col gap-4 text-sm font-semibold text-[#5E6B7A]"
                    >
                      <a href="#introduccion" onClick={() => setMenuMovilAbierto(false)} className="hover:text-[#16324F] py-1">Introducción</a>
                      <a href="#comparacion" onClick={() => setMenuMovilAbierto(false)} className="hover:text-[#16324F] py-1">Comparación con ERP</a>
                      <a href="#contenido" onClick={() => setMenuMovilAbierto(false)} className="hover:text-[#16324F] py-1">Contenido</a>
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
            </header>
            
    );
}