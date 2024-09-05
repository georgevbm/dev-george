import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { bootstrapList, bootstrapX } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
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
