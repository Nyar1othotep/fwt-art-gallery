export interface IFilters {
  name?: string;
  genres?: string;
  sortBy?: string;
  orderBy?: string;
  perPage: string;
  pageNumber: string;
}

export interface ISelectedFilters {
  genres?: string;
  orderBy?: string;
}

export interface ISelected {
  type?: string;
  genre?: string;
  orderBy?: string;
}
