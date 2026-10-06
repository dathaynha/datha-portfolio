import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../../core/icon';
import { TranslatePipe } from '../../../../core/translate.pipe';
import { WELCOME_STACK } from '../welcome.constant';
import type { WelcomeStackItem } from '../welcome.model';
import { sceneMotion } from '../scene-motion';

/** Scene 7: the technologies, grouped, arriving in a wave. */
@Component({
  selector: 'app-welcome-stack-scene',
  imports: [TranslatePipe],
  templateUrl: './stack-scene.component.html',
  styleUrl: './stack-scene.component.scss',
  host: { '[class.is-animated]': 'animated()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeStackSceneComponent {
  readonly animated = sceneMotion('stack');

  readonly stackGroups = groupStack(WELCOME_STACK);
}

function groupStack(
  items: readonly WelcomeStackItem[],
): { key: string; items: WelcomeStackItem[] }[] {
  const groups = new Map<string, WelcomeStackItem[]>();
  for (const item of items) {
    groups.set(item.groupKey, [...(groups.get(item.groupKey) ?? []), item]);
  }
  return [...groups].map(([key, groupItems]) => ({ key, items: groupItems }));
}
