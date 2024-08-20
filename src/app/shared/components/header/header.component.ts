import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  opened = false;

  toggleMenu() {
    this.opened = !this.opened;
  }
}
