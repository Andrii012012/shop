export interface IComment {
  name: string;
  surname: string;
  avatar: string;
  marks: number;
  description: string;
}

export type TSeasons = "winter" | "summer" | "spring" | "autunm" | "all";

export interface IBaseProduct {
  name: string;
  manufacturer: string;
  price: number;
  images: string[];
  discount: number | null;
  hitProduct: number;
  shelfLife: string;
  comments: IComment[];
  [key: string]: any;
}

export interface IRelease {
  name: string;
  icon: string;
  dosage: number[];
  packing: number[];
}

export interface IMedicalDrugs extends IBaseProduct {
  season: TSeasons;
  activeIngredient: string;
  release: IRelease[];
  cures: string[];
  isDelivery: boolean;
  isRecipe: boolean;
  storageConditions: string;
  instructionsUse: string;
  indicationsUse: string;
  pharmacologicalAction: string;
}

export interface INews {
  title: string;
  description: string;
  images: string[];
  date: string;
  detailedDescription: string;
}

export interface IBaseOptionsSlice {
  error: null | string;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

export interface IBasketProduct {
  id: string;
  image?: string;
  name: string;
  price: number;
  isRecipe: boolean;
  countryOrigin: string;
  manufacturer: string;
  count: number;
}

export type TSex = "man" | "woman";

export interface IUser {
  name: string;
  surname: string;
  familyName: string;
  birthday: string;
  email: string;
  phone: string;
  marks: number;
  password: string | number;
  isCard: boolean;
  sex: TSex;
  [key: string]: any;
}
