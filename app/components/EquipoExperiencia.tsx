"use client";

import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

interface Persona {
  nombre: string;
  rol: string;
  experiencia: string;
  foto: string;
  linkedin?: string; // opcional — solo si quieres mostrarlo
}

const equipo: Persona[] = [
  {
    nombre: "Alexander Merino",
    rol: "Fundador / CEO",
    experiencia: "8 años liderando proyectos de construcción e implementación de sistemas de control de costos.",
    foto: "/equipo/persona1.jpg",
    linkedin: "https://www.linkedin.com/in/alexander-merino/",
  },
  {
    nombre: "Aaron Alejos",
    rol: "CFO / Director de Ventas",
    experiencia: "10 años en consultoría de gestión de proyectos para empresas de ingeniería.",
    foto: "/equipo/persona2.jpg",
    linkedin: "https://www.linkedin.com/in/aaron-alejos-flores/",
  },
];

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
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#E4DDD4] mb-5">
                <Image
                  src={persona.foto}
                  alt={`Foto de ${persona.nombre}`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-bold text-[#16324F]">{persona.nombre}</h3>
              <span className="text-sm font-semibold text-[#E76F51] mb-3">{persona.rol}</span>

              <p className="text-sm text-[#5E6B7A] leading-relaxed mb-4">
                {persona.experiencia}
              </p>

              {/* Solo se muestra si la persona tiene linkedin definido */}
              {persona.linkedin && (
                <a
                  href={persona.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${persona.nombre}`}
                  className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-[#16324F] border border-[#E4DDD4] rounded-full px-4 py-2 hover:bg-[#16324F] hover:text-white hover:border-[#16324F] transition-all duration-300"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5" />
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