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
    subtitulo: "Control estricto de valorizaciones, subcontratos y mano de obra a pie de obra.",
    problemas: [
      "Desviaciones críticas entre el presupuesto meta asignado y el costo real ejecutado en campo.",
      "Falta de control centralizado en requerimientos de materiales, propiciando compras duplicadas o de emergencia.",
      "Retrasos severos en la aprobación de valorizaciones y gestión manual ineficiente de subcontratistas."
    ],
    porqueExcel: "Una hoja de cálculo no se sincroniza en tiempo real con el almacén de la obra. Cuando el ingeniero de campo actualiza un saldo manual, el área de compras ya emitió una orden desfasada, sepultando el margen de ganancia del proyecto.",
    comoAyuda: "Prometech centraliza los requerimientos vinculándolos directamente a la Estructura Desglosada de Trabajo (EDT). Cada sol gastado se contrasta automáticamente contra la línea base del proyecto, bloqueando sobrecostos antes de que ocurran."
  },
  {
    id: "ingenieria",
    label: "Empresas de Ingeniería",
    icon: Cpu,
    subtitulo: "Sincronización de hitos de diseño, procura de equipos críticos y horas hombre.",
    problemas: [
      "Dificultad extrema para medir la rentabilidad real basada en las horas hombre asignadas a entregables de diseño.",
      "Falta de trazabilidad en la procura de equipos mecánicos o eléctricos con largos tiempos de entrega.",
      "Desconexión entre los hitos del cronograma contractual y la facturación efectiva al cliente."
    ],
    porqueExcel: "Excel carece de gobernanza de datos. Un error de fórmula en una macro de control de tiempos (Timesheets) puede distorsionar por completo el cálculo del costo por hora de tus ingenieros senior, destruyendo la rentabilidad del servicio.",
    comoAyuda: "Permite el registro de tareos y asignación de tiempos directamente por entregable. Cruza de forma automática el avance técnico de la ingeniería con los hitos de facturación, optimizando el flujo de caja operativo."
  },
  {
    id: "consultoras",
    label: "Consultoras",
    icon: Briefcase,
    subtitulo: "Maximización de la tasa de utilización y predictibilidad de flujos de consultores.",
    problemas: [
      "Subutilización de consultores especializados debido a la falta de visibilidad del pipeline comercial y proyectos activos.",
      "Procesos lentos y manuales para consolidar gastos reembolsables, viáticos y entregables aprobados.",
      "Dificultad para proyectar la disponibilidad de recursos a mediano y largo plazo."
    ],
    porqueExcel: "Las planillas de cálculo tradicionales crean silos de información aislados. El equipo de operaciones no sabe qué proyectos cerrará el equipo comercial, lo que impide planificar la asignación de personal sin incurrir en tiempos muertos sobre el presupuesto.",
    comoAyuda: "Ofrece un panel consolidado de asignación de recursos en tiempo real. Clasifica las horas de tus consultores en facturables y no facturables, automatizando la liquidación de viáticos y la facturación directa por hitos alcanzados."
  },
  {
    id: "servicios",
    label: "Empresas de Servicios",
    icon: Wrench,
    subtitulo: "Gestión de contratos de mantenimiento, órdenes de servicio y cuadrillas técnicas.",
    problemas: [
      "Pérdida de ingresos por servicios ejecutados en campo que no se reportan a tiempo ni se llegan a facturar.",
      "Incapacidad de asociar costos de consumibles, herramientas y repuestos a un cliente u orden de trabajo específica.",
      "Falta de estandarización en los flujos de aprobación para cotizaciones adicionales pedidas por el cliente."
    ],
    porqueExcel: "El papel y los archivos Excel compartidos se pierden o se corrompen. Si un técnico en campo utiliza repuestos de alto valor y lo anota en un archivo local, administración tardará semanas en enterarse, retrasando los ciclos de cobranza operativa.",
    comoAyuda: "Digitaliza todo el flujo desde la creación de la Orden de Servicio hasta el despacho físico del repuesto en almacén. Sincroniza las liquidaciones de campo con el módulo de facturación electrónica en un solo clic."
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
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-[#E76F51] font-bold uppercase text-xs tracking-widest mb-4">
            Especialización Operativa
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#16324F] tracking-tight mb-8 leading-[1.15]">
            No desarrollamos un ERP tradicional. Diseñamos una plataforma alrededor de cómo realmente trabajan tus proyectos.
          </h2>
          <p className="text-[#5E6B7A] text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            A diferencia de las empresas comerciales de venta masiva, los negocios basados en proyectos no venden productos genéricos de un estante; venden <strong>presupuestos, hitos, entregables y horas de alta especialización</strong>. 
          </p>
          <p className="text-[#5E6B7A] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mt-4">
            La mayoría de ERP fueron diseñados para empresas comerciales que compran, almacenan y venden productos. Las empresas que trabajan por proyectos tienen una realidad completamente distinta: presupuestos, valorizaciones, requerimientos, compras por obra, contratos y costos que cambian todos los días.

Prometech nace desde esa realidad. No es un ERP genérico con módulos adicionales, sino una plataforma diseñada para controlar la operación completa de empresas que viven de ejecutar proyectos.
          </p>
        </div>

        {/* ESTRUCTURA DE PESTAÑAS INTERACTIVAS (TABS) */}
        <div role="tablist" className="mb-12 flex flex-wrap justify-center gap-3" aria-label="Sectores empresariales">
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
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold border transition-all duration-300 ${
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
                    Desafíos Sectoriales
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#16324F] tracking-tight leading-snug mb-4">
                    Enfoque crítico en {sectorActivo.label}
                  </h3>
                  <p className="text-[#5E6B7A] text-base leading-relaxed mb-8">
                    {sectorActivo.subtitulo}
                  </p>
                </div>

                <div className="bg-[#FFFDF9] rounded-2xl border border-[#E4DDD4] p-6">
                  <div className="flex items-center gap-2 text-[#E76F51] font-bold text-sm mb-4">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Problemas Operativos Comunes</span>
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
                    <div className="flex items-center gap-1.5">
                      <FileSpreadsheet className="w-4 h-4 text-[#7C8794]" />
                      <h4>El gran punto de quiebre de Excel</h4>
                    </div>
                  </div>
                  <p className="text-[#5E6B7A] text-sm sm:text-base leading-relaxed">
                    {sectorActivo.porqueExcel}
                  </p>
                </div>

                {/* Cuadro de Valor: Cómo un ERP resuelve el caos */}
                <div className="bg-gradient-to-br from-[#16324F] to-[#1d436a] text-white rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E9C46A]/5 rounded-full blur-2xl group-hover:bg-[#E9C46A]/10 transition-all duration-500" />
                  
                  <div className="flex items-center gap-3 text-[#E9C46A] font-bold text-base mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <h4>La Solución: El poder de Prometech ERP</h4>
                  </div>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    {sectorActivo.comoAyuda}
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
            <h3 className="text-xl font-bold text-[#16324F]">1. Trazabilidad Financiera Única</h3>
            <p className="text-[#5E6B7A] text-sm sm:text-base leading-relaxed">
              En lugar de cruzar estados de cuenta bancarios y carpetas de compras offline, un ERP por proyectos asocia de forma nativa cada factura electrónica emitida y recibida a un hito contractual específico. Sabes exactamente qué componente operativo está consumiendo tu liquidez.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#16324F]/5 rounded-xl flex items-center justify-center text-[#16324F]">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#16324F]">2. Eliminación de Silos de Información</h3>
            <p className="text-[#5E6B7A] text-sm sm:text-base leading-relaxed">
              Cuando el equipo técnico trabaja en Excel, administración trabaja en otro, y gerencia comercial en un tercero, la empresa está ciega. Prometech unifica los datos: el requerimiento visado en campo se transforma instantáneamente en una propuesta de cotización para compras, eliminando llamadas y correos redundantes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#16324F]/5 rounded-xl flex items-center justify-center text-[#16324F]">
              <LineChart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#16324F]">3. Indicadores de Rentabilidad (KPIs)</h3>
            <p className="text-[#5E6B7A] text-sm sm:text-base leading-relaxed">
              Conoce el estatus financiero real (Costo Esperado vs Costo Real Ejecutado) sin tener que esperar al cierre contable del mes siguiente. Toma decisiones correctivas inmediatas mientras los proyectos siguen en marcha y las desviaciones presupuestarias aún son perfectamente reversibles.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}