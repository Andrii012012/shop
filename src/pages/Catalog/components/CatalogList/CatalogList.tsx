import gStyles from '../../../../styles/styles.module.scss';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import { ICatalog } from '../../type';
import { CATALOG } from '../../constants/catalog';

interface IProps {
    setItemCatalog: React.Dispatch<React.SetStateAction<ICatalog>>;
    pathName: string;
}

export default function CatalogList(props: IProps): JSX.Element {

    const { setItemCatalog, pathName } = props;

    return (
        <ul className={styles.list}>
            {CATALOG.map((item, index) => {
                if (decodeURIComponent(pathName) == item.to) {
                    setItemCatalog(item);
                }
                return (
                    <li key={index} onClick={() => setItemCatalog(item)} className={`${gStyles.textBig} ${styles.item}`}>
                        <NavLink style={({ isActive }) => isActive ? { color: '#216823' } : {}} to={item.to}>
                            {item.name}
                        </NavLink>
                    </li >
                )
            })}
        </ul>
    );
}