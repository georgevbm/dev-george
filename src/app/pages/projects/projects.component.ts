import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Projects, StatusProject } from './types/projects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Projects[] = [
    {
      name: 'Projeto 1',
      description: 'Esse é um projeto que esta sendo feito.',
      coreTechnologies: [
        {
          name: 'SCSS',
          icon: 'sass',
        },
      ],
      status: StatusProject.EM_CONSTRUCAO,
      urlDeploy: 'url_deploy',
      urlPhoto: 'url_photo',
      urlRepository: 'url_repo',
    },
    {
      name: 'Projeto 2',
      description: 'Esse é um projeto que esta concluído.',
      coreTechnologies: [
        {
          name: 'HTML',
          icon: 'html',
        },
      ],
      status: StatusProject.CONCLUIDO,
      urlDeploy: 'url_deploy',
      urlPhoto: 'url_photo',
      urlRepository: 'url_repo',
    },
  ];
}
