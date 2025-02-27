import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useParams } from 'react-router-dom';
import { findPromotion } from '../../../../features/promotion/filters';

export default function DetailsNews(): JSX.Element {

    let titlePromotion: string = useParams().title || "";

    titlePromotion = titlePromotion.replace(/^:/, '');

    const news = useAppSelector(findPromotion(titlePromotion));

    return (
        <section>

        </section>
    );
}