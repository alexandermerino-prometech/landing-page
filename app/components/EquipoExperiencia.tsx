"use client";

import { FaLinkedinIn } from "react-icons/fa";

interface Persona {
  nombre: string;
  rol: string;
  experiencia: string;
  linkedin?: string;
}

const equipo: Persona[] = [
  {
    nombre: "Alexander Merino",
    rol: "Co-Founder | Producto y Tecnología",
    experiencia:
      "Ingeniero de Software y cofundador de PROMETECH, con experiencia desarrollando soluciones tecnológicas para organizaciones en Perú y Estados Unidos. Ha liderado proyectos de arquitectura de software, automatización de procesos y transformación digital, combinando experiencia técnica con una visión orientada al negocio. Actualmente participa directamente en el diseño funcional del ERP, las reuniones con clientes y la definición de soluciones que respondan a los procesos reales de cada empresa.",
    linkedin: "https://www.linkedin.com/in/alexander-merino/",
  },
  {
    nombre: "Aaron Alejos",
    rol: "Co-Founder | Estrategia y Desarrollo Comercial",
    experiencia:
      "Especialista en estrategia empresarial, desarrollo de negocios y transformación digital, con experiencia acompañando organizaciones en la mejora de sus procesos y la adopción de nuevas tecnologías. Como cofundador de PROMETECH participa activamente en el análisis de los procesos de cada cliente, el diseño de la solución, la estrategia comercial y el acompañamiento durante la implementación, asegurando que la plataforma genere valor desde el primer día.",
    linkedin: "https://www.linkedin.com/in/aaron-alejos-flores/",
  },
];

function obtenerIniciales(nombre: string): string {
  return nombre
    .split(" ")
    .map((parte) => parte[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function EquipoExperiencia() {
  return (
    <section id="equipo" className="bg-[#F1ECE5] border-y border-[#E4DDD4] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#E76F51] font-semibold uppercase text-xs tracking-wider mb-3">
            Quiénes están detrás
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16324F] tracking-tight mb-5">
            Un equipo con experiencia real en múltiples industrias
          </h2>
          <p className="text-[#5E6B7A] text-lg leading-relaxed">
            En PROMETECH creemos que una implementación exitosa comienza entendiendo el negocio del cliente. Por eso, nuestros fundadores participan directamente en las reuniones de diagnóstico, el diseño de la solución y el acompañamiento durante la implementación. No delegamos el conocimiento del negocio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {equipo.map((persona) => (
            <div
              key={persona.nombre}
              className="bg-[#FFFDF9] rounded-3xl border border-[#E4DDD4] p-8 flex flex-col items-center text-center hover:shadow-md hover:border-[#16324F]/20 transition-all duration-300"
            >
              {/* Avatar con iniciales, sin foto */}
              <div
                className="w-20 h-20 rounded-full bg-[#16324F] flex items-center justify-center mb-5 flex-shrink-0"
                aria-hidden="true"
              >
                <span className="text-white text-xl font-bold tracking-wide">
                  {obtenerIniciales(persona.nombre)}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#16324F]">{persona.nombre}</h3>
              <span className="text-sm font-semibold text-[#E76F51] mb-3">{persona.rol}</span>

              <p className="text-sm text-[#5E6B7A] leading-relaxed mb-4">
                {persona.experiencia}
              </p>

              {persona.linkedin && (
                <a
                  href={persona.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${persona.nombre}`}
                  className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-[#16324F] border border-[#E4DDD4] rounded-full px-4 py-2 hover:bg-[#16324F] hover:text-white hover:border-[#16324F] transition-all duration-300"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5" aria-hidden="true" />
                  Ver LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}