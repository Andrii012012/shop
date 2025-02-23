import styles from "./styles.module.scss";
import gStyles from '../../../../../../styles/styles.module.scss';
import pStyles from '../../styles.module.scss';
import { Field, Form, Formik } from "formik";
import Button from "../../../../../ui/Button/Button";
import { callLocalStore } from "../../../../../../servers/callLocalStore";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { IUser } from "../../../../../../interface/interface";
import { validateEmptyField, validatePhone } from "../../../../../../utils/js/validate";
import { LoginUser } from "../../../../../../features/user/user";

interface IProps {
  setModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Login(props: IProps): JSX.Element {

  const { setModalLogin } = props;

  const dispatch = useAppDispatch();

  return (

    <Formik
      initialValues={{ phone: '', password: "" }}
      onSubmit={(values) => {
        const dataUser = callLocalStore<IUser>('user') as { password: string; phone: string };

        if (dataUser.password === values.password && dataUser.phone === values.phone) {
          dispatch(LoginUser(dataUser));
          setModalLogin(false);
        }
      }}
    >
      {({ errors }) => (
        <Form className={styles.form}>
          <Field
            className={`${pStyles.input} ${gStyles.textMedium} ${errors.phone ? gStyles.errorField : ''}`}
            name='phone'
            placeholder='Телефон'
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
          <Button type="submit" className={`${pStyles.buttonSend} ${gStyles.textBig}`} title='Вход' />
        </Form>
      )}
    </Formik>
  );
}
