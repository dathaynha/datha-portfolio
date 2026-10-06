import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTENT } from '../content';
import { Lang, Page } from '../content/model';
import { pagePath } from './lang';

/** Segmented switch between the full CV and the concise US résumé. */
@Component({
  selector: 'app-format-switch',
  imports: [RouterLink],
  template: `
    <nav class="format-switch no-print" [attr.aria-label]="ui().formats.label">
      <a [routerLink]="cvLink()" [attr.aria-current]="current() === 'cv' ? 'page' : null">{{
        ui().formats.cv
      }}</a>
      <a [routerLink]="resumeLink" [attr.aria-current]="current() === 'resume' ? 'page' : null">{{
        ui().formats.resume
      }}</a>
    </nav>
  `,
  styles: `
    @use '../../styles/glass';

    .format-switch {
      display: inline-flex;
      padding: 3px;
      @include glass.control;
    }

    a {
      padding: 6px 14px;
      border-radius: 999px;
      color: var(--page-copy);
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;

      &:hover {
        color: var(--page-ink);
        text-decoration: none;
      }

      &[aria-current='page'] {
        background: var(--page-tint);
        color: var(--page-kicker);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormatSwitch {
  readonly lang = input.required<Lang>();
  readonly current = input.required<Extract<Page, 'cv' | 'resume'>>();

  protected readonly ui = computed(() => CONTENT[this.lang()].ui);
  protected readonly cvLink = computed(() => pagePath(this.lang(), 'cv'));
  protected readonly resumeLink = pagePath('en', 'resume');
}
