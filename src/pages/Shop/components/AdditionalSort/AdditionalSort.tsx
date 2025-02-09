import styles from './style.module.scss';
import gStyles from "../../../../styles/styles.module.scss";
import { ISettings } from '../../types/type';
import { IBaseProduct } from '../../../../interface/interface';

const SORT_ALPHABET = ("а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ э ю я ").split("");

const SORT_DEFAULT = ['По названию', 'Цена по убыванию', 'Цена по возрастанию'];

interface IProps {
    settings: ISettings;
    setSettings: React.Dispatch<React.SetStateAction<ISettings>>
    products: IBaseProduct[];
}

export default function AdditionalSort(props: IProps): JSX.Element {

    const { setSettings, settings, products } = props;

    function handleChangeSortAlphabet(value: string): void {
        setSettings((prevState) => ({ ...prevState, sortAlphabet: value }));
    }

    function handleChangeSort(value: string): void {
        setSettings((prevState) => ({ ...prevState, sort: value }));
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p className={gStyles.textExtraLarge}><span>Вы искали:</span> «Вольтарен»</p>
                <p className={gStyles.textBig}><span>Найдено товаров:</span> {products.length}</p>
                <div className={styles.bodySort}>
                    <span>Сортировка по алфавиту:</span>
                    <ul>
                        {SORT_ALPHABET.map((item) => (
                            <li key={item} onClick={() => handleChangeSortAlphabet(item)} className={`${gStyles.textBig} ${settings.sortAlphabet === item ? styles.activeWord : ''}`}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.sortWrapper}>
                <span className={gStyles.textExtraLarge}>Сортировать:</span>
                <ul>
                    {SORT_DEFAULT.map((item, index) => (
                        <li key={index} onClick={() => handleChangeSort(item)} className={`${gStyles.textBig} ${settings.sort === item ? styles.activeSort : ''}`}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}