export interface PageRequest {
  viewName: string;
  lazyLoadEvent: LazyLoadEvent;
  dateRangeFilter?: Object;
}

export interface LazyLoadEvent {
  first?: number;
  rows?: number;
  sortField?: string;
  sortOrder?: number;
  multiSortMeta?: SortMeta[];
  filters?: {
    [s: string]: FilterMetadata;
  };
  globalFilter?: any;
}

export interface SortMeta {
  field: string;
  order: number;
}

export interface FilterMetadata {
  value?: any;
  matchMode?: string;
  operator?: string;
}

export interface DateRangeFilter {
  from?: number;
  to?: number;
  field?: string;
}
