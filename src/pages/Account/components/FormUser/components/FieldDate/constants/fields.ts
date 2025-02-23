import { IUser } from "../../../../../../../interface/interface";
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

export function fieldUser(dataUser: IUser): IField[] {
  return [
    {
      surname: dataUser.surname,
      type: 'text',
      isEdit: false,
    },
    {
      name: dataUser.name,
      type: 'text',
      isEdit: false,
    },
    {
      familyName: dataUser.familyName,
      type: 'text',
      isEdit: false,
    },
    {
      birthday: dataUser.birthday,
      type: 'text',
      isEdit: false,
    },
    {
      sex: dataUser.sex,
      type: 'text',
      isEdit: false,
    },
    {
      phone: dataUser.phone,
      type: 'tel',
      isEdit: false,
    },
    {
      email: dataUser.email,
      type: 'email',
      isEdit: false,
    },
    {
      oldPassword: dataUser.password,
      type: 'password',
      isEdit: false,
    },
    {
      newPassword: dataUser.password,
      type: 'password',
      isEdit: false,
    },
  ];
}
