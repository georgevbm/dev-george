import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {
  bootstrapArrowRepeat,
  bootstrapJournalCode,
  bootstrapPeopleFill,
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { AdvantagesCard, SkillBullet } from './types/skills.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapPeopleFill,
      bootstrapArrowRepeat,
      bootstrapJournalCode,
    }),
  ],
})
export class SkillsComponent {
  skillBullets: SkillBullet[] = [
    // Primeira linha
    {
      url: 'image-skills/angular-logo.svg',
      alt: 'Logotipo do Angular',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      alt: 'Logotipo do HTML',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      alt: 'Logotipo do CSS',
    },
    {
      url: 'image-skills/javascript-logo.svg',
      alt: 'Logotipo do Javascript',
    },
    // Segunda linha
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
      alt: 'Logotipo do SASS',
    },
    {
      url: 'image-skills/typescript-logo.svg',
      alt: 'Logotipo do Typescript',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg',
      alt: 'Logotipo do Rxjs',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrx/ngrx-original.svg',
      alt: 'Logotipo do NgRx',
    },
    // Terceiera linha
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
      alt: 'Logotipo do JEST',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg',
      alt: 'Logotipo do Playwright',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      alt: 'Logotipo do Git',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
      alt: 'Logotipo do AWS Certified Cloud Practitioner',
    },
  ];

  advantagesCards: AdvantagesCard[] = [
    {
      title: 'Comunicação',
      description: `Sei expressar minhas ideias de forma clara, tanto verbalmente quanto por escrito, especialmente quando trabalho em equipes multidisciplinares ou em projetos remotos.`,
      icon: 'bootstrapPeopleFill',
    },
    {
      title: 'Adaptabilidade',
      description: `Tenho flexibilidade e estou sempre aberto para aprender sobre novas ferramentas, metodologias e abordagens.`,
      icon: 'bootstrapArrowRepeat',
    },
    {
      title: 'Atenção aos detalhes',
      description: `No desenvolvimento de software, pequenos erros podem causar grandes problemas. Sou detalhista, o que me ajuda a evitar bugs e garantir a qualidade do código que desenvolvo.`,
      icon: 'bootstrapJournalCode',
    },
  ];
}
