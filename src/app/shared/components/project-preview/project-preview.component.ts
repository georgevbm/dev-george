import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { bootstrapPlusCircle } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ButtonModule } from 'primeng/button';
import {
  Project,
  StatusProject,
} from '../../../pages/projects/types/projects.interface';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  imports: [CommonModule, ButtonModule, NgOptimizedImage, NgIconComponent],
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapPlusCircle,
    }),
  ],
})
export class ProjectPreviewComponent {
  @Input() project!: Project;
  @Output() clickMoreDetails = new EventEmitter<Project>();

  StatusProject = StatusProject;
}
