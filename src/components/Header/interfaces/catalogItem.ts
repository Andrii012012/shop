export interface CatalogItem {
  id: string;
  name: string;
  list?: CatalogItem[] | null;
  [key: string]: string | boolean | CatalogItem[] | null | undefined;
}
