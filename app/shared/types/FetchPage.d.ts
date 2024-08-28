export type FetchPage = {
  filter?: string;
  sort?: string;
  orderBy?: string;
  page?: number;
  limit?: number;
}

export type MetaPage = {
  endOffset: number;
  limit: number;
  offset: number;
  page: number;
  totalItems: number;
  totalPages: number;
}