import styles from './styles.module.scss';
import gStyles from '../../../../styles/styles.module.scss';
import Heart from '../../../../assets/images/header/heartIcon.svg?react';
import { IUser } from '../../../../interface/interface';
import { callLocalStore } from '../../../../servers/callLocalStore';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { LoginUser } from '../../../../features/user/user';

interface IProps {
    isStock: boolean;
    name: string;
    manufacturer: string;
    volume: number;
    release: string;
    price: number;
    isRecipe: boolean;
    isDelivery: boolean;
    countryOrigin: string;
    id: number;
    discount: number | null;
}

export default function HeaderCard(props: IProps): JSX.Element {

    const { isStock, name, manufacturer, countryOrigin, volume, release, price, isRecipe, isDelivery, id, discount } = props;

    const dataUser = useAppSelector((state) => state.user.user);

    const dispatch = useAppDispatch();

    function handleToggleLikedProduct(): void {

        const dataUserCopy: IUser = JSON.parse(JSON.stringify(dataUser));

        if (!dataUserCopy.likedProducts.find((item, _) => item.name === name)) {
            dataUserCopy.likedProducts.push({
                isStock,
                name,
                manufacturer,
                volume,
                release,
                price: discount ? discount : price,
                isRecipe,
                isDelivery,
                countryOrigin,
                id,
                discount
            });
        } else {
            dataUserCopy.likedProducts = dataUserCopy?.likedProducts.filter((item, _) => item.name !== name && item);
        }

        const newDataUser = callLocalStore<IUser>("user", dataUserCopy);

        dispatch(LoginUser(newDataUser));

    }

    function checkIsLikedProduct(): boolean {
        const result = dataUser?.likedProducts.find((item, _) => item.name === name && item);
        return typeof result === 'object' ? true : false;
    }

    return (
        <div className={styles.header}>
            <div onClick={() => dataUser && handleToggleLikedProduct()} className={styles.iconHeart}>
                <Heart className={checkIsLikedProduct() ? styles.iconActive : ""} />
            </div>
            <p className={gStyles.textMedium}>{isStock ? <span className={styles.inStock}>В наличии</span> : <span className={styles.outStock}>Нет в наличии</span>}</p>
        </div>
    );
}