import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { AdvantagesCard, SkillBullet } from './types/skills.interface';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPeopleFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapPeopleFill,
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
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
      alt: 'Logotipo do NPM',
    },
  ];

  advantagesCards: AdvantagesCard[] = [
    {
      title: 'Comunicação',
      description: `It is a long established fact that a reader 
            will be distracted by the readable content of a page when looking at 
            its layout. The point of using Lorem Ipsum is that it has a more-or-less.`,
      icon: 'bootstrapPeopleFill',
    },
    {
      title: 'Card 2',
      description: `It is a long established fact that a reader 
            will be distracted by the readable content of a page when looking at 
            its layout. The point of using Lorem Ipsum is that it has a more-or-less.`,
      icon: 'bootstrapPeopleFill',
    },
    {
      title: 'Card 3',
      description: `It is a long established fact that a reader 
            will be distracted by the readable content of a page when looking at 
            its layout. The point of using Lorem Ipsum is that it has a more-or-less.`,
      icon: 'bootstrapPeopleFill',
    },
  ];
}
