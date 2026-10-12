import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTENT } from '../../content';
import { Lang } from '../../content/model';
import { Icon } from '../../core/icon';
import { LangService } from '../../core/lang';
import { TranslatePipe } from '../../core/translate.pipe';
import { PROFILE } from '../../data/cv';
import { REPOS } from '../../data/platform';
import { WelcomeEventsSceneComponent } from './welcome/scenes/events-scene.component';
import { WelcomeFederationSceneComponent } from './welcome/scenes/federation-scene.component';
import { WelcomeMobileSceneComponent } from './welcome/scenes/mobile-scene.component';
import { WelcomeObservabilitySceneComponent } from './welcome/scenes/observability-scene.component';
import { WelcomeProductsSceneComponent } from './welcome/scenes/products-scene.component';
import { WelcomeRequestSceneComponent } from './welcome/scenes/request-scene.component';
import { WelcomeStackSceneComponent } from './welcome/scenes/stack-scene.component';

/**
 * The datha platform, told the way the platform's own /welcome page tells it:
 * a hero, then scenes that each hydrate and animate as they scroll into view.
 * The scenes are ported from shell-frontend's `modules/welcome-page/`.
 */
@Component({
  selector: 'app-platform-page',
  imports: [
    RouterLink,
    TranslatePipe,
    Icon,
    WelcomeFederationSceneComponent,
    WelcomeRequestSceneComponent,
    WelcomeEventsSceneComponent,
    WelcomeProductsSceneComponent,
    WelcomeMobileSceneComponent,
    WelcomeObservabilitySceneComponent,
    WelcomeStackSceneComponent,
  ],
  templateUrl: './platform.page.html',
  styleUrl: './platform.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlatformPage {
  /** From route data. */
  readonly lang = input.required<Lang>();

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  protected readonly i18n = inject(LangService);
  protected readonly profile = PROFILE;
  protected readonly repos = computed(() =>
    REPOS.map((repo) => ({ ...repo, role: CONTENT[this.lang()].platform.repoRoles[repo.name] })),
  );

  /** Past the first few pixels: the scroll cue has done its job and fades. */
  protected readonly scrolled = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const onScroll = (): void => this.scrolled.set(window.scrollY > 24);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
    });
  }

  protected startTour(): void {
    const target = this.host.nativeElement.querySelector<HTMLElement>('#wl-tour');
    if (!target) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    target.scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth' });
    target.focus({ preventScroll: true });
  }
}
