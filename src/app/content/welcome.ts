// Text for the platform page's scenes, ported from shell-frontend's
// `assets/i18n/{en,de}.json` → `WELCOME`. Keys stay as the scenes reference them
// (`WELCOME.FED.TITLE`); HERO and CTA are adapted, since a visitor here cannot
// sign in. German addresses the reader as "Sie", like the CV page.

export interface WelcomeText {
  HERO: {
    KICKER: string;
    TITLE: string;
    LEDE: string;
    TOUR: string;
    GITHUB: string;
    BACK: string;
  };
  FED: {
    KICKER: string;
    TITLE: string;
    BODY: string;
    CHATBOT: string;
    CHATBOT_CAPTION: string;
    MESSENGER: string;
    MESSENGER_CAPTION: string;
    EVENT_STORE: string;
    EVENT_STORE_CAPTION: string;
  };
  REQ: {
    KICKER: string;
    TITLE: string;
    BODY: string;
    BROWSER: string;
    BROWSER_CAPTION: string;
    CHECK_JWT: string;
    CHECK_ROUTE: string;
  };
  EVENTS: {
    KICKER: string;
    TITLE: string;
    BODY: string;
    EXAMPLE: string;
    STEP_1: string;
    STEP_2: string;
    STEP_3: string;
    STEP_4: string;
    STEP_5: string;
    PUBLISHERS: string;
    REPLAY: string;
  };
  PRODUCTS: {
    KICKER: string;
    TITLE: string;
    CHAT_ASK: string;
    CHAT_ANSWER: string;
    CHATBOT_BODY: string;
    MESH_BADGE: string;
    MESSENGER_BODY: string;
    LOG_LIVE: string;
    EVENTS_BODY: string;
  };
  OBSERVE: {
    KICKER: string;
    TITLE: string;
    BODY: string;
    STAT_SERVICES: string;
    STAT_FRONTENDS: string;
    STAT_LANGUAGES: string;
    STAT_REPOS: string;
    CHART: string;
  };
  STACK: {
    KICKER: string;
    TITLE: string;
    FRONTEND: string;
    BACKEND: string;
    DATA: string;
    OPS: string;
  };
  REPOS: { KICKER: string; TITLE: string };
  CTA: { TITLE: string; BODY: string; GITHUB: string; EMAIL: string; BACK: string };
}

export const WELCOME_EN: WelcomeText = {
  HERO: {
    KICKER: 'Side project · datha platform',
    TITLE: 'My playground for new tech, built on best practices',
    LEDE: 'Micro-frontends, Go and Node services, an event backbone and live video calls, wired together the way production systems are. Scroll down to watch each layer work.',
    TOUR: 'Take the tour',
    GITHUB: 'View on GitHub',
    BACK: 'Back to CV',
  },
  FED: {
    KICKER: 'Native Federation',
    TITLE: 'One shell. Apps that ship on their own.',
    BODY: 'The shell is an Angular 22 host. Chatbot, Messenger and Event Store are separate apps in their own repositories, loaded at runtime through native import maps, and every one of them also runs without the shell.',
    CHATBOT: 'Chatbot',
    CHATBOT_CAPTION: 'Streaming answers from Gemini',
    MESSENGER: 'Messenger',
    MESSENGER_CAPTION: 'Chat, group calls and screen share',
    EVENT_STORE: 'Event Store',
    EVENT_STORE_CAPTION: 'Every event, searchable and replayable',
  },
  REQ: {
    KICKER: 'Microservices',
    TITLE: 'One gateway. Seven services, each with its own data.',
    BODY: 'The browser only ever talks to the Go API gateway. It verifies the session, then routes each request by its path to the service that owns that part of the product. Every service is its own repository, language and deployment, with a database no other service touches.',
    BROWSER: 'Browser',
    BROWSER_CAPTION: 'Talks to the gateway, never to a service',
    CHECK_JWT: 'Verifies the session token',
    CHECK_ROUTE: 'Routes by path to the owner',
  },
  EVENTS: {
    KICKER: 'Event-driven architecture',
    TITLE: 'Services react to events instead of calling each other.',
    BODY: 'When a service changes something, it publishes an event to NATS JetStream and moves on. Every service that cares subscribes and reacts in its own time, so the publisher never waits and never needs to know who is listening.',
    EXAMPLE: 'Example: deleting a chatbot conversation',
    STEP_1:
      'chatbot-service deletes the conversation, publishes one event and answers 204 at once. It neither knows nor waits for whoever is listening.',
    STEP_2:
      'JetStream appends the event to the EVENTS stream. Each durable consumer keeps its own position and reads at its own pace.',
    STEP_3:
      'file-service reacts: it removes the orphaned files and publishes file.deleted. A new fact, not a reply, so the chain continues with no one in charge.',
    STEP_4:
      'A handler that keeps failing is not retried forever. After three deliveries the message moves to the DLQ, and its consumer moves on.',
    STEP_5:
      "Every envelope carries the request's correlation id, so the event store can show the whole story and replay what failed.",
    PUBLISHERS: 'Publishers',
    REPLAY: 'Replay',
  },
  PRODUCTS: {
    KICKER: 'The products',
    TITLE: 'Three apps, three different problems.',
    CHAT_ASK: 'What does the gateway check?',
    CHAT_ANSWER:
      'It verifies your session token, swaps it for a platform token, and only then proxies the request to the service that owns it.',
    CHATBOT_BODY:
      'Answers stream token by token over server-sent events while a Python worker talks to Gemini. Attachments upload straight to blob storage.',
    MESH_BADGE: '4 in the call',
    MESSENGER_BODY:
      'Group calls are a peer-to-peer WebRTC mesh. A Go service relays the signalling over WebSockets and Redis holds the room, so after a reload you rejoin with one click.',
    LOG_LIVE: 'Live',
    EVENTS_BODY:
      'Every event on the platform lands here, partitioned by month and filterable by any payload field. Failed deliveries replay from the dead-letter queue.',
  },
  OBSERVE: {
    KICKER: 'Observability',
    TITLE: 'Measured, not guessed.',
    BODY: 'Every service ships metrics to Prometheus and logs to Loki through Alloy, and each has a Grafana dashboard for its rate, errors and duration.',
    STAT_SERVICES: 'backend services',
    STAT_FRONTENDS: 'micro-frontends',
    STAT_LANGUAGES: 'languages',
    STAT_REPOS: 'repositories',
    CHART: 'Request duration, p95 (illustrative)',
  },
  STACK: {
    KICKER: 'The stack',
    TITLE: 'Picked to learn, held to production standards.',
    FRONTEND: 'Frontend',
    BACKEND: 'Backend',
    DATA: 'Data and messaging',
    OPS: 'Operations',
  },
  REPOS: {
    KICKER: 'Repositories',
    TITLE: 'One repository per service, each with its own pipeline.',
  },
  CTA: {
    TITLE: 'Want to see the code?',
    BODY: 'All sixteen repositories are mirrored read-only on GitHub. I am also happy to walk you through them, and through the decisions behind them.',
    GITHUB: 'Browse the code',
    EMAIL: 'Email me',
    BACK: 'Back to CV',
  },
};

export const WELCOME_DE: WelcomeText = {
  HERO: {
    KICKER: 'Eigenes Projekt · datha platform',
    TITLE: 'Mein Spielplatz für neue Technik, nach Best Practices gebaut',
    LEDE: 'Micro-Frontends, Go- und Node-Services, ein Event-Backbone und Videoanrufe, verbunden wie in echten Produktionssystemen. Scrollen Sie nach unten und sehen Sie jeder Schicht bei der Arbeit zu.',
    TOUR: 'Zur Tour',
    GITHUB: 'Auf GitHub ansehen',
    BACK: 'Zurück zum Lebenslauf',
  },
  FED: {
    KICKER: 'Native Federation',
    TITLE: 'Eine Shell. Apps, die eigenständig ausliefern.',
    BODY: 'Die Shell ist ein Angular-22-Host. Chatbot, Messenger und Event Store sind eigene Apps in eigenen Repositories, zur Laufzeit über native Import Maps geladen, und jede läuft auch ohne die Shell.',
    CHATBOT: 'Chatbot',
    CHATBOT_CAPTION: 'Gestreamte Antworten von Gemini',
    MESSENGER: 'Messenger',
    MESSENGER_CAPTION: 'Chat, Gruppenanrufe und Bildschirmfreigabe',
    EVENT_STORE: 'Event Store',
    EVENT_STORE_CAPTION: 'Jedes Event, durchsuchbar und wiederholbar',
  },
  REQ: {
    KICKER: 'Microservices',
    TITLE: 'Ein Gateway. Sieben Services, jeder mit eigenen Daten.',
    BODY: 'Der Browser spricht nur mit dem Go-API-Gateway. Es prüft die Sitzung und leitet jede Anfrage anhand ihres Pfads an den Service weiter, dem dieser Teil des Produkts gehört. Jeder Service hat sein eigenes Repository, seine eigene Sprache und sein eigenes Deployment, mit einer Datenbank, die kein anderer Service anfasst.',
    BROWSER: 'Browser',
    BROWSER_CAPTION: 'Spricht mit dem Gateway, nie direkt mit einem Service',
    CHECK_JWT: 'Prüft das Sitzungstoken',
    CHECK_ROUTE: 'Leitet per Pfad an den Besitzer weiter',
  },
  EVENTS: {
    KICKER: 'Ereignisgesteuerte Architektur',
    TITLE: 'Services reagieren auf Events, statt einander aufzurufen.',
    BODY: 'Wenn ein Service etwas ändert, veröffentlicht er ein Event in NATS JetStream und macht weiter. Jeder Service, den es betrifft, abonniert es und reagiert in seinem eigenen Tempo, sodass der Publisher nie wartet und nicht wissen muss, wer zuhört.',
    EXAMPLE: 'Beispiel: eine Chatbot-Unterhaltung löschen',
    STEP_1:
      'chatbot-service löscht die Unterhaltung, veröffentlicht ein Event und antwortet sofort mit 204. Er weiß nicht, wer zuhört, und wartet auf niemanden.',
    STEP_2:
      'JetStream hängt das Event an den EVENTS-Stream an. Jeder dauerhafte Consumer hält seine eigene Position und liest in seinem eigenen Tempo.',
    STEP_3:
      'file-service reagiert: Er entfernt die verwaisten Dateien und veröffentlicht file.deleted. Ein neuer Fakt, keine Antwort, also läuft die Kette ohne zentrale Steuerung weiter.',
    STEP_4:
      'Ein Handler, der immer wieder scheitert, wird nicht endlos wiederholt. Nach drei Zustellungen wandert die Nachricht in die DLQ, und sein Consumer macht weiter.',
    STEP_5:
      'Jeder Umschlag trägt die Correlation-ID der Anfrage, sodass der Event Store die ganze Geschichte zeigen und Fehlgeschlagenes wiederholen kann.',
    PUBLISHERS: 'Publisher',
    REPLAY: 'Wiederholen',
  },
  PRODUCTS: {
    KICKER: 'Die Produkte',
    TITLE: 'Drei Apps, drei verschiedene Probleme.',
    CHAT_ASK: 'Was prüft das Gateway?',
    CHAT_ANSWER:
      'Es prüft Ihr Sitzungstoken, tauscht es gegen ein Plattform-Token und leitet die Anfrage erst dann an den zuständigen Service weiter.',
    CHATBOT_BODY:
      'Antworten werden Token für Token über Server-Sent Events gestreamt, während ein Python-Worker mit Gemini spricht. Anhänge gehen direkt in den Blob-Speicher.',
    MESH_BADGE: '4 im Anruf',
    MESSENGER_BODY:
      'Gruppenanrufe sind ein Peer-to-Peer-WebRTC-Mesh. Ein Go-Service vermittelt die Signalisierung über WebSockets, Redis hält den Raum, und nach einem Neuladen tritt man mit einem Klick wieder bei.',
    LOG_LIVE: 'Live',
    EVENTS_BODY:
      'Jedes Event der Plattform landet hier, monatlich partitioniert und nach jedem Payload-Feld filterbar. Fehlgeschlagene Zustellungen lassen sich aus der Dead-Letter-Queue wiederholen.',
  },
  OBSERVE: {
    KICKER: 'Observability',
    TITLE: 'Gemessen, nicht geraten.',
    BODY: 'Jeder Service liefert Metriken an Prometheus und Logs an Loki über Alloy, und jeder hat ein Grafana-Dashboard für Rate, Fehler und Dauer.',
    STAT_SERVICES: 'Backend-Services',
    STAT_FRONTENDS: 'Micro-Frontends',
    STAT_LANGUAGES: 'Sprachen',
    STAT_REPOS: 'Repositories',
    CHART: 'Anfragedauer, p95 (zur Veranschaulichung)',
  },
  STACK: {
    KICKER: 'Der Stack',
    TITLE: 'Zum Lernen gewählt, nach Produktionsmaßstab gebaut.',
    FRONTEND: 'Frontend',
    BACKEND: 'Backend',
    DATA: 'Daten und Messaging',
    OPS: 'Betrieb',
  },
  REPOS: {
    KICKER: 'Repositories',
    TITLE: 'Ein Repository pro Service, jedes mit eigener Pipeline.',
  },
  CTA: {
    TITLE: 'Möchten Sie den Code sehen?',
    BODY: 'Alle sechzehn Repositories sind schreibgeschützt auf GitHub gespiegelt. Gern führe ich Sie auch persönlich durch den Code und die Entscheidungen dahinter.',
    GITHUB: 'Code ansehen',
    EMAIL: 'Schreiben Sie mir',
    BACK: 'Zurück zum Lebenslauf',
  },
};
