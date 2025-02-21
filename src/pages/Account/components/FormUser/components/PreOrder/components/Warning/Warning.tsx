
import styles from './style.module.scss';
import gStyles from '../../../../../../../../styles/styles.module.scss';
import IconWarning from '../../../../../../../../assets/images/global/iconWarning.svg?react';

export default function Warning(): JSX.Element {

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <IconWarning className={styles.icon} />
            </div>
            <div className={`${styles.message}`}>
                <p className={`${gStyles.textMedium}`}>
                    Вы можете оформить предварительный заказа на редкие или дорогостоящие лекарственные средства, которых не нашли в продаже. Заполните форму предзаказа и в течение 15 минут менеджер свяжется с Вами и уточнит — когда, где и по какой цене Вы сможете выкупить необходимый товар.
                </p>
            </div>
        </div>
    );
}