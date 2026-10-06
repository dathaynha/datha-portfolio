import { inject, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONTENT } from '../content';
import { Lang } from '../content/model';

/**
 * Resolves a dotted key such as `WELCOME.FED.TITLE` against the page's content,
 * the shape the welcome scenes were written against in shell-frontend. The
 * language comes from the route, so a prerendered page is right before hydration.
 */
@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
  private readonly lang: Lang = inject(ActivatedRoute).snapshot.data['lang'] ?? 'en';

  transform(key: string): string {
    return lookup(CONTENT[this.lang] as unknown as Record<string, unknown>, key);
  }
}

export function lookup(root: Record<string, unknown>, key: string): string {
  const [head, ...rest] = key.split('.');
  let node: unknown = root[head.toLowerCase()];
  for (const part of rest) {
    node = (node as Record<string, unknown> | undefined)?.[part];
  }
  return typeof node === 'string' ? node : key;
}
