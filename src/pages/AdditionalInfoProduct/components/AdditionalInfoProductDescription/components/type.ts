export interface IStock {
  name: boolean;
  dosage: boolean;
  packing: boolean;
  [key: string]: boolean;
}
export interface ISettings {
  name: string;
  dosage: number;
  packing: number;
  stock: IStock;
  [key: string]: string | number | IStock;
}
