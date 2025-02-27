import styles from './styles.module.scss';
import gStyles from '../../styles/styles.module.scss';
import Navigate from '../../components/Navigate/Navigate';
import { Field, Form, Formik } from 'formik';
import Button from '../../components/ui/Button/Button';
import { validateEmail, validateEmptyField } from '../../utils/js/validate';

export default function Feedback(): JSX.Element {
    return (
        <main className={styles.feedback}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: "Обратная связь", to: "" }]} />
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <div className={`${styles.title} ${gStyles.textExtraLarge}`}>Обратная связь</div>
                        <p className={`${gStyles.textExtraBig}`}>Используйте данную форму, если у вас возникли вопросы по товару, способам оплаты, доставки или других вопросов</p>
                        <p className={`${gStyles.textExtraBig}`}>Менеджер ознакомится с вашим запросом и сважется с вами в течении 15 минут</p>
                    </div>
                    <Formik
                        initialValues={{ name: "", email: "", question: "" }}
                        onSubmit={(values) => {
                            //data need to spend on the server, that's all
                        }}
                    >
                        {({ errors, handleChange }) => (
                            <Form className={styles.form}>
                                <div className={styles.body}>
                                    <Field validate={validateEmptyField} className={`${styles.input} ${errors.name ? gStyles.errorField : ''}`} name='name' placeholder="Ваше имя" />
                                    <Field validate={validateEmail} className={`${styles.input} ${errors.email ? gStyles.errorField : ''}`} name='email' placeholder="Ваш E-mail" />
                                </div>
                                <textarea onChange={handleChange} className={`${styles.input} ${styles.question} ${errors.question ? gStyles.errorField : ''}`} name='question' placeholder="Задайте ваш вопрос" ></textarea>
                                <Button classNameWrapper={styles.bodyButton} className={`${gStyles.textBig} ${styles.button}`} title="Отправить" />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </main>
    );
}