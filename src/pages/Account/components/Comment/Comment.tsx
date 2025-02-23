
import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.css';
import StarRating from '../../../../components/ui/StarRating/StarRating';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import Button from '../../../../components/ui/Button/Button';
import { validateEmptyField, validatePhone } from '../../../../utils/js/validate';
import FormComment from './components/FormComment/FormComment';

export default function Comment(): JSX.Element {

    const [rating, setRating] = useState<number>(1);

    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <div className={styles.container}>
                    <div className={styles.body}>
                        <h2 className={`${styles.title} ${gStyles.textExtraLarge}`}>Оставьте отзыв
                            о работе нашей аптеке</h2>
                        <p className={`${styles.subtitle} ${gStyles.textBig}`}>Благодаря отзывам совершенствуем нашу работу,
                            чтобы вы всегда были довольны покупками и сервисом </p>
                        <StarRating
                            mark={rating}
                            size={61}
                            setState={setRating}
                            className={styles.bodyRating}
                            colorInactive={`#B6B6B6`}
                        />
                    </div>
                    <FormComment rating={rating} />
                </div>
            </div>
        </section>
    );
}