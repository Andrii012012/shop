import { PATH_CATALOG } from "../../../routes/routes";
import { ICatalog } from "../type";
import iconPill from "../../../assets/images/catalog/iconPill.png";
import iconVitamins from "../../../assets/images/catalog/iconVitamins.png";
import iconBeauty from "../../../assets/images/catalog/iconBeauty.png";
import iconFamilyPlanning from "../../../assets/images/catalog/iconFamilyPlanning.png";
import iconMamBaby from "../../../assets/images/catalog/iconMamBaby.png";
import iconMedicalProducts from "../../../assets/images/catalog/iconMedicalProducts.png";
import iconOrthopedicProducts from "../../../assets/images/catalog/iconOrthopedicProducts.png";
import iconMedicalTechnology from "../../../assets/images/catalog/iconMedicalTechnology.png";
import iconVeterinaryPharmacy from "../../../assets/images/catalog/iconVeterinaryPharmacy.png";
import iconMonovitamins from "../../../assets/images/catalog/iconMonovitamins.png";
import iconMultivitamins from "../../../assets/images/catalog/iconMultivitamins.png";
import iconMicroelements from "../../../assets/images/catalog/iconMicroelements.png";
import iconPerformance from "../../../assets/images/catalog/iconPerformance.png";
import iconPregnant from "../../../assets/images/catalog/iconPregnant.png";
import iconChildren from "../../../assets/images/catalog/iconChildren.png";
import iconMan from "../../../assets/images/catalog/iconMan.png";
import iconWoman from "../../../assets/images/catalog/iconWoman.png";
import iconDiabetics from "../../../assets/images/catalog/iconDiabetics.png";
import iconVision from "../../../assets/images/catalog/iconVision.png";
import iconHair from "../../../assets/images/catalog/iconHair.png";

export const CATALOG: ICatalog[] = [
  {
    name: "Лекарственные препараты",
    to: `${PATH_CATALOG}/Лекарственные препараты`,
    image: iconPill,
    list: null,
  },
  {
    name: "Витамины и БАДы",
    to: `${PATH_CATALOG}/Витамины и БАДы`,
    image: iconVitamins,
    list: [
      {
        name: "Моновитамины",
        image: iconMonovitamins,
        to: "",
      },
      {
        name: "Полвитамины (Мультивитамины)",
        image: iconMultivitamins,
        to: "",
      },
      {
        name: "Микроэлементы",
        image: iconMicroelements,
        to: "",
      },
      {
        name: "Для работоспособности",
        image: iconPerformance,
        to: "",
      },
      {
        name: "Для беременных",
        image: iconPregnant,
        to: "",
      },
      {
        name: "Для детей",
        image: iconChildren,
        to: "",
      },
      {
        name: "Для мужчин",
        image: iconMan,
        to: "",
      },
      {
        name: "Для женщин",
        image: iconWoman,
        to: "",
      },
      {
        name: "Для больных диабетом",
        image: iconDiabetics,
        to: "",
      },
      {
        name: "Для зрения",
        image: iconVision,
        to: "",
      },
      {
        name: "Для волос",
        image: iconHair,
        to: "",
      },
    ],
  },
  {
    name: "Красота и уход",
    to: `${PATH_CATALOG}/Красота и уход`,
    image: iconBeauty,
    list: null,
  },
  {
    name: "Планирование семьи",
    to: `${PATH_CATALOG}/Планирование семьи`,
    image: iconFamilyPlanning,
    list: null,
  },
  {
    name: "Мама и малышь",
    to: `${PATH_CATALOG}/Мама и малышь`,
    image: iconMamBaby,
    list: null,
  },
  {
    name: "Медицинские изделия",
    to: `${PATH_CATALOG}/Медицинские изделия`,
    image: iconMedicalProducts,
    list: null,
  },
  {
    name: "Ортопедические изделия",
    to: `${PATH_CATALOG}/Ортопедические изделия`,
    image: iconOrthopedicProducts,
    list: null,
  },
  {
    name: "Медицинская техника",
    to: `${PATH_CATALOG}/Медицинская техника`,
    image: iconMedicalTechnology,
    list: null,
  },
  {
    name: "Ветеринарная аптека",
    to: `${PATH_CATALOG}/Ветеринарная аптека`,
    image: iconVeterinaryPharmacy,
    list: null,
  },
];
