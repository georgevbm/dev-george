import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  Project,
  StatusProject,
} from '../../../pages/projects/types/projects.interface';
import { ProjectPreviewComponent } from './project-preview.component';

describe('ProjectPreviewComponent', () => {
  let component: ProjectPreviewComponent;
  let fixture: ComponentFixture<ProjectPreviewComponent>;

  const mockProject: Project = {
    name: 'Portal ASCEPA',
    description:
      'Este projeto visa desenvolver uma plataforma digital inclusiva que ofereça acessibilidade total para pessoas com deficiência visual.',
    coreTechnologies: [
      {
        name: 'Angular',
        iconUrl: 'image-skills/angular-logo.svg',
      },
      {
        name: 'Nx',
        iconUrl: 'image-skills/nx.png',
      },
      {
        name: 'SCSS',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
      },
      {
        name: 'Git',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      },
      {
        name: 'JEST',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
      },
    ],
    status: StatusProject.EM_CONSTRUCAO,
    urlDeploy: 'https://portal-ascepa.vercel.app/home',
    urlPhoto: 'url_photo',
    urlRepository: 'https://github.com/techexpertspro/portal-ascepa',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectPreviewComponent);
    component = fixture.componentInstance;
    component.project = mockProject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
