
import styles from './style.module.scss';
import gStyles from '../../../../../../styles/styles.module.scss';
import FormActiveCard from '../FormActiveCard/FormActiveCard';
import { Link } from 'react-router-dom';
import FieldDate from '../FieldDate/FieldDate';
import { IUser } from '../../../../../../interface/interface';
import { PATH_ACCOUNT } from '../../../../../../routes/routes';

interface IProps {
    dataUser: IUser;
    nameSection: string;
}

export default function MainPage(props: IProps): JSX.Element {

    const { dataUser, nameSection } = props;

    return (
        <div className={styles.wrapper}>
            <FieldDate dataUser={dataUser} />
            <div className={gStyles.container}>
                <div className={styles.body}>
                    <div className={styles.showState}>
                        <p className={gStyles.textLarge}>Бонусные баллы</p>
                        <p className={gStyles.textLarge}><span>{dataUser.marks || 0}</span> баллов</p>
                    </div>
                    <div className={styles.showState}>
                        <p className={gStyles.textLarge}>Оформить предзаказ</p>
                        <Link className={`${styles.textMedium} ${styles.buttonDesign}`} to={`${PATH_ACCOUNT}/${nameSection}/preOrder`}>Оформить</Link>
                    </div>
                </div>
                <FormActiveCard />
            </div>
        </div>
    );
}