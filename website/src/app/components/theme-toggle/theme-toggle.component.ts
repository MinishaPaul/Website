import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="isDark ? 'Switch to light theme' : 'Switch to dark theme'">
      <i class="fas" [class.fa-sun]="isDark" [class.fa-moon]="!isDark"></i>
    </button>
  `,
  styles: [`
    .theme-toggle {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--navbar-text);
      transition: all 0.3s ease;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background-color: var(--navbar-hover);
        transform: scale(1.1);
      }

      i {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
      }

      &:hover i {
        transform: rotate(15deg);
      }
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  isDark = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.darkTheme$.subscribe(isDark => {
      this.isDark = isDark;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
} 