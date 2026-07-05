import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Schema from "./components/Schema";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prometech.com.pe"),

  title: {
    default: "Prometech | Software para Gestión de Proyectos, Compras y Logística",
    template: "%s | Prometech",
  },

  description:
    "Prometech es una plataforma empresarial en la nube para gestionar proyectos, compras, logística, inventario y automatizar procesos. Diseñada para empresas que trabajan por proyectos.",

  keywords: [
    "ERP para constructoras",
    "ERP para empresas de ingeniería",
    "ERP para consultoras",
    "ERP para empresas de servicios",
    "Software para gestión de proyectos",
    "Software de compras",
    "Software de logística",
    "Control de proyectos",
    "Sistema ERP Perú",
    "Prometech ERP",
    "Prometech"
  ],

  verification: {
    google: "yPphVMsrFROlag08alyCMnXJBl1wSlXJWiQKomQJ5pc",
  },

  openGraph: {
    title: "Prometech | Software ERP para Gestión de Proyectos, Compras y Logística",
    description:
      "Software empresarial para gestión de proyectos, compras e inventario.",
    url: "https://prometech.com.pe",
    siteName: "Prometech",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/Logo1.png",
        width: 283,
        height: 279,
        alt: "Prometech ERP",
      },
    ],
  },

  authors: [
    {
      name: "Prometech",
      url: "https://prometech.com.pe",
    },
  ],

  creator: "Prometech",
  publisher: "Prometech",
  category: "Software",
  referrer: "origin-when-cross-origin",
  applicationName: "Prometech",
  appleWebApp: {
    capable: true,
    title: "Prometech",
  },

  alternates: {
      canonical: "https://prometech.com.pe",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      <head>

        <Schema />

      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
