import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

// Stroke icons drawn at 1em, so a rule that sized a PrimeIcons glyph by
// font-size sizes these the same way.
const PATHS: Record<string, string> = {
  'arrow-down': 'M12 5v14M5 12l7 7 7-7',
  github:
    'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.3-2.5-1-3.5.3-1.2.3-2.4 0-3.5 0 0-1 0-3 1.5a12.3 12.3 0 0 0-8 0C6 2 5 2 5 2c-.3 1.2-.3 2.4 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.4.5-.7 1-.8 1.7-.2.6-.3 1.2-.2 1.8v4M9 18c-4.5 2-5-2-7-2',
  linkedin:
    'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  'arrow-left': 'M19 12H5M12 19l-7-7 7-7',
  check: 'M5 12.5l4.5 4.5L19 7',
  comments: 'M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.9-.9L3 20l1.1-4.6A8.4 8.4 0 1 1 21 11.5Z',
  database:
    'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3ZM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6',
  desktop: 'M3 4h18v12H3zM8 20h8M12 16v4',
  'exclamation-triangle': 'M12 3 2 20h20L12 3ZM12 10v4M12 17h.01',
  file: 'M14 3H6v18h12V7l-4-4ZM14 3v4h4',
  mail: 'M3 5h18v14H3zM3 7l9 6 9-6',
  'microchip-ai':
    'M7 7h10v10H7zM9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4M10 14l1.2-4h1.6L14 14M10.5 12.5h3',
  shield: 'M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z',
  video: 'M3 7h12v10H3zM15 10l6-3v10l-6-3',
};

@Component({
  selector: 'i[appIcon]',
  template: `<svg viewBox="0 0 24 24" aria-hidden="true"><path [attr.d]="path()" /></svg>`,
  styles: `
    :host {
      display: inline-block;
      width: 1em;
      height: 1em;
      line-height: 1;
      vertical-align: -0.125em;
    }
    svg {
      display: block;
      width: 100%;
      height: 100%;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly appIcon = input.required<string>();
  protected readonly path = computed(() => PATHS[this.appIcon()] ?? '');
}
