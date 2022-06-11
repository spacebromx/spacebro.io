import Fetcher from '@/lib/fetcher'
import { queryStringBuilder } from '@/utils'
import { IPost } from '@/interfaces/Post'

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

  public getFeaturedPosts(quantity: number = 1): Promise<IPost> {
    const query = queryStringBuilder({
      endpoint: this.endpoint,
      quantity,
      filter: {
        field: 'featured',
        value: true,
      },
    })

    return Fetcher(query)
  }

  public getNonFeaturedPosts(quantity: number = 1): Promise<IPost> {
    const query = queryStringBuilder({
      endpoint: this.endpoint,
      quantity,
      filter: {
        field: 'featured',
        value: false,
      },
    })
    return Fetcher(query)
  }
}

export default ArticlesService
