import {
  afterNextRender,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  type Signal,
} from '@angular/core';

type Scene = keyof typeof import('./welcome-animations').SCENE_MOTION;

/**
 * Wires one welcome scene to its Motion choreography. Call it in a scene's
 * injection context and bind the result to `class.is-animated` on the host.
 *
 * Browser only, after the scene's first render: under incremental hydration
 * that is when the scene scrolls into view. Nothing happens for a reader who
 * asked for reduced motion. Every scene imports the same lazy module, so
 * Motion downloads once, with the first scene that needs it.
 */
export function sceneMotion(scene: Scene): Signal<boolean> {
  const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  const destroyRef = inject(DestroyRef);
  const animated = signal(false);
  let destroyed = false;
  destroyRef.onDestroy(() => (destroyed = true));

  afterNextRender(async () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const { SCENE_MOTION } = await import('./welcome-animations');
    if (destroyed) return;
    animated.set(true);
    // Initial states arrive with the class; measure once they apply.
    requestAnimationFrame(() => {
      if (destroyed) return;
      destroyRef.onDestroy(SCENE_MOTION[scene](host));
    });
  });

  return animated.asReadonly();
}
