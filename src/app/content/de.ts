import { Content } from './model';
import { WELCOME_DE } from './welcome';

// Translation of `en.ts`. Same meaning, same facts; reviewed by dathq before publishing.
export const DE: Content = {
  ui: {
    langName: 'Deutsch',
    titles: {
      cv: 'Ha Quoc Dat — Full-Stack-Entwickler',
      platform: 'datha platform — Ha Quoc Dat',
      resume: 'Ha Quoc Dat — Résumé',
    },
    description:
      'Ha Quoc Dat — Full-Stack-Entwickler mit über 7 Jahren Erfahrung in Enterprise-Webanwendungen, spezialisiert auf Angular.',
    months: [
      'Jan.',
      'Feb.',
      'März',
      'Apr.',
      'Mai',
      'Juni',
      'Juli',
      'Aug.',
      'Sep.',
      'Okt.',
      'Nov.',
      'Dez.',
    ],
    theme: 'Helles oder dunkles Design umschalten',
    language: 'Sprache',
    savePdf: 'Als PDF speichern',
    formats: { label: 'Format', cv: 'Lebenslauf', resume: 'Résumé im US-Stil' },
    linkedin: 'LinkedIn',
    github: 'GitHub',
    sections: {
      summary: 'Profil',
      experience: 'Berufserfahrung',
      skills: 'Kenntnisse',
      education: 'Ausbildung',
      languages: 'Sprachen',
      stack: 'Technologien',
    },
    team: 'Team',
    platformCard: {
      kicker: 'Eigenes Projekt',
      body: 'Microservices und Micro-Frontends, allein gebaut: Angular 22, Go, NATS JetStream, WebRTC.',
      cta: 'Kurzer Überblick',
      github: 'Auf GitHub ansehen',
    },
    footer: {
      built: 'Gebaut mit Angular 22 — zoneless, vorgerendert, auf Englisch und Deutsch.',
      source: 'Quellcode auf GitHub',
    },
  },
  cv: {
    name: 'Ha Quoc Dat',
    headline: 'Full-Stack-Entwickler',
    summary: [
      'Full-Stack-Engineer mit über 7 Jahren Erfahrung in der Entwicklung von Enterprise-Webanwendungen, spezialisiert auf Angular (v12–21). Stark in React, Next.js und TypeScript und sicher im Backend, etwa mit .NET Core und NodeJS. Erfahren in Frontend-Architektur, Technologieentscheidungen, Performance-Optimierung und Mentoring.',
      'Erfahren in KI-gestützter Entwicklung (AIDD): strukturierte Workflows mit Claude, Cursor und GitHub Copilot, mit eigenen Regeln, Skills, Hooks und projektspezifischen Anweisungen für Programmierung, Refactoring, Tests, Debugging und Dokumentation.',
    ],
    roleSummary: [
      'Verantwortung für Frontend-Architektur und Technologieentscheidungen, vom Entwurf über das Deployment bis zum Betrieb.',
      'Sicherung von Codequalität und Performance durch Code-Reviews, Refactoring und Engineering-Standards.',
      'Mentoring von Entwicklern, Mitarbeit an technischen Standards und Unterstützung von CI/CD- und Release-Prozessen.',
    ],
    skills: [
      {
        name: 'Frontend',
        items: [
          'HTML5, CSS3, SASS, TailwindCSS, Bootstrap',
          'JavaScript (ES6+), TypeScript',
          'Angular (v12–21), RxJS, Module Federation',
          'ReactJS, Next.js',
          'Material UI, Radix UI, TanStack Query',
        ],
      },
      {
        name: 'Backend',
        items: [
          '.NET Framework / .NET Core',
          'NodeJS (Fastify, NestJS)',
          'Python (Django, DRF, FastAPI)',
          'GraphQL, REST APIs, Server-Sent Events (SSE)',
        ],
      },
      { name: 'Datenbanken & Daten', items: ['PostgreSQL, MSSQL, Oracle, Redis, CubeJS'] },
      {
        name: 'DevOps & Infrastruktur',
        items: [
          'Docker, Kubernetes, Terraform, Apache HTTP',
          'Versionsverwaltung: Git, Azure DevOps, Azure Artifacts, SVN',
        ],
      },
      {
        name: 'Monitoring & Observability',
        items: ['Grafana, OpenTelemetry, Jaeger, Loki, Prometheus'],
      },
      {
        name: 'Sonstiges',
        items: [
          'OPA (Open Policy Agent), IAM, NATS JetStream',
          'Agile/Scrum-Arbeitsweise, Zusammenarbeit mit UI/UX',
        ],
      },
    ],
    roles: {
      'sun-asterisk': {
        title: 'Projekte bei Sun Asterisk',
        client: 'Sun Asterisk (intern), CRUINT, Avex',
        roles: ['Fullstack-Entwickler', 'Frontend-Entwickler'],
        overview:
          'Mitarbeit an Initiativen für globale Websites, Gesundheitswesen, Recruiting und Fan-Community-Plattformen bei Sun Asterisk – von Fullstack-Entwicklung über Frontend-Architektur und containerisiertes Deployment bis zur 3D-Visualisierung medizinischer Daten.',
        projects: [
          'Unternehmensportal für Markenauftritt, Content-Auslieferung und SEO-Optimierung',
          'Plattform für elektronische Patientenakten auf Basis von OpenEMR, erweitert um medizinische Visualisierung mit React und Three.js sowie Telemedizin per Video/Audio über Agora',
          'Interne Recruiting-Plattform mit Portalen für Bewerber, Recruiter und Administratoren, KI-gestützter Bewertung von Sprachinterviews und hybrider Schlagwort- und Vektorsuche',
          'Fanclub-Mitgliederplattform für Avex mit Abonnements, Zahlungen, In-App-Münzen, Livestreaming und E-Commerce',
        ],
        responsibilities: [
          {
            text: 'Entwicklung und Pflege von WordPress- und PHP-Anwendungen mit SEO- und Web-Performance-Optimierung',
          },
          {
            text: 'Anpassung von OpenEMR-Modulen und Integration von 3D-Komponenten mit React und Three.js',
          },
          {
            text: 'Integration von Echtzeitkommunikation mit Agora (z. B. Video/Audio für Telemedizin)',
          },
          {
            text: 'Entwicklung von Produktfeatures mit Next.js und React in TypeScript für die Recruiting-Portale (Tailwind CSS, TanStack Query) und die Avex-Fanclub-Plattform (Redux-Saga, Material UI, Lerna-Monorepo)',
          },
        ],
        duration: '1 Jahr 3 Monate',
      },
      viessmann: {
        title: 'FPT Software – Digital Manufacturing Platform',
        client: 'Viessmann',
        roles: ['Lead Frontend Developer'],
        overview:
          'Kontinuierliche Verbesserung von Produktions- und Unterstützungsprozessen durch die ganzheitliche Verfügbarkeit produktionsrelevanter Daten, um in den Produktionswerken jederzeit beste Effizienz und Qualität sicherzustellen.',
        projects: [],
        responsibilities: [
          {
            label: 'Frontend-Architektur',
            text: 'Leitung der Angular-21-Micro-Frontend-Suite auf Module Federation – eine Host-App für Authentifizierung, Routing und das Remote-Manifest, Remotes unabhängig mit fixierten Versionen deployt; Anforderungsanalyse und Technologieentscheidungen für die zentralen Plattformdienste.',
          },
          {
            label: 'Gemeinsame UI-Bibliothek',
            text: 'Theme, Design Tokens und gemeinsame Komponenten in eine veröffentlichbare Angular-Bibliothek auf einem privaten npm-Feed ausgelagert, von jedem Frontend mit fixierter Version genutzt.',
          },
          {
            label: 'Autorisierung & Datenzugriff',
            text: 'Richtlinienbasierte Zugriffskontrolle mit OPA und IAM sowie GraphQL-Schichten für effiziente Abfragen aus dem Frontend.',
          },
          {
            label: 'Problemlösung & KI',
            text: 'Modul für systematische Problemlösung mit Ishikawa-Ursachenanalyse auf einer Gemini-Wissensbasis umgesetzt, erweitert um einen Chatbot, der Antworten per Server-Sent Events streamt.',
          },
          {
            label: 'Ereignisgesteuerte Dienste & Observability',
            text: 'Dauerhafte dienstübergreifende Kommunikation über NATS JetStream mit Event Store, Dead-Letter-Queue und Replay; Tracing mit OpenTelemetry und Jaeger in Grafana-Dashboards.',
          },
          {
            label: 'Gesamtplattform',
            text: 'Erfassung und Verarbeitung von Produktionsdaten (MQTT, Debezium, Delta Lake, Splunk) verantwortet von Backend- und DevOps-Teams; im Frontend genutzt über die GraphQL- und Service-APIs der Plattform.',
          },
        ],
        duration: '2 Jahre',
      },
      petronas: {
        title: 'FPT Software – Enterprise-Energieprojekte',
        client: 'Petronas',
        roles: ['Fullstack-Entwickler', 'Lead Frontend Developer'],
        overview:
          'Mitarbeit an mehreren strategischen Initiativen zur digitalen Transformation bei Petronas: Enterprise-Serviceportale, Systeme für behördliche Compliance, Werkzeuge für Finanzmodellierung und Analysen zur Sicherheit auf See. Entwicklung von der Fullstack- zur Lead-Frontend-Rolle mit Beiträgen zu Design, Architektur und Feature-Entwicklung auf vier großen Plattformen.',
        projects: [
          'Self-Service-Portal für ICT-Anfragen',
          'Verwaltung von Lizenzen und Arbeitsgenehmigungen',
          'Prädiktive Finanzmodellierung und Portfolio-Optimierung',
          'Intelligentes System für Sicherheit auf See zur Risikoanalyse und für operative Erkenntnisse',
        ],
        responsibilities: [
          {
            text: 'Analyse fachlicher Anforderungen und Umsetzung in skalierbare technische Lösungen',
          },
          {
            text: 'Entwurf der Frontend-Architektur und Leitung der Angular-Entwicklung für mehrere Anwendungen',
          },
          { text: 'Entwicklung von Backend-Logik und GraphQL-Integrationen mit ASP.NET Core' },
          { text: 'Mitarbeit an UI/UX, Datenbankschema und Performance-Optimierung' },
          {
            text: 'Technologie- und Architekturentscheidungen im Einklang mit fachlichen und Sicherheitsanforderungen',
          },
          { text: 'Zusammenarbeit mit funktionsübergreifenden Teams in agilen Umgebungen' },
        ],
        duration: '2 Jahre 8 Monate',
      },
      fujitsu: {
        title: 'Projekte bei Fujigo Software Solutions',
        client: 'Fujitsu',
        roles: ['Frontend-Entwickler', 'Fullstack-Entwickler'],
        overview:
          'Mitarbeit an zwei kundennahen Plattformen: einem System zur Datenvisualisierung und einer Plattform für Design-Innovation in einem großen Unternehmensumfeld.',
        projects: [
          'Interne Analyseplattform zur Visualisierung von Druckerleistungskennzahlen',
          'Webanwendung für Fujitsu, die nutzerzentrierte Design-Thinking-Methodik anwendet, damit Teams innovative Lösungen finden und entwickeln',
        ],
        responsibilities: [
          { text: 'Entwurf und Entwicklung von Frontend-Oberflächen im React-Ökosystem.' },
          { text: 'Entwicklung von Backend-Diensten und APIs mit Python-DRF' },
          { text: 'Mitarbeit an UI/UX-Design und Planung des Datenbankschemas' },
          {
            text: 'Konfiguration der Infrastruktur mit Docker, Kubernetes und Apache HTTP auf CentOS',
          },
        ],
        duration: '1 Jahr 6 Monate',
      },
      internship: {
        title: 'Praktikum',
        client: '',
        roles: ['Praktikant Backend-Entwicklung', 'Praktikant Frontend-Entwicklung'],
        overview:
          'Praktische Erfahrung in Praktika mit Frontend- und Backend-Entwicklung für Bildungs- und Unternehmenssysteme.',
        projects: [
          'Migration und Refactoring von Unternehmensanwendungen von VB6 auf VB.NET für interne Systeme zur Mitarbeiterverwaltung',
          'Bildungsplattform für die digitale Transformation von Lernen und Lehren in modernen Klassenzimmern',
        ],
        responsibilities: [
          { text: 'Migration von Altanwendungen (VB6 → VB.NET) für interne Systeme' },
          { text: 'Umsetzung von UI-Features mit modernen Frontend-Frameworks' },
        ],
        duration: '1 Jahr',
      },
    },
    education: {
      degree: 'Bachelor of Software Engineering',
      school: 'FPT University',
      place: 'Hanoi, Vietnam',
      period: '2017 – 2021',
    },
    languages: ['Englisch: IELTS 7.5'],
  },
  platform: {
    repoRoles: {
      'shell-frontend': 'Federation-Host, Authentifizierung, SSR-Seiten',
      'messenger-frontend': 'Chat und Anrufe, iOS- und Android-Apps',
      'chatbot-frontend': 'Chat-Oberfläche mit gestreamten Antworten',
      'event-store-frontend': 'Ops-Konsole: Events, DLQ-Replay',
      'shared-frontend': 'Design-System @datha/platform-ui',
      'api-gateway': 'JWT, Routing, Stream-Tokens',
      'realtime-service': 'WebSocket-Präsenz und Anruf-Signalisierung',
      'accounts-service': 'Nutzer, Workspaces, Verzeichnis',
      'messenger-service': 'Unterhaltungen, Nachrichten, Anrufverlauf',
      'chatbot-service': 'Gemini-Worker, Redis Streams',
      'file-service': 'Azure-Blob-Uploads per SAS',
      'notification-service': 'Event-Projektion zur Glocke',
      'event-store': 'JetStream-Ingest, partitionierter Speicher',
      'platform-nats': 'JetStream-Topologie als Code',
      'platform-pipelines': 'Gemeinsames PR-Pipeline-Template',
      'platform-observability': 'Grafana, Prometheus, Loki, Alloy',
    },
  },
  welcome: WELCOME_DE,
};
