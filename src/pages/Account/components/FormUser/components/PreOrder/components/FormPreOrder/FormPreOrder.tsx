
import styles from './style.module.scss';
import gStyles from '../../../../../../../../styles/styles.module.scss';
import { Field, Form, Formik } from 'formik';
import { validateEmptyField, validatePhone } from '../../../../../../../../utils/js/validate';
import Button from '../../../../../../../../components/ui/Button/Button';

export default function FormPreOrder(): JSX.Element {

    return (
        <div className={styles.wrapper}>
            <Formik
                initialValues={{ fullName: "", phone: "", namePreparation: "", comment: "", }}
                onSubmit={(values) => {
                  //all these values ​​go to the server, which handles the data
                }}
            >
                {({ errors, handleChange }) => (
                    <Form className={`${styles.form}`} >
                        <div className={styles.body}>
                            <Field
                                className={`${styles.input} ${styles.inputActive} ${errors.fullName ? gStyles.errorField : ''}`}
                                placeholder='Фамилия Имя Отчество'
                                name="fullName"
                                type='text'
                                validate={validateEmptyField}
                            />
                            <div className={styles.wrapperInput}>
                                <Field
                                    className={`${styles.input} ${errors.phone ? gStyles.errorField : ''}`}
                                    placeholder='Ваш номер телефона'
                                    name="phone"
                                    type='tel'
                                    validate={validatePhone}
                                />
                                <Field
                                    className={`${styles.input} ${errors.namePreparation ? gStyles.errorField : ''}`}
                                    placeholder='Название препарата'
                                    name="namePreparation"
                                    type='text'
                                    validate={validateEmptyField}
                                />
                            </div>
                            <textarea
                                placeholder='Ваш комментарий'
                                className={styles.textarea}
                                name='comment'
                                onChange={handleChange}
                            />
                            <Button className={`${styles.button} ${gStyles.textBig}`} title='Заказать' />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}