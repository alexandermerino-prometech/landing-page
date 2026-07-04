"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

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
  LayoutDashboard 
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const caracteristicas = [
  {
    titulo: "Unifica tus datos dispersos y obsoletos",
    imagen: "/imagenes/unifica_tus_datos.png", // Tu imagen del día fatídico [cite: 3]
  },
  {
    titulo: "Centraliza toda tu informacion clave para el negocio",
    imagen: "/imagenes/centraliza_tus_datos.png", // Tu imagen de centralización [cite: 5]
  },
  {
    titulo: "Optimiza tus flujos de trabajo repetitivos",
    imagen: "/imagenes/optimiza_tus_flujos.png", // Tu imagen de optimización [cite: 7]
  },
  {
    titulo: "Gana visibilidad total de tu negocio en tiempo real",
    imagen: "/imagenes/gana_visibilidad.png", // Tu imagen de visibilidad [cite: 8]
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

// Configuración de variantes de animación para Framer Motion
const contenedorVariantes: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Efecto cascada: retrasa la aparición de cada hijo
    },
  },
};

const tarjetaVariantes: Variants = { 
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

export default function PrometechLandingPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EE] text-[#16324F]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#E4DDD4] bg-[#F7F3EE]/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/Logo1.png"
              alt="Logo de Prometech"
              width={283}
              height={279}
              className="h-10 w-auto"
            />

            <h1
              className={`${montserrat.className} text-[30px] md:text-[34px] font-black tracking-[-0.04em] text-[#16324F] uppercase`}
            >
              PROMETECH
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[#5E6B7A]">
            <a
              href="#soluciones"
              className="hover:text-[#2D6A4F] transition-colors"
            >
              Soluciones
            </a>

            <a
              href="#metodologia"
              className="hover:text-[#2D6A4F] transition-colors"
            >
              Metodología
            </a>

            <a
              href="#beneficios"
              className="hover:text-[#2D6A4F] transition-colors"
            >
              Beneficios
            </a>

            <a
              href="#contacto"
              className="hover:text-[#2D6A4F] transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#16324F]/10 via-[#E9C46A]/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Bloque Izquierdo: Textos y Acciones */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center rounded-full border border-[#16324F]/10 bg-[#16324F]/5 px-4 py-2 text-sm text-[#16324F] mb-6">
              Software empresarial moderno y escalable
            </div>

            <h2 className="text-5xl lg:text-6xl lg:text-[44px] font-extrabold leading-[1.15] tracking-tight mb-5 text-[#16324F]">
              Toma el control <span className="text-[#E76F51]">operativo</span> y financiero de tu negocio
            </h2>

            <p className="text-[#5E6B7A] text-lg leading-relaxed mb-8 max-w-xl">
              Centraliza tus proyectos, automatiza la gestión de compras y controla la facturación desde una plataforma modular en la nube diseñada para eliminar el caos operativo.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {/* Botón Primario: Agendar Demo */}
              <a
                href="mailto:contacto@prometech.com.pe?subject=Solicitud%20de%20Demostración%20ERP%20-%20Prometech"
                className="flex items-center gap-2 bg-[#16324F] hover:bg-[#1d436a] text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-md shadow-[#16324F]/10 hover:-translate-y-0.5"
              >
                {/* Icono de Correo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>Agendar una reunión</span>
              </a>

              {/* Botón Secundario: WhatsApp */}
              <a
                href="https://wa.me/51902041529?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 hover:border-[#16324F] text-[#16324F] text-sm font-medium px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Consultar a un asesor</span>
              </a>

              {/* Botón Terciario: YouTube */}
              <a
                href="https://www.youtube.com/@Prometech-Peru"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#E4DDD4] hover:border-[#16324F] text-sm text-[#5E6B7A] hover:text-[#16324F] transition-all px-5 py-3 rounded-xl"
              >
                <span>Ver soluciones</span>
              </a>
            </div>
  
          </div>

          {/* Dashboard Real del Sistema */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center">
            {/* Elemento decorativo de fondo */}
            <div className="absolute inset-0 bg-[#E9C46A]/10 rounded-3xl blur-3xl transform rotate-2 scale-95 -z-10" />
            
            <div className="rounded-2xl border border-[#E4DDD4] bg-[#FFFDF9] shadow-2xl overflow-hidden w-full max-h-[50vh] lg:max-h-[55vh] flex flex-col transition-transform duration-500 hover:scale-[1.01]">
              
              {/* Barra superior del navegador */}
              <div className="border-b border-[#E4DDD4] px-5 py-3 flex items-center gap-2 bg-[#F7F3EE] flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#E76F51]" />
                <div className="w-3 h-3 rounded-full bg-[#E9C46A]" />
                <div className="w-3 h-3 rounded-full bg-[#2D6A4F]" />
                <span className="text-xs text-[#7C8794] ml-4 font-mono select-none">
                  app.prometech.com.pe/dashboard
                </span>
              </div>

              {/* Contenedor inteligente adaptativo a la pantalla */}
              <div className="relative flex-1 w-full bg-white overflow-hidden aspect-video">
                <Image
                  src="/dashboard-Prometech.png"
                  alt="Dashboard real de control operativo de Prometech"
                  fill
                  sizes="(max-w-1024px) 100vw, 50vw"
                  priority
                  className="object-contain object-top p-1"
                />
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* SECCIÓN ANIMADA CON MOTION SCROLL */}
      <section id="flujo" className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
        <div className="max-w-3xl mb-16">
          <p className="text-[#E76F51] font-medium mb-4">Trazabilidad End-to-End</p>
          <h3 className="text-4xl font-bold mb-6 text-[#16324F]">
            El Flujo de Trabajo Operativo de tu negocio, totalmente conectado
          </h3>
          <p className="text-[#5E6B7A] text-lg">
            Desde la concepción del proyecto hasta la analítica avanzada. Así es como Prometech centraliza cada etapa de tu empresa.
          </p>
        </div>

        {/* El contenedor escucha el scroll de la página utilizando whileInView */}
        <motion.div 
          variants={contenedorVariantes}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // La animación se ejecuta una sola vez al entrar al viewport
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative"
        >
          {pasosFlujo.map((step, index) => {
            const IconComponent = step.icon;
            
            if (step.dark) {
              return (
                <motion.div 
                  key={index} 
                  variants={tarjetaVariantes}
                  whileHover={{ y: -5, scale: 1.02 }} // Microinteracción extra al hacer hover
                  className="bg-[#16324F] p-6 rounded-3xl shadow-lg border border-transparent flex flex-col items-center text-center group cursor-default"
                >
                  <div className="w-12 h-12 bg-[#E9C46A] rounded-2xl flex items-center justify-center text-[#16324F] mb-4 group-hover:bg-white transition-all duration-300 animate-pulse">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#E9C46A] uppercase tracking-wider">Paso {step.num}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{step.title}</h3>
                  <p className="text-sm text-slate-300 mt-2">{step.desc}</p>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={index} 
                variants={tarjetaVariantes}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#FFFDF9] p-6 rounded-3xl shadow-xs border border-[#E4DDD4] hover:border-[#16324F] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-12 h-12 bg-[#16324F]/5 rounded-2xl flex items-center justify-center text-[#16324F] mb-4 group-hover:bg-[#16324F] group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#E76F51] uppercase tracking-wider">Paso {step.num}</span>
                <h3 className="text-lg font-bold text-[#16324F] mt-1">{step.title}</h3>
                <p className="text-sm text-[#5E6B7A] mt-2">{step.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* NUEVA SECCIÓN DE TARJETAS DE MÓDULOS (Ubicada estratégicamente aquí) */}
      <section id="soluciones" className="bg-[#F1ECE5] border-y border-[#E4DDD4]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <p className="text-[#E76F51] font-medium mb-4">Arquitectura Modular</p>
            <h3 className="text-4xl font-bold mb-6 text-[#16324F]">
              Módulos especializados para el control total de tu empresa
            </h3>
            <p className="text-[#5E6B7A] text-lg">
              Explora las herramientas diseñadas para centralizar tus operaciones. Activa solo lo que necesitas, cuando lo necesitas.
            </p>
          </div>

          {/* Grid de Tarjetas Modernas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                titulo: "Gestión de Proyectos",
                estado: "Disponible",
                colorEstado: "bg-[#2D6A4F]/10 text-[#2D6A4F] border-[#2D6A4F]/20",
                iconoEstado: "✅",
                features: ["Proyectos", "Gantt", "Tareas", "Dashboard"],
              },
              {
                titulo: "Compras y Logística",
                estado: "Disponible",
                colorEstado: "bg-[#2D6A4F]/10 text-[#2D6A4F] border-[#2D6A4F]/20",
                iconoEstado: "✅",
                features: ["Materiales", "Requerimientos", "Órdenes de compra", "Órdenes de servicio"],
              },
              {
                titulo: "Recepción e Inventario",
                estado: "En desarrollo",
                colorEstado: "bg-[#E9C46A]/10 text-[#D4A316] border-[#E9C46A]/30",
                iconoEstado: "🚧",
                features: ["Recepción", "Control de materiales", "Despacho"],
              },
              {
                titulo: "Facturación Electrónica",
                estado: "Próximamente",
                colorEstado: "bg-[#5E6B7A]/10 text-[#5E6B7A] border-[#5E6B7A]/20",
                iconoEstado: "⏳",
                features: ["Facturas", "Boletas", "Notas de crédito"],
              },
              {
                titulo: "Rentabilidad",
                estado: "Próximamente",
                colorEstado: "bg-[#5E6B7A]/10 text-[#5E6B7A] border-[#5E6B7A]/20",
                iconoEstado: "⏳",
                features: ["Presupuesto", "Esperado vs Real", "KPIs"],
              },
            ].map((modulo, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#E4DDD4] bg-[#FFFDF9] p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#16324F]/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h4 className="text-2xl font-bold text-[#16324F] leading-snug">
                      {modulo.titulo}
                    </h4>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${modulo.colorEstado} whitespace-nowrap`}>
                      <span>{modulo.iconoEstado}</span>
                      {modulo.estado}
                    </span>
                  </div>

                  <ul className="space-y-3.5">
                    {modulo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[#5E6B7A]">
                        <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#16324F]/5 flex items-center justify-center text-[#2D6A4F] text-xs font-bold">
                          ✓
                        </div>
                        <span className="text-[16px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F7F3EE] flex justify-between items-center text-xs text-[#7C8794]">
                  <span>Prometech ERP</span>
                  <span className="font-mono">MOD-{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section
        id="metodologia"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="max-w-3xl mb-16">
          <p className="text-[#E76F51] font-medium mb-4">
            Metodología
          </p>

          <h3 className="text-4xl font-bold mb-6 text-[#16324F]">
            Un enfoque moderno, flexible y orientado a resultados
          </h3>
        </div>
      
        <div className="max-w-7xl mx-auto">

          {/* FILA SUPERIOR */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

            {[
              {
                title: "Análisis",
                image: "/metodologia/analisis.png",
                description:
                  "Analizamos procesos y detectamos oportunidades de mejora.",
              },

              {
                title: "Diseño funcional",
                image: "/metodologia/diseno.png",
                description:
                  "Diseñamos flujos intuitivos y experiencias modernas.",
              },

              {
                title: "Desarrollo",
                image: "/metodologia/desarrollo.webp",
                description:
                  "Construimos plataformas escalables y seguras.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden border border-[#E4DDD4] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={100}
                  height={100}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <span className="text-sm font-semibold text-[#E76F51]">
                    0{index + 1}
                  </span>

                  <h3 className="text-2xl font-bold text-[#16324F] mt-3 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-[#4B5563] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FILA INFERIOR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {[
              {
                title: "Implementación",
                image: "/metodologia/dimplementacion.webp",
                description:
                  "Implementamos el sistema dentro de la operación empresarial.",
              },

              {
                title: "Mejora continua",
                image: "/metodologia/mejora_continua.jpg",
                description:
                  "Optimizamos constantemente procesos y rendimiento.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden border border-[#E4DDD4] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={100}
                  height={100}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <span className="text-sm font-semibold text-[#E76F51]">
                    0{index + 4}
                  </span>

                  <h3 className="text-2xl font-bold text-[#16324F] mt-3 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-[#4B5563] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Beneficios */}
      <section
        id="beneficios"
        className="bg-[#F1ECE5] border-y border-[#E4DDD4]"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <p className="text-[#E76F51] font-medium mb-4">
              Beneficios
            </p>

            <h3 className="text-4xl font-bold mb-6 text-[#16324F]">
              Diseñado para mejorar control, eficiencia y escalabilidad
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Centralización de información",
              "Reducción de errores manuales",
              "Mayor control operativo",
              "Información en tiempo real",
              "Procesos más eficientes",
              "Arquitectura modular y escalable",
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-3xl border border-[#E4DDD4] bg-[#FFFDF9] p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#16324F]/5 border border-[#16324F]/10 flex items-center justify-center text-[#16324F]">
                  ✓
                </div>

                <p className="text-lg text-[#16324F]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contacto"
        className="max-w-5xl mx-auto px-6 py-24"
      >
        <div className="rounded-[32px] border border-[#E4DDD4] bg-gradient-to-br from-[#16324F]/5 to-[#E9C46A]/20 p-12 text-center shadow-sm">
          <h3 className="text-4xl font-bold mb-6 text-[#16324F]">
            Moderniza tus operaciones con PROMETECH
          </h3>

          <p className="text-[#5E6B7A] text-lg max-w-2xl mx-auto mb-10">
            Conversemos sobre cómo optimizar procesos, centralizar información
            y construir soluciones empresariales escalables.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contacto@prometech.com.pe"
              className="bg-[#16324F] hover:bg-[#2D6A4F] transition-all px-6 py-3 rounded-2xl font-medium text-white shadow-md"
            >
              contacto@prometech.com.pe
            </a>

            <a
              href="https://wa.me/51902041529?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios."
              className="bg-[#16324F] hover:bg-[#2D6A4F] transition-all px-6 py-3 rounded-2xl font-medium text-white shadow-md"
            >
              Whatsapp
            </a>

            <a
              href="https://www.linkedin.com/company/prometech-peru"
              target="_blank"
              className="border border-[#E4DDD4] hover:border-[#2D6A4F] hover:text-[#2D6A4F] transition-all px-6 py-3 rounded-2xl text-[#16324F]"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E4DDD4]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[#7C8794] text-sm">
          <p>© 2026 PROMETECH. Todos los derechos reservados.</p>

          <div className="flex items-center gap-6">
            <span>Lima, Perú</span>
            <span>Software Empresarial</span>
          </div>
        </div>
      </footer>
      
    </div>
  );
}