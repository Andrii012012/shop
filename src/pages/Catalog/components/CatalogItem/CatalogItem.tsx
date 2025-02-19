import gStyles from '../../../../styles/styles.module.scss';
import { Link } from 'react-router-dom';
import { ICatalog } from '../../type';

interface IProps {
    refSaveItemCatalog: React.MutableRefObject<ICatalog>;
    item: ICatalog;
    className?: string;
}

export default function CatalogItem(props: IProps): JSX.Element {

    const { refSaveItemCatalog, item, className } = props;

    return (
        <li onClick={() => refSaveItemCatalog.current = item} className={`${gStyles.textBig} ${className}`}>
            <Link to={item.to}>
                <div>
                    <img src={item.image} alt="" />
                </div>
                <p className={gStyles.textBig}>{item.name}</p>
            </Link>
        </li >
    );
}