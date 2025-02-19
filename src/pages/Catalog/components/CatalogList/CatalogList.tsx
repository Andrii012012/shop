import gStyles from '../../../../styles/styles.module.scss';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import { ICatalog } from '../../type';
import { CATALOG } from '../../constants/catalog';

interface IProps {
    refSaveItemCatalog: React.MutableRefObject<ICatalog>;
}

export default function CatalogList(props: IProps): JSX.Element {

    const { refSaveItemCatalog } = props;

    return (
        <ul className={styles.list}>
            {CATALOG.map((item, index) => (
                <li key={index} onClick={() => refSaveItemCatalog.current = item} className={`${gStyles.textBig} ${styles.item}`}>
                    <NavLink style={({ isActive }) => isActive ? { color: '#216823' } : {}} to={item.to}>
                        {item.name}
                    </NavLink>
                </li >
            ))}
        </ul>
    );
}