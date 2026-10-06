import { RoleId } from '../data/cv';

// US résumé text, English only. Condensed from the CV (`en.ts`): every bullet
// restates a fact the CV already states, with no new claims and no invented
// metrics. Drafted for dathq to review; he owns the wording.

export interface ResumeRole {
  title: string;
  company: string;
  bullets: string[];
}

export const RESUME = {
  headline: 'Full Stack Engineer · Angular',
  summary:
    'Full stack engineer with 7+ years building enterprise web applications, specializing in Angular (v12–21) alongside React, Next.js, TypeScript, .NET Core and Node.js. Leads frontend architecture, stack decisions and code quality, mentors developers, and builds AI-assisted engineering workflows with Claude, Cursor and GitHub Copilot.',
  skills: [
    {
      name: 'Frontend',
      items:
        'Angular (v12–21), RxJS, Module Federation, React, Next.js, TypeScript, TanStack Query, Tailwind CSS, Material UI, SASS',
    },
    {
      name: 'Backend',
      items:
        '.NET Core, Node.js (Fastify, NestJS), Python (Django, DRF, FastAPI), GraphQL, REST, SSE',
    },
    { name: 'Data', items: 'PostgreSQL, MSSQL, Oracle, Redis, NATS JetStream, CubeJS' },
    {
      name: 'DevOps',
      items:
        'Docker, Kubernetes, Terraform, Azure DevOps, Grafana, OpenTelemetry, Jaeger, Prometheus, Loki',
    },
    { name: 'Other', items: 'OPA, IAM, Agile/Scrum' },
  ],
  roles: {
    'sun-asterisk': {
      title: 'Fullstack / Frontend Developer',
      company: 'Sun Asterisk — clients CRUINT, Avex',
      bullets: [
        'Built Next.js and React (TypeScript) features for a recruitment platform with AI voice-interview assessment and hybrid keyword + vector search.',
        "Built subscription, payment, in-app coin and live-streaming flows for Avex's fan-club platform (Redux-Saga, Material UI, Lerna monorepo).",
        'Extended an OpenEMR health-record platform with Three.js 3D medical visualization and Agora video/audio telehealth.',
        'Built and maintained the Sun Asterisk global corporate site (WordPress, PHP), optimizing SEO and web performance.',
      ],
    },
    viessmann: {
      title: 'Lead Frontend Developer',
      company: 'Viessmann — Digital Manufacturing Platform',
      bullets: [
        'Led an Angular 21 Module Federation micro-frontend suite: a host owning authentication, routing and the remote manifest, with independently deployed, version-pinned remotes.',
        'Extracted the theme, design tokens and shared components into an Angular library on a private npm feed, consumed by every frontend.',
        'Built policy-based access control on OPA and IAM, and GraphQL layers for efficient frontend data access.',
        'Delivered an Ishikawa root-cause analysis module over a Gemini knowledge base, with a chatbot streaming answers over Server-Sent Events.',
        'Built durable cross-service messaging on NATS JetStream with an event store, dead-letter queue and replay, traced with OpenTelemetry and Jaeger in Grafana.',
      ],
    },
    petronas: {
      title: 'Fullstack Developer → Lead Frontend Developer',
      company: 'Petronas — Enterprise Energy Projects',
      bullets: [
        'Progressed from fullstack to lead frontend across four enterprise platforms: ICT self-service, work-permit licensing, predictive financial modeling and marine safety analytics.',
        'Designed the frontend architecture and led Angular (12–14) development for several applications.',
        'Built backend logic and GraphQL integrations in ASP.NET Core.',
        'Made stack and architecture decisions aligned with business and security requirements.',
      ],
    },
    fujitsu: {
      title: 'Frontend / Fullstack Developer',
      company: 'Fujitsu — via Fujigo Software Solutions',
      bullets: [
        'Built React and Next.js interfaces for a printer-performance analytics dashboard (CubeJS) and a design-thinking innovation platform.',
        'Built backend services and APIs with Python (DRF) on PostgreSQL.',
        'Configured infrastructure with Docker, Kubernetes and Apache HTTP on CentOS.',
      ],
    },
    internship: {
      title: 'Software Developer Intern (Backend, Frontend)',
      company: 'Internship',
      bullets: [
        'Migrated legacy enterprise applications from VB6 to VB.NET and delivered UI features for an education platform (Next.js, NestJS).',
      ],
    },
  } satisfies Record<RoleId, ResumeRole>,
  project: {
    name: 'datha platform',
    description:
      'Personal microservices and micro-frontends platform, built solo: Angular 22 on Native Federation, Go, Node and Python services, NATS JetStream, WebRTC group calls.',
  },
  education: 'Bachelor of Software Engineering — FPT University, Ha Noi, Viet Nam',
  languages: 'English (IELTS 7.5)',
  sections: {
    summary: 'Summary',
    skills: 'Skills',
    experience: 'Experience',
    project: 'Project',
    education: 'Education',
  },
};
