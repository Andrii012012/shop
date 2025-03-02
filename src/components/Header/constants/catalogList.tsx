import { PATH_ABOUT_COMPANY, PATH_FEEDBACK, PATH_HOME, PATH_NEWS, PATH_PROMOTION, PATH_SHOP } from "../../../routes/routes";
import { CatalogItem } from "../interfaces/catalogItem";
export const CATALOG_LIST: CatalogItem[] = [
  {
    id: "0",
    name: "Лекарственные препараты",

    list: [
      {
        id: "0-0",
        name: "Антибиотики",
        list: null,

      },
      {
        id: "0-1",
        name: "Антисептики",
        list: null,

      },
      {
        id: "0-2",
        name: "Противогрибковые препораты",
        list: null,

      },
      {
        id: "0-3",
        name: "Противомикробные препораты",
        list: null,

      },
      {
        id: "0-4",
        name: "ГРИПП, ОРВ, простуда",
        list: null,

      },
      {
        id: "0-5",
        name: "Насморк, кашель, боль в горле",

        list: [
          {
            id: "0-5-0",
            name: "Препораты при бронхиальной астме",
            list: null,

          },
          {
            id: "0-5-1",
            name: "Препораты при боле в горле",
            list: null,

          },
          {
            id: "0-5-2",
            name: "Препораты при кашле",
            list: null,

          },
          {
            id: "0-5-3",
            name: "Препораты при насморке",
            list: null,

          },
          {
            id: "0-5-4",
            name: "Препораты от храпа",
            list: null,

          },
        ],
      },
      {
        id: "0-6",
        name: "Заболевание глаз, ушей",
        list: null,

      },
      {
        id: "0-7",
        name: "Иммунитет",
        list: null,

      },
      {
        id: "0-8",
        name: "Дермотологические препораты",
        list: null,

      },
      {
        id: "0-9",
        name: "Болезни опорно двигательного - аппарата",
        list: null,

      },
      {
        id: "0-10",
        name: "Система кроветворения",
        list: null,

      },
      {
        id: "0-11",
        name: "Мочеполовая система",
        list: null,

      },
      {
        id: "0-12",
        name: "Нервная система",
        list: null,

      },
      {
        id: "0-13",
        name: "Нарушение обмена веществ",
        list: null,

      },
      {
        id: "0-14",
        name: "Онкология",
        list: null,

      },
      {
        id: "0-15",
        name: "Пищеварительная система",
        list: null,

      },
      {
        id: "0-16",
        name: "Сердечно-сосудистая система",
        list: null,

      },
      {
        id: "0-17",
        name: "Эндокринная система",
        list: null,

      },
    ],
  },
  {
    id: "1",
    name: "Витамины и БАДы",
    list: [
      {
        id: "0-12",
        name: "Противогрибковые препораты",
        list: null,

      },
      {
        id: "0-11",
        name: "Антисептики",
        list: null,

      },
      {
        id: "0-22",
        name: "препораты",
        list: null,

      },
    ],
  },
  {
    id: "2",
    name: "Красота и уход",
    list: null,

  },
  {
    id: "3",
    name: "Планирование семьи",
    list: null,

  },
  {
    id: "4",
    name: "Мама и малышь",
    list: null,

  },
  {
    id: "5",
    name: "Медицинские изделия",
    list: null,

  },
  {
    id: "6",
    name: "Ортопедические изделия",
    list: null,

  },
  {
    id: "7",
    name: "Медицинская техника",
    list: null,

  },
  {
    id: "8",
    name: "Ветеринарная аптека",
    list: null,

  },
];

export const NAVIGATE_ITEMS: {
  to: string;
  name: string;
}[] = [
    {
      to: PATH_HOME,
      name: "Главная",
    },
    {
      to: PATH_ABOUT_COMPANY,
      name: "О компании",
    },
    {
      to: PATH_FEEDBACK,
      name: "Помощь",
    },
    {
      to: PATH_PROMOTION,
      name: "Акции",
    },
    {
      to: PATH_NEWS,
      name: "Новости",
    },
  ];
