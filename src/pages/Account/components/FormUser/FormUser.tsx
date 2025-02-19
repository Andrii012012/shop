
import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import FieldDate from './components/FieldDate/FieldDate';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import Button from '../../../../components/ui/Button/Button';
import FormActiveCard from './components/FormActiveCard/FormActiveCard';

export default function FormUser(): JSX.Element {

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <FieldDate />
                <div className={gStyles.container}>
                    <div className={styles.body}>
                        <div className={styles.showState}>
                            <p className={gStyles.textLarge}>Бонусные баллы</p>
                            <p className={gStyles.textLarge}><span>0</span> баллов</p>
                        </div>
                        <div className={styles.showState}>
                            <p className={gStyles.textLarge}>Оформить предзаказ</p>
                            <Link className={`${styles.textMedium} ${styles.buttonDesign}`} to="/">Оформить</Link>
                        </div>
                    </div>
                    <FormActiveCard />
                </div>
            </div>
        </section>
    );
}