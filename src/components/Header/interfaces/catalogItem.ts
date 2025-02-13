export interface CatalogItem {
  id: string;
  name: string;
  list?: CatalogItem[];
}
