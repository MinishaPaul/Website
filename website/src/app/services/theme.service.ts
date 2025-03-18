import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeSubject = new BehaviorSubject<boolean>(this.isDarkTheme());
  darkTheme$ = this.darkThemeSubject.asObservable();

  constructor() {
    // Check system preference initially
    this.checkSystemThemePreference();
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
      this.checkSystemThemePreference();
    });

    // Apply initial theme
    this.applyTheme(this.isDarkTheme());
  }

  private checkSystemThemePreference() {
    if (!localStorage.getItem('theme')) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.applyTheme(isDark);
    }
  }

  private isDarkTheme(): boolean {
    const theme = localStorage.getItem('theme');
    if (theme) {
      return theme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleTheme() {
    const isDark = !this.darkThemeSubject.value;
    this.applyTheme(isDark);
  }

  private applyTheme(isDark: boolean) {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.darkThemeSubject.next(isDark);
  }
} 