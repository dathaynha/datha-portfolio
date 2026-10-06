import type {
  WelcomeDurable,
  WelcomeEventStep,
  WelcomeNode,
  WelcomeRoute,
  WelcomeService,
  WelcomeStackItem,
  WelcomeStat,
  WelcomeStreamEvent,
} from './welcome.model';

/** The apps that dock into the shell, in the order the frame's slots show them. */
export const WELCOME_REMOTES: readonly WelcomeNode[] = [
  {
    id: 'chatbot',
    icon: 'microchip-ai',
    labelKey: 'WELCOME.FED.CHATBOT',
    captionKey: 'WELCOME.FED.CHATBOT_CAPTION',
  },
  {
    id: 'messenger',
    icon: 'comments',
    labelKey: 'WELCOME.FED.MESSENGER',
    captionKey: 'WELCOME.FED.MESSENGER_CAPTION',
  },
  {
    id: 'event-store',
    icon: 'database',
    labelKey: 'WELCOME.FED.EVENT_STORE',
    captionKey: 'WELCOME.FED.EVENT_STORE_CAPTION',
  },
];

/**
 * The services behind api-gateway, with the path prefix it routes to each and
 * the datastore each owns (a database per service: see each `.env.example`).
 */
export const WELCOME_SERVICES: readonly WelcomeService[] = [
  {
    name: 'chatbot-service',
    prefix: '/api/chatbot',
    stack: 'Python · FastAPI',
    data: ['PostgreSQL', 'Redis'],
  },
  {
    name: 'file-service',
    prefix: '/api/files',
    stack: 'Node · Fastify',
    data: ['PostgreSQL', 'Azure Blob'],
  },
  {
    name: 'messenger-service',
    prefix: '/api/messenger',
    stack: 'Node · Fastify',
    data: ['PostgreSQL'],
  },
  {
    name: 'realtime-service',
    prefix: '/api/realtime',
    stack: 'Go · WebSocket',
    data: ['Redis'],
  },
  {
    name: 'event-store',
    prefix: '/api/event-store',
    stack: 'Node · Fastify',
    data: ['PostgreSQL'],
  },
  {
    name: 'notification-service',
    prefix: '/api/notifications',
    stack: 'Node · Fastify',
    data: ['PostgreSQL'],
  },
  {
    name: 'accounts-service',
    prefix: '/api/accounts',
    stack: 'Node · Fastify',
    data: ['PostgreSQL'],
  },
];

/** Real endpoints, one per service, in the order the scene cycles them. */
export const WELCOME_ROUTES: readonly WelcomeRoute[] = [
  { method: 'POST', path: '/api/chatbot/v1/messages', service: 0 },
  { method: 'POST', path: '/api/files/prepare', service: 1 },
  { method: 'GET', path: '/api/messenger/conversations', service: 2 },
  { method: 'GET', path: '/api/realtime/ws', service: 3 },
  { method: 'GET', path: '/api/event-store/events', service: 4 },
  { method: 'GET', path: '/api/notifications/stream', service: 5 },
  { method: 'POST', path: '/api/accounts/users/me/sync', service: 6 },
];

/**
 * The events scene replays one real choreography: deleting a chatbot
 * conversation (platform/chatbot-file-events.md). Durable names, subjects and
 * the DLQ sink are the platform's own.
 */
export const WELCOME_STREAM: readonly WelcomeStreamEvent[] = [
  {
    seq: 1041,
    type: 'chatbot.conversation.deleted',
    publisher: 'chatbot',
    from: 1,
  },
  { seq: 1042, type: 'file.file.deleted', publisher: 'file', from: 3 },
  { seq: 1043, type: 'file.file.deleted', publisher: 'file', from: 3 },
];

/**
 * Positions per step 0-5; see WelcomeDurable. -0.5 is the start of the track:
 * nothing of this flow read yet.
 */
export const WELCOME_DURABLES: readonly WelcomeDurable[] = [
  {
    name: 'event-store-ingest',
    filter: 'events.>',
    positions: [-0.5, 0, 0, 2, 2, 2],
  },
  {
    name: 'notification-service-events',
    filter: 'events.>',
    positions: [-0.5, -0.5, 0, 1, 1, 2],
  },
  {
    name: 'file-service-conversation-cleanup',
    filter: 'events.chatbot.conversation.deleted',
    positions: [-0.5, -0.5, -0.5, 0, 0, 0],
  },
];

export const WELCOME_EVENT_STEPS: readonly WelcomeEventStep[] = [
  {
    textKey: 'WELCOME.EVENTS.STEP_1',
    code: 'events.chatbot.conversation.deleted',
  },
  { textKey: 'WELCOME.EVENTS.STEP_2', code: 'EVENTS' },
  { textKey: 'WELCOME.EVENTS.STEP_3', code: 'events.file.file.deleted' },
  {
    textKey: 'WELCOME.EVENTS.STEP_4',
    code: 'events.dlq.notification_service.projection',
  },
  { textKey: 'WELCOME.EVENTS.STEP_5', code: 'correlation_id' },
];

/** Counts of what exists today (workspace map, 2026-10-06). */
export const WELCOME_STATS: readonly WelcomeStat[] = [
  { value: 8, labelKey: 'WELCOME.OBSERVE.STAT_SERVICES' },
  { value: 4, labelKey: 'WELCOME.OBSERVE.STAT_FRONTENDS' },
  { value: 3, labelKey: 'WELCOME.OBSERVE.STAT_LANGUAGES' },
  { value: 16, labelKey: 'WELCOME.OBSERVE.STAT_REPOS' },
];

export const WELCOME_STACK: readonly WelcomeStackItem[] = [
  { name: 'Angular 22', groupKey: 'WELCOME.STACK.FRONTEND' },
  { name: 'Native Federation', groupKey: 'WELCOME.STACK.FRONTEND' },
  { name: 'Angular SSR', groupKey: 'WELCOME.STACK.FRONTEND' },
  { name: 'Tailwind CSS', groupKey: 'WELCOME.STACK.FRONTEND' },
  { name: 'Capacitor', groupKey: 'WELCOME.STACK.FRONTEND' },
  { name: 'Go', groupKey: 'WELCOME.STACK.BACKEND' },
  { name: 'Fastify', groupKey: 'WELCOME.STACK.BACKEND' },
  { name: 'FastAPI', groupKey: 'WELCOME.STACK.BACKEND' },
  { name: 'Gemini', groupKey: 'WELCOME.STACK.BACKEND' },
  { name: 'WebRTC', groupKey: 'WELCOME.STACK.BACKEND' },
  { name: 'PostgreSQL', groupKey: 'WELCOME.STACK.DATA' },
  { name: 'Redis', groupKey: 'WELCOME.STACK.DATA' },
  { name: 'NATS JetStream', groupKey: 'WELCOME.STACK.DATA' },
  { name: 'Grafana', groupKey: 'WELCOME.STACK.OPS' },
  { name: 'Prometheus', groupKey: 'WELCOME.STACK.OPS' },
  { name: 'Loki', groupKey: 'WELCOME.STACK.OPS' },
  { name: 'Azure Pipelines', groupKey: 'WELCOME.STACK.OPS' },
];
