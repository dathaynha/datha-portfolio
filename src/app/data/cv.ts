// Language-neutral CV facts. Text that translates lives in `content/<lang>.ts`.

/** Year and month, e.g. `2024-04`. */
export type YearMonth = `${number}-${number}`;

export type RoleId = 'sun-asterisk' | 'viessmann' | 'petronas' | 'fujitsu' | 'internship';

export interface RoleFacts {
  id: RoleId;
  start: YearMonth;
  end: YearMonth;
  teamSize: string;
  /** Proper names; their descriptions are translated, index for index. */
  projects: { name: string; url?: string }[];
  stack: string[];
}

export const PROFILE = {
  name: 'Ha Quoc Dat',
  email: 'dathq1999@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dat-ha-5bb25a229',
  github: 'https://github.com/dathaynha',
  /** Read-only mirror of the platform's Azure DevOps repositories, one folder each. */
  platformRepo: 'https://github.com/dathaynha/datha-platform',
  source: 'https://github.com/dathaynha/datha-portfolio',
} as const;

export const ROLES: RoleFacts[] = [
  {
    id: 'sun-asterisk',
    start: '2025-07',
    end: '2026-09',
    teamSize: '4–20',
    projects: [
      { name: 'Sun Asterisk Global Website', url: 'https://sunasterisk-global.com/' },
      { name: 'EHR Project' },
      { name: 'PackTech Smart Recruitment' },
      { name: 'Mooos (PG)', url: 'https://www.pg-fc.com/' },
    ],
    stack: [
      'WordPress',
      'PHP',
      'Go',
      'MySQL',
      'Docker',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux-Saga',
      'Material UI',
      'Three.js',
      'OpenEMR',
      'Agora',
    ],
  },
  {
    id: 'viessmann',
    start: '2024-04',
    end: '2026-04',
    teamSize: '11',
    projects: [],
    stack: [
      'Angular 21',
      'Module Federation',
      'GraphQL',
      'OPA',
      'IAM',
      '.NET Core',
      'PostgreSQL',
      'Redis',
      'NATS JetStream',
      'MQTT',
      'Debezium',
      'Delta Lake',
      'Server-Sent Events',
      'Docker',
      'Kubernetes',
      'Terraform',
      'OpenTelemetry',
      'Jaeger',
      'Grafana',
      'Splunk',
      'Gemini',
    ],
  },
  {
    id: 'petronas',
    start: '2022-06',
    end: '2025-02',
    teamSize: '4–20',
    projects: [
      { name: 'ICT2U' },
      { name: 'Sabah Working Permit' },
      { name: 'Compass' },
      { name: 'MarSIS' },
    ],
    stack: ['Angular 12–14', '.NET Core', 'MSSQL', 'GraphQL', 'ASP.NET MVC'],
  },
  {
    id: 'fujitsu',
    start: '2021-01',
    end: '2022-06',
    teamSize: '4–6',
    projects: [{ name: 'Dynamic Dashboard' }, { name: 'Design Thinking' }],
    stack: [
      'CubeJS',
      'Python-DRF',
      'ReactJS',
      'Next.js',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'Apache HTTP',
      'Linux (CentOS7)',
    ],
  },
  {
    id: 'internship',
    start: '2019-06',
    end: '2020-06',
    teamSize: '20–200',
    projects: [{ name: 'TIIS_ColorSystem & THS_TIE-UP3' }, { name: 'Novalearn' }],
    stack: [
      'VB6',
      'VB.NET',
      'Oracle',
      'NextJS',
      'ChakraUI',
      'TailwindCSS',
      'NestJS',
      'Docker',
      'Kubernetes',
    ],
  },
];
