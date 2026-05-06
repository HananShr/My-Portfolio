// ============================================================
// BILINGUAL CONTENT FILE — FR / EN
// Edit this file to update all portfolio content.
// ============================================================

export interface ContentType {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    certifications: string;
    languages: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    btnProjects: string;
    btnContact: string;
    btnCV: string;
  };
  about: {
    sectionTitle: string;
    text: string;
    highlights: string[];
  };
  skills: {
    sectionTitle: string;
    categories: { title: string; items: string[] }[];
  };
  experience: {
    sectionTitle: string;
    items: {
      title: string;
      company: string;
      location: string;
      date: string;
      project?: string;
      description: string[];
    }[];
  };
  projects: {
    sectionTitle: string;
    items: {
      title: string;
      type: string;
      description: string;
      features: string[];
      techStack: string[];
      github?: string;
      demo?: string;
      image: string;
    }[];
  };
  educationSection: {
    sectionTitle: string;
    items: { degree: string; school: string; date: string }[];
  };
  certifications: {
    sectionTitle: string;
    items: { title: string; institution: string; date: string }[];
  };
  languagesSection: {
    sectionTitle: string;
    items: { lang: string; level: string }[];
  };
  contact: {
    sectionTitle: string;
    cta: string;
    btnEmail: string;
    btnLinkedIn: string;
    btnGitHub: string;
  };
  footer: {
    role: string;
  };
}

export const content: Record<"fr" | "en", ContentType> = {
  // ===================== FRENCH =====================
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      experience: "Expériences",
      projects: "Projets",
      education: "Formation",
      certifications: "Certifications",
      languages: "Langues",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Hanane SAHARAOUI",
      title: "Ingénieure Logiciel Informatique",
      description:
        "Diplômée d'un Master en ingénierie logicielle, passionnée par le développement web, l'intelligence artificielle et la conception de solutions fiables et innovantes.",
      btnProjects: "Voir mes projets",
      btnContact: "Me contacter",
      btnCV: "Télécharger CV",
    },
    about: {
      sectionTitle: "À propos",
      text: "Je suis diplômée en 2025 d'un Master 2 en ingénierie logicielle à l'Université des Sciences et de la Technologie Houari Boumediene. Passionnée par le développement web, l'analyse de données et l'intelligence artificielle, j'aime concevoir des solutions précises, fiables et utiles. Curieuse, sérieuse et motivée, je m'adapte facilement aux projets techniques et je souhaite intégrer une entreprise innovante afin de contribuer à des projets concrets et stimulants.",
      highlights: [
        "Développement Web",
        "Intelligence Artificielle",
        "Analyse de données",
        "Travail d'équipe",
        "Résolution de problèmes",
        "Apprentissage continu",
      ],
    },
    skills: {
      sectionTitle: "Compétences",
      categories: [
        {
          title: "Développement Web",
          items: ["HTML", "CSS", "JavaScript", "React", "Flask", "Laravel"],
        },
        {
          title: "Bases de données",
          items: ["SQL Server", "MySQL", "PostgreSQL"],
        },
        {
          title: "IA & Analyse de données",
          items: ["Python", "Pandas", "Scikit-learn", "Graphviz", "Chart.js"],
        },
        {
          title: "Outils & Environnement",
          items: [
            "Git",
            "GitHub",
            "Visual Studio Code",
            "Postman",
            "Apache NiFi",
          ],
        },
        {
          title: "Compétences techniques",
          items: [
            "Conception et développement d'applications web",
            "Modélisation UML",
            "Analyse fonctionnelle des besoins",
            "Administration de bases de données",
            "Visualisation de données",
            "Développement de solutions intelligentes",
          ],
        },
      ],
    },
    experience: {
      sectionTitle: "Expériences",
      items: [
        {
          title: "Enseignante en Informatique, temps partiel",
          company: "NG School",
          location: "Boumerdes, Algeria",
          date: "Depuis juillet 2025",
          description: [
            "Formations en bureautique, programmation Python et initiation aux outils d'IA.",
            "Encadrement de jeunes et enfants à travers des ateliers pratiques en design graphique avec Canva.",
            "Conception de supports pédagogiques interactifs et développement de compétences en pédagogie numérique.",
          ],
        },
        {
          title: "Stage de fin d'études — Master",
          company: "GCB",
          location: "Boumerdes, Algeria",
          date: "Février 2025 — Juin 2025",
          project:
            "Développement d'une application de gestion des incidents et accidents au sein de GCB à l'aide de l'intelligence artificielle.",
          description: [
            "Conception et développement de l'application avec intégration de technologies d'intelligence artificielle.",
            "Mise en place d'un système de suivi des incidents et accidents pour améliorer la gestion et la prévention.",
            "Intégration d'un système de notifications en temps réel afin d'alerter les équipes en cas d'incident grave.",
          ],
        },
        {
          title: "Stage pratique",
          company: "GCB",
          location: "Boudouaou, Algeria",
          date: "Juillet 2023 — Août 2023",
          description: [
            "Expérience pratique en maintenance informatique.",
            "Configuration de réseaux locaux et installation de câblage.",
            "Configuration de domaines DNS et systèmes associés.",
          ],
        },
        {
          title: "Projet de fin d'études — Licence",
          company: "Djezzy",
          location: "Dar El Beida, Algeria",
          date: "Février 2023 — Juin 2023",
          project:
            "Visualisation et analyse de données NPS en utilisant les techniques de Big Data.",
          description: [
            "Conception et mise en place d'une architecture Big Data pour le traitement des données NPS.",
            "Analyse et visualisation des données pour faciliter la compréhension des indicateurs clients.",
          ],
        },
        {
          title: "Stage pratique",
          company: "Algérie Poste",
          location: "Boumerdes, Algeria",
          date: "Août 2022 — Septembre 2022",
          description: [
            "Expérience en maintenance informatique.",
            "Initiation à la configuration de réseaux locaux.",
            "Configuration de dispositifs de paiement automatiques.",
          ],
        },
        {
          title: "Stage pratique",
          company: "Algérienne Des Eaux",
          location: "Boudouaou, Algeria",
          date: "Juillet 2022 — Août 2022",
          description: [
            "Découverte de la structure de l'entreprise.",
            "Utilisation de logiciels applicatifs pour le service aux clients.",
          ],
        },
      ],
    },
    projects: {
      sectionTitle: "Projets",
      items: [
        {
          title: "Application de gestion des incidents et accidents avec IA",
          type: "Projet de fin d'études Master — GCB",
          description:
            "Application web permettant la gestion, le suivi et la prévention des incidents et accidents au sein de GCB, avec intégration de fonctionnalités d'intelligence artificielle et notifications en temps réel.",
          features: [
            "Gestion des incidents et accidents",
            "Suivi et prévention",
            "Notifications temps réel",
            "Analyse intelligente / prédiction",
            "Interface web moderne",
          ],
          techStack: [
            "React",
            "Flask",
            "Python",
            "SQL",
            "Scikit-learn",
            "Chart.js",
          ],
          // TODO: Replace with your real GitHub link
          github: "#",
          demo: "#",
          image: "/projects/gcb-cover.png",
        },
        {
          title: "Visualisation et analyse de données NPS",
          type: "Projet de fin d'études Licence — Djezzy",
          description:
            "Projet de visualisation et d'analyse de données NPS utilisant des techniques Big Data afin de traiter les données clients et générer des indicateurs exploitables.",
          features: [
            "Architecture Big Data",
            "Traitement de données NPS",
            "Visualisation de données",
            "Analyse des indicateurs clients",
          ],
          techStack: ["Apache NiFi", "Python", "Pandas", "Chart.js", "SQL"],
          image: "/projects/djezzy-cover.png",
        },
        {
          title: "Application Web de Covoiturage",
          type: "Projet Académique",
          description:
            "Une plateforme web qui met en relation conducteurs et passagers pour partager des trajets, réduire les coûts et améliorer l’efficacité du transport.",

          features: [
            "Authentification des utilisateurs",
            "Proposition et demande de trajets",
            "Recherche et correspondance des trajets",
            "Gestion des trajets",
          ],

          techStack: [
            "React",
            "Flask / Node.js",
            "Python / JavaScript",
            "SQL / MongoDB",
          ],

          github: "https://github.com/HananShr/CarPooling.git",
          demo: "#",
          image: "/projects/carpooling-cover.png",
        },
        {
          title: "BillMate - Gestion des Factures",
          type: "Projet Freelance (Client Privé)",
          description:
            "BillMate est une application de gestion de factures moderne permettant aux entreprises d’organiser, suivre et gérer facilement leurs factures. Elle offre une interface intuitive et des outils avancés de recherche, filtrage et exportation de données.",

          features: [
            "Ajout et gestion des factures",
            "Génération automatique de numéros de facture",
            "Recherche avancée et filtrage multi-critères",
            "Modification et suppression des factures",
            "Export des données vers Excel",
            "Interface moderne en mode sombre (Dark Blue)",
          ],

          techStack: [
            "Python",
            "SQL / SQLite (ou Excel)",
            "Tkinter / Interface Desktop",
            "Pandas",
            "OpenPyXL",
          ],

          github: "#",
          demo: "#",
          image: "/projects/billmate-cover.png",
        },
        {
          title: "RevoQuiz - Quiz sur la Révolution Algérienne",
          type: "Application Desktop Éducative",
          description:
            "RevoQuiz est une application desktop interactive qui permet d’apprendre l’histoire de la Révolution Algérienne à travers des quiz et du contenu éducatif. Elle propose une expérience simple, ludique et entièrement en français.",

          features: [
            "Interface en français",
            "Quiz interactifs (facile, moyen, difficile)",
            "Mode information historique",
            "Application Windows (.exe)",
          ],

          techStack: ["Python", "Tkinter", "JSON"],

          github: "#",
          demo: "#",
          image: "/projects/revoquiz-cover.png",
        },
        {
          title: "Movie App",
          type: "Projet Frontend React",
          description:
            "Une application web moderne de films développée avec React. Elle permet de rechercher des films, consulter les résultats et gérer une liste de favoris via une interface simple et responsive.",

          features: [
            "Recherche de films en temps réel",
            "Ajout / suppression des favoris",
            "Page de gestion des favoris",
            "Interface responsive et moderne",
          ],

          techStack: [
            "React",
            "JavaScript (ES6+)",
            "Context API",
            "CSS",
            "API de films publique",
          ],

          github: "https://github.com/HananShr/Movies-Website.git",
          demo: "#",
          image: "/projects/movies-cover.png",
        },
        // {
        //   title: "Project Name (Coming Soon)",
        //   type: "In Progress Project",
        //   description:
        //     "This project is currently under development. More details will be available soon.",

        //   features: [
        //     "In development",
        //     "Planned feature: ...",
        //     "Planned feature: ...",
        //   ],

        //   techStack: ["React", "Node.js"],

        //   github: "#",
        //   demo: "#",
        //   image: "/projects/coming-soon.png",
        // },
        //   {
        //     title: "Projets GitHub",
        //     type: "Projets personnels & académiques",
        //     description:
        //       "Une sélection de projets personnels et académiques disponibles sur mon profil GitHub.",
        //     features: [],
        //     techStack: [],
        //     github: "https://github.com/HananShr",
        //     image: "",
        //   },
      ],
    },
    educationSection: {
      sectionTitle: "Formation",
      items: [
        {
          degree: "Master Ingénierie de Logiciels",
          school:
            "Université des Sciences et de la Technologie Houari Boumediene, Alger",
          date: "Septembre 2023 — Juillet 2025",
        },
        {
          degree: "Licence Informatique",
          school:
            "Université des Sciences et de la Technologie Houari Boumediene, Alger",
          date: "Septembre 2019 — Juillet 2023",
        },
      ],
    },
    certifications: {
      sectionTitle: "Certifications",
      items: [
        {
          title: "CCNA 1",
          institution:
            "Instituts Nationaux Supérieurs de la Formation Professionnelle Abdelhak Ben Hamouda, Boumerdes",
          date: "Octobre 2022 — Janvier 2023",
        },
        {
          title: "Formation en secourisme",
          institution: "Protection Civile, Boudouaou",
          date: "Février 2025",
        },
      ],
    },
    languagesSection: {
      sectionTitle: "Langues",
      items: [
        { lang: "Arabe", level: "Langue maternelle" },
        { lang: "Français", level: "Lu, écrit, parlé" },
        { lang: "Anglais", level: "Lu, écrit, parlé" },
      ],
    },
    contact: {
      sectionTitle: "Contact",
      cta: "Vous avez une opportunité, un projet ou une collaboration ? N'hésitez pas à me contacter.",
      btnEmail: "Envoyer un email",
      btnLinkedIn: "Voir LinkedIn",
      btnGitHub: "Voir GitHub",
    },
    footer: {
      role: "Ingénieure Logiciel Informatique",
    },
  },

  // ===================== ENGLISH =====================
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      certifications: "Certifications",
      languages: "Languages",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Hanane Saharaoui",
      title: "Software Engineer",
      description:
        "Master's graduate in software engineering, passionate about web development, artificial intelligence, and building reliable and innovative digital solutions.",
      btnProjects: "View Projects",
      btnContact: "Contact Me",
      btnCV: "Download CV",
    },
    about: {
      sectionTitle: "About",
      text: "I graduated in 2025 with a Master's degree in Software Engineering from the University of Science and Technology Houari Boumediene. Passionate about web development, data analysis and artificial intelligence, I enjoy designing accurate, reliable and useful solutions. Curious, serious and motivated, I adapt easily to technical projects and aim to join an innovative company where I can contribute to concrete and challenging projects.",
      highlights: [
        "Web Development",
        "Artificial Intelligence",
        "Data Analysis",
        "Teamwork",
        "Problem Solving",
        "Continuous Learning",
      ],
    },
    skills: {
      sectionTitle: "Skills",
      categories: [
        {
          title: "Web Development",
          items: ["HTML", "CSS", "JavaScript", "React", "Flask", "Laravel"],
        },
        {
          title: "Databases",
          items: ["SQL Server", "MySQL", "PostgreSQL"],
        },
        {
          title: "AI & Data Analysis",
          items: ["Python", "Pandas", "Scikit-learn", "Graphviz", "Chart.js"],
        },
        {
          title: "Tools & Environment",
          items: [
            "Git",
            "GitHub",
            "Visual Studio Code",
            "Postman",
            "Apache NiFi",
          ],
        },
        {
          title: "Technical Skills",
          items: [
            "Web application design and development",
            "UML modeling",
            "Functional requirements analysis",
            "Database administration",
            "Data visualization",
            "Intelligent solution development",
          ],
        },
      ],
    },
    experience: {
      sectionTitle: "Experience",
      items: [
        {
          title: "Part-time Computer Science Teacher",
          company: "NG School",
          location: "Boumerdes, Algeria",
          date: "Since July 2025",
          description: [
            "Teaching office tools, Python programming and introduction to AI tools.",
            "Supervising young learners through practical graphic design workshops using Canva.",
            "Creating interactive teaching materials and developing digital pedagogy skills.",
          ],
        },
        {
          title: "Final Year Internship — Master's Degree",
          company: "GCB",
          location: "Boumerdes, Algeria",
          date: "February 2025 — June 2025",
          project:
            "Development of an incident and accident management application at GCB using artificial intelligence.",
          description: [
            "Designed and developed the application integrating artificial intelligence technologies.",
            "Implemented an incident and accident tracking system to improve management and prevention.",
            "Integrated real-time notifications to alert teams in case of serious incidents.",
          ],
        },
        {
          title: "Practical Internship",
          company: "GCB",
          location: "Boudouaou, Algeria",
          date: "July 2023 — August 2023",
          description: [
            "Gained practical experience in IT maintenance.",
            "Configured local networks and installed cabling.",
            "Worked on DNS domain configuration and related systems.",
          ],
        },
        {
          title: "Final Year Project — Bachelor's Degree",
          company: "Djezzy",
          location: "Dar El Beida, Algeria",
          date: "February 2023 — June 2023",
          project:
            "NPS data visualization and analysis using Big Data techniques.",
          description: [
            "Designed and implemented a Big Data architecture for processing NPS data.",
            "Analyzed and visualized data to improve understanding of customer indicators.",
          ],
        },
        {
          title: "Practical Internship",
          company: "Algérie Poste",
          location: "Boumerdes, Algeria",
          date: "August 2022 — September 2022",
          description: [
            "Gained experience in IT maintenance.",
            "Introduction to local network configuration.",
            "Configured automatic payment devices.",
          ],
        },
        {
          title: "Practical Internship",
          company: "Algérienne Des Eaux",
          location: "Boudouaou, Algeria",
          date: "July 2022 — August 2022",
          description: [
            "Discovered the company structure.",
            "Used business applications for customer service.",
          ],
        },
      ],
    },
    projects: {
      sectionTitle: "Projects",
      items: [
        {
          title: "AI-Based Incident and Accident Management App",
          type: "Master's Final Year Project — GCB",
          description:
            "Web application for managing, tracking and preventing incidents and accidents at GCB, integrating artificial intelligence features and real-time notifications.",
          features: [
            "Incident and accident management",
            "Tracking and prevention",
            "Real-time notifications",
            "Intelligent analysis / prediction",
            "Modern web interface",
          ],
          techStack: [
            "React",
            "Flask",
            "Python",
            "SQL",
            "Scikit-learn",
            "Chart.js",
          ],
          github: "#",
          demo: "#",
          image: "/projects/gcb-cover.png",
        },
        {
          title: "NPS Data Visualization and Analysis",
          type: "Bachelor's Final Year Project — Djezzy",
          description:
            "Data visualization and analysis project using Big Data techniques to process customer NPS data and generate useful indicators.",
          features: [
            "Big Data architecture",
            "NPS data processing",
            "Data visualization",
            "Customer indicator analysis",
          ],
          techStack: ["Apache NiFi", "Python", "Pandas", "Chart.js", "SQL"],
          image: "/projects/djezzy-cover.png",
        },
        {
          title: "Carpooling Web Application",
          type: "Academic Project",
          description:
            "A web platform that connects drivers and passengers to share rides, reducing costs and improving transportation efficiency.",

          features: [
            "User authentication",
            "Offer and request rides",
            "Search and match trips",
            "Trip management",
          ],

          techStack: [
            "React",
            "Flask / Node.js",
            "Python / JavaScript",
            "SQL / MongoDB",
          ],

          github: "https://github.com/HananShr/CarPooling.git",
          demo: "#",
          image: "/projects/carpooling-cover.png",
        },
        {
          title: "BillMate - Invoice Management System",
          type: "Freelance Project (Private Client)",
          description:
            "BillMate is a modern invoice management application designed to help companies efficiently organize, track, and manage their invoices. It provides an intuitive interface with advanced search, filtering, and data export capabilities.",

          features: [
            "Add and manage invoices",
            "Automatic invoice number generation",
            "Advanced multi-criteria search and filtering",
            "Edit and delete invoices",
            "Export data to Excel",
            "Modern dark mode (Dark Blue UI)",
          ],

          techStack: [
            "Python",
            "SQL / SQLite (or Excel-based storage)",
            "Tkinter / Desktop UI",
            "Pandas",
            "OpenPyXL",
          ],

          github: "#",
          demo: "#",
          image: "/projects/billmate-cover.png",
        },
        {
          title: "RevoQuiz - Algerian Revolution Quiz App",
          type: "Educational Desktop Application",
          description:
            "RevoQuiz is an interactive desktop application designed to learn about the Algerian Revolution through quizzes and educational content. It offers a simple and engaging experience fully in French.",

          features: [
            "French-language interface",
            "Interactive quizzes (Easy, Medium, Hard)",
            "Historical information mode",
            "Windows desktop app (.exe)",
          ],

          techStack: ["Python", "Tkinter", "JSON"],

          github: "#",
          demo: "#",
          image: "/projects/revoquiz-cover.png",
        },
        {
          title: "Movie App",
          type: "Frontend React Project",
          description:
            "A modern movie browsing web application built with React. It allows users to search for movies, view details, and manage a favorites list using a clean and responsive interface.",

          features: [
            "Real-time movie search",
            "Add/remove favorites",
            "Favorites management page",
            "Responsive and clean UI",
          ],

          techStack: [
            "React",
            "JavaScript (ES6+)",
            "Context API",
            "CSS",
            "Public Movie API",
          ],

          github: "https://github.com/HananShr/Movies-Website.git",
          demo: "#",
          image: "/projects/movies-cover.png",
        },
        {
          title: "GitHub Projects",
          type: "Personal & Academic Projects",
          description:
            "A selection of personal and academic projects available on my GitHub profile.",
          features: [],
          techStack: [],
          github: "https://github.com/HananShr",
          image: "",
        },
      ],
    },
    educationSection: {
      sectionTitle: "Education",
      items: [
        {
          degree: "Master's Degree in Software Engineering",
          school:
            "University of Science and Technology Houari Boumediene, Algiers",
          date: "September 2023 — July 2025",
        },
        {
          degree: "Bachelor's Degree in Computer Science",
          school:
            "University of Science and Technology Houari Boumediene, Algiers",
          date: "September 2019 — July 2023",
        },
      ],
    },
    certifications: {
      sectionTitle: "Certifications",
      items: [
        {
          title: "CCNA 1",
          institution:
            "National Higher Institutes of Vocational Training Abdelhak Ben Hamouda, Boumerdes",
          date: "October 2022 — January 2023",
        },
        {
          title: "First Aid Training",
          institution: "Civil Protection, Boudouaou",
          date: "February 2025",
        },
      ],
    },
    languagesSection: {
      sectionTitle: "Languages",
      items: [
        { lang: "Arabic", level: "Native" },
        { lang: "French", level: "Reading, writing, speaking" },
        { lang: "English", level: "Reading, writing, speaking" },
      ],
    },
    contact: {
      sectionTitle: "Contact",
      cta: "Have an opportunity, project or collaboration in mind? Feel free to contact me.",
      btnEmail: "Send Email",
      btnLinkedIn: "View LinkedIn",
      btnGitHub: "View GitHub",
    },
    footer: {
      role: "Software Engineer",
    },
  },
};
