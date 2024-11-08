import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  bootstrapGithub,
  bootstrapRocketTakeoffFill,
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { TooltipModule } from 'primeng/tooltip';
import {
  Project,
  StatusProject,
} from '../../../pages/projects/types/projects.interface';

@Component({
  selector: 'app-project-presentation',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, NgIconComponent, TooltipModule],
  templateUrl: './project-presentation.component.html',
  styleUrl: './project-presentation.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapGithub,
      bootstrapRocketTakeoffFill,
    }),
  ],
})
export class ProjectPresentationComponent {
  @Input() project!: Project;

  StatusProject = StatusProject;

  redirectDeploy(url: string) {
    window.open(url, '_blank');
  }

  redirectRepository(url: string) {
    window.open(url, '_blank');
  }
}
