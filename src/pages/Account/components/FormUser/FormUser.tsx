
import styles from './style.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import FieldDate from './components/FieldDate/FieldDate';
import { Link } from 'react-router-dom';
import FormActiveCard from './components/FormActiveCard/FormActiveCard';
import { IUser } from '../../../../interface/interface';
interface IProps {
    dataUser: IUser;
}

export default function FormUser(props: IProps): JSX.Element {

    const { dataUser } = props;

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <FieldDate dataUser={dataUser} />
                <div className={gStyles.container}>
                    <div className={styles.body}>
                        <div className={styles.showState}>
                            <p className={gStyles.textLarge}>Бонусные баллы</p>
                            <p className={gStyles.textLarge}><span>{dataUser.marks || 0}</span> баллов</p>
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