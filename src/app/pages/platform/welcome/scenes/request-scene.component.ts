import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../../core/icon';
import { TranslatePipe } from '../../../../core/translate.pipe';
import { WELCOME_ROUTES, WELCOME_SERVICES } from '../welcome.constant';
import { sceneMotion } from '../scene-motion';

/**
 * Scene 3: the microservices. The browser talks only to the gateway, which
 * checks the session and routes by path to the service that owns the domain;
 * each service has its own stack and its own datastore. While on screen, the
 * scene cycles through real requests, one per service.
 */
@Component({
  selector: 'app-welcome-request-scene',
  imports: [TranslatePipe, Icon],
  templateUrl: './request-scene.component.html',
  styleUrl: './request-scene.component.scss',
  host: { '[class.is-animated]': 'animated()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeRequestSceneComponent {
  readonly animated = sceneMotion('request');

  readonly services = WELCOME_SERVICES;
  readonly routes = WELCOME_ROUTES;

  /** A zero-width space before each slash, so a path wraps between segments. */
  wrapAtSlashes(path: string): string {
    return path.replaceAll('/', '\u200b/');
  }
}
