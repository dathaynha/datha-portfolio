import { animate, inView, scroll, stagger } from 'motion';

/** Wide enough to pin the products and scroll them sideways; the SCSS agrees. */
const PIN_QUERY = '(min-width: 64rem)';

/** Where each tile starts before it docks: x %, y %, rotation in degrees. */
const SCATTER: readonly (readonly [number, number, number])[] = [
  [-60, -45, -9],
  [10, 70, 5],
  [65, -35, 11],
];

/**
 * One starter per welcome scene, keyed by scene, each given that scene's host
 * element and returning a function that stops everything it started. Initial
 * states live in each scene's stylesheet under `:host(.is-animated)`, which
 * `sceneMotion` sets just before calling the starter, so prerendered markup
 * always shows the scene finished.
 */
export const SCENE_MOTION = {
  federation: (host: HTMLElement): VoidFunction => dockTiles(host),
  request: (host: HTMLElement): VoidFunction => routeRequests(host),
  events: (host: HTMLElement): VoidFunction => stepEvents(host),
  products: (host: HTMLElement): VoidFunction =>
    combine(pinProducts(host), typeChat(host), buildMesh(host), streamLog(host)),
  observability: (host: HTMLElement): VoidFunction => combine(countStats(host), drawChart(host)),
  stack: (host: HTMLElement): VoidFunction => staggerStack(host),
};

function combine(...stops: VoidFunction[]): VoidFunction {
  return () => stops.forEach((stop) => stop());
}

function one<T extends Element = HTMLElement>(root: HTMLElement, name: string): T | null {
  return root.querySelector<T>(`[data-anim="${name}"]`);
}

function all<T extends Element = HTMLElement>(root: HTMLElement, name: string): T[] {
  return Array.from(root.querySelectorAll<T>(`[data-anim="${name}"]`));
}

/**
 * Draws straight lines from one end. They use `non-scaling-stroke` (their svg
 * stretches with its box), which puts the dash pattern in screen pixels, so
 * the dash length is each line's measured length, not `pathLength`. The
 * pattern is cleared afterwards so a later resize cannot open a gap.
 */
function drawLines(lines: SVGLineElement[], duration: number, startDelay: number): void {
  lines.forEach((line, i) => {
    const { width, height } = line.getBoundingClientRect();
    const length = Math.max(Math.hypot(width, height), 1);
    line.style.strokeDasharray = `${length}`;
    line.style.strokeDashoffset = `${length}`;
    line.style.opacity = '1';
    animate(
      line,
      { strokeDashoffset: [length, 0] },
      { duration, delay: startDelay + i * 0.12 },
    ).then(() => {
      line.style.strokeDasharray = '';
      line.style.strokeDashoffset = '';
    });
  });
}

/** Runs `start` the first time `target` is mostly on screen, then stops watching. */
function once(target: Element | null, start: () => void, amount = 0.4): VoidFunction {
  if (!target) return () => undefined;
  let stopWatching: VoidFunction | null = null;
  let started = false;
  stopWatching = inView(
    target,
    () => {
      if (started) return;
      started = true;
      start();
      stopWatching?.();
    },
    { amount },
  );
  return () => stopWatching?.();
}

/** Scene 2: the remotes fly in and dock into the shell's slots, scrubbed. */
function dockTiles(root: HTMLElement): VoidFunction {
  const stage = one(root, 'fed-stage');
  if (!stage) return () => undefined;
  const stops = all(root, 'fed-tile').map((tile, i) => {
    const [x, y, r] = SCATTER[i % SCATTER.length];
    return scroll(
      animate(
        tile,
        {
          transform: [
            `translate(${x}%, ${y}%) rotate(${r}deg) scale(0.82)`,
            'translate(0%, 0%) rotate(0deg) scale(1)',
          ],
          opacity: [0, 1],
        },
        { ease: 'linear' },
      ),
      { target: stage, offset: ['start end', 'center center'] },
    );
  });
  return () => stops.forEach((stop) => stop());
}

/** How long each request stays on screen in scene 3, in ms. */
const ROUTE_INTERVAL = 2400;

/**
 * Scene 3: while the map is on screen, cycle through one real request per
 * service. Each tick marks the request and the service that owns it, and
 * restarts `.is-sending`, whose CSS plays the hop: packet into the gateway,
 * checks, route out, service lights up.
 */
function routeRequests(root: HTMLElement): VoidFunction {
  const map = one(root, 'ms-map');
  const requests = all(root, 'ms-request');
  const services = all(root, 'ms-service');
  if (!map || requests.length === 0) return () => undefined;
  let index = 0;

  const show = (i: number): void => {
    const owner = Number(requests[i].dataset['service']);
    requests.forEach((el, j) => el.classList.toggle('is-active', j === i));
    services.forEach((el, j) => el.classList.toggle('is-active', j === owner));
    map.classList.remove('is-sending');
    void map.offsetWidth; // restart the CSS hop
    map.classList.add('is-sending');
  };

  return inView(
    map,
    () => {
      show(index);
      const timer = window.setInterval(() => {
        index = (index + 1) % requests.length;
        show(index);
      }, ROUTE_INTERVAL);
      return () => window.clearInterval(timer);
    },
    { amount: 0.3 },
  );
}

/** Steps in the events walkthrough; state 0 is before the first. */
const EVENT_STEPS = 5;

/**
 * Scene 4: the section is pinned and its scroll progress picks a step. Each
 * step toggles what has happened by then (`data-from` / `data-until`), marks
 * the current caption, and moves every durable's cursor to the event it has
 * read (`data-positions`, one entry per step). CSS transitions animate the
 * change, so scrolling back plays it in reverse.
 */
function stepEvents(root: HTMLElement): VoidFunction {
  const scrolly = one(root, 'events-scrolly');
  if (!scrolly) return () => undefined;
  const timed = Array.from(root.querySelectorAll<HTMLElement>('[data-from]'));
  const captions = all(root, 'event-step');
  const durables = all(root, 'event-durable');
  let current = -1;

  const show = (step: number): void => {
    if (step === current) return;
    current = step;
    root.dataset['step'] = String(step);
    for (const el of timed) {
      const from = Number(el.dataset['from']);
      const until = Number(el.dataset['until'] ?? EVENT_STEPS);
      el.classList.toggle('is-on', step >= from && step <= until);
    }
    captions.forEach((el, i) => {
      el.classList.toggle('is-current', i + 1 === step);
      el.classList.toggle('is-done', i + 1 < step);
    });
    for (const el of durables) {
      const positions = (el.dataset['positions'] ?? '').split(',');
      el.style.setProperty('--wl-pos', positions[step] ?? '0');
    }
  };

  show(0);
  const stop = scroll(
    (progress: number) => show(Math.min(EVENT_STEPS, Math.floor(progress * (EVENT_STEPS + 1)))),
    { target: scrolly, offset: ['start start', 'end end'] },
  );
  return () => {
    stop();
    delete root.dataset['step'];
  };
}

/**
 * Scene 5: on a wide screen the section is pinned and its track scrolls
 * sideways. The distance is measured, not a calc() keyframe, because Motion's
 * JavaScript fallback (browsers without scroll timelines) cannot tween calc.
 */
function pinProducts(root: HTMLElement): VoidFunction {
  const track = one(root, 'products-track');
  const section = track?.closest<HTMLElement>('.wl-products');
  if (!track || !section) return () => undefined;
  const wide = window.matchMedia(PIN_QUERY);
  let stopPin: VoidFunction = () => undefined;

  const setup = (): void => {
    stopPin();
    stopPin = () => undefined;
    if (!wide.matches) return;
    const viewport = track.parentElement?.clientWidth ?? window.innerWidth;
    const distance = Math.max(track.scrollWidth - viewport, 0);
    const animation = animate(track, {
      transform: ['translateX(0px)', `translateX(${-distance}px)`],
    });
    const stopScroll = scroll(animation, {
      target: section,
      offset: ['start start', 'end end'],
    });
    stopPin = () => {
      stopScroll();
      animation.stop();
      track.style.transform = '';
    };
  };

  let frame = 0;
  const onResize = (): void => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(setup);
  };

  setup();
  wide.addEventListener('change', onResize);
  window.addEventListener('resize', onResize);
  return () => {
    cancelAnimationFrame(frame);
    wide.removeEventListener('change', onResize);
    window.removeEventListener('resize', onResize);
    stopPin();
  };
}

/**
 * The chatbot panel streams its answer. The translated text stays where
 * Angular put it (transparent, holding the height); the typing goes into a
 * sibling span from the template, so a language switch never writes to a node
 * Angular owns, and the span carries the component's style scope.
 */
function typeChat(root: HTMLElement): VoidFunction {
  const answer = one(root, 'chat-answer');
  const full = one(root, 'chat-full');
  const typed = one(root, 'chat-typed');
  const panel = one(root, 'panel-chatbot');
  if (!answer || !full || !typed || !panel) return () => undefined;
  answer.classList.add('is-typing');

  const stop = once(panel, () => {
    const text = (full.textContent ?? '').trim();
    animate(0, text.length, {
      duration: Math.min(text.length * 0.022, 3),
      ease: 'linear',
      onUpdate: (count) => (typed.textContent = text.slice(0, Math.round(count))),
      onComplete: () => answer.classList.remove('is-typing'),
    });
  });
  return () => {
    stop();
    typed.textContent = '';
    answer.classList.remove('is-typing');
  };
}

/** The messenger panel: four peers appear, then all six links of the mesh. */
function buildMesh(root: HTMLElement): VoidFunction {
  return once(one(root, 'panel-messenger'), () => {
    animate(
      all(root, 'mesh-peer'),
      {
        transform: ['translate(-50%, -50%) scale(0)', 'translate(-50%, -50%) scale(1)'],
      },
      { type: 'spring', bounce: 0.4, delay: stagger(0.12) },
    );
    drawLines(all<SVGLineElement>(root, 'mesh-link'), 0.5, 0.5);
    animate(
      all(root, 'mesh-badge'),
      { opacity: [0, 1], transform: ['translateY(8px)', 'translateY(0px)'] },
      { duration: 0.4, delay: 1.3 },
    );
  });
}

/** The event-store panel: rows arrive one after another, newest first. */
function streamLog(root: HTMLElement): VoidFunction {
  return once(one(root, 'panel-events'), () => {
    animate(
      all(root, 'log-row'),
      { opacity: [0, 1], transform: ['translateX(-16px)', 'translateX(0px)'] },
      { duration: 0.35, delay: stagger(0.18) },
    );
  });
}

/** Scene 6: the headline numbers count up from zero. */
function countStats(root: HTMLElement): VoidFunction {
  const values = all(root, 'stat-value');
  return once(values[0]?.closest('.wl-stats') ?? null, () => {
    values.forEach((el) => {
      const target = Number(el.dataset['value'] ?? 0);
      animate(0, target, {
        duration: 1.1,
        ease: 'easeOut',
        onUpdate: (v) => (el.textContent = String(Math.round(v))),
      });
    });
  });
}

function drawChart(root: HTMLElement): VoidFunction {
  const line = one<SVGPathElement>(root, 'chart-line');
  return once(line, () => {
    if (line) {
      animate(line, { strokeDashoffset: [1, 0] }, { duration: 1.4, ease: 'easeInOut' });
    }
  });
}

/** Scene 7: the stack chips arrive in a wave. */
function staggerStack(root: HTMLElement): VoidFunction {
  return once(
    one(root, 'stack'),
    () => {
      animate(
        all(root, 'chip'),
        { opacity: [0, 1], transform: ['translateY(12px)', 'translateY(0px)'] },
        { duration: 0.35, delay: stagger(0.035) },
      );
    },
    0.25,
  );
}
