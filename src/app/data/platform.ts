// Language-neutral platform facts. Text that translates lives in `content/<lang>.ts`.

export type RepoName =
  | 'shell-frontend'
  | 'messenger-frontend'
  | 'chatbot-frontend'
  | 'event-store-frontend'
  | 'shared-frontend'
  | 'api-gateway'
  | 'realtime-service'
  | 'accounts-service'
  | 'messenger-service'
  | 'chatbot-service'
  | 'file-service'
  | 'notification-service'
  | 'event-store'
  | 'platform-nats'
  | 'platform-pipelines'
  | 'platform-observability';

export const REPOS: { name: RepoName; stack: string }[] = [
  { name: 'shell-frontend', stack: 'Angular 22' },
  { name: 'messenger-frontend', stack: 'Angular 22, Capacitor' },
  { name: 'chatbot-frontend', stack: 'Angular 22' },
  { name: 'event-store-frontend', stack: 'Angular 22' },
  { name: 'shared-frontend', stack: 'Angular library' },
  { name: 'api-gateway', stack: 'Go' },
  { name: 'realtime-service', stack: 'Go, Redis' },
  { name: 'accounts-service', stack: 'Node, Fastify' },
  { name: 'messenger-service', stack: 'Node, Fastify' },
  { name: 'chatbot-service', stack: 'Python, FastAPI' },
  { name: 'file-service', stack: 'Node, Fastify' },
  { name: 'notification-service', stack: 'Node, Fastify' },
  { name: 'event-store', stack: 'Node, Fastify' },
  { name: 'platform-nats', stack: 'Node' },
  { name: 'platform-pipelines', stack: 'Azure DevOps YAML' },
  { name: 'platform-observability', stack: 'Docker Compose' },
];
