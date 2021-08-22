export interface Project {
  id?: number
  title: string
  description: string
}

export interface ProjectReducerState {
  project: Project | null
  loadingProject: boolean
  errorProject: any
}

export interface ProjectsReducerState {
  projects: Project[]
  loadingProjects: boolean
  errorProjects: any
}
