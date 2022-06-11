import Fetcher from '@/lib/fetcher'
import { queryStringBuilder } from '@/utils'
import { IProject } from '@/interfaces/Project'
import { IQueryBuilderParams, ReturnData } from '@/services/types'

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

  public getProjects({
    quantity = 1,
    extra = '',
    filter = {},
  }: IQueryBuilderParams): Promise<ReturnData<IProject>> {
    const query = queryStringBuilder({
      endpoint: this.endpoint,
      quantity,
      extra,
      filter,
    })

    return Fetcher(query)
  }
}

export default ProjectsService
