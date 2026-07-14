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
    rol: "Fundador / CEO",
    experiencia:
      "Ingeniero de Software con experiencia internacional en el desarrollo de soluciones tecnológicas para organizaciones en Perú y Estados Unidos. Ha participado en proyectos de arquitectura de software, plataformas cloud, automatización de procesos y analítica de datos, colaborando con empresas de gran escala. Actualmente lidera la estrategia tecnológica de PROMETECH y el desarrollo de un ERP modular orientado a empresas que trabajan por proyectos.",
    linkedin: "https://www.linkedin.com/in/alexander-merino/",
  },
  {
    nombre: "Aaron Alejos",
    rol: "CFO / Director de Ventas",
    experiencia:
      "Especialista en estrategia empresarial, finanzas e innovación, con más de diez años de experiencia en organizaciones de distintos sectores. Ha participado en iniciativas de transformación digital, planeamiento estratégico y desarrollo de negocios, además de colaborar como mentor en programas de emprendimiento e innovación. En PROMETECH lidera la estrategia financiera y participa en el diseño funcional de los procesos de negocio, asegurando que la plataforma responda a las necesidades operativas y regulatorias de las empresas peruanas.",
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
            Prometech nace de la experiencia directa en construcción, ingeniería y desarrollo de software empresarial — no de una idea genérica de lo que necesita una empresa por proyectos.
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