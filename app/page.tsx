"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";

import Hero from "./components/Hero";
import ConceptoErp from "./components/ConceptoErp";
import Navbar from "./components/Navbar";

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
    pregunta: "¿Qué es Prometech y a quién está dirigido?",
    respuesta: "Prometech es un ERP software empresarial en la nube diseñado para centralizar la gestión de proyectos, compras, inventario y facturación. Está especialmente dirigido a empresas que buscan centralizar la información y automatizar los procesos operativos de la empresa."
  },
  {
    id: 2,
    pregunta: "¿Puedo contratar solo los módulos que necesito?",
    respuesta: "Sí. Puedes comenzar implementando Gestión de Proyectos o Compras y añadir posteriormente módulos como Inventario, Recepción de Materiales o Control Presupuestal conforme tu empresa crezca."
  },
  {
    id: 3,
    pregunta: "¿Cómo es el proceso de implementación?",
    respuesta: "Seguimos una metodología ágil: realizamos un análisis de tus procesos actuales, configuramos la plataforma a tu medida, capacitamos a tu equipo y te acompañamos durante el despliegue en producción para asegurar una transición exitosa."
  },
  {
    id: 4,
    pregunta: "¿Ofrecen soporte técnico post-implementación?",
    respuesta: "Por supuesto. Contamos con un equipo de soporte dedicado para resolver dudas, asegurar la disponibilidad del sistema y realizar mejoras continuas según las necesidades de tu empresa."
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
    <div className="min-h-screen bg-[#F7F3EE] text-[#16324F] antialiased">
      
      {/* Navbar Section*/}
      <Navbar />

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
      <section id="soluciones" className="bg-[#F1ECE5] border-y border-[#E4DDD4]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <p className="text-[#E76F51] font-semibold uppercase text-xs tracking-wider mb-3">Arquitectura Modular</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 text-[#16324F] tracking-tight">
              Módulos especializados para el control financiero e integral de proyectos
            </h2>
            <p className="text-[#5E6B7A] text-lg leading-relaxed">
              Explora las herramientas modulares diseñadas para mitigar riesgos y eliminar reprocesos. Activa solo lo que tu negocio necesita en cada etapa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { titulo: "Gestión de Proyectos", estado: "Disponible", colorEstado: "bg-[#2D6A4F]/10 text-[#2D6A4F] border-[#2D6A4F]/20", iconoEstado: "✅", features: ["Estructura Desglosada de Trabajo (EDT)", "Diagramas de Gantt interactivos", "Control de Hitos y Entregables", "Paneles de Control Automatizados"] },
              { titulo: "Compras y Logística", estado: "Disponible", colorEstado: "bg-[#2D6A4F]/10 text-[#2D6A4F] border-[#2D6A4F]/20", iconoEstado: "✅", features: ["Catálogo Centralizado de Materiales", "Solicitudes de Requerimiento digitales", "Órdenes de Compra automatizadas", "Trazabilidad de Órdenes de Servicio"] },
              { titulo: "Recepción e Inventario", estado: "En desarrollo", colorEstado: "bg-[#E9C46A]/10 text-[#D4A316] border-[#E9C46A]/30", iconoEstado: "🚧", features: ["Validación Física de Recepción", "Kárdex Automatizado por Proyecto", "Logística y Guías de Despacho"] },
              { titulo: "Facturación Electrónica", estado: "Próximamente", colorEstado: "bg-[#5E6B7A]/10 text-[#5E6B7A] border-[#5E6B7A]/20", iconoEstado: "⏳", features: ["Emisión de Facturas y Boletas Sunat", "Notas de Crédito y Débito integradas", "Conciliación Bancaria nativa"] },
              { titulo: "Rentabilidad Operativa", estado: "Próximamente", colorEstado: "bg-[#5E6B7A]/10 text-[#5E6B7A] border-[#5E6B7A]/20", iconoEstado: "⏳", features: ["Presupuestos Estáticos vs Dinámicos", "Análisis Financiero Esperado vs Real", "Alertas Automáticas de Desviación"] },
            ].map((modulo, index) => (
              <div key={index} className="rounded-3xl border border-[#E4DDD4] bg-[#FFFDF9] p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#16324F]/30 transition-all duration-300">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-[#16324F] leading-snug tracking-tight">{modulo.titulo}</h3>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${modulo.colorEstado} whitespace-nowrap`}>
                      <span>{modulo.iconoEstado}</span>{modulo.estado}
                    </span>
                  </div>
                  <ul className="space-y-3.5" aria-label={`Características del módulo de ${modulo.titulo}`}>
                    {modulo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#5E6B7A]">
                        <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#16324F]/5 flex items-center justify-center text-[#2D6A4F] text-xs font-bold mt-0.5">✓</div>
                        <span className="text-[15px] leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-[#F7F3EE] flex justify-between items-center text-xs text-[#7C8794] font-medium">
                  <span>Prometech Software</span>
                  <span className="font-mono bg-[#F1ECE5] px-2 py-0.5 rounded">MOD-{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección: Metodología (Optimizada con Atributos Sizes para un LCP óptimo) */}
      <section id="metodologia" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-16">
          <p className="text-[#E76F51] font-semibold uppercase text-xs tracking-wider mb-3">Implementación Ágil</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 text-[#16324F] tracking-tight">
            Un enfoque moderno, flexible y orientado a la maduración digital
          </h2>
        </div>
      
        <div className="max-w-7xl mx-auto">
          {/* Fila Superior (3 Columnas) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { title: "Análisis de Procesos", image: "/metodologia/analisis.png", description: "Evaluamos el ecosistema operativo actual de tu negocio y detectamos cuellos de botella." },
              { title: "Diseño Funcional", image: "/metodologia/diseno.png", description: "Estructuramos flujos de datos automatizados y configuramos vistas de usuario intuitivas." },
              { title: "Desarrollo y Ajustes", image: "/metodologia/desarrollo.webp", description: "Configuramos los módulos nativos en entornos seguros garantizando la integridad de datos." },
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden border border-[#E4DDD4] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full h-48 bg-slate-100">
                  <Image 
                    src={step.image} 
                    alt={`Etapa de ${step.title} en la metodología Prometech`} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover" 
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-bold font-mono text-[#E76F51] bg-orange-50 px-2 py-1 rounded">Fase 0{index + 1}</span>
                  <h3 className="text-xl font-bold text-[#16324F] mt-4 mb-2.5 tracking-tight">{step.title}</h3>
                  <p className="text-[#5E6B7A] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fila Inferior (2 Columnas Centradas) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Despliegue de Sistema", image: "/metodologia/dimplementacion.webp", description: "Puesta en marcha del software dentro de la operación activa junto a capacitaciones intensivas." },
              { title: "Mejora Continua", image: "/metodologia/mejora_continua.jpg", description: "Monitoreo constante del sistema, optimización de flujos y adición de mejoras funcionales." },
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden border border-[#E4DDD4] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full h-48 bg-slate-100">
                  <Image 
                    src={step.image} 
                    alt={`Etapa de ${step.title} para garantizar el control empresarial`} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                    className="object-cover" 
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-bold text-[#E76F51] bg-orange-50 px-2 py-1 rounded">Fase 0{index + 4}</span>
                  <h3 className="text-xl font-bold text-[#16324F] mt-4 mb-2.5 tracking-tight">{step.title}</h3>
                  <p className="text-[#5E6B7A] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección: Beneficios */}
      <section id="beneficios" className="bg-[#F1ECE5] border-y border-[#E4DDD4]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <p className="text-[#E76F51] font-semibold uppercase text-xs tracking-wider mb-3">Ventajas Competitivas</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 text-[#16324F] tracking-tight">
              Diseñado al detalle para mejorar el control, la eficiencia y tu escalabilidad
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Centralización absoluta de la información de proyectos",
              "Reducción drástica de errores y duplicidades manuales",
              "Mayor rigurosidad en el control presupuestal operativo",
              "Acceso inmediato a información e indicadores en tiempo real",
              "Automatización de procesos entre logística y finanzas",
              "Arquitectura modular adaptable según el ritmo de crecimiento",
            ].map((benefit) => (
              <div key={benefit} className="rounded-3xl border border-[#E4DDD4] bg-[#FFFDF9] p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#2D6A4F]/10 border border-[#2D6A4F]/20 flex items-center justify-center text-[#2D6A4F] font-bold">
                  ✓
                </div>
                <p className="text-base font-semibold text-[#16324F] leading-snug">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección: FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-[#E76F51] font-semibold uppercase text-xs tracking-wider mb-3">Soporte y Dudas Comunes</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16324F] tracking-tight">Preguntas Frecuentes</h2>
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
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <p className="p-6 pt-0 text-[#5E6B7A] text-sm sm:text-base leading-relaxed border-t border-[#E4DDD4]/40 bg-slate-50/30">
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

      {/* Footer */}
      <footer className="border-t border-[#E4DDD4] bg-[#F1ECE5]/40">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[#7C8794] text-xs sm:text-sm font-medium">
          <p>© 2026 PROMETECH. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Lima, Perú</span>
            <span className="text-[#16324F]/40">•</span>
            <span>Software ERP basado en Proyectos</span>
          </div>
        </div>
      </footer>
      
    </div>
  );
}