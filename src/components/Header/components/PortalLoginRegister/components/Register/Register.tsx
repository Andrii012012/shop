import styles from "./styles.module.scss";
import gStyles from '../../../../../../styles/styles.module.scss';
import pStyles from '../../styles.module.scss';
import { Field, Form, Formik } from "formik";
import Button from "../../../../../ui/Button/Button";
import { callLocalStore } from "../../../../../../servers/callLocalStore";
import { IUser } from "../../../../../../interface/interface";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../../../../../features/user/user";
import { validateEmail, validateEmptyField, validatePhone } from "../../../../../../utils/js/validate";

interface IProps {
  setModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Register(props: IProps): JSX.Element {

  const { setModalLogin } = props;

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ phone: '', password: "", name: "", surname: "", email: "" }}
      onSubmit={(values) => {
        const dataUser = callLocalStore<IUser>('user', {
          id: 1,
          name: values.name,
          surname: values.surname,
          familyName: "",
          phone: values.phone,
          email: values.email,
          password: values.password,
          orders: [],
          birthday: "",
          marks: 0,
          isCard: false,
          sex: "",
          notification: {
            isDiscountEmail: true,
            isDiscountSMS: true,
            isOrderEmail: true,
            isOrderSMS: true,
          },
          likedProducts: [],
        });

        dispatch(LoginUser(dataUser));
        setModalLogin(false);
      }}
    >
      {({ errors }) => (
        <Form className={styles.form}>
          <Field
            className={`${pStyles.input} ${gStyles.textMedium} ${errors.name ? gStyles.errorField : ''}`}
            name='name'
            placeholder='имя'
            type='text'
            validate={validateEmptyField}
          />
          <Field
            className={`${pStyles.input} ${gStyles.textMedium} ${errors.surname ? gStyles.errorField : ''}`}
            name='surname'
            placeholder='Фамилия'
            type='text'
            validate={validateEmptyField}
          />
          <Field
            className={`${pStyles.input} ${gStyles.textMedium} ${errors.email ? gStyles.errorField : ''}`}
            name='email'
            placeholder='Email'
            type='email'
            validate={validateEmail}
          />
          <Field
            className={`${pStyles.input} ${gStyles.textMedium} ${errors.phone ? gStyles.errorField : ''}`}
            name='phone'
            placeholder='+380 000 000 000'
            type='tel'
            validate={validatePhone}
          />
          <Field
            className={`${pStyles.input} ${gStyles.textMedium} ${errors.password ? gStyles.errorField : ''}`}
            name='password'
            placeholder='Пароль'
            type='password'
            validate={validateEmptyField}
          />
          <Button type="submit" className={`${pStyles.buttonSend} ${gStyles.textBig}`} title='Зарегистрироваться' />
        </Form>
      )}
    </Formik>
  );
}
