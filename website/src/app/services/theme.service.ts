import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme = new BehaviorSubject<boolean>(false);
  darkTheme$ = this.darkTheme.asObservable();
  private mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    // Listen for system theme changes
    this.mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.setDarkTheme(e.matches);
      }
    });
  }

  setDarkTheme(isDark: boolean) {
    this.darkTheme.next(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  toggleTheme() {
    const currentTheme = this.darkTheme.value;
    this.setDarkTheme(!currentTheme);
  }

  // Initialize theme from localStorage or system preference
  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setDarkTheme(savedTheme === 'dark');
    } else if (this.mediaQuery.matches) {
      this.setDarkTheme(true);
    }
  }
} 