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

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",

    name: "Prometech ERP",

    applicationCategory: "BusinessApplication",

    operatingSystem: "Web",

    url: "https://prometech.com.pe",

    description:
      "Software ERP para empresas que trabajan por proyectos. Gestiona proyectos, compras, logística, inventario y facturación electrónica.",

    creator: {
      "@type": "Organization",
      name: "Prometech",
    },

    featureList: [
      "Gestión de Proyectos",
      "Compras",
      "Logística",
      "Inventario",
      "Facturación Electrónica",
      "Dashboard",
      "Presupuestos"
    ],

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PEN"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Prometech",

    url: "https://prometech.com.pe",

    logo: "https://prometech.com.pe/Logo1.png",

    email: "contacto@prometech.com.pe",

    sameAs: [
      "https://www.linkedin.com/company/prometech-peru",
      "https://www.youtube.com/@Prometech-Peru"
    ]
  };

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
