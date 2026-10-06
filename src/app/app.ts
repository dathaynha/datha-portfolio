import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LANGS } from './content/model';
import { CONTENT } from './content';
import { PROFILE } from './data/cv';
import { LangService, RESUME_LANG } from './core/lang';
import { ThemeService } from './core/theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly i18n = inject(LangService);
  protected readonly theme = inject(ThemeService);
  protected readonly profile = PROFILE;

  protected readonly ui = computed(() => this.i18n.content().ui);
  protected readonly languages = computed(() =>
    LANGS.map((lang) => ({
      lang,
      name: CONTENT[lang].ui.langName,
      link: this.i18n.link(
        this.i18n.page() === 'resume' && lang !== RESUME_LANG ? 'cv' : this.i18n.page(),
        lang,
      ),
    })),
  );
}
