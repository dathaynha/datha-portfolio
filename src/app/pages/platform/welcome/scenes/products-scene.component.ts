import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../../core/icon';
import { TranslatePipe } from '../../../../core/translate.pipe';
import { sceneMotion } from '../scene-motion';

type Point = readonly [number, number];

const MESH_PEERS: readonly Point[] = [
  [22, 22],
  [78, 22],
  [78, 78],
  [22, 78],
];

/** Scene 5: the three products, pinned and scrolled sideways on wide screens. */
@Component({
  selector: 'app-welcome-products-scene',
  imports: [TranslatePipe, Icon],
  templateUrl: './products-scene.component.html',
  styleUrl: './products-scene.component.scss',
  host: { '[class.is-animated]': 'animated()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeProductsSceneComponent {
  readonly animated = sceneMotion('products');

  readonly meshPeers = MESH_PEERS;
  readonly meshLinks: readonly (readonly [Point, Point])[] = MESH_PEERS.flatMap((a, i) =>
    MESH_PEERS.slice(i + 1).map((b) => [a, b] as const),
  );
  readonly peerNames = ['A', 'B', 'C', 'D'];

  readonly logRows = [
    { type: 'message.sent', source: 'messenger-service' },
    { type: 'call.ended', source: 'realtime-service' },
    { type: 'file.uploaded', source: 'file-service' },
    { type: 'conversation.deleted', source: 'chatbot-service' },
    { type: 'file.deleted', source: 'file-service' },
  ];
}
