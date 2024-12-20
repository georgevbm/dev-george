import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  bootstrapEnvelopeAtFill,
  bootstrapGithub,
  bootstrapLinkedin,
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
      bootstrapLinkedin,
    }),
  ],
})
export class FooterComponent {
  private router = inject(Router);

  get showButtonEmail() {
    return this.router.url !== '/contact';
  }

  goToWhatsApp() {
    window.open('https://w.app/devgeorge', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/georgevbm', '_blank');
  }

  goToLinkedIn() {
    window.open(
      'https://www.linkedin.com/in/george-victor-branco-mota/',
      '_blank'
    );
  }

  goToContact() {
    this.router.navigateByUrl('/contact');
  }
}
