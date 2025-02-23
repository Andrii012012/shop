
import styles from './style.module.scss';
import gStyles from '../../../../../../styles/styles.module.scss';
import FormPreOrder from './components/FormPreOrder/FormPreOrder';
import Warning from './components/Warning/Warning';

export default function PreOrder(): JSX.Element {

    return (
        <section className={styles.wrapper}>
            <div className={gStyles.container}>
                <h2 className={`${gStyles.textExtraLarge} ${styles.title}`}>Оформить предзаказ</h2>
                <div className={styles.content}>
                    <FormPreOrder />
                    <Warning />
                </div>
            </div>
        </section>
    );
}