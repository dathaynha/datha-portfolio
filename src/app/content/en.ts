import { Content } from './model';
import { WELCOME_EN } from './welcome';

// CV text verbatim from the CV document. Do not reword (.claude/rules/content.md).
export const EN: Content = {
  ui: {
    langName: 'English',
    titles: {
      cv: 'Ha Quoc Dat — Full Stack Developer',
      platform: 'datha platform — Ha Quoc Dat',
      resume: 'Ha Quoc Dat — Résumé',
    },
    description:
      'Ha Quoc Dat — Full Stack Developer with 7+ years building enterprise web applications, specializing in Angular.',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    theme: 'Switch light or dark theme',
    language: 'Language',
    savePdf: 'Save as PDF',
    formats: { label: 'Format', cv: 'Full CV', resume: 'US-style résumé' },
    linkedin: 'LinkedIn',
    github: 'GitHub',
    sections: {
      summary: 'Summary',
      experience: 'Professional experience',
      skills: 'Skills',
      education: 'Education',
      languages: 'Languages',
      stack: 'Technical stack',
    },
    team: 'Team',
    platformCard: {
      kicker: 'Side project',
      body: 'Microservices and micro-frontends, built solo: Angular 22, Go, NATS JetStream, WebRTC.',
      cta: 'Take a quick overview',
      github: 'View on GitHub',
    },
    footer: {
      built: 'Built with Angular 22 — zoneless, prerendered, in English and German.',
      source: 'Source on GitHub',
    },
  },
  cv: {
    name: 'Ha Quoc Dat',
    headline: 'Full Stack Developer',
    summary: [
      'Full Stack Engineer with 7+ years building enterprise web applications, specializing in Angular (v12–21). Strong in React, Next.js, and TypeScript, and comfortable across the backend like .NET Core and NodeJS. Experienced in frontend architecture, technical stack decisions, performance optimization, and mentoring.',
      'Experienced in AI-driven development (AIDD), building structured workflows around Claude, Cursor, and GitHub Copilot with custom rules, skills, hooks, and project-specific instructions to support coding, refactoring, testing, debugging, and documentation.',
    ],
    roleSummary: [
      'Own frontend architecture and technical stack decisions, from design through deployment and support.',
      'Ensure code quality and performance through code reviews, refactoring, and engineering standards.',
      'Mentor developers, contribute to technical standards, and support CI/CD and release processes.',
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
      { name: 'Database & Data', items: ['PostgreSQL, MSSQL, Oracle, Redis, CubeJS'] },
      {
        name: 'DevOps & Infrastructure',
        items: [
          'Docker, Kubernetes, Terraform, Apache HTTP',
          'Version Control: Git, Azure DevOps, Azure Artifacts, SVN',
        ],
      },
      {
        name: 'Monitoring & Observability',
        items: ['Grafana, OpenTelemetry, Jaeger, Loki, Prometheus'],
      },
      {
        name: 'Other',
        items: [
          'OPA (Open Policy Agent), IAM, NATS JetStream',
          'Agile/Scrum workflows, UI/UX collaboration',
        ],
      },
    ],
    roles: {
      'sun-asterisk': {
        title: 'Sun Asterisk Projects',
        client: 'Sun Asterisk (internal), CRUINT, Avex',
        roles: ['Fullstack Developer', 'Frontend Developer'],
        overview:
          'Engaged in global web, healthcare, recruitment, and fan-community platform initiatives under Sun Asterisk, spanning fullstack development, frontend architecture, containerized deployment, and 3D healthcare data visualization.',
        projects: [
          'Corporate portal for branding, content delivery, and SEO optimization',
          'Electronic Health Record platform on OpenEMR, extended with React and Three.js medical visualization and Agora video/audio telehealth',
          'Internal recruitment platform with candidate, recruiter, and admin portals, AI voice-interview assessment, and hybrid keyword + vector search',
          'Fan-club membership platform for Avex with subscription, payment, in-app coin, live streaming, and e-commerce flows',
        ],
        responsibilities: [
          {
            text: 'Built and maintained WordPress and PHP applications, with SEO and web performance optimization',
          },
          {
            text: 'Customized OpenEMR modules and integrated 3D components with React and Three.js',
          },
          {
            text: 'Integrated real-time communication features using Agora (e.g., video/audio for telehealth use cases)',
          },
          {
            text: 'Built product features in Next.js and React with TypeScript across the recruitment portals (Tailwind CSS, TanStack Query) and the Avex fan-club platform (Redux-Saga, Material UI, Lerna monorepo)',
          },
        ],
        duration: '1 year 3 months',
      },
      viessmann: {
        title: 'FPT Software – Digital Manufacturing Platform',
        client: 'Viessmann',
        roles: ['Lead Frontend Developer'],
        overview:
          'The continuous improvement of production processes and support processes through the holistic availability of production-relevant data in order to ensure the best efficiency and quality in production at the production plants at all times.',
        projects: [],
        responsibilities: [
          {
            label: 'Frontend Architecture',
            text: 'Led the Angular 21 Module Federation micro-frontend suite — a host app owning authentication, routing, and the remote manifest, with remotes deployed independently on pinned versions; drove requirement analysis and stack decisions across core platform services.',
          },
          {
            label: 'Shared UI Library',
            text: 'Extracted the theme, design tokens, and shared components into a publishable Angular library on a private npm feed, consumed by every frontend at pinned versions.',
          },
          {
            label: 'Authorization & Data Access',
            text: 'Built policy-based access control against OPA and IAM, and GraphQL layers for efficient frontend querying.',
          },
          {
            label: 'Problem-Solving & AI',
            text: 'Delivered the Systematic Problem-Solving module with Ishikawa root-cause analysis over a Gemini knowledge base, extended with a chatbot that streams answers over Server-Sent Events.',
          },
          {
            label: 'Event-Driven Services & Observability',
            text: 'Durable cross-service messaging on NATS JetStream with an event store, dead-letter queue, and replay; OpenTelemetry and Jaeger tracing surfaced in Grafana dashboards.',
          },
          {
            label: 'Wider Platform',
            text: 'Manufacturing data ingestion and processing (MQTT, Debezium, Delta Lake, Splunk) owned by the backend and DevOps teams; consumed from the frontend through the platform’s GraphQL and service APIs.',
          },
        ],
        duration: '2 years',
      },
      petronas: {
        title: 'FPT Software – Enterprise Energy Projects',
        client: 'Petronas',
        roles: ['Fullstack Developer', 'Lead Frontend Developer'],
        overview:
          'Worked across multiple strategic digital transformation initiatives under Petronas, involving enterprise service portals, government compliance systems, financial modeling tools, and marine safety analytics. Progressed from fullstack to lead frontend roles while contributing to design, architecture, and feature delivery across four major platforms.',
        projects: [
          'Self-service ICT request portal',
          'License and workpass management',
          'Predictive financial modeling and portfolio optimization',
          'Marine Safety Intelligent System for risk analysis and operational insights',
        ],
        responsibilities: [
          {
            text: 'Analyzed business requirements and translated them into scalable technical solutions',
          },
          {
            text: 'Designed frontend architecture and led Angular development for several applications',
          },
          { text: 'Developed backend logic and GraphQL integrations using ASP.NET Core' },
          { text: 'Participated in UI/UX, database schema, and performance optimization' },
          {
            text: 'Made stack and architecture decisions aligned with business and security needs',
          },
          { text: 'Collaborated with cross-functional teams in Agile environments' },
        ],
        duration: '2 years 8 months',
      },
      fujitsu: {
        title: 'Fujigo Software Solutions Projects',
        client: 'Fujitsu',
        roles: ['Frontend Developer', 'Fullstack Developer'],
        overview:
          'Worked on two client-facing platforms, including a data visualization system and a design innovation platform for a large-scale enterprise environment.',
        projects: [
          'Internal analytics platform visualizing printer performance metrics',
          'A web application built for Fujitsu, applying user-centered design-thinking methodology to help teams discover and develop innovative solutions',
        ],
        responsibilities: [
          { text: 'Designed and developed frontend interfaces using React ecosystems.' },
          { text: 'Built backend services and APIs using Python-DRF' },
          { text: 'Participated in UI/UX design and database schema planning' },
          { text: 'Configured infrastructure using Docker, Kubernetes, and Apache HTTP on CentOS' },
        ],
        duration: '1 year 6 months',
      },
      internship: {
        title: 'Internship',
        client: '',
        roles: ['Backend Software Developer Intern', 'Frontend Software Developer Intern'],
        overview:
          'Gained hands-on experience through internships involving both frontend and backend development across educational and enterprise systems.',
        projects: [
          'Migrated and refactored enterprise applications from VB6 to VB.NET for internal employee management systems',
          'An educational platform aimed at digital transformation in learning and teaching for modern classrooms',
        ],
        responsibilities: [
          { text: 'Migrated legacy applications (VB6 → VB.NET) for internal systems' },
          { text: 'Delivered UI features using modern frontend frameworks' },
        ],
        duration: '1 year',
      },
    },
    education: {
      degree: 'Bachelor of Software Engineering',
      school: 'FPT University',
      place: 'Ha Noi, Viet Nam',
      period: '2017 – 2021',
    },
    languages: ['English: IELTS 7.5'],
  },
  platform: {
    repoRoles: {
      'shell-frontend': 'Federation host, auth, SSR pages',
      'messenger-frontend': 'Chat and calls, iOS and Android apps',
      'chatbot-frontend': 'Chat UI with streamed answers',
      'event-store-frontend': 'Ops console: events, DLQ replay',
      'shared-frontend': '@datha/platform-ui design system',
      'api-gateway': 'JWT, routing, stream tokens',
      'realtime-service': 'WebSocket presence and call signalling',
      'accounts-service': 'Users, workspaces, directory',
      'messenger-service': 'Conversations, messages, call history',
      'chatbot-service': 'Gemini worker, Redis Streams',
      'file-service': 'Azure Blob SAS uploads',
      'notification-service': 'Event projection to the bell',
      'event-store': 'JetStream ingest, partitioned store',
      'platform-nats': 'JetStream topology as code',
      'platform-pipelines': 'Shared PR pipeline template',
      'platform-observability': 'Grafana, Prometheus, Loki, Alloy',
    },
  },
  welcome: WELCOME_EN,
};
