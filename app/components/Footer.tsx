import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#E4DDD4] bg-[#F1ECE5]/40">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Contenido principal */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/Logo1.png"
                alt="Logo Prometech"
                width={42}
                height={42}
                className="h-10 w-auto"
              />

              <span className="text-2xl font-black tracking-tight text-[#16324F]">
                PROMETECH
              </span>
            </div>

            <p className="text-sm leading-7 text-[#5E6B7A]">
              ERP modular para empresas que gestionan proyectos,
              compras, inventarios, logística y facturación
              electrónica desde una sola plataforma.
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
          <div>
            <h3 className="mb-5 text-lg font-bold text-[#16324F]">
              Síguenos
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="https://www.linkedin.com/company/prometech-peru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-[#E4DDD4] bg-white px-4 py-3 text-sm font-medium text-[#16324F] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#16324F]"
              >

                LinkedIn
              </a>

              <a
                href="https://www.youtube.com/@Prometech-Peru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-[#E4DDD4] bg-white px-4 py-3 text-sm font-medium text-[#16324F] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#16324F]"
              >
                ▶ YouTube
              </a>

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