import { Component } from '@angular/core';
import {
  bootstrapEnvelopeAtFill,
  bootstrapGithub,
  bootstrapWhatsapp,
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
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
export class FooterComponent {}
