/** A labelled box in one of the welcome page's diagrams. */
export interface WelcomeNode {
  readonly id: string;
  readonly icon: string;
  readonly labelKey: string;
  readonly captionKey: string;
}

/** A headline number in the observability scene; counted up on first view. */
export interface WelcomeStat {
  readonly value: number;
  readonly labelKey: string;
}

/** One technology on the stack wall. Names are proper nouns, not translated. */
export interface WelcomeStackItem {
  readonly name: string;
  readonly groupKey: string;
}

/** One event on the EVENTS stream in the events scene, oldest first. */
export interface WelcomeStreamEvent {
  readonly seq: number;
  readonly type: string;
  readonly publisher: string;
  /** The walkthrough step at which it is published. */
  readonly from: number;
}

/**
 * A durable consumer in the events scene. `positions[step]` is the index of
 * the last stream event it has read at each step; the last entry is the
 * finished state the prerendered page shows.
 */
export interface WelcomeDurable {
  readonly name: string;
  readonly filter: string;
  readonly positions: readonly number[];
}

/** One step of the events walkthrough. */
export interface WelcomeEventStep {
  readonly textKey: string;
  readonly code?: string;
}

/** A service behind the gateway in the microservices scene. */
export interface WelcomeService {
  readonly name: string;
  readonly prefix: string;
  readonly stack: string;
  /** What it owns; no other service reads or writes it. */
  readonly data: readonly string[];
}

/** A real request the gateway routes, in the scene's loop. */
export interface WelcomeRoute {
  readonly method: string;
  readonly path: string;
  /** Index into WELCOME_SERVICES. */
  readonly service: number;
}
