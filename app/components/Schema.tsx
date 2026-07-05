export default function Schema() {

    const organization = {
        "@type": "Organization",
        "@id":"https://www.prometech.com.pe/#organization",
        name: "Prometech",
        url: "https://www.prometech.com.pe",
        description:
            "Software empresarial en la nube diseñado para empresas que trabajan por proyectos. Permite gestionar proyectos, compras, órdenes de servicio, inventario, recepción de materiales, presupuestos y dashboards desde una única plataforma.",
        logo:{
            "@type":"ImageObject",
            url:"https://www.prometech.com.pe/Logo1.png",
            width:283,
            height:279
        },
        email: "contacto@prometech.com.pe",
        telephone: "+51902041529",
        address:{
            "@type":"PostalAddress",
            addressLocality:"Lima",
            addressCountry:"PE"
        },
        sameAs: [
        "https://www.linkedin.com/company/prometech-peru",
        "https://www.youtube.com/@Prometech-Peru"
        ],
        knowsAbout:[
            "Gestión de proyectos",
            "Gestión de compras",
            "Inventario",
            "Recepción de materiales",
            "Presupuesto",
            "Control presupuestal",
            "Rentabilidad de proyectos",
            "Automatización de procesos",
            "Software empresarial",
            "Logística"
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
            email:"contacto@prometech.com.pe",
            telephone: "+51902041529",
            availableLanguage: [
                "es"
            ]
        },
        foundingDate : "2026-04-24"
    };

    const software = {
        "@type": "SoftwareApplication",
        "@id":"https://www.prometech.com.pe/#software",
        name: "Prometech Plataforma Empresarial",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://www.prometech.com.pe",
        applicationSuite:"Prometech",
        applicationSubCategory: "Software Empresarial",
        inLanguage:"es-PE",
        
        description:
"Software empresarial modular para la gestión de proyectos, compras, inventario, logística y control presupuestal.",

        creator: {
            "@id":"https://www.prometech.com.pe/#organization"
        },
        manufacturer: {
            "@id":"https://www.prometech.com.pe/#organization"
        },
        provider:{
            "@id":"https://www.prometech.com.pe/#organization"
        },

        featureList: [
            "Gestión de proyectos",
            "Diagrama de Gantt",
            "Tareas",
            "Requerimientos de materiales",
            "Órdenes de compra",
            "Órdenes de servicio",
            "Dashboard",
            "Inventario",
            "Control presupuestal"
        ],

        audience:{
        "@type":"BusinessAudience",
        "audienceType":"Constructoras, empresas de ingeniería, consultoras y empresas de servicios"
        },

        softwareVersion:"1.0",
        offers: {
            "@type": "Offer",
            price: "0",     
            priceCurrency: "PEN",
            priceSpecification:{
                "@type":"PriceSpecification",
                priceCurrency:"PEN",
                description: "Desde S/150 al mes"
            },
            availability: "https://schema.org/InStock"
        },
        image:"https://www.prometech.com.pe/dashboard-Prometech.png"

    };

    const website = {
        "@type": "WebSite",
        "@id":"https://www.prometech.com.pe/#website",
        publisher:{
            "@id":"https://www.prometech.com.pe/#organization"
        },
        name: "Prometech",
        url: "https://www.prometech.com.pe",
        description:
"Software empresarial modular para la gestión de proyectos, compras, inventario, logística y control presupuestal.",
        inLanguage: "es-PE",

    };

    const webpage = {
        "@type": ["WebPage", "FAQPage"],
        "@id":"https://www.prometech.com.pe/#webpage",
        name: "Prometech Plataforma Empresarial",
        url: "https://www.prometech.com.pe",
        primaryImageOfPage:{
            "@type":"ImageObject",
            url:"https://www.prometech.com.pe/dashboard-Prometech.png"
        },
        isPartOf: {
            "@id":"https://www.prometech.com.pe/#website"
        },
        about:{
            "@id":"https://www.prometech.com.pe/#software"
        },
        description:
"Software empresarial modular para la gestión de proyectos, compras, inventario, logística y control presupuestal.",
        breadcrumb: {
            "@id":"https://www.prometech.com.pe/#breadcrumb"
        },

        mainEntity: [
            {
            "@type": "Question",
            name: "¿Qué es Prometech y a quién está dirigido?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Prometech es un software empresarial modular en la nube diseñado para centralizar la gestión de proyectos, compras, inventario y control presupuestal. Está especialmente dirigido a empresas que buscan centralizar la información y automatizar los procesos operativos de la empresa."
            }
            },
            {
            "@type": "Question",
            name: "¿Puedo contratar solo los módulos que necesito?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sí. Puedes comenzar implementando Gestión de Proyectos o Compras y añadir posteriormente módulos como Inventario, Recepción de Materiales o Control Presupuestal conforme tu empresa crezca."
            }
            },
            {
            "@type": "Question",
            name: "¿Cómo es el proceso de implementación?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Seguimos una metodología ágil: realizamos un análisis de tus procesos actuales, configuramos la plataforma a tu medida, capacitamos a tu equipo y te acompañamos durante el despliegue en producción para asegurar una transición exitosa."
            }
            },
            {
            "@type": "Question",
            name: "¿Ofrecen soporte técnico post-implementación?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Por supuesto. Contamos con un equipo de soporte dedicado para resolver dudas, asegurar la disponibilidad del sistema y realizar mejoras continuas según las necesidades de tu empresa."
            }
            },
        ]
    };

    const service = {
        "@type":"Service",
        "@id":"https://www.prometech.com.pe/#service",

        serviceType: "Implementación de software empresarial",

        provider:{
            "@id":"https://www.prometech.com.pe/#organization"
        },

        areaServed:{
            "@type":"Country",
            name:"Perú"
        },
        isRelatedTo:{
            "@id":"https://www.prometech.com.pe/#software"
        },

        description:
"Software empresarial modular para la gestión de proyectos, compras, inventario, logística y control presupuestal."
    };

    const breadcrumb={
        "@id":"https://www.prometech.com.pe/#breadcrumb",
        "@type":"BreadcrumbList",
        itemListElement:[
            {
                "@type":"ListItem",
                position:1,
                name:"Inicio",
                item:"https://www.prometech.com.pe"
            }
        ]

    }

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            organization,
            software,
            website,
            webpage,
            breadcrumb,
            service
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