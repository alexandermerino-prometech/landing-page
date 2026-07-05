export default function Schema() {

    const organization = {
        "@type": "Organization",
        "@id":"https://prometech.com.pe/#organization",
        name: "Prometech",
        url: "https://prometech.com.pe",
        logo: "https://prometech.com.pe/Logo1.png",
        email: "contacto@prometech.com.pe",
        sameAs: [
        "https://www.linkedin.com/company/prometech-peru",
        "https://www.youtube.com/@Prometech-Peru"
        ],
        foundingLocation:{
            "@type":"Place",
            name:"Lima, Perú"
        },
        areaServed:{
            "@type":"Country",
            name:"Perú"
        },
        contactPoint:{
            "@type":"ContactPoint",
            contactType:"Ventas",
            email:"contacto@prometech.com.pe"
        }
    };

    const software = {
        "@type": "SoftwareApplication",
        "@id":"https://prometech.com.pe/#software",
        name: "Prometech ERP",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://prometech.com.pe",
        
        description:
        "Software ERP para empresas que trabajan por proyectos. Gestiona proyectos, compras, logística, inventario y facturación electrónica.",

        creator: {
            "@id":"https://prometech.com.pe/#organization",
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

    };

    const website = {
        "@type": "WebSite",
        "@id":"https://prometech.com.pe/#website",
        publisher:{
            "@id":"https://prometech.com.pe/#organization"
        },
        name: "Prometech",
        url: "https://prometech.com.pe",
        description:
        "Software ERP para empresas que trabajan por proyectos.",
        
        potentialAction:{

            "@type":"SearchAction",

            target:"https://prometech.com.pe/?q={search_term_string}",

            "query-input":"required name=search_term_string"

        }
    };

    const webpage = {
        "@type": "WebPage",
        "@id":"https://prometech.com.pe/#webpage",
        name: "Prometech ERP",
        url: "https://prometech.com.pe",
        isPartOf: {
            "@id":"https://prometech.com.pe/#website",
            name: "Prometech",
            url: "https://prometech.com.pe"
        },
        about:{
            "@id":"https://prometech.com.pe/#software"
        },
        description:
        "Software para gestión de proyectos, compras, logística e inventario."
    };

    const breadcrumb={
        "@id":"https://prometech.com.pe/#breadcrumb",
        "@type":"BreadcrumbList",
        itemListElement:[
            {
                "@type":"ListItem",
                position:1,
                name:"Inicio",
                item:"https://prometech.com.pe"
            }
        ]

    }

    const faq = {
        "@type": "FAQPage",
        "@id": "https://prometech.com.pe/#faq",
        mainEntity: [
            {
            "@type": "Question",
            name: "¿Qué es Prometech y a quién está dirigido?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Prometech es un ERP modular..."
            }
            },
            {
            "@type": "Question",
            name: "¿Puedo contratar solo los módulos que necesito?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sí. Nuestra arquitectura..."
            }
            }
        ]
    };


    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            organization,
            software,
            website,
            webpage,
            breadcrumb,
            faq
        ]
    };

    return (

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema)
            }}
        />

    )

}