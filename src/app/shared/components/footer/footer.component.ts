import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  bootstrapEnvelopeAtFill,
  bootstrapGithub,
  bootstrapWhatsapp,
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapEnvelopeAtFill,
      bootstrapGithub,
      bootstrapWhatsapp,
    }),
  ],
})
export class FooterComponent {
  get showButtonEmail() {
    return this.router.url !== '/contact';
  }

  constructor(private router: Router) {}

  goToWhatsApp() {
    window.open('https://w.app/devgeorge', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/georgevbm', '_blank');
  }

  goToContact() {
    this.router.navigateByUrl('/contact');
  }
}
