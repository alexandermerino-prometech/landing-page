"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";

import Hero from "./components/Hero";
import ConceptoErp from "./components/ConceptoErp";
import Footer from "./components/Footer";
import Modulos from "./components/Modulos";

import { 
  FolderKanban, 
  CalendarDays, 
  ClipboardList, 
  ShieldCheck, 
  FileText, 
  PackageCheck, 
  Warehouse, 
  Truck, 
  Receipt, 
  LayoutDashboard,
  Mail
} from "lucide-react";

const preguntasFrecuentes = [
  {
    id: 1,
    pregunta: "¿Qué hace diferente a Prometech de un ERP tradicional?",
    respuesta:
      "La mayoría de ERP fueron diseñados para empresas comerciales. Prometech fue creado desde la realidad de las empresas que ejecutan proyectos, donde cada presupuesto, requerimiento, compra, valorización y costo debe mantenerse vinculado al proyecto durante todo su ciclo de vida."
  },
  {
    id: 2,
    pregunta: "¿Qué tipo de empresas pueden utilizar Prometech?",
    respuesta:
      "Prometech está dirigido a constructoras, empresas de ingeniería, consultoras y empresas de servicios que necesitan controlar la operación completa de sus proyectos desde una sola plataforma."
  },
  {
    id: 3,
    pregunta: "¿Prometech se adapta a nuestros procesos?",
    respuesta:
      "Sí. Antes de la implementación analizamos cómo opera tu empresa y configuramos la plataforma para reflejar tus flujos de trabajo, aprobaciones y controles. El objetivo es que el sistema se adapte a tu operación, no que tu operación tenga que adaptarse al sistema."
  },
  {
    id: 4,
    pregunta: "¿Cómo es el proceso de implementación?",
    respuesta:
      "Trabajamos por etapas: analizamos tus procesos actuales, configuramos la plataforma, migramos la información necesaria, capacitamos a tu equipo y acompañamos la puesta en marcha para asegurar una adopción exitosa."
  },
  {
    id: 5,
    pregunta: "¿Qué beneficios puedo esperar al implementar Prometech?",
    respuesta:
      "Obtendrás mayor trazabilidad sobre cada proyecto, control de costos en tiempo real, integración entre las distintas áreas de la empresa y una visión completa de la rentabilidad sin depender de procesos manuales."
  },
  {
    id: 6,
    pregunta: "¿Ofrecen soporte después de la implementación?",
    respuesta:
      "Sí. Nuestro equipo brinda soporte continuo, capacitación y mejoras evolutivas para que la plataforma acompañe el crecimiento y las necesidades de tu empresa."
  }
];

const pasosFlujo = [
  { num: "01", title: "Proyecto", desc: "Alta, definición y kickoff del nuevo proyecto operativo.", icon: FolderKanban, dark: false },
  { num: "02", title: "Planificación", desc: "Estructuración de tiempos, hitos y presupuestos.", icon: CalendarDays, dark: false },
  { num: "03", title: "Requerimiento", desc: "Solicitud formal de los materiales o servicios necesarios.", icon: ClipboardList, dark: false },
  { num: "04", title: "Aprobación", desc: "Validación técnica y financiera mediante flujos ágiles.", icon: ShieldCheck, dark: false },
  { num: "05", title: "Orden de Compra", desc: "Generación automática y envío directo al proveedor.", icon: FileText, dark: false },
  { num: "06", title: "Recepción", desc: "Control de calidad y entrada física/digital del pedido.", icon: PackageCheck, dark: false },
  { num: "07", title: "Inventario", desc: "Actualización de stock en tiempo real y almacenamiento.", icon: Warehouse, dark: false },
  { num: "08", title: "Despacho", desc: "Logística de salida, empaque y distribución final.", icon: Truck, dark: false },
  { num: "09", title: "Facturación", desc: "Conciliación financiera, cuentas por pagar y cobros.", icon: Receipt, dark: false },
  { num: "10", title: "Dashboard", desc: "Analítica avanzada, KPIs y reportes automatizados.", icon: LayoutDashboard, dark: true },
];

const contenedorVariantes: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const tarjetaVariantes: Variants = { 
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 16 } 
  },
};

export default function PrometechLandingPage() {
  const [abiertoId, setAbiertoId] = useState<number | null>(null);

  const togglePregunta = (id: number) => {
    setAbiertoId(abiertoId === id ? null : id);
  };

  return (
    <main  className="min-h-screen bg-[#F7F3EE] text-[#16324F] antialiased">

      {/* Hero Sección */}
      <Hero />

      {/* ConceptoErp Sección */}
      <ConceptoErp />

      {/* Sección: Flujo de Trabajo */}
      <section id="flujo" className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
        <div className="max-w-3xl mb-16">
          <p className="text-[#E76F51] font-semibold uppercase text-xs tracking-wider mb-3">Trazabilidad End-to-End</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 text-[#16324F] tracking-tight">
            El flujo de trabajo operativo de tu negocio, totalmente conectado
          </h2>
          <p className="text-[#5E6B7A] text-lg leading-relaxed">
            Desde la concepción del proyecto hasta la analítica avanzada. Así es como Prometech centraliza cada etapa operativa de tu empresa.
          </p>
        </div>

        <motion.div 
          variants={contenedorVariantes}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative"
        >
          {pasosFlujo.map((step, index) => {
            const IconComponent = step.icon;
            
            if (step.dark) {
              return (
                <motion.div 
                  key={index} 
                  variants={tarjetaVariantes}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="bg-[#16324F] p-6 rounded-3xl shadow-lg border border-transparent flex flex-col items-center text-center group cursor-default"
                >
                  <div className="w-12 h-12 bg-[#E9C46A] rounded-2xl flex items-center justify-center text-[#16324F] mb-4 group-hover:bg-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#E9C46A] uppercase tracking-wider">Paso {step.num}</span>
                  <h3 className="text-lg font-bold text-white mt-1.5">{step.title}</h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={index} 
                variants={tarjetaVariantes}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-[#FFFDF9] p-6 rounded-3xl shadow-sm border border-[#E4DDD4] hover:border-[#16324F] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-12 h-12 bg-[#16324F]/5 rounded-2xl flex items-center justify-center text-[#16324F] mb-4 group-hover:bg-[#16324F] group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#E76F51] uppercase tracking-wider">Paso {step.num}</span>
                <h3 className="text-lg font-bold text-[#16324F] mt-1.5">{step.title}</h3>
                <p className="text-sm text-[#5E6B7A] mt-2 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Sección: Soluciones Modulares */}
      <Modulos />

      {/* Sección: Beneficios */}
      <section id="beneficios" className="bg-[#F1ECE5] border-y border-[#E4DDD4]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <p className="text-[#E76F51] font-semibold uppercase text-xs tracking-wider mb-3">Impacto Operativo</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 text-[#16324F] tracking-tight">
              El cambio real que notarás en tu operación
            </h2>
            <p className="text-[#5E6B7A] text-lg leading-relaxed">
              No son promesas genéricas. Así cambia el día a día operativo cuando cada área trabaja sobre la misma información.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                area: "Aprobación de requerimientos",
                antes: "Días esperando validación entre campo, administración y compras",
                despues: "Horas, con flujos de aprobación automatizados",
              },
              {
                area: "Control de sobrecostos",
                antes: "Se detectan al cierre del proyecto, cuando ya no hay margen de corrección",
                despues: "Se detectan en tiempo real, contrastando cada gasto contra el presupuesto",
              },
              {
                area: "Trazabilidad de compras",
                antes: "Hojas de cálculo dispersas entre distintas áreas y responsables",
                despues: "Un solo historial: requerimiento, orden, recepción y factura conectados",
              },
              {
                area: "Reportes de rentabilidad",
                antes: "Se arman manualmente y llegan semanas después de cerrado el mes",
                despues: "Disponibles en cualquier momento, actualizados con cada movimiento",
              },
            ].map((item) => (
              <div
                key={item.area}
                className="rounded-3xl border border-[#E4DDD4] bg-[#FFFDF9] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-base font-bold text-[#16324F] mb-5">{item.area}</h3>

                <div className="flex items-start gap-3 mb-4">
                  <span className="text-[#E76F51] font-bold text-xs bg-[#E76F51]/10 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                    ✕
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7C8794]">Antes</span>
                    <p className="text-sm text-[#5E6B7A] leading-relaxed">{item.antes}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-md bg-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F] text-xs font-bold mt-0.5" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">Con Prometech</span>
                    <p className="text-sm text-[#16324F] font-medium leading-relaxed">{item.despues}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección: FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-[#E76F51] font-semibold uppercase text-xs tracking-wider mb-3">Soporte y Dudas Comunes</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16324F] tracking-tight">Resolvemos las dudas más comunes</h2>
          <p className="text-[#5E6B7A] text-lg mt-3">
            Resuelve tus dudas sobre la viabilidad, escalabilidad y despliegue del ERP.
          </p>
        </div>

        <div className="space-y-4">
          {preguntasFrecuentes.map((faq) => {
            const estaAbierto = abiertoId === faq.id;
            return (
              <div key={faq.id} className="border border-[#E4DDD4] bg-[#FFFDF9] rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => togglePregunta(faq.id)}
                  aria-expanded={estaAbierto}
                  aria-controls={`faq-panel-${faq.id}`}
                  id={`faq-button-${faq.id}`}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-base sm:text-lg text-[#16324F] hover:bg-[#F7F3EE]/40 transition-colors duration-200"
                >
                  <span>{faq.pregunta}</span>
                  <motion.span 
                    animate={{ rotate: estaAbierto ? 45 : 0 }}
                    transition={{ duration: 0.18 }}
                    className="text-[#E76F51] text-2xl font-light ml-4 select-none"
                  >
                    +
                  </motion.span>
                </button>
                
                <AnimatePresence initial={false}>
                  {estaAbierto && (
                    <motion.div 
                      id={`faq-panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-button-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <p className="p-6 pt-0 text-[#5E6B7A] text-sm sm:text-base leading-relaxed border-t border-[#E4DDD4]/40 bg-[#F7F3EE]/30">
                        {faq.respuesta}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sección: Conversión CTA Final */}
      <section id="contacto" className="max-w-5xl mx-auto px-6 py-12 md:py-24">
        <div className="rounded-[32px] border border-[#E4DDD4] bg-gradient-to-br from-[#16324F]/5 via-[#E9C46A]/10 to-transparent p-8 md:p-14 text-center shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#E9C46A]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 text-[#16324F] tracking-tight max-w-3xl mx-auto leading-[1.2]">
            ¿Listo para centralizar tu operación y dejar atrás las hojas de Excel?
          </h2>

          <p className="text-[#5E6B7A] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Agenda una sesión personalizada y descubre cómo ordenar tus requerimientos, controlar almacenes e impulsar la rentabilidad de tus proyectos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contacto@prometech.com.pe?subject=Solicitud%20de%20Demo%20ERP"
              className="flex items-center gap-2 bg-[#16324F] hover:bg-[#1d436a] transition-all duration-300 px-6 py-3.5 rounded-xl font-semibold text-sm text-white shadow-md shadow-[#16324F]/10 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>contacto@prometech.com.pe</span>
            </a>

            <a
              href="https://wa.me/51902041529?text=Hola,%20solicito%20una%20demostración%20del%20software%20Prometech."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#37825c] transition-all duration-300 px-6 py-3.5 rounded-xl font-semibold text-sm text-white shadow-md shadow-[#2D6A4F]/10 hover:-translate-y-0.5"
            >
              {/* Ícono nativo SVG de WhatsApp para máxima fidelidad visual */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>Contactar por WhatsApp</span>
            </a>

            <a
              href="https://www.linkedin.com/company/prometech-peru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#E4DDD4] bg-white hover:border-[#16324F] text-[#16324F] transition-all duration-300 px-6 py-3.5 rounded-xl font-semibold text-sm hover:-translate-y-0.5"
            >
              <span>LinkedIn Oficial</span>
            </a>
          </div>
        </div>
      </section>

      {/* seccion Footer */}
      <Footer />
      
    </main>
  );
}