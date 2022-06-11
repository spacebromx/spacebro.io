import Fetcher from '@/lib/fetcher'
import { queryStringBuilder } from '@/utils'
import { IProject } from '@/interfaces/Project'

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

  public getProjects(quantity: number = 1): Promise<IProject> {
    const query = queryStringBuilder({
      endpoint: this.endpoint,
      quantity,
      extra: '&sort=sort,-date_created',
    })

    console.log(
      'original',
      `${process.env.NEXT_PUBLIC_API_URL}/items/projects?filter={"status":{"_eq": "published"}}&limit=3&sort=sort,-date_created`
    )
    console.log('query', query)

    return Fetcher(query)
  }
}

export default ProjectsService
