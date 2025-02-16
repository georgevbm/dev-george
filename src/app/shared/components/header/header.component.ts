import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { bootstrapList, bootstrapX } from '@ng-icons/bootstrap-icons';
import { provideIcons } from '@ng-icons/core';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  viewProviders: [provideIcons({ bootstrapList, bootstrapX })],
})
export class HeaderComponent {
  private router = inject(Router);
  opened = false;

  redirectTo(url: string) {
    this.router.navigateByUrl(url).then(() => (this.opened = false));
  }

  toggleMenu() {
    this.opened = !this.opened;
  }
}
