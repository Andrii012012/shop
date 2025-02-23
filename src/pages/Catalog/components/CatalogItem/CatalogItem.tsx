import gStyles from '../../../../styles/styles.module.scss';
import { Link } from 'react-router-dom';
import { ICatalog } from '../../type';

interface IProps {
    setItemCatalog: React.Dispatch<React.SetStateAction<ICatalog>>;
    item: ICatalog;
    className?: string;
}

export default function CatalogItem(props: IProps): JSX.Element {

    const { setItemCatalog, item, className } = props;

    return (
        <li onClick={() => setItemCatalog(item)} className={`${gStyles.textBig} ${className}`}>
            <Link to={item.to}>
                <div>
                    <img src={item.image} alt="" />
                </div>
                <p className={gStyles.textBig}>{item.name}</p>
            </Link>
        </li >
    );
}