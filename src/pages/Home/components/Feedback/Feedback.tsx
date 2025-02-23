import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import { Field, Formik } from 'formik';
import Select from '../../../../components/ui/Select/Select';
import Button from '../../../../components/ui/Button/Button';
import backgroundFon from '../../../../assets/images/home/backgroundFeedbackSection.png';
import { validateEmail, validateEmptyField, validatePhone } from '../../../../utils/js/validate';

export default function Feedback(): JSX.Element {
    return (
        <section className={styles.feedbackWrapper}>
            <div className={styles.backgroundFon}>
                <img src={backgroundFon} alt="" />
            </div>
            <div className={`${gStyles.container} ${styles.container}`}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Возникли вопросы?</h2>
                    <p className={styles.subtitle}>
                        Заполните форму ниже <br />
                        и мы перезвоним вам в течении 15 минут
                    </p>
                    <Formik
                        initialValues={{ name: '', phone: '', email: '' }}
                        onSubmit={(values) => { }}
                    >
                        {({ errors, handleChange, values, handleSubmit }) => (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.wrapperInput}>
                                    <Field
                                        className={`${styles.input} ${errors.name ? gStyles.errorField : ''}`}
                                        onChange={handleChange}
                                        value={values.name}
                                        type='text'
                                        name="name"
                                        placeholder='Ваше имя'
                                        validate={validateEmptyField}
                                    />
                                    <Field
                                        className={`${styles.input} ${errors.phone ? gStyles.errorField : ''}`}
                                        onChange={handleChange}
                                        value={values.phone}
                                        type='tel'
                                        name="phone"
                                        placeholder='+7 900 000 00 00'
                                        validate={validatePhone}
                                    />
                                </div>
                                <Field
                                    className={`${styles.input} ${styles.inputActive} ${errors.email ? gStyles.errorField : ''}`}
                                    onChange={handleChange}
                                    value={values.email}
                                    type='text'
                                    name="email"
                                    placeholder='Введите ваш E-mail'
                                    validate={validateEmail}
                                />
                                <Select className={styles.select} options={['some section 1', 'some section 2', 'some section 3']} />
                                <Button className={`${styles.button} ${gStyles.textBig}`} title="ЗАДАТЬ ВОПРОС" />
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
}