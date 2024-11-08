export interface Project {
  name: string;
  description: string;
  coreTechnologies: Technology[];
  urlPhoto: string;
  urlRepository: string;
  urlDeploy: string;
  status: StatusProject;
}

export interface Technology {
  name: string;
  iconUrl: string;
}

export enum StatusProject {
  EM_CONSTRUCAO = 'em_construcao',
  CONCLUIDO = 'concluido',
}
