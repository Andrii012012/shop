
import styles from './style.module.scss';
import gStyles from '../../../../../../styles/styles.module.scss';
import { Field, Form, Formik } from 'formik';
import Button from '../../../../../../components/ui/Button/Button';

export default function FormActiveCard(): JSX.Element {

    return (
        <div className={styles.bodyActiveCard}>
            <h2 className={`${gStyles.textLarge} ${styles.title}`}>
                Для активации карты клиента «Аптекарьский магазинъ»
                введите номер клиентской карты и нажмите «Активация карты»
            </h2>
            <Formik
                initialValues={{ key: "" }}
                onSubmit={(values) => { }}
            >
                <Form className={styles.body}>
                    <Field className={styles.input} name='key' />
                    <Button className={`${styles.buttonActiveCard} ${gStyles.textMedium}`} title='Активация карты' />
                </Form>
            </Formik>
        </div>
    );
}