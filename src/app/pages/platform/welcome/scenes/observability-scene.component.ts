import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../../core/icon';
import { TranslatePipe } from '../../../../core/translate.pipe';
import { WELCOME_STATS } from '../welcome.constant';
import { sceneMotion } from '../scene-motion';

/** Scene 6: headline counts and a drawn latency line. */
@Component({
  selector: 'app-welcome-observability-scene',
  imports: [TranslatePipe],
  templateUrl: './observability-scene.component.html',
  styleUrl: './observability-scene.component.scss',
  host: { '[class.is-animated]': 'animated()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeObservabilitySceneComponent {
  readonly animated = sceneMotion('observability');

  readonly stats = WELCOME_STATS;
}
