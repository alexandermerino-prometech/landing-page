import { Montserrat } from "next/font/google";
import Image from "next/image";

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

        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#16324F]/10 bg-[#16324F]/5 px-4 py-2 text-sm text-[#16324F] mb-6">
              Software empresarial moderno y escalable
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#16324F]">
              Transformamos procesos en soluciones digitales
            </h2>

            <p className="text-[#5E6B7A] text-lg leading-relaxed mb-8 max-w-xl">
              Desarrollamos software empresarial para optimizar operaciones,
              centralizar información y mejorar el control operativo de empresas
              y constructoras.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {/* Botón Primario: Agendar Demo */}
              <a
                href="mailto:contacto@prometech.com.pe?subject=Solicitud%20de%20Demostración%20ERP%20-%20Prometech"
                className="flex items-center gap-2 bg-[#16324F] hover:bg-[#1d436a] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-[#16324F]/10 hover:shadow-[#16324F]/20 hover:-translate-y-0.5"
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
                className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-[#16324F] hover:bg-slate-100 text-[#16324F] font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Consultar a un asesor</span>
              </a>

              {/* Botón Terciario: YouTube */}
              <a
                href="https://www.youtube.com/@Prometech-Peru"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#E4DDD4] hover:border-[#2D6A4F] hover:text-[#2D6A4F] transition-all px-6 py-3 rounded-2xl text-[#16324F]"
              >
                <span>Ver soluciones</span>
              </a>
            </div>
  
          </div>

          {/* Mockup */}
          <div className="relative">
            <div className="rounded-3xl border border-[#E4DDD4] bg-[#FFFDF9] shadow-2xl overflow-hidden">
              <div className="border-b border-[#E4DDD4] px-5 py-4 flex items-center gap-2 bg-[#F7F3EE]">
                <div className="w-3 h-3 rounded-full bg-[#E76F51]" />
                <div className="w-3 h-3 rounded-full bg-[#E9C46A]" />
                <div className="w-3 h-3 rounded-full bg-[#2D6A4F]" />
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    ["Proyectos", "12"],
                    ["Compras", "248"],
                    ["Avance", "78%"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="bg-[#F7F3EE] rounded-2xl p-4"
                    >
                      <p className="text-[#7C8794] text-sm">{label}</p>

                      <h3 className="text-3xl font-bold mt-2 text-[#16324F]">
                        {value}
                      </h3>
                    </div>
                  ))}
                </div>

                <div className="bg-[#F7F3EE] rounded-2xl p-5">
                  <div className="flex justify-between mb-4">
                    <span className="text-[#5E6B7A]">
                      Control Operativo
                    </span>

                    <span className="text-[#E76F51]">
                      En tiempo real
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-3 rounded-full bg-[#E4DDD4] overflow-hidden">
                      <div className="h-full w-[82%] bg-[#16324F] rounded-full" />
                    </div>

                    <div className="h-3 rounded-full bg-[#E4DDD4] overflow-hidden">
                      <div className="h-full w-[65%] bg-[#E76F51] rounded-full" />
                    </div>

                    <div className="h-3 rounded-full bg-[#E4DDD4] overflow-hidden">
                      <div className="h-full w-[91%] bg-[#E9C46A] rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["ERP Modular", "Logística y Compras"],
                    ["Dashboard", "Gestión de Proyectos"],
                  ].map(([small, big]) => (
                    <div
                      key={small}
                      className="bg-[#F7F3EE] rounded-2xl p-5"
                    >
                      <p className="text-[#7C8794] text-sm mb-2">
                        {small}
                      </p>

                      <p className="text-xl font-semibold text-[#16324F]">
                        {big}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-14">
          <p className="text-[#E76F51] font-medium mb-4">
            Problemas comunes
          </p>

          <h3 className="text-4xl font-bold mb-6 text-[#16324F]">
            Muchas empresas aún operan con procesos manuales y herramientas
            dispersas
          </h3>

          <p className="text-[#5E6B7A] text-lg">
            PROMETECH ayuda a centralizar operaciones y mejorar la trazabilidad
            mediante soluciones empresariales modernas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caracteristicas.map((item) => (
            <div
              key={item.titulo}
              className="rounded-3xl border border-[#E4DDD4] bg-[#FFFDF9] p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              {/* Contenedor de la imagen */}
              <div className="relative w-full h-64 mb-5 overflow-hidden rounded-2xl border border-[#16324F]/10">
                <Image
                  src={item.imagen}
                  alt={`${item.titulo} con el software empresarial de Prometech`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <h4 className="text-xl font-semibold text-[#16324F]">
                {item.titulo}
              </h4>
            </div>
          ))}
        </div>
      </section>

            {/* Soluciones */}
      <section
        id="soluciones"
        className="bg-[#F1ECE5] border-y border-[#E4DDD4]"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-16">
            <p className="text-[#E76F51] font-medium mb-4">
              Nuestras soluciones
            </p>

            <h3 className="text-4xl font-bold mb-6 text-[#16324F]">
              Software empresarial adaptado a las necesidades de cada operación
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gestión de Proyectos",
                items: [
                  "Seguimiento de avance",
                  "Control documental",
                  "Dashboards",
                  "Reportes",
                ],
              },
              {
                title: "Logística y Compras",
                items: [
                  "Órdenes de compra",
                  "Flujos de aprobación",
                  "Seguimiento",
                  "Trazabilidad",
                ],
              },
              {
                title: "Automatización",
                items: [
                  "Digitalización",
                  "Integraciones",
                  "Procesos automáticos",
                  "Centralización",
                ],
              },
            ].map((solution) => (
              <div
                key={solution.title}
                className="rounded-3xl border border-[#E4DDD4] bg-[#FFFDF9] p-8 hover:border-[#2D6A4F]/40 hover:shadow-lg transition-all"
              >
                <h4 className="text-2xl font-bold mb-6 text-[#16324F]">
                  {solution.title}
                </h4>

                <ul className="space-y-4 text-[#5E6B7A]">
                  {solution.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[#E76F51]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
                <img
                  src={step.image}
                  alt={step.title}
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
                <img
                  src={step.image}
                  alt={step.title}
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