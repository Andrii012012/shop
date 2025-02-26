import { PATH_ABOUT_COMPANY, PATH_PROMOTION } from "../../../routes/routes";
import { CatalogItem } from "../interfaces/catalogItem";
export const catalogList: CatalogItem[] = [
  {
    id: "0",
    name: "Лекарственные препараты",
    open: false,
    list: [
      {
        id: "0-0",
        name: "Антибиотики",
        list: null,
        open: false,
      },
      {
        id: "0-1",
        name: "Антисептики",
        list: null,
        open: false,
      },
      {
        id: "0-2",
        name: "Противогрибковые препораты",
        list: null,
        open: false,
      },
      {
        id: "0-3",
        name: "Противомикробные препораты",
        list: null,
        open: false,
      },
      {
        id: "0-4",
        name: "ГРИПП, ОРВ, простуда",
        list: null,
        open: false,
      },
      {
        id: "0-5",
        name: "Насморк, кашель, боль в горле",
        open: false,
        list: [
          {
            id: "0-5-0",
            name: "Препораты при бронхиальной астме",
            list: null,
            open: false,
          },
          {
            id: "0-5-1",
            name: "Препораты при боле в горле",
            list: null,
            open: false,
          },
          {
            id: "0-5-2",
            name: "Препораты при кашле",
            list: null,
            open: false,
          },
          {
            id: "0-5-3",
            name: "Препораты при насморке",
            list: null,
            open: false,
          },
          {
            id: "0-5-4",
            name: "Препораты от храпа",
            list: null,
            open: false,
          },
        ],
      },
      {
        id: "0-6",
        name: "Заболевание глаз, ушей",
        list: null,
        open: false,
      },
      {
        id: "0-7",
        name: "Иммунитет",
        list: null,
        open: false,
      },
      {
        id: "0-8",
        name: "Дермотологические препораты",
        list: null,
        open: false,
      },
      {
        id: "0-9",
        name: "Болезни опорно двигательного - аппарата",
        list: null,
        open: false,
      },
      {
        id: "0-10",
        name: "Система кроветворения",
        list: null,
        open: false,
      },
      {
        id: "0-11",
        name: "Мочеполовая система",
        list: null,
        open: false,
      },
      {
        id: "0-12",
        name: "Нервная система",
        list: null,
        open: false,
      },
      {
        id: "0-13",
        name: "Нарушение обмена веществ",
        list: null,
        open: false,
      },
      {
        id: "0-14",
        name: "Онкология",
        list: null,
        open: false,
      },
      {
        id: "0-15",
        name: "Пищеварительная система",
        list: null,
        open: false,
      },
      {
        id: "0-16",
        name: "Сердечно-сосудистая система",
        list: null,
        open: false,
      },
      {
        id: "0-17",
        name: "Эндокринная система",
        list: null,
        open: false,
      },
    ],
  },
  {
    id: "1",
    name: "Витамины и БАДы",
    list: null,
    open: false,
  },
  {
    id: "2",
    name: "Красота и уход",
    list: null,
    open: false,
  },
  {
    id: "3",
    name: "Планирование семьи",
    list: null,
    open: false,
  },
  {
    id: "4",
    name: "Мама и малышь",
    list: null,
    open: false,
  },
  {
    id: "5",
    name: "Медицинские изделия",
    list: null,
    open: false,
  },
  {
    id: "6",
    name: "Ортопедические изделия",
    list: null,
    open: false,
  },
  {
    id: "7",
    name: "Медицинская техника",
    list: null,
    open: false,
  },
  {
    id: "8",
    name: "Ветеринарная аптека",
    list: null,
    open: false,
  },
];

export const NAVIGATE_ITEMS: {
  to: string;
  name: string;
}[] = [
    {
      to: "",
      name: "Интернет-магазин",
    },
    {
      to: "",
      name: "Главная",
    },
    {
      to: PATH_ABOUT_COMPANY,
      name: "О компании",
    },
    {
      to: "",
      name: "Помощь",
    },
    {
      to: PATH_PROMOTION,
      name: "Акции",
    },
    {
      to: "",
      name: "Новости",
    },
  ];
