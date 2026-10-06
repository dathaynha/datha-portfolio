import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../../core/icon';
import { TranslatePipe } from '../../../../core/translate.pipe';
import { WELCOME_REMOTES } from '../welcome.constant';
import { sceneMotion } from '../scene-motion';

/** Scene 2: the remotes dock into the shell frame as the reader scrolls. */
@Component({
  selector: 'app-welcome-federation-scene',
  imports: [TranslatePipe, Icon],
  templateUrl: './federation-scene.component.html',
  styleUrl: './federation-scene.component.scss',
  host: { '[class.is-animated]': 'animated()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeFederationSceneComponent {
  readonly animated = sceneMotion('federation');

  readonly remotes = WELCOME_REMOTES;
}
