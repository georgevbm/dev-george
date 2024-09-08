import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SkillBullet } from './types/bullet-skills.interface';
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
}
