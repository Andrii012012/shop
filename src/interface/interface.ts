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
  promotion: string | null;
  hitProduct: number;
  shelfLife: string;
  comments: IComment[];
  [key: string]: any;
}

export interface IDefaultDisplayProduct {
  isStock: boolean;
  name: string;
  manufacturer: string;
  volume: number;
  release: string;
  price: number;
  isRecipe: boolean;
  isDelivery: boolean;
  countryOrigin: string;
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

export type TSex = "мужчина" | "женщина" | "";

export interface IAdditionalInfoOrder {
  name: string;
  count: number;
  manufacturer: string;
  countryOrigin: string;
  isRecipe: boolean;
}

export type TStateOrder =
  | "Доставлен"
  | "Согласован"
  | "В обработке"
  | "Новый"
  | "Отменен"
  | "Отгружен"
  | "Возврат";

export interface IOrder {
  number: number | string;
  date: string;
  count: number;
  state: TStateOrder;
  price: number;
  deliveryPrice: number;
  delivery: string;
  address: string;
  additionalInfo: IAdditionalInfoOrder[];
}

export interface INotification {
  isOrderSMS: boolean;
  isOrderEmail: boolean;
  isDiscountSMS: boolean;
  isDiscountEmail: boolean;
}
export interface IUser {
  id: number;
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
  orders: IOrder[];
  notification: INotification;
  likedProducts: IDefaultDisplayProduct[];
  [key: string]: any;
}

export interface IPromotion {
  images: string[];
  till: string;
  title: string;
  description: string;
}
