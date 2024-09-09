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
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    // Segunda linha
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    // Terceiera linha
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
    },
    {
      url: 'image-skills/angular-logo.png',
      alt: 'Logotipo do Angular',
      backgroundColor: '#FFFFFF',
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
