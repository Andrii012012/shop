import { IField } from "../type";

export const NAME_FIELD: string[] = [
  "Фамилия",
  "Имя",
  "Отчество",
  "Дата рождения",
  "Пол",
  "Телефон",
  "E-mail",
  "Старый пароль",
  "Новый пароль",
];

export const FIELD: IField[] = [
  {
    surname: "",
    isEdit: false,
  },
  {
    name: "",
    isEdit: false,
  },
  {
    familyName: "",
    isEdit: false,
  },
  {
    birthday: "",
    isEdit: false,
  },
  {
    sex: "",
    isEdit: false,
  },
  {
    phone: "",
    isEdit: false,
  },
  {
    email: "",
    isEdit: false,
  },
  {
    oldPassword: "",
    isEdit: false,
  },
  {
    newPassword: "",
    isEdit: false,
  },
];
