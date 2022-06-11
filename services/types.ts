export interface ReturnData<T> {
  data: Array<T>
}

export type TQueryFilter = {
  field?: string
  value?: string | number | boolean
}

export interface IQueryBuilderParams {
  quantity?: number
  extra?: string
  filter?: TQueryFilter
}
