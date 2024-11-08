import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  Project,
  StatusProject,
} from '../../../pages/projects/types/projects.interface';
import { ProjectPresentationComponent } from './project-presentation.component';

describe('ProjectPresentationComponent', () => {
  let component: ProjectPresentationComponent;
  let fixture: ComponentFixture<ProjectPresentationComponent>;

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
      imports: [ProjectPresentationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectPresentationComponent);
    component = fixture.componentInstance;
    component.project = mockProject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called redirectDeploy', () => {
    const spyWindow = jest.spyOn(window, 'open').mockImplementation(() => null);
    component.redirectDeploy(mockProject.urlDeploy);

    expect(spyWindow).toHaveBeenCalledWith(mockProject.urlDeploy, '_blank');
  });

  it('should called redirectRepository', () => {
    const spyWindow = jest.spyOn(window, 'open').mockImplementation(() => null);
    component.redirectRepository(mockProject.urlRepository);

    expect(spyWindow).toHaveBeenCalledWith(mockProject.urlRepository, '_blank');
  });
});
