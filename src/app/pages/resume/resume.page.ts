import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT } from '../../content';
import { RESUME } from '../../content/resume';
import { FormatSwitch } from '../../core/format-switch';
import { Icon } from '../../core/icon';
import { PROFILE, ROLES } from '../../data/cv';
import { formatMonth } from '../../data/period';

/**
 * The concise US-style résumé: one column, verb-first bullets, no overviews or
 * team sizes, and a US Letter print layout. English only.
 */
@Component({
  selector: 'app-resume-page',
  imports: [FormatSwitch, Icon],
  templateUrl: './resume.page.html',
  styleUrl: './resume.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumePage {
  protected readonly profile = PROFILE;
  protected readonly ui = CONTENT.en.ui;
  protected readonly name = CONTENT.en.cv.name;
  protected readonly resume = RESUME;

  /** Contact links shown as bare URLs, since a printed résumé cannot be clicked. */
  protected readonly links = [
    { href: `mailto:${PROFILE.email}`, label: PROFILE.email, icon: 'mail' },
    { href: PROFILE.linkedin, label: bare(PROFILE.linkedin), icon: 'linkedin' },
    { href: PROFILE.github, label: bare(PROFILE.github), icon: 'github' },
  ];
  protected readonly projectLink = bare(PROFILE.platformRepo);

  protected readonly roles = ROLES.map((facts) => ({
    id: facts.id,
    ...RESUME.roles[facts.id],
    period: `${formatMonth(facts.start, CONTENT.en.ui.months)} – ${formatMonth(facts.end, CONTENT.en.ui.months)}`,
  }));

  protected print(): void {
    window.print();
  }
}

function bare(url: string): string {
  return url.replace(/^https:\/\/(www\.)?/, '');
}
