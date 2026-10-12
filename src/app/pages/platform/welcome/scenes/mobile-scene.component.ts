import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../../core/icon';
import { TranslatePipe } from '../../../../core/translate.pipe';
import { WELCOME_MOBILE_POINTS } from '../welcome.constant';
import { sceneMotion } from '../scene-motion';

/**
 * Scene 6: the payoff of a remote that must run without the shell. The
 * standalone Messenger build is already an app, so Capacitor wraps it for iOS
 * and Android; the phones slide out of the browser window as the reader
 * scrolls.
 */
@Component({
  selector: 'app-welcome-mobile-scene',
  imports: [TranslatePipe, NgTemplateOutlet, Icon],
  templateUrl: './mobile-scene.component.html',
  styleUrl: './mobile-scene.component.scss',
  host: { '[class.is-animated]': 'animated()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeMobileSceneComponent {
  readonly animated = sceneMotion('mobile');

  readonly points = WELCOME_MOBILE_POINTS;
  /** Rows of the drawn chat list; the second one is unread. */
  readonly rows = [0, 1, 2, 3];
  readonly phones = [
    { id: 'ios', label: 'iOS' },
    { id: 'android', label: 'Android' },
  ];
}
