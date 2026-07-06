"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Mail
} from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#16324F]/10 via-[#E9C46A]/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Bloque Izquierdo: Textos y Acciones */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center w-fit rounded-full border border-[#16324F]/10 bg-[#16324F]/5 px-4 py-1.5 text-xs font-medium text-[#16324F] mb-6 self-start">
            Control operativo en tiempo real
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[46px] font-extrabold leading-[1.15] tracking-tight mb-5 text-[#16324F]">
            La plataforma que conecta toda la operación de tus proyectos.
          </h1>

          <p className="text-[#5E6B7A] text-lg leading-relaxed mb-8 max-w-xl">
            Mientras un ERP tradicional administra áreas independientes, Prometech conecta requerimientos, compras, almacenes, presupuestos y 
            facturación alrededor de cada proyecto. Así obtienes control operativo y financiero en tiempo real, sin depender de hojas de cálculo.
          </p>

          <div className="flex flex-wrap items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16324F]">
            <a
              href="https://wa.me/51902041529?text=Hola,%20solicito%20una%20demostración%20del%20software%20Prometech."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#16324F] hover:bg-[#1d436a] text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-[#16324F]/20 hover:-translate-y-0.5"
            >
              {/* Ícono de WhatsApp / Mensaje */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>Solicitar Demo vía WhatsApp</span>
            </a>

            <a
              href="mailto:contacto@prometech.com.pe?subject=Solicitud%20de%20Demostración%20ERP%20-%20Prometech"
              className="bg-white border border-[#E4DDD4] hover:border-[#16324F] text-[#16324F] text-sm font-semibold px-5 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16324F]"
            >
              <Mail className="w-4 h-4" />
              <span>Agendar por correo</span>
            </a>

            <a
              href="https://www.youtube.com/@Prometech-Peru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[#5E6B7A] hover:text-[#16324F] transition-all px-3 py-2 rounded-lg hover:bg-[#F7F3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16324F]"
            >
              {/* Ícono Oficial de YouTube */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-600">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Ver video de módulos</span>
            </a>
          </div>
        </div>

        {/* Dashboard Real del Sistema */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-[#E9C46A]/10 rounded-3xl blur-3xl transform rotate-2 scale-95 -z-10" />
          
          <motion.div
            initial={{
                opacity:0,
                scale:0.92,
                y:30
            }}
            whileInView={{
                opacity:1,
                scale:1,
                y:0
            }}
            viewport={{
                once:true
            }}
            transition={{
                duration:0.8,
                ease:"easeOut"
            }}
            className="relative rounded-2xl border border-[#E4DDD4] bg-[#FFFDF9] shadow-2xl overflow-hidden"
          >  
            <div className="border-b border-[#E4DDD4] px-5 py-3 flex items-center gap-2 bg-[#F7F3EE] flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#E76F51]" />
              <div className="w-3 h-3 rounded-full bg-[#E9C46A]" />
              <div className="w-3 h-3 rounded-full bg-[#2D6A4F]" />
              <span className="text-xs text-[#7C8794] ml-4 font-mono select-none">
                https://app.prometech.com.pe
              </span>
            </div>

            <div className="relative w-full bg-white overflow-hidden p-1">
              <Image
                src="/dashboard-Prometech.png"
                alt="Plataforma ERP Prometech: Módulos de proyectos, control de inventarios, compras y facturación electrónica"
                width={2248} 
                height={1214}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="absolute top-5 right-5 z-10">
              <span className="rounded-full bg-[#2D6A4F] text-white px-3 py-1 text-xs font-semibold">
                Dashboard en tiempo real
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}