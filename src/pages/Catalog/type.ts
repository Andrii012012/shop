export interface ICatalog {
  name: string;
  to: string;
  image: string;
  list?: ICatalog[] | null;
}
