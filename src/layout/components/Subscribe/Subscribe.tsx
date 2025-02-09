import styles from './style.module.scss';
import gStyles from "../../../styles/styles.module.scss";
import letter from '../../../assets/images/home/letter.png';
import { Field, Form, Formik } from 'formik';
import { validateEmail } from '../../../utils/js/validate';
import Button from '../../../components/ui/Button/Button';

export default function Subscribe(): JSX.Element {

    return (
        <div className={styles.subscribe}>
            <div className={gStyles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={letter} alt="" />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Подпишитесь и получайте <br /> лучшие предложения первыми!</h2>
                        <Formik
                            initialValues={{ email: '' }}
                            onSubmit={(value) => { }}
                        >
                            {({ errors }) => (
                                <Form className={styles.form}>
                                    <Field className={`${styles.input} ${gStyles.textMedium} ${errors.email ? gStyles.errorField : ''}`} placeholder='Введите ваш E-mail' name='email' type='email' validate={validateEmail} />
                                    <Button classNameWrapper={styles.bodyButton} className={`${styles.button} ${gStyles.textMedium}`} title='Подписаться' />
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}