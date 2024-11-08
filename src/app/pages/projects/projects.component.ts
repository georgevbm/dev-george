import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ProjectPresentationComponent } from '../../shared/components/project-presentation/project-presentation.component';
import { ProjectPreviewComponent } from '../../shared/components/project-preview/project-preview.component';
import { Project, StatusProject } from './types/projects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CarouselModule,
    DialogModule,
    ProjectPresentationComponent,
    ProjectPreviewComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Portal ASCEPA',
      description:
        'Este projeto é uma parceria entre a ONG Associação de e para Cegos do Pará e TechExperts Pro para melhorar a presença online e a experiência do usuário, focando em fornecer uma plataforma abrangente para membros, associados e visitantes.',
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
      urlPhoto: 'GifAscepa.gif',
      urlRepository: 'https://github.com/techexpertspro/portal-ascepa',
    },
    {
      name: 'Projeto 2',
      description: 'Esse é um projeto que esta concluído.',
      coreTechnologies: [
        {
          name: 'HTML',
          iconUrl: 'html',
        },
      ],
      status: StatusProject.CONCLUIDO,
      urlDeploy: 'url_deploy',
      urlPhoto: 'url_photo',
      urlRepository: 'url_repo',
    },
  ];

  showModalDetailsProject = false;
  projectSelected = this.projects[0];

  selectProject(project: Project) {
    this.projectSelected = project;
    this.showModalDetailsProject = true;
  }
}
