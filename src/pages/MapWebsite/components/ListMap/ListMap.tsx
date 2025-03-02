import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import ItemMap from '../ItemMap/ItemMap';
import { IMapWebsite } from '../../../../interface/interface';

interface IProps {
    list: IMapWebsite[];
    index?: number;
}

export default function ListMap(props: IProps): JSX.Element {

    const { list, index = 0 } = props;

    return (
        <ul style={index >= 1 ? { marginLeft: '40px' } : {}} className={`${styles.list} ${gStyles.textBig}`}>
            {list.map((item, _) => {
                return (
                    <ItemMap index={index} to={item.to} section={item.section} sectionMain={item.sectionMain} children={item.children} />
                )
            })}
        </ul>
    );
}