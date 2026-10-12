import { RoleId } from '../data/cv';
import { RepoName } from '../data/platform';
import { WelcomeText } from './welcome';

export const LANGS = ['en', 'de'] as const;
export type Lang = (typeof LANGS)[number];
export type Page = 'cv' | 'platform' | 'resume';

export interface RoleText {
  title: string;
  client: string;
  roles: string[];
  overview: string;
  /** Descriptions for `RoleFacts.projects`, same order and length. */
  projects: string[];
  responsibilities: { label?: string; text: string }[];
  duration: string;
}

export interface Content {
  ui: {
    /** Name shown in the language switcher, in its own language. */
    langName: string;
    titles: Record<Page, string>;
    description: string;
    months: string[];
    theme: string;
    language: string;
    savePdf: string;
    /** The CV / US résumé switch. */
    formats: { label: string; cv: string; resume: string };
    linkedin: string;
    github: string;
    sections: {
      summary: string;
      experience: string;
      skills: string;
      education: string;
      languages: string;
      stack: string;
    };
    team: string;
    platformCard: { kicker: string; body: string; cta: string; github: string };
    footer: { built: string; source: string };
  };
  cv: {
    /** Display name. */
    name: string;
    headline: string;
    summary: string[];
    roleSummary: string[];
    skills: { name: string; items: string[] }[];
    roles: Record<RoleId, RoleText>;
    education: { degree: string; school: string; place: string; period: string };
    languages: string[];
  };
  platform: {
    repoRoles: Record<RepoName, string>;
  };
  welcome: WelcomeText;
}
