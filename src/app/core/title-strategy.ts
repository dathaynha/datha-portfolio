import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { CONTENT } from '../content';
import { parseUrl } from './lang';

/** Title and description follow the URL's language, prerendered into each page. */
@Injectable()
export class LocalizedTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const { lang, page } = parseUrl(snapshot.url);
    const ui = CONTENT[lang].ui;
    this.title.setTitle(ui.titles[page]);
    this.meta.updateTag({ name: 'description', content: ui.description });
  }
}
