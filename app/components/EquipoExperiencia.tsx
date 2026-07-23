"use client";

import { FaLinkedinIn } from "react-icons/fa";
import { Globe2, Briefcase } from "lucide-react";
import Image from "next/image";

interface Persona {
  nombre: string;
  rol: string;
  bio: string;
  highlights: string[];
  foto: string,
  linkedin?: string;
}

const equipo: Persona[] = [
  {
    nombre: "Alexander Merino",
    rol: "Co-Founder | Producto y Tecnología",
    bio: "Ingeniero de Software con experiencia desarrollando soluciones tecnológicas para organizaciones en Perú y Estados Unidos. Lidera el diseño funcional del ERP y la relación directa con cada cliente.",
    highlights: ["Experiencia en EE.UU.", "Arquitectura de software"],
    foto: "/equipo/alexander-merino.jpg",
    linkedin: "https://www.linkedin.com/in/alexander-merino/",
  },
  {
    nombre: "Aaron Alejos",
    rol: "Co-Founder | Estrategia y Desarrollo Comercial",
    bio: "Especialista en estrategia empresarial y transformación digital, con experiencia acompañando organizaciones en la adopción de nuevas tecnologías y mejora de procesos.",
    highlights: ["+10 años en estrategia", "Transformación digital"],
    foto: "/equipo/aaron-alejos.jpg",
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
            Prometech nace de la experiencia directa en tecnología, negocios y transformación digital — combinando visión internacional con conocimiento del mercado peruano.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {equipo.map((persona) => (
            <div
              key={persona.nombre}
              className="bg-[#FFFDF9] rounded-3xl border border-[#E4DDD4] p-8 flex flex-col items-center text-center hover:shadow-md hover:border-[#16324F]/20 transition-all duration-300"
            >
              <div className="relative w-32 h-32 mb-6 overflow-hidden rounded-full">
                <Image
                  src={persona.foto}
                  alt={persona.nombre}
                  fill
                  className="object-cover object-top scale-110"
                />
              </div>

              <h3 className="text-lg font-bold text-[#16324F]">{persona.nombre}</h3>
              <span className="text-sm font-semibold text-[#E76F51] mb-4">{persona.rol}</span>

              {/* Badges de highlights — aquí resalta lo de EE.UU. */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {persona.highlights.map((highlight, i) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16324F] bg-[#16324F]/5 border border-[#16324F]/10 rounded-full px-3 py-1"
                  >
                    {i === 0 ? (
                      <Globe2 className="w-3 h-3" aria-hidden="true" />
                    ) : (
                      <Briefcase className="w-3 h-3" aria-hidden="true" />
                    )}
                    {highlight}
                  </span>
                ))}
              </div>

              <p className="text-sm text-[#5E6B7A] leading-relaxed mb-4">
                {persona.bio}
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