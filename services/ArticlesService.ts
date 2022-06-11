import Fetcher from '@/lib/fetcher'
import { queryStringBuilder } from '@/utils'
import { IPost } from '@/interfaces/Post'
import { ReturnData, IQueryBuilderParams } from '@/services/types'

class ArticlesService {
  private static instance: ArticlesService
  endpoint: string

  constructor() {
    this.endpoint = 'articles'
  }

  static getInstance(): ArticlesService {
    if (!ArticlesService.instance) {
      ArticlesService.instance = new ArticlesService()
    }

    return ArticlesService.instance
  }

  public getPosts({
    quantity = 1,
    extra = '',
    filter = {},
  }: IQueryBuilderParams): Promise<ReturnData<IPost>> {
    const query = queryStringBuilder({
      endpoint: this.endpoint,
      quantity,
      filter,
      extra,
    })

    return Fetcher(query)
  }
}

export default ArticlesService
