import { ComponentFixture, TestBed } from '@angular/core/testing';

import { axe } from 'jest-axe';
import { ProjectsComponent } from './projects.component';
import { Project, StatusProject } from './types/projects.interface';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

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
      imports: [ProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no accessibility violations', async () => {
    fixture.detectChanges();
    const results = await axe(fixture.nativeElement);

    expect(results).toHaveNoViolations();
  });

  it('should call selectProject', async () => {
    component.selectProject(mockProject);

    expect(component.projectSelected).toStrictEqual(mockProject);
    expect(component.showModalDetailsProject).toBeTruthy();
  });
});
