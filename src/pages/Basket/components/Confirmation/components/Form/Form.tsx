import styles from './style.module.scss';
import gStyles from '../../../../../../styles/styles.module.scss';
import Button from '../../../../../../components/ui/Button/Button';
import IconWarning from '../../../../../../assets/images/global/iconWarning.svg?react';
import Pickup from '../../../Pickup/Pickup';

interface IProps {
    handleChangeField: (value: string, key: string) => void;
    setIsFurth: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Form(props: IProps): JSX.Element {

    const { handleChangeField, setIsFurth } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={gStyles.textLarge}>Способ получения:</h2>
                <Button className={`${styles.button} ${gStyles.textBig}`} title="Самовывоз" />
            </div>
            <Pickup className={styles.form} setIsFurth={setIsFurth} handleChangeField={handleChangeField} />
            <div className={styles.warning}>
                <div className={styles.headerWarning}>
                    <IconWarning className={styles.icon} />
                </div>
                <p className={`${gStyles.textMedium} ${styles.textWarning}`}>Лекарственные средства, которые отпускаются по рецепту при заказе через сайт, возможно получить только в аптеке самовывозом при предъявлении рецепта.</p>
            </div>
        </div>
    )
}