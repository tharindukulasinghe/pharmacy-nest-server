import { PageRequest } from './page-request';

export interface ExportConfig {
  pageRequest: PageRequest;
  format: number;
  type: number;
  columns: Column[];
}

interface Column {
  field: string;
  header: string;
}
