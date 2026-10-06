import { Routes } from '@angular/router';
import { Lang, LANGS } from './content/model';
import { RESUME_LANG } from './core/lang';

const pages = (lang: Lang): Routes => [
  {
    path: '',
    data: { lang },
    loadComponent: () => import('./pages/cv/cv.page').then((m) => m.CvPage),
  },
  {
    path: 'platform',
    data: { lang },
    loadComponent: () => import('./pages/platform/platform.page').then((m) => m.PlatformPage),
  },
  ...(lang === RESUME_LANG
    ? [
        {
          path: 'resume',
          data: { lang },
          loadComponent: () => import('./pages/resume/resume.page').then((m) => m.ResumePage),
        },
      ]
    : []),
];

export const routes: Routes = [
  ...LANGS.filter((lang) => lang !== 'en').map((lang) => ({ path: lang, children: pages(lang) })),
  ...pages('en'),
  { path: '**', redirectTo: '' },
];
