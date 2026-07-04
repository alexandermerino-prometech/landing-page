// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#16324F]/10 via-[#E9C46A]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Bloque Izquierdo: Textos y Acciones */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="inline-flex items-center w-fit rounded-full border border-[#16324F]/10 bg-[#16324F]/5 px-4 py-1.5 text-xs font-medium text-[#16324F] mb-6 self-start">
            Software empresarial moderno y escalable
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[46px] font-extrabold leading-[1.15] tracking-tight mb-5 text-[#16324F]">
            Toma el control <span className="text-[#E76F51]">operativo</span> y financiero de tu negocio
          </h2>

          <p className="text-[#5E6B7A] text-lg leading-relaxed mb-8 max-w-xl">
            Centraliza tus proyectos, automatiza la gestión de compras y controla la facturación desde una plataforma modular en la nube diseñada para eliminar el caos operativo.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:contacto@prometech.com.pe?subject=Solicitud%20de%20Demostración%20ERP%20-%20Prometech"
              className="flex items-center gap-2 bg-[#16324F] hover:bg-[#1d436a] text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-md shadow-[#16324F]/10 hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span>Agendar una reunión</span>
            </a>

            <a
              href="https://wa.me/51902041529?text=Hola,%20me%20interesa%20conecer%20más%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 hover:border-[#16324F] text-[#16324F] text-sm font-medium px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Consultar a un asesor</span>
            </a>

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
          <div className="absolute inset-0 bg-[#E9C46A]/10 rounded-3xl blur-3xl transform rotate-2 scale-95 -z-10" />
          
          <div className="rounded-2xl border border-[#E4DDD4] bg-[#FFFDF9] shadow-2xl overflow-hidden w-full max-h-[50vh] lg:max-h-[55vh] flex flex-col transition-transform duration-500 hover:scale-[1.01]">
            <div className="border-b border-[#E4DDD4] px-5 py-3 flex items-center gap-2 bg-[#F7F3EE] flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#E76F51]" />
              <div className="w-3 h-3 rounded-full bg-[#E9C46A]" />
              <div className="w-3 h-3 rounded-full bg-[#2D6A4F]" />
              <span className="text-xs text-[#7C8794] ml-4 font-mono select-none">
                app.prometech.com.pe/dashboard
              </span>
            </div>

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
  );
}