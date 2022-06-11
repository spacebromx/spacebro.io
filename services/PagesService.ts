import Fetcher from '@/lib/fetcher'
import { queryStringBuilder } from '@/utils'
import { IQueryBuilderParams, ReturnData } from '@/services/types'
import { IPage } from '@/interfaces/Page'

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
  }: IQueryBuilderParams): Promise<ReturnData<IPage>> {
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
