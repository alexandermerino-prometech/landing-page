export default function Schema() {

const organization = {
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

const software = {
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
      "name": "Prometech",
      "url": "https://prometech.com.pe"
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

    audience:{
      "@type":"BusinessAudience",
      "audienceType":"Constructoras, empresas de ingeniería, consultoras y empresas de servicios"
    },

    softwareVersion:"1.0",

    offers: {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PEN"
    }
};

const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Prometech",
    url: "https://prometech.com.pe",
    description:
      "Software ERP para empresas que trabajan por proyectos."
};

const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Prometech ERP",
    url: "https://prometech.com.pe",
    isPartOf: {
      "@type": "WebSite",
      name: "Prometech",
      url: "https://prometech.com.pe"
    },
    description:
      "Software para gestión de proyectos, compras, logística e inventario."
};


const schema = [
  organization,
  software,
  website,
  webpage
];

return (

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(schema)
}}
/>

)

}