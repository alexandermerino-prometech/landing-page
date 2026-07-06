"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const modulos = [
  {
    titulo: "Gestión de Proyectos",
    estado: "Disponible",
    colorEstado: "bg-[#2D6A4F]/10 text-[#2D6A4F] border-[#2D6A4F]/20",
    iconoEstado: "✅",
    features: [
      "Estructura Desglosada de Trabajo (EDT)",
      "Diagramas de Gantt interactivos",
      "Control de Hitos y Entregables",
      "Paneles de Control Automatizados",
    ],
  },
  {
    titulo: "Compras y Logística",
    estado: "Disponible",
    colorEstado: "bg-[#2D6A4F]/10 text-[#2D6A4F] border-[#2D6A4F]/20",
    iconoEstado: "✅",
    features: [
      "Catálogo Centralizado de Materiales",
      "Solicitudes de Requerimiento digitales",
      "Órdenes de Compra automatizadas",
      "Trazabilidad de Órdenes de Servicio",
    ],
  },
  {
    titulo: "Recepción e Inventario",
    estado: "Disponible",
    colorEstado: "bg-[#2D6A4F]/10 text-[#2D6A4F] border-[#2D6A4F]/30",
    iconoEstado: "✅",
    features: [
      "Validación Física de Recepción",
      "Kárdex Automatizado por Proyecto",
      "Logística y Guías de Despacho",
    ],
  },
  {
    titulo: "Facturación Electrónica",
    estado: "En desarrollo",
    colorEstado: "bg-[#E9C46A]/10 text-[#D4A316] border-[#E9C46A]/30",
    iconoEstado: "🚧",
    features: [
      "Emisión de Facturas y Boletas Sunat",
      "Notas de Crédito y Débito integradas",
      "Conciliación Bancaria nativa",
    ],
  },
  {
    titulo: "Rentabilidad Operativa",
    estado: "Próximamente",
    colorEstado: "bg-[#5E6B7A]/10 text-[#5E6B7A] border-[#5E6B7A]/20",
    iconoEstado: "⏳",
    features: [
      "Presupuestos Estáticos vs Dinámicos",
      "Análisis Financiero Esperado vs Real",
      "Alertas Automáticas de Desviación",
    ],
  },
];

export default function SolucionesAcordeon() {
  const [abiertoIndex, setAbiertoIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setAbiertoIndex(abiertoIndex === index ? null : index);
  };

  return (
    <section id="soluciones" className="bg-[#F1ECE5] border-y border-[#E4DDD4]">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-16">
          <p className="text-[#E76F51] font-semibold uppercase text-xs tracking-wider mb-3">
            Arquitectura Modular
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 text-[#16324F] tracking-tight">
            Módulos especializados para el control financiero e integral de proyectos
          </h2>
          <p className="text-[#5E6B7A] text-lg leading-relaxed">
            Explora cada módulo y descubre qué resuelve dentro de tu operación.
          </p>
        </div>

        <div className="space-y-4">
          {modulos.map((modulo, index) => {
            const estaAbierto = abiertoIndex === index;
            return (
              <div
                key={modulo.titulo}
                className="border border-[#E4DDD4] bg-[#FFFDF9] rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={estaAbierto}
                  aria-controls={`modulo-panel-${index}`}
                  id={`modulo-button-${index}`}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-[#F7F3EE]/40 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-[#7C8794] bg-[#F1ECE5] px-2 py-1 rounded flex-shrink-0">
                      MOD-{index + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#16324F] tracking-tight">
                      {modulo.titulo}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span
                      className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${modulo.colorEstado}`}
                    >
                      <span>{modulo.iconoEstado}</span>
                      {modulo.estado}
                    </span>
                    <motion.span
                      animate={{ rotate: estaAbierto ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-[#5E6B7A]" />
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {estaAbierto && (
                    <motion.div
                      id={`modulo-panel-${index}`}
                      role="region"
                      aria-labelledby={`modulo-button-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-[#E4DDD4]/40 bg-[#F7F3EE]/20">
                        {/* Estado visible en mobile, dentro del panel */}
                        <span
                          className={`sm:hidden inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap mt-4 mb-4 ${modulo.colorEstado}`}
                        >
                          <span>{modulo.iconoEstado}</span>
                          {modulo.estado}
                        </span>

                        <ul className="space-y-3 pt-4" aria-label={`Características del módulo de ${modulo.titulo}`}>
                          {modulo.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-[#5E6B7A]">
                              <div className="flex-shrink-0 w-5 h-5 rounded-md bg-[#16324F]/5 flex items-center justify-center text-[#2D6A4F] text-xs font-bold mt-0.5">
                                ✓
                              </div>
                              <span className="text-[15px] leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}