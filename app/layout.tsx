import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prometech.com.pe"),

  title: {
    default: "Prometech | Software de Gestión de Compras y Proyectos",
    template: "%s | Prometech",
  },

  description:
    "Software empresarial para la gestión de proyectos, compras, inventario y automatización de procesos. Plataforma moderna en la nube para empresas.",

  keywords: [
    "software empresarial",
    "software de compras",
    "gestión de proyectos",
    "ERP Perú",
    "software para constructoras",
    "inventario",
    "órdenes de compra",
    "automatización empresarial",
    "Prometech",
  ],

  verification: {
    google: "yPphVMsrFROlag08alyCMnXJBl1wSlXJWiQKomQJ5pc",
  },

  openGraph: {
    title: "Prometech",
    description:
      "Software empresarial para gestión de proyectos, compras e inventario.",
    url: "https://prometech.com.pe",
    siteName: "Prometech",
    locale: "es_PE",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
