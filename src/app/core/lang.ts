import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { CONTENT } from '../content';
import { Lang, LANGS, Page } from '../content/model';

/** The US résumé exists in English only. */
export const RESUME_LANG: Lang = 'en';

/** English lives at the root; every other language under its own prefix. */
export function pagePath(lang: Lang, page: Page): string {
  const prefix = page === 'resume' ? RESUME_LANG : lang;
  const parts = [prefix === 'en' ? '' : prefix, page === 'cv' ? '' : page].filter(Boolean);
  return '/' + parts.join('/');
}

export function parseUrl(url: string): { lang: Lang; page: Page } {
  const segments = url.split(/[?#]/)[0].split('/').filter(Boolean);
  const lang = LANGS.find((l) => l !== 'en' && l === segments[0]) ?? 'en';
  const rest = lang === 'en' ? segments : segments.slice(1);
  const page: Page = rest[0] === 'platform' || rest[0] === 'resume' ? rest[0] : 'cv';
  return { lang, page };
}

@Injectable({ providedIn: 'root' })
export class LangService {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  readonly lang = computed(() => parseUrl(this.url()).lang);
  readonly page = computed(() => parseUrl(this.url()).page);
  readonly content = computed(() => CONTENT[this.lang()]);

  constructor() {
    effect(() => {
      this.document.documentElement.lang = this.lang();
    });
  }

  link(page: Page, lang: Lang = this.lang()): string {
    return pagePath(lang, page);
  }
}
