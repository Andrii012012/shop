export interface ISettings {
  name: string;
  dosage: number;
  packing: number;
  stock: boolean;
  [key: string]: string | number | boolean;
}
