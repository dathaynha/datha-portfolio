import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTENT } from '../../content';
import { FormatSwitch } from '../../core/format-switch';
import { Icon } from '../../core/icon';
import { Lang } from '../../content/model';
import { LangService } from '../../core/lang';
import { PROFILE, ROLES } from '../../data/cv';
import { formatMonth } from '../../data/period';

@Component({
  selector: 'app-cv-page',
  imports: [RouterLink, Icon, FormatSwitch],
  templateUrl: './cv.page.html',
  styleUrl: './cv.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvPage {
  /** From route data. */
  readonly lang = input.required<Lang>();

  protected readonly i18n = inject(LangService);
  protected readonly profile = PROFILE;
  protected readonly content = computed(() => CONTENT[this.lang()]);
  protected readonly ui = computed(() => this.content().ui);
  protected readonly cv = computed(() => this.content().cv);

  protected readonly roles = computed(() => {
    const { ui, cv } = this.content();
    return ROLES.map((facts) => {
      const text = cv.roles[facts.id];
      return {
        ...facts,
        ...text,
        period: `${formatMonth(facts.start, ui.months)} – ${formatMonth(facts.end, ui.months)}`,
        projects: facts.projects.map((project, index) => ({
          ...project,
          description: text.projects[index],
          label: project.url?.replace(/^https:\/\//, '').replace(/\/$/, ''),
        })),
      };
    });
  });

  protected print(): void {
    window.print();
  }
}
