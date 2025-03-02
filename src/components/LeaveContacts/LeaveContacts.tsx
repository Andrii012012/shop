import { Field, Form, Formik } from "formik";
import gStyles from "../../styles/styles.module.scss";
import styles from "./style.module.scss";
import { validateEmail, validateEmptyField, validatePhone } from "../../utils/js/validate";
import Checkbox from "../ui/Checkbox/Checkbox";
import { useState } from "react";
import Button from "../ui/Button/Button";
import { Link } from "react-router-dom";
import { PATH_POLITICS } from "../../routes/routes";

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LeaveContacts(props: IProps) {

  const { setIsOpen } = props;

  const [isAgreen, setIsAgree] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={`${gStyles.textLarge} ${styles.title}`}>
          Оставьте ваши контакты
        </h2>
        <p className={`${styles.subtitle} ${gStyles.textBig}`}>
          Менеджер связжется с вами
          в течении 15 минут
        </p>
        <Formik
          initialValues={{ name: "", email: "", phone: "" }}
          onSubmit={(values) => {
            if (isAgreen) {
              setIsOpen(false);
              //Another logic to spend the data in the server
            }
          }}
        >
          {({ errors }) => (
            <Form className={styles.form}>
              <Field className={`${styles.input} ${errors.name ? gStyles.errorField : ''}`} name='name' placeholder="Ваше имя" validate={validateEmptyField} type='text' />
              <Field className={`${styles.input} ${errors.email ? gStyles.errorField : ''}`} name='email' placeholder="Ваш E-mail" validate={validateEmail} type='text' />
              <Field className={`${styles.input} ${errors.phone ? gStyles.errorField : ''}`} name='phone' placeholder="Ваш номер телефона" validate={validatePhone} type='text' />
              <div className={styles.bodyCheckbox}>
                <Checkbox onClick={() => setIsAgree(!isAgreen)} className={styles.checkbox} valueCheckbox={isAgreen} />
                <p>Нажимая «Заказать звонок», вы соглашаетесь с <Link to={PATH_POLITICS}>политикой конфиденциальности</Link></p>
              </div>
              <Button className={`${styles.button} ${gStyles.textBig}`} title="Заказать звонок" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
