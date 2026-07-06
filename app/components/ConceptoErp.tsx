"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Cpu, 
  Briefcase, 
  Wrench, 
  AlertTriangle, 
  TrendingDown, 
  FileSpreadsheet, 
  CheckCircle2, 
  Layers, 
  LineChart 
} from "lucide-react";

// Información semántica y optimizada para SEO (Long-tail Keywords)
const sectores = [
  {
    id: "constructoras",
    label: "Constructoras",
    icon: Building2,
    subtitulo: "Controla cada costo, compra y valorización de la obra desde un solo lugar.",
    problemas: [
      "No sabes cuánto está costando realmente una obra hasta que ya es demasiado tarde.",
      "Los requerimientos y compras pierden trazabilidad entre obra, almacén y administración.",
      "Las valorizaciones y subcontratos consumen tiempo por procesos manuales."
    ],
    retoOperativo: "La rentabilidad de una constructora depende de controlar cada requerimiento, subcontrato, valorización y compra dentro de la obra. Los ERP tradicionales pierden esa trazabilidad porque priorizan procesos comerciales antes que la ejecución del proyecto.",
    enfoquePrometech:
      "Cada requerimiento, compra y valorización queda vinculado al proyecto y a su presupuesto. Así detectas desviaciones mientras la obra sigue en ejecución, no cuando termina."
  },
  {
    id: "ingenieria",
    label: "Empresas de Ingeniería",
    icon: Cpu,
    subtitulo: "Gestiona horas, entregables y rentabilidad sin perder trazabilidad.",
    problemas: [
      "Dificultad extrema para medir la rentabilidad real basada en las horas hombre asignadas a entregables de diseño.",
      "Falta de trazabilidad en la procura de equipos mecánicos o eléctricos con largos tiempos de entrega.",
      "Desconexión entre los hitos del cronograma contractual y la facturación efectiva al cliente."
    ],
    retoOperativo:
      "Los ERP tradicionales registran horas trabajadas, pero no las relacionan de forma natural con entregables, hitos del proyecto y rentabilidad. Esto dificulta conocer el costo real de cada fase de ingeniería mientras el proyecto está en ejecución.",
    enfoquePrometech:
      "Relaciona horas trabajadas, entregables e hitos de facturación para conocer la rentabilidad real de cada proyecto."
  },
  {
    id: "consultoras",
    label: "Consultoras",
    icon: Briefcase,
    subtitulo: "Conoce en qué proyecto trabaja cada consultor y cuánto está generando.",
    problemas: [
      "Subutilización de consultores especializados debido a la falta de visibilidad del pipeline comercial y proyectos activos.",
      "Procesos lentos y manuales para consolidar gastos reembolsables, viáticos y entregables aprobados.",
      "Dificultad para proyectar la disponibilidad de recursos a mediano y largo plazo."
    ],
    retoOperativo:
      "Los ERP tradicionales gestionan recursos como personal administrativo. Una consultora necesita conocer la disponibilidad, utilización y rentabilidad de cada consultor según los proyectos en curso.",
    enfoquePrometech:
"Visualiza la disponibilidad de consultores, controla la utilización de recursos y mide la rentabilidad de cada servicio desde un solo lugar."
  },
  {
    id: "servicios",
    label: "Empresas de Servicios",
    icon: Wrench,
    subtitulo: "Conecta las operaciones de campo con almacén, compras y facturación.",
    problemas: [
      "Pérdida de ingresos por servicios ejecutados en campo que no se reportan a tiempo ni se llegan a facturar.",
      "Incapacidad de asociar costos de consumibles, herramientas y repuestos a un cliente u orden de trabajo específica.",
      "Falta de estandarización en los flujos de aprobación para cotizaciones adicionales pedidas por el cliente."
    ],
    retoOperativo:
      "Los ERP tradicionales administran órdenes de trabajo, pero no integran de forma natural la ejecución en campo, el consumo de repuestos, las horas del personal y la facturación asociada al servicio.",
    enfoquePrometech:
      "Conecta órdenes de servicio, personal de campo, repuestos y facturación para mantener toda la operación sincronizada."
  }
];

export default function ConceptoErp() {
  const [sectorActivoId, setSectorActivoId] = useState(sectores[0].id);
  const sectorActivo = sectores.find((s) => s.id === sectorActivoId) ?? sectores[0];

  return (
    <section className="bg-[#FFFDF9] text-[#16324F] py-24 border-b border-[#E4DDD4] relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#E9C46A]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#16324F]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BLOQUE INTRODUCTORIO (SEO Target: Qué es un ERP por proyectos) */}
        <div className="max-w-5xl mx-auto text-center mb-20">
            <span className="uppercase tracking-widest text-xs text-[#E9C46A] font-semibold">
              Nuestra filosofía
            </span>

            <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold text-[#16324F] leading-tight">
              No reinventamos el ERP. Reinventamos la forma de gestionar proyectos.
            </h2>

            <p className="mt-8 text-lg text-[#5E6B7A] leading-relaxed max-w-3xl mx-auto">
              Durante años el mercado intentó adaptar las empresas por proyectos a ERP diseñados
              para empresas comerciales.

              Nosotros decidimos construir una plataforma pensada desde el proyecto, no desde el producto.
            </p>

            <p className="mt-5 text-base sm:text-lg text-[#5E6B7A] leading-relaxed max-w-4xl mx-auto">
              Prometech fue diseñado alrededor del flujo operativo de constructoras, ingenierías,
              consultoras y empresas de servicios. Cada módulo nace de cómo se planifica,
              compra, ejecuta, controla y factura un proyecto.
            </p>
          
        </div>

        <div className="text-center mb-28 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#16324F]">
              La diferencia no está en los módulos.
          </h3>

          <p className="mt-4 text-[#5E6B7A] leading-relaxed">
              La diferencia está en el punto de partida.
              Un ERP tradicional organiza una empresa alrededor de productos.
              Prometech organiza toda la operación alrededor de cada proyecto.
          </p>
        </div>

        <span className="uppercase tracking-widest text-xs text-[#5E6B7A] font-semibold">
          Enfoque
        </span>

        <div className="mb-24 grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-stretch bg-[#F7F3EE]/60 border border-[#E4DDD4] rounded-[32px] p-10 shadow-sm">
          <div className="rounded-3xl border border-[#E4DDD4] p-8 bg-white">
            <h3 className="font-bold text-xl mb-4">
              ERP tradicional
            </h3>

            <ul className="space-y-5">
              <li className="flex gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <div>
                      <p className="font-semibold text-[#16324F]">
                          La venta inicia el proceso
                      </p>
                      <p className="text-sm text-[#5E6B7A]">
                          El proyecto aparece como información adicional.
                      </p>
                  </div>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#16324F] text-white font-bold flex items-center justify-center shadow-lg">
                VS
            </div>
          </div>

          <div className="rounded-3xl bg-[#16324F] text-white p-8">
            <h3 className="font-bold text-xl mb-4">
              Prometech
            </h3>

            <li className="flex gap-3">
              <span className="text-[#E9C46A] font-bold">✓</span>
              <div>
                <p className="font-semibold">
                  El proyecto inicia el proceso
                </p>
                <p className="text-white/75 text-sm">
                  Todo gira alrededor del presupuesto y ejecución.
                </p>
              </div>

              <ul className="mt-6 space-y-3">

                <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E9C46A]" />
                <span>
                Control de costos en tiempo real
                </span>
                </li>

                <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E9C46A]" />
                <span>
                Compras vinculadas al proyecto
                </span>
                </li>
                
                <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E9C46A]" />
                <span>
                Rentabilidad por obra
                </span>
                </li>
              </ul>

            </li>
          </div>

        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-[#16324F]">
              Cada industria ejecuta proyectos de manera diferente.
          </h3>

          <p className="mt-4 text-[#5E6B7A]">
              Cada sector enfrenta procesos, riesgos y métricas diferentes.
              Por eso Prometech adapta los flujos de trabajo según la forma en que realmente opera cada empresa.
          </p>
        </div>

        {/* ESTRUCTURA DE PESTAÑAS INTERACTIVAS (TABS) */}
        <div role="tablist" className="mb-16 flex flex-wrap justify-center gap-4" aria-label="Sectores empresariales">
          {sectores.map((sec) => {
            const Icon = sec.icon;
            const esActivo = sectorActivo.id === sec.id;
            return (
              <button
                key={sec.id}
                role="tab"
                aria-selected={esActivo}
                aria-controls={`panel-${sec.id}`}
                id={`tab-${sec.id}`}
                onClick={() => setSectorActivoId(sec.id)}
                className={`flex items-center gap-2.5 px-7 py-4 rounded-2xl text-sm font-bold border transition-all duration-300 ${
                  esActivo
                    ? "bg-[#16324F] text-white border-transparent shadow-md shadow-[#16324F]/10 scale-[1.02]"
                    : "bg-[#F7F3EE] text-[#5E6B7A] border-[#E4DDD4] hover:bg-[#F1ECE5] hover:text-[#16324F]"
                }`}
              >
                <Icon className={`w-4 h-4 ${esActivo ? "text-[#E9C46A]" : "text-[#5E6B7A]"}`} />
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>

        {/* CONTENIDO ESTRATÉGICO DINÁMICO */}
        <div className="bg-[#F7F3EE]/60 border border-[#E4DDD4] rounded-[32px] p-8 md:p-12 shadow-sm min-h-[600px] md:min-h-[550px] lg:min-h-[500px]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={sectorActivo.id}
              role="tabpanel"
              id={`panel-${sectorActivo.id}`}
              aria-labelledby={`tab-${sectorActivo.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Columna Izquierda: Encabezado y Dolores */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E76F51]/10 text-[#E76F51] mb-4">
                    ¿Cómo cambia la operación según tu empresa?
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#16324F] tracking-tight leading-snug mb-4">
                    Lo que realmente necesita controlar una {sectorActivo.label}
                  </h3>
                  <p className="text-[#5E6B7A] text-base leading-relaxed mb-8">
                    {sectorActivo.subtitulo}
                  </p>
                </div>

                <div className="bg-[#FFFDF9] rounded-2xl border border-[#E4DDD4] p-6">
                  <div className="flex items-center gap-2 text-[#E76F51] font-bold text-sm mb-4">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Problemas operativos más frecuentes</span>
                  </div>
                  <ul className="space-y-4">
                    {sectorActivo.problemas.map((prob) => (
                      <li key={prob} className="flex items-start gap-3 text-sm text-[#16324F]">
                        <span className="text-[#E76F51] font-bold text-xs bg-[#E76F51]/10 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                          !
                        </span>
                        <span className="leading-relaxed">{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Columna Derecha: El Quiebre de Excel vs La Solución ERP */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* Cuadro de Dolor: Por qué Excel deja de funcionar */}
                <div className="bg-white rounded-2xl border border-[#E4DDD4] p-6 md:p-8 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 text-[#E76F51] font-bold text-base mb-3">
                    <TrendingDown className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-widest text-[#E76F51] font-semibold mb-2">
                        Limitación principal
                    </p>
                    <div className="flex items-center gap-1.5">
                      <FileSpreadsheet className="w-4 h-4 text-[#7C8794]" />
                      
                      <h4>¿Dónde fallan los ERP tradicionales?</h4>
                    </div>
                  </div>
                  <p className="text-[#5E6B7A] text-sm sm:text-base leading-relaxed">
                    {sectorActivo.retoOperativo}
                  </p>
                </div>

                {/* Cuadro de Valor: Cómo un ERP resuelve el caos */}
                <div className="bg-gradient-to-br from-[#16324F] to-[#1d436a] text-white rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E9C46A]/5 rounded-full blur-2xl group-hover:bg-[#E9C46A]/10 transition-all duration-500" />
                  
                  <div className="flex items-center gap-3 text-[#E9C46A] font-bold text-base mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <h4>Cómo lo resuelve Prometech</h4>
                  </div>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    {sectorActivo.enfoquePrometech}
                  </p>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TRES PILARES GLOBALES (SEO Target: Ventajas de un ERP frente a hojas de cálculo) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#E4DDD4]/60 pt-16">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#16324F]/5 rounded-xl flex items-center justify-center text-[#16324F]">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#16324F]">Todo gira alrededor del proyecto</h3>
            <p className="text-[#5E6B7A] text-sm sm:text-base leading-relaxed">
              Cada compra, requerimiento, orden de servicio, valorización y factura mantiene su relación con el proyecto desde el primer día.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#16324F]/5 rounded-xl flex items-center justify-center text-[#16324F]">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#16324F]">Todos trabajan la misma información</h3>
            <p className="text-[#5E6B7A] text-sm sm:text-base leading-relaxed">
              Ingeniería, logística, compras, almacén, administración y gerencia consultan exactamente los mismos datos en tiempo real.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#16324F]/5 rounded-xl flex items-center justify-center text-[#16324F]">
              <LineChart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#16324F]">Controlas por todo el tiempo de duración del proyecto</h3>
            <p className="text-[#5E6B7A] text-sm sm:text-base leading-relaxed">
              Las desviaciones de costo aparecen cuando todavía puedes corregirlas, no semanas después del cierre contable. Detectas desviaciones mientras el proyecto sigue en ejecución.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}