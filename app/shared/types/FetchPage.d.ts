export type FetchPage = {
  filter?: string;
  sort?: string;
  orderBy?: string;
  page?: number;
  limit?: number;
}

export type MetaPage = {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPage: number;
  firstPageUrl: string;
  lastPageUrl: string;
  nextPageUrl: string;
  previousPageUrl: string;
}