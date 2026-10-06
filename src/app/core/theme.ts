import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

const KEY = 'theme';

/**
 * `.dark` on <html> is the single switch. An inline script in index.html sets it
 * before first paint, from the saved choice or the system preference.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly root = inject(DOCUMENT).documentElement;

  toggle(): void {
    const dark = this.root.classList.toggle('dark');
    try {
      localStorage.setItem(KEY, dark ? 'dark' : 'light');
    } catch {
      // Storage blocked: the toggle still works for this page view.
    }
  }
}
