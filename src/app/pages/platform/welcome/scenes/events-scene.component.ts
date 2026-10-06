import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../../core/icon';
import { TranslatePipe } from '../../../../core/translate.pipe';
import { WELCOME_DURABLES, WELCOME_EVENT_STEPS, WELCOME_STREAM } from '../welcome.constant';
import { sceneMotion } from '../scene-motion';

/**
 * Scene 4: event-driven architecture, told through one real choreography.
 * Deleting a chatbot conversation publishes an event; durable consumers read
 * the stream at their own positions; file-service reacts with events of its
 * own; a failing handler ends in the DLQ. Scrolling steps through it.
 */
@Component({
  selector: 'app-welcome-events-scene',
  imports: [TranslatePipe, Icon],
  templateUrl: './events-scene.component.html',
  styleUrl: './events-scene.component.scss',
  host: { '[class.is-animated]': 'animated()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeEventsSceneComponent {
  readonly animated = sceneMotion('events');

  readonly steps = WELCOME_EVENT_STEPS;
  readonly stream = WELCOME_STREAM;
  readonly durables = WELCOME_DURABLES;

  /**
   * Dotted names get a zero-width space after each dot, so they wrap at a dot
   * rather than inside a word. One string: template whitespace between
   * separate nodes would render as a visible space.
   */
  wrapAtDots(name: string): string {
    return name.replaceAll('.', '.\u200b');
  }
}
