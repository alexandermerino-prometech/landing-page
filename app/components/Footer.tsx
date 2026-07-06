import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://facebook.com/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/prometech-peru",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E4DDD4] bg-[#FCFBF8]">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Contenido principal */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 mb-5 h-12">
              <Image
                src="/Logo1.png"
                alt="Logo Prometech"
                width={56}
                height={56}
                className="h-12 w-auto"
              />

              <span className="text-2xl font-black tracking-tight text-[#16324F]">
                PROMETECH
              </span>
            </div>

            <p className="text-sm leading-7 text-[#5E6B7A]">
              Prometech es un ERP especializado para empresas que ejecutan proyectos.
                Integra presupuestos, compras, inventarios, costos, valorizaciones y
                facturación en una única plataforma.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full bg-[#16324F]/5 px-3 py-1 text-xs font-medium text-[#16324F]">
                    ERP en la nube
                </span>

                <span className="rounded-full bg-[#16324F]/5 px-3 py-1 text-xs font-medium text-[#16324F]">
                    Modular
                </span>

                <span className="rounded-full bg-[#16324F]/5 px-3 py-1 text-xs font-medium text-[#16324F]">
                    Empresas por proyectos
                </span>

            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-[#16324F]">
              Navegación
            </h3>

            <ul className="space-y-3 text-sm text-[#5E6B7A]">

                <li className="flex items-center gap-2">

                <ChevronRight className="w-3 h-3 text-[#B8C2CC]" />
                <a
                  href="#introduccion"
                  className="hover:text-[#16324F] transition-colors"
                >
                  Introducción
                </a>
              </li>

              <li className="flex items-center gap-2">

                <ChevronRight className="w-3 h-3 text-[#B8C2CC]" />
                <a
                  href="#comparacion"
                  className="hover:text-[#16324F] transition-colors"
                >
                  Comparación
                </a>
              </li>

              <li className="flex items-center gap-2">

                <ChevronRight className="w-3 h-3 text-[#B8C2CC]" />
                <a
                  href="#contenido"
                  className="hover:text-[#16324F] transition-colors"
                >
                  Contenido
                </a>
              </li>

              <li className="flex items-center gap-2">

                <ChevronRight className="w-3 h-3 text-[#B8C2CC]" />
                <a
                  href="#flujo"
                  className="hover:text-[#16324F] transition-colors"
                >
                  Flujo
                </a>
              </li>

              <li className="flex items-center gap-2">

                <ChevronRight className="w-3 h-3 text-[#B8C2CC]" />
                <a
                  href="#soluciones"
                  className="hover:text-[#16324F] transition-colors"
                >
                  Soluciones
                </a>
              </li>

              <li className="flex items-center gap-2">

                <ChevronRight className="w-3 h-3 text-[#B8C2CC]" />
                <a
                  href="#beneficios"
                  className="hover:text-[#16324F] transition-colors"
                >
                  Beneficios
                </a>
              </li>

              <li className="flex items-center gap-2">

                <ChevronRight className="w-3 h-3 text-[#B8C2CC]" />
                <a
                  href="#faq"
                  className="hover:text-[#16324F] transition-colors"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-[#16324F]">
              Contacto
            </h3>

            <ul className="space-y-4 text-sm text-[#5E6B7A]">

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#16324F]" />

                <a
                  href="mailto:contacto@prometech.com.pe"
                  className="hover:text-[#16324F]"
                >
                  contacto@prometech.com.pe
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 mt-0.5 text-[#2D6A4F]" />

                <a
                  href="https://wa.me/51902041529"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#16324F]"
                >
                  +51 902 041 529
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#E76F51]" />

                <span>Lima, Perú</span>
              </li>
            </ul>
          </div>

          {/* Redes */}
            <div className="text-center border-l border-[#E4DDD4] pl-10">

                <h3 className="mb-3 text-lg font-bold text-[#16324F]">
                    Conecta con nosotros
                </h3>
                <p className="mb-6 text-sm text-[#7C8794] leading-6">
                Conoce novedades, casos de éxito y contenido sobre gestión de proyectos.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {socialLinks.map(({ name, icon: Icon, href }) => (
                    <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="
                            group
                            w-11
                            h-11
                            rounded-full
                            border
                            border-[#D8D2CA]
                            bg-white
                            flex
                            items-center
                            justify-center
                            transition-all
                            duration-300
                            hover:bg-[#16324F]
                            hover:border-[#16324F]
                            hover:-translate-y-1
                        "
                    >
                        <Icon
                        className="
                        text-lg
                        text-[#5E6B7A]
                        group-hover:text-white
                        transition-colors
                        "
                        />
                    </a>
                    ))}
                </div>
            </div>
        </div>

        {/* Línea inferior */}

        <div className="mt-12 border-t border-[#E4DDD4] pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <p className="text-sm text-[#7C8794]">
            © 2026 Prometech S.A.C. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm">

            <Link
              href="#"
              className="text-[#5E6B7A] hover:text-[#16324F]"
            >
              Política de Privacidad
            </Link>

            <Link
              href="#"
              className="text-[#5E6B7A] hover:text-[#16324F]"
            >
              Términos y Condiciones
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}