export default function Schema() {

    const organization = {
        "@type": "Organization",
        "@id":"https://prometech.com.pe/#organization",
        name: "Prometech",
        url: "https://prometech.com.pe",
        description:
            "Empresa peruana especializada en software ERP para empresas que trabajan por proyectos.",
        logo:{
            "@type":"ImageObject",
            url:"https://prometech.com.pe/Logo1.png"
        },
        email: "contacto@prometech.com.pe",
        sameAs: [
        "https://www.linkedin.com/company/prometech-peru",
        "https://www.youtube.com/@Prometech-Peru"
        ],
        knowsAbout:[
            "ERP",
            "Gestión de proyectos",
            "Compras",
            "Inventario",
            "Logística",
            "Facturación electrónica"
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
            "@id":"https://prometech.com.pe/#organization"
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

    };

    const webpage = {
        "@type": "WebPage",
        "@id":"https://prometech.com.pe/#webpage",
        name: "Prometech ERP",
        url: "https://prometech.com.pe",
        primaryImageOfPage:{
            "@type":"ImageObject",
            url:"https://prometech.com.pe/dashboard-Prometech.png"
        },
        isPartOf: {
            "@id":"https://prometech.com.pe/#website"
        },
        about:{
            "@id":"https://prometech.com.pe/#software"
        },
        description:
        "Software para gestión de proyectos, compras, logística e inventario."
    };

    const service = {
        "@type":"Service",
        "@id":"https://prometech.com.pe/#service",

        serviceType:"Implementación de ERP",

        provider:{
            "@id":"https://prometech.com.pe/#organization"
        },

        areaServed:{
            "@type":"Country",
            name:"Perú"
        },

        description:
        "Implementación de software ERP para empresas que trabajan por proyectos."
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
                text: "Prometech es un ERP modular en la nube diseñado para centralizar la gestión de proyectos, compras, inventario y facturación. Está especialmente dirigido a empresas que buscan eliminar el caos operativo y tener un control financiero en tiempo real."
            }
            },
            {
            "@type": "Question",
            name: "¿Puedo contratar solo los módulos que necesito?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sí. Nuestra arquitectura es completamente modular. Puedes empezar implementando solo el módulo de Gestión de Proyectos o Compras, y activar los módulos de Inventario o Facturación a medida que tu negocio crezca."
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


    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            organization,
            software,
            website,
            webpage,
            breadcrumb,
            service,
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