import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageCircle,
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
    <footer className="border-t border-[#E4DDD4] bg-[#F1ECE5]/40">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Contenido principal */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 mb-5 h-12 w-auto">
              <Image
                src="/Logo1.png"
                alt="Logo Prometech"
                width={52}
                height={52}
                className="h-10 w-auto"
              />

              <span className="text-2xl font-black tracking-tight text-[#16324F]">
                PROMETECH
              </span>
            </div>

            <p className="text-sm leading-7 text-[#5E6B7A]">
              Software ERP diseñado para empresas que gestionan proyectos.
                Centraliza compras, costos, inventarios, valorizaciones y facturación
            en una sola plataforma.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-[#16324F]">
              Navegación
            </h3>

            <ul className="space-y-3 text-sm text-[#5E6B7A]">

              <li>
                <Link
                  href="#flujo"
                  className="hover:text-[#16324F] transition-colors"
                >
                  Flujo
                </Link>
              </li>

              <li>
                <Link
                  href="#soluciones"
                  className="hover:text-[#16324F] transition-colors"
                >
                  Soluciones
                </Link>
              </li>

              <li>
                <Link
                  href="#metodologia"
                  className="hover:text-[#16324F] transition-colors"
                >
                  Metodología
                </Link>
              </li>

              <li>
                <Link
                  href="#beneficios"
                  className="hover:text-[#16324F] transition-colors"
                >
                  Beneficios
                </Link>
              </li>

              <li>
                <Link
                  href="#faq"
                  className="hover:text-[#16324F] transition-colors"
                >
                  Preguntas frecuentes
                </Link>
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

                <h3 className="text-3xl font-bold text-[#B8C2CC] mb-8">
                    Conecta con nosotros
                </h3>

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
                        w-12
                        h-12
                        rounded-full
                        border-2
                        border-[#2E425A]
                        bg-[#1A2431]
                        backdrop-blur-sm
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        hover:border-[#E9C46A]
                        hover:bg-[#1E3A5C]
                        hover:-translate-y-1
                        hover:shadow-xl
                        hover:shadow-[#16324F]/40
                        "
                    >
                        <Icon
                            className="
                                text-xl
                                text-[#B8C2CC]
                                transition-all
                                duration-300
                                group-hover:text-[#E9C46A]
                            "
                        />
                    </a>
                    ))}
                </div>
            </div>
        </div>

        {/* Línea inferior */}

        <div className="mt-14 border-t border-[#E4DDD4] pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <p className="text-sm text-[#7C8794]">
            © 2026 PROMETECH. Todos los derechos reservados.
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