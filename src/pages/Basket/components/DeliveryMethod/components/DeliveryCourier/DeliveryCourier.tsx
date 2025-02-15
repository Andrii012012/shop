import styles from './style.module.scss';
import gStyles from '../../../../../../styles/styles.module.scss';
import { validateEmail, validateEmptyField, validatePhone } from '../../../../../../utils/js/validate';
import { Field, Form, Formik } from 'formik';
import Button from '../../../../../../components/ui/Button/Button';


interface IProps {
    handleChangeField: (value: string, key: string) => void;
    setIsFurth: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DeliveryCourier(props: IProps): JSX.Element {

    const { handleChangeField, setIsFurth } = props;

    return (
        <Formik
            initialValues={{ phone: "", email: "", name: "", surname: "", street: "", house: "", appartament: "", textarea: "", comment: "" }}
            onSubmit={(values) => { console.log(values) }}
        >
            {({ errors, handleChange, values, handleSubmit }) => {
                setIsFurth(Object.keys(errors).length > 0 || values.phone === "" ? false : true);
                return (
                    <Form onSubmit={handleSubmit}>
                        <div className={styles.bodyInput}>
                            <Field
                                className={`${styles.input} ${errors.phone ? gStyles.errorField : ''} ${gStyles.textMedium}`}
                                onChange={handleChange}
                                value={values.phone}
                                onInput={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeField(event.target.value, "phone")}
                                type='tel'
                                name="phone"
                                placeholder='+380 00 000 00 00'
                                validate={validatePhone}
                            />
                            <Field
                                placeholder="E-mail"
                                className={`${styles.input} ${errors.email ? gStyles.errorField : ''} ${gStyles.textMedium}`}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                                validate={validateEmail}
                                onInput={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeField(event.target.value, "email")}
                            />
                        </div>
                        <div className={styles.bodyInput}>
                            <Field
                                placeholder="Введите имя"
                                className={`${styles.input} ${errors.name ? gStyles.errorField : ''} ${gStyles.textMedium}`}
                                type='text'
                                value={values.name}
                                onChange={handleChange}
                                name="name"
                                onInput={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeField(event.target.value, "name")}
                                validate={validateEmptyField}
                            />
                            <Field
                                placeholder="Введите фамилию"
                                className={`${styles.input} ${errors.surname ? gStyles.errorField : ''} ${gStyles.textMedium}`}
                                type='text'
                                value={values.surname}
                                onChange={handleChange}
                                name="surname"
                                onInput={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeField(event.target.value, "surname")}
                                validate={validateEmptyField}
                            />
                        </div>
                        <div className={styles.bodyInput}>
                            <Field
                                placeholder="Улица"
                                className={`${styles.input} ${errors.street ? gStyles.errorField : ''} ${gStyles.textMedium} ${styles.inputStreet}`}
                                type="text"
                                value={values.street}
                                name="street"
                                validate={validateEmptyField}
                                onChange={handleChange}
                                onInput={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeField(event.target.value, "street")}
                            />
                            <Field
                                placeholder="Дом / корпус"
                                className={`${styles.input} ${errors.house ? gStyles.errorField : ''} ${gStyles.textMedium} ${styles.inputHouse}`}
                                type="text"
                                name="house"
                                value={values.house}
                                validate={validateEmptyField}
                                onChange={handleChange}
                                onInput={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeField(event.target.value, "house")}
                            />
                            <Field
                                placeholder="Квартира"
                                className={`${styles.input} ${errors.appartament ? gStyles.errorField : ''} ${gStyles.textMedium}`}
                                type="text"
                                name="appartament"
                                value={values.appartament}
                                validate={validateEmptyField}
                                onChange={handleChange}
                                onInput={(event: React.ChangeEvent<HTMLInputElement>) => handleChangeField(event.target.value, "appartament")}
                            />
                        </div>
                        <textarea
                            placeholder="Ваш комментарий"
                            className={`${styles.input} ${styles.comment} ${errors.comment ? gStyles.errorField : ''} ${gStyles.textMedium}`}
                            value={values.comment}
                            name="comment"
                            onChange={handleChange}
                            onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) => handleChangeField(event.target.value, "comment")}
                        />
                        <Button className={`${styles.sendButton} ${gStyles.textBig}`} title="Отправить комментарий" />
                    </Form>
                )
            }}
        </Formik>
    );
}