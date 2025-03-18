import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} Minisha Paul. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--footer-bg);
      color: var(--footer-text);
      text-align: center;
      padding: 1rem;
      position: relative;
      bottom: 0;
      width: 100%;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
} 