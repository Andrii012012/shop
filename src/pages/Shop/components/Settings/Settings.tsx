import styles from './style.module.scss';
import gStyles from "../../../../styles/styles.module.scss";
import Accordion from '../../../../components/ui/Accordion/Accordion';
import Checkbox from '../../../../components/ui/Checkbox/Checkbox';
import { ISettings } from '../../types/type';
import { IBaseProduct } from '../../../../interface/interface';
import RangeSlider from '../../../../components/ui/RangeSlider/RangeSlider';
import Button from '../../../../components/ui/Button/Button';
import Arrow from '../../../../assets/images/global/arrowAccordion.svg?react';

interface IProps {
    settings: ISettings;
    setSettings: React.Dispatch<React.SetStateAction<ISettings>>
    products: IBaseProduct[];
    handleClearSettings: () => void;
}

export default function Settings(props: IProps): JSX.Element {

    const { setSettings, settings, products, handleClearSettings } = props;

    const releaseForm = Object.entries(getReleaseFormProduct());
    const manufacturer = Object.entries(getInfoProduct("manufacturer"));
    const countryOrigin = Object.entries(getInfoProduct("countryOrigin"));
    const recipes = Object.entries(getInfoProduct("isRecipe"));

    function getInfoProduct(key: string) {
        const counter: { [key: string]: any } = {};

        for (let i = 0; i < products.length; i++) {
            if (!counter[products[i][key]]) {
                counter[products[i][key]] = 1;
            } else {
                counter[products[i][key]] = counter[products[i][key]] + 1;
            }
        }

        return counter;

    }

    function getReleaseFormProduct() {
        const counter: { [key: string]: any } = {};

        for (let i = 0; i < products.length; i++) {
            for (let y = 0; y < products[i].release.length; y++) {
                if (!counter[products[i].release[y].name]) {
                    counter[products[i].release[y].name] = 1
                } else {
                    counter[products[i].release[y].name] = counter[products[i].release[y].name] + 1;
                }
            }
        }

        return counter;

    }

    function handleChangeSettings(key: string, value: string): void {
        setSettings((prevState) => {
            const newState = { ...prevState };
            if (!newState[key].includes(value)) {
                newState[key].push(value);
            } else {
                newState[key] = newState[key].filter((item: string) => item !== value);
            }
            return newState;
        });
    }

    function handleChangePrice(value: number[]) {
        setSettings((prevState) => {
            const newState = { ...prevState };
            newState.price = value;
            return newState;
        });
    }

    return (
        <aside className={styles.settings}>
            <div className={styles.wrapper}>
                <Accordion classActive={styles.activeAccordion} className={styles.accordion}
                    header={
                        <>
                            <Arrow className={styles.iconArrow} />
                            <p className={gStyles.textBig}>Форма выпуска</p>
                        </>
                    }>
                    <ul className={styles.list}>
                        {releaseForm.map((item, _) => (
                            <li onClick={() => handleChangeSettings("releaseForm", item[0])}>
                                <Checkbox className={styles.checkbox} valueCheckbox={settings.releaseForm.includes(item[0])} />
                                <p className={styles.name}>{item[0].split(" ")[0]}</p>
                                <p>[ {item[1]} ]</p>
                            </li>
                        ))}
                    </ul>
                </Accordion>
                <Accordion classActive={styles.activeAccordion} className={styles.accordion} header={
                    <>
                        <Arrow className={styles.iconArrow} />
                        <p className={gStyles.textBig}>Цена</p>
                    </>
                }>
                    <div>
                        <RangeSlider min={0} max={15000} value={settings.price} onChange={handleChangePrice} />
                    </div>
                </Accordion>
                <Accordion classActive={styles.activeAccordion} className={styles.accordion}
                    header={
                        <>
                            <Arrow className={styles.iconArrow} />
                            <p className={gStyles.textBig}>Производитель</p>
                        </>
                    }>
                    <ul className={styles.list}>
                        {manufacturer.map((item, _) => (
                            <li onClick={() => handleChangeSettings("manufacturer", item[0])}>
                                <Checkbox className={styles.checkbox} valueCheckbox={settings.manufacturer.includes(item[0])} />
                                <p className={styles.name}>{item[0].split(" ")[0]}</p>
                                <p>[ {item[1]} ]</p>
                            </li>
                        ))}
                    </ul>
                </Accordion>
                <Accordion classActive={styles.activeAccordion} className={styles.accordion}
                    header={
                        <>
                            <Arrow className={styles.iconArrow} />
                            <p className={gStyles.textBig}>Страна производства</p>
                        </>
                    }>
                    <ul className={styles.list}>
                        {countryOrigin.map((item, _) => (
                            <li onClick={() => handleChangeSettings("countryOrigin", item[0])}>
                                <Checkbox className={styles.checkbox} valueCheckbox={settings.countryOrigin.includes(item[0])} />
                                <p className={styles.name}>{item[0].split(" ")[0]}</p>
                                <p>[ {item[1]} ]</p>
                            </li>
                        ))}
                    </ul>
                </Accordion>
                <Accordion classActive={styles.activeAccordion} className={styles.accordion}
                    header={
                        <>
                            <Arrow className={styles.iconArrow} />
                            <p className={gStyles.textBig}>Рецептуарность</p>
                        </>
                    }>
                    <ul className={styles.list}>
                        {recipes.map((item, _) => (
                            <li onClick={() => handleChangeSettings("isRecipe", item[0])}>
                                <Checkbox className={styles.checkbox} valueCheckbox={settings.isRecipe.includes(item[0])} />
                                <p className={styles.name}>{item[0] !== 'false' ? 'Да' : 'Нет'}</p>
                                <p>[ {item[1]} ]</p>
                            </li>
                        ))}
                    </ul>
                </Accordion>
            </div>
            <Button title='Поиск' className={`${styles.button} ${gStyles.textBig}`} />
            <Button title='Очистить фильтр' onClick={handleClearSettings} className={`${styles.clear} ${gStyles.textMedium}`} />
        </aside>
    );
}