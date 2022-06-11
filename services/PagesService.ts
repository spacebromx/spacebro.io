import Fetcher from '@/lib/fetcher'
import { queryStringBuilder } from '@/utils'
import { IProject } from '@/interfaces/Project'
import { IQueryBuilderParams, ReturnData } from '@/services/types'

class PagesService {
  private static instance: PagesService
  endpoint: string

  constructor() {
    this.endpoint = 'pages'
  }

  static getInstance(): PagesService {
    if (!PagesService.instance) {
      PagesService.instance = new PagesService()
    }

    return PagesService.instance
  }

  public getPage({
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

export default PagesService
