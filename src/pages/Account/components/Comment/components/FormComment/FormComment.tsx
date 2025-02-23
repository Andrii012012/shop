
import styles from './style.module.scss';
import gStyles from '../../../../../../styles/styles.module.css';
import { Field, Form, Formik } from 'formik';
import { validateEmptyField, validatePhone } from '../../../../../../utils/js/validate';
import Button from '../../../../../../components/ui/Button/Button';

interface IProps {
    rating: number;
}

export default function FormComment(props: IProps): JSX.Element {

    const { rating } = props;

    return (
        <Formik
            initialValues={{ fullName: "", phone: "", comment: "" }}
            onSubmit={(values) => {
                //Logic for sending data to the server
            }}
        >
            {({ errors, handleChange }) => (
                <Form className={styles.form}>
                    <Field
                        className={`${styles.input} ${errors.fullName ? gStyles.errorField : ''} ${gStyles.textMedium}`}
                        name='fullName'
                        type='text'
                        placeholder='Фамилия Имя Отчество'
                        validate={validateEmptyField}
                    />
                    <Field
                        className={`${styles.input} ${errors.phone ? gStyles.errorField : ''} ${gStyles.textMedium}`}
                        name='phone'
                        type='tel'
                        placeholder='Ваш номер телефона'
                        validate={validatePhone}
                    />
                    <textarea
                        onChange={handleChange}
                        className={`${styles.input} ${errors.comment ? gStyles.errorField : ''} 
                                 ${styles.textarea} ${gStyles.textMedium}`}
                        name='comment'
                        placeholder='Напишите, всем ли вы осталь довольны?'
                    ></textarea>
                    <Button
                        className={`${styles.buttonSend} ${gStyles.textBig}`}
                        title='Отправить отзыв'
                    />
                </Form>
            )}
        </Formik>
    );
}