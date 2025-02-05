export interface IComment {
  author: string;
  avatar: string;
  stars: number;
  description: string;
}

export interface IBaseProduct {
  name: string;
  manufacturer: string;
  price: number;
  images: string[];
  discount: number | null;
  hitProduct: number;
  shelfLife: string;
  comments: IComment[];
}

export interface IRelease {
  name: string;
  icon: string;
  dosage: number[];
  packing: number[];
}

export interface IMedicalDrugs extends IBaseProduct {
  seasons: "winter" | "summer" | "spring" | "autunm" | "all";
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
