export interface CatalogItem {
  id: string;
  name: string;
  open: boolean;
  list?: CatalogItem[] | null;
  [key: string]: string | boolean | CatalogItem[] | null | undefined;
}
