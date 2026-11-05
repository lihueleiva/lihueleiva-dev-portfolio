import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';

export type Lang = 'es' | 'en';

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
}

export interface PortfolioDictionary {
  nav: {
    about: string;
    skills: string;
    projects: string;
    certifications: string;
    contact: string;
  };
  hero: {
    greetingPrefix: string;
    name: string;
    subtitle: string;
    description: string;
    downloadCv: string;
    cvUrl: string;
    cvDownloadName: string;
    linkedinAria: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  skills: {
    title: string;
    categories: {
      frontend: string;
      backend: string;
      tools: string;
    };
  };
  projects: {
    title: string;
    screenshotAltPrefix: string;
    enlargedAlt: string;
    items: ProjectItem[];
  };
  certifications: {
    title: string;
    certAltPrefix: string;
    byLabel: string;
  };
  contact: {
    title: string;
    subtitleLine1: string;
    subtitleLine2: string;
    nameLabel: string;
    nameRequired: string;
    emailLabel: string;
    emailRequired: string;
    emailInvalid: string;
    messageLabel: string;
    messageRequired: string;
    sending: string;
    sendButton: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    builtWith: string;
    rights: string;
  };
}

const ES_DICT: PortfolioDictionary = {
  nav: {
    about: 'Sobre Mí',
    skills: 'Habilidades',
    projects: 'Proyectos',
    certifications: 'Certificaciones',
    contact: 'Contacto',
  },
  hero: {
    greetingPrefix: 'Hola, soy',
    name: 'Lihue Leiva.',
    subtitle: 'Desarrollador de Software Frontend / Full Stack | Angular, TypeScript, Node.js & Firebase',
    description:
      'Especializado en la arquitectura y desarrollo de plataformas SaaS multi-tenant, sistemas e-commerce de alta conversión y aplicaciones web reactivas con Angular (v17–v22), Signals, SSR y Serverless Cloud.',
    downloadCv: 'Descargar CV (ES)',
    cvUrl: 'assets/pdf/Lihue_Leiva_CV_ES.pdf',
    cvDownloadName: 'Lihue_Leiva_CV_ES.pdf',
    linkedinAria: 'Visita mi perfil de LinkedIn',
  },
  about: {
    title: 'Sobre Mí',
    paragraphs: [
      'Soy Desarrollador de Software Frontend / Full Stack con sólida experiencia práctica en el ecosistema moderno de Angular (v17 a v22), TypeScript, JavaScript (ES6+), Node.js y Google Firebase. Me especializo en construir arquitecturas 100% Standalone Components, gestión de estado reactivo con Angular Signals y RxJS, optimización de rendimiento con ChangeDetectionStrategy.OnPush, Server-Side Rendering (SSR) y validación estricta de contratos de datos con Zod.',
      'Como Co-Creador y Desarrollador en proyectos en producción como Vertex Solutions (plataforma SaaS e-commerce multi-tenant white-label) y arquitecto de GEO Tracker (plataforma e-commerce, motor de reservas con bloqueo temporal "Soft-Lock" y Live CMS para expediciones de alta montaña), he liderado integraciones críticas con pasarelas de pago (Mercado Pago API), deducción atómica de inventario, pipelines de optimización multimedia en cliente (HEIC/HEIF a WebP) y SEO dinámico multi-tenant.',
      'Combino una mentalidad orientada al detalle en UI/UX (SCSS modular, diseño Mobile-First, micro-interacciones) con prácticas rigurosas de ingeniería de software: pruebas automatizadas (Jasmine/Karma, Vitest, Cypress, Playwright), integración continua (GitHub Actions) y metodologías ágiles (Scrum/Kanban).',
    ],
  },
  skills: {
    title: 'Habilidades Técnicas',
    categories: {
      frontend: 'Frontend & Arquitectura',
      backend: 'Backend, Cloud & Testing',
      tools: 'Metodologías & Especialidades',
    },
  },
  projects: {
    title: 'Mis Proyectos',
    screenshotAltPrefix: 'Captura de pantalla del proyecto ',
    enlargedAlt: 'Imagen ampliada del proyecto',
    items: [
      {
        title: 'Vertex Solutions — Plataforma SaaS E-Commerce Multi-Tenant',
        description:
          'Co-desarrollo de una plataforma SaaS multi-tenant white-label en producción (ecommerce-vertex y vertex-platform) con aislamiento por tienda (storeId) y aprovisionamiento automatizado en GCP/Firebase. Implementé la arquitectura en Angular 22 (100% Standalone Components, Signals) y contratos compartidos con Zod (@vertex/contracts), precios dinámicos por variante de producto, descuentos automáticos por transferencia bancaria, integración con Mercado Pago API y Cloud Functions con deducción atómica de stock, conversión de imágenes HEIC/HEIF a WebP en navegador (heic2any), selector de densidad de catálogo en admin y SEO dinámico con metadatos Open Graph para crawlers sociales.',
        technologies: [
          'Angular 22',
          'TypeScript',
          'Angular Signals',
          'RxJS',
          'Firebase Cloud Functions',
          'Firestore',
          'Zod',
          'Mercado Pago API',
          'SCSS',
          'Cypress / Playwright',
        ],
        images: [
          'assets/images/ecommerce-vertex-catalog.png',
          'assets/images/ecommerce-vertex-cart.png',
        ],
      },
      {
        title: 'GEO Tracker — E-Commerce de Expediciones, Motor de Reservas & Live CMS',
        description:
          'Arquitectura y desarrollo de una aplicación web SSR de alto rendimiento en Angular 22 (100% OnPush, Signals y Control Flow nativo @if/@for) para expediciones de alta montaña en Patagonia y Cordillera de los Andes. Construí un motor de reservas reactivo (BookingService) con descuento atómico de cupos por salida y doble esquema de pago: cuotas vía Mercado Pago y transferencia bancaria bonificada con bloqueo temporal de cupo por 2 horas ("Soft-Lock") y subida de comprobante. Incluye un Panel Admin de 4 módulos para auditar pagos, gestionar fechas y cupos, editar en vivo el Hero y datos bancarios (CBU/Alias), y contactar leads en 1 clic por WhatsApp.',
        technologies: [
          'Angular 22',
          'Angular SSR',
          'TypeScript 6',
          'Angular Signals',
          'OnPush Strategy',
          'Express',
          'SCSS Modular',
          'Lucide Icons',
          'Vitest',
        ],
        images: [
          'assets/images/geo-tracker-home.png',
          'assets/images/geo-tracker-admin.png',
        ],
      },
      {
        title: 'InkSync — Plataforma SaaS de Gestión (CRM, Agenda, Consultas y CMS)',
        description:
          'Desarrollo Full Stack de un sistema integral de gestión para estudios profesionales construido con Angular 20 SSR, Angular Material y Firebase. Diseñé e integré el módulo de consultas públicas directamente con el directorio de clientes (CRM) y el calendario interactivo de turnos en Cloud Firestore. Implementé autenticación completa con Firebase Auth (Email/Password y Guards) y un gestor de contenidos (CMS CRUD) conectado a Firebase Storage que sincroniza en tiempo real la galería pública del estudio.',
        technologies: [
          'Angular 20',
          'Angular SSR',
          'Angular Material',
          'Angular CDK',
          'TypeScript',
          'Cloud Firestore',
          'Firebase Auth',
          'Firebase Storage',
          'SCSS',
        ],
        images: [
          'assets/images/inksync-crm.png',
          'assets/images/inksync-gallery.png',
        ],
      },
    ],
  },
  certifications: {
    title: 'Formación y Certificaciones',
    certAltPrefix: 'Certificado de ',
    byLabel: ' por ',
  },
  contact: {
    title: 'Contacto',
    subtitleLine1: '¿Interesado en colaborar o tienes alguna propuesta técnica?',
    subtitleLine2: 'Envíame un mensaje y conversemos.',
    nameLabel: 'Nombre',
    nameRequired: 'El nombre es requerido.',
    emailLabel: 'Email',
    emailRequired: 'El email es requerido.',
    emailInvalid: 'Por favor, introduce un email válido.',
    messageLabel: 'Mensaje',
    messageRequired: 'El mensaje es requerido.',
    sending: 'Enviando...',
    sendButton: 'Enviar Mensaje',
    successMessage: '¡Mensaje enviado con éxito!',
    errorMessage: 'Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo.',
  },
  footer: {
    builtWith: 'Construido con:',
    rights: 'Todos los derechos reservados.',
  },
};

const EN_DICT: PortfolioDictionary = {
  nav: {
    about: 'About Me',
    skills: 'Skills',
    projects: 'Projects',
    certifications: 'Certifications',
    contact: 'Contact',
  },
  hero: {
    greetingPrefix: "Hi, I'm",
    name: 'Lihue Leiva.',
    subtitle: 'Frontend / Full Stack Software Developer | Angular, TypeScript, Node.js & Firebase',
    description:
      'Specialized in architecting and building multi-tenant SaaS platforms, high-conversion e-commerce systems, and reactive web applications using Angular (v17–v22), Signals, SSR, and Serverless Cloud.',
    downloadCv: 'Download Resume (EN)',
    cvUrl: 'assets/pdf/Lihue_Leiva_Resume_EN.pdf',
    cvDownloadName: 'Lihue_Leiva_Resume_EN.pdf',
    linkedinAria: 'Visit my LinkedIn profile',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'I am a Frontend / Full Stack Software Developer with strong hands-on experience across the modern Angular ecosystem (v17–v22), TypeScript, JavaScript (ES6+), Node.js, and Google Firebase. I specialize in 100% Standalone Component architectures, declarative state management with Angular Signals and RxJS, ChangeDetectionStrategy.OnPush performance optimization, Server-Side Rendering (SSR), and strict schema validation with Zod.',
      'As Co-Creator and Software Developer on production systems such as Vertex Solutions (a multi-tenant white-label SaaS e-commerce platform) and architect of GEO Tracker (an expedition e-commerce platform, "Soft-Lock" booking engine, and live CMS), I have engineered mission-critical payment workflows (Mercado Pago API), atomic inventory deduction, client-side media optimization pipelines (HEIC/HEIF to WebP), and dynamic multi-tenant SEO.',
      'I combine pixel-perfect UI/UX execution (modular SCSS, Mobile-First responsive layouts, smooth micro-interactions) with rigorous software engineering standards: automated testing (Jasmine/Karma, Vitest, Cypress, Playwright), CI/CD pipelines (GitHub Actions), and Agile methodologies (Scrum/Kanban).',
    ],
  },
  skills: {
    title: 'Technical Skills',
    categories: {
      frontend: 'Frontend & Architecture',
      backend: 'Backend, Cloud & Testing',
      tools: 'Methodologies & Specialties',
    },
  },
  projects: {
    title: 'Featured Projects',
    screenshotAltPrefix: 'Screenshot of project ',
    enlargedAlt: 'Enlarged project preview',
    items: [
      {
        title: 'Vertex Solutions — Multi-Tenant White-Label SaaS E-Commerce',
        description:
          'Co-engineered a production-grade multi-tenant white-label SaaS e-commerce platform (ecommerce-vertex and vertex-platform) featuring tenant isolation (storeId) and automated GCP/Firebase provisioning. Built the storefront and merchant backoffice using Angular 22 (100% Standalone Components, Signals) and shared Zod contracts (@vertex/contracts). Implemented dynamic per-variant pricing, automated bank transfer discounts, Mercado Pago API and Cloud Functions integration with atomic stock deduction, client-side HEIC/HEIF to WebP conversion (heic2any), an admin catalog density selector, and dynamic Open Graph SEO for social crawlers.',
        technologies: [
          'Angular 22',
          'TypeScript',
          'Angular Signals',
          'RxJS',
          'Firebase Cloud Functions',
          'Firestore',
          'Zod',
          'Mercado Pago API',
          'SCSS',
          'Cypress / Playwright',
        ],
        images: [
          'assets/images/ecommerce-vertex-catalog.png',
          'assets/images/ecommerce-vertex-cart.png',
        ],
      },
      {
        title: 'GEO Tracker — Expedition E-Commerce, Booking Engine & Live CMS',
        description:
          'Architected and developed a high-performance Server-Side Rendered (SSR) web application in Angular 22 (100% OnPush, Signals, and native Control Flow @if/@for) for high-altitude mountaineering expeditions across Patagonia and the Andes. Engineered a reactive BookingService with atomic slot deduction per departure date and a dual pricing model: Mercado Pago installments and discounted bank transfers with a 2-hour temporary slot reservation ("Soft-Lock") and receipt upload workflow. Built a 4-module Admin Backoffice & Live CMS to audit payment receipts, manage departures, edit live Hero/Trust Pillars and bank details (CBU/Alias), and convert leads via 1-click WhatsApp links.',
        technologies: [
          'Angular 22',
          'Angular SSR',
          'TypeScript 6',
          'Angular Signals',
          'OnPush Strategy',
          'Express',
          'Modular SCSS',
          'Lucide Icons',
          'Vitest',
        ],
        images: [
          'assets/images/geo-tracker-home.png',
          'assets/images/geo-tracker-admin.png',
        ],
      },
      {
        title: 'InkSync — Studio Management SaaS (CRM, Calendar, Consultations & CMS)',
        description:
          'Full Stack development of an all-in-one studio management web application built with Angular 20 SSR, Angular Material, and Firebase. Integrated public consultation intake directly with the client CRM directory and interactive appointment scheduling calendar backed by Cloud Firestore. Implemented full Firebase Authentication (Email/Password and route guards) and a CRUD portfolio CMS connected to Firebase Storage for real-time public gallery synchronization.',
        technologies: [
          'Angular 20',
          'Angular SSR',
          'Angular Material',
          'Angular CDK',
          'TypeScript',
          'Cloud Firestore',
          'Firebase Auth',
          'Firebase Storage',
          'SCSS',
        ],
        images: [
          'assets/images/inksync-crm.png',
          'assets/images/inksync-gallery.png',
        ],
      },
    ],
  },
  certifications: {
    title: 'Education & Certifications',
    certAltPrefix: 'Certificate of ',
    byLabel: ' by ',
  },
  contact: {
    title: 'Contact',
    subtitleLine1: 'Interested in collaborating or discussing a technical role?',
    subtitleLine2: 'Send me a message and let’s connect.',
    nameLabel: 'Name',
    nameRequired: 'Name is required.',
    emailLabel: 'Email',
    emailRequired: 'Email is required.',
    emailInvalid: 'Please enter a valid email address.',
    messageLabel: 'Message',
    messageRequired: 'Message is required.',
    sending: 'Sending...',
    sendButton: 'Send Message',
    successMessage: 'Message sent successfully!',
    errorMessage: 'An error occurred while sending the message. Please try again.',
  },
  footer: {
    builtWith: 'Built with:',
    rights: 'All rights reserved.',
  },
};

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  public readonly lang: WritableSignal<Lang> = signal<Lang>('es');

  public readonly t: Signal<PortfolioDictionary> = computed<PortfolioDictionary>(() =>
    this.lang() === 'es' ? ES_DICT : EN_DICT
  );

  public setLang(newLang: Lang): void {
    this.lang.set(newLang);
  }

  public toggleLang(): void {
    this.lang.update((current) => (current === 'es' ? 'en' : 'es'));
  }
}
