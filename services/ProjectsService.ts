import Fetcher from '@/lib/fetcher'
import { queryStringBuilder } from '@/utils'
import { IProject } from '@/interfaces/Project'
import { ReturnData } from '@/services/types'

class ProjectsService {
  private static instance: ProjectsService
  endpoint: string

  constructor() {
    this.endpoint = 'projects'
  }

  static getInstance(): ProjectsService {
    if (!ProjectsService.instance) {
      ProjectsService.instance = new ProjectsService()
    }

    return ProjectsService.instance
  }

  public getProjects(quantity: number = 1): Promise<ReturnData<IProject>> {
    const query = queryStringBuilder({
      endpoint: this.endpoint,
      quantity,
      extra: '&sort=sort,-date_created',
    })

    return Fetcher(query)
  }
}

export default ProjectsService
