import styles from './styles.module.scss';
import gStyles from '../../styles/styles.module.scss';
import Navigate from '../../components/Navigate/Navigate';
import SwitchContent from '../../components/SwitchContent/SwitchContent';
import { HOW_TO_MAKE_ORDER } from '../../constants/path';
import { PATH_HOW_TO_MAKE_ORDER } from '../../routes/routes';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MedicineWithoutRecipe from './components/MedicineWithoutRecipe/MedicineWithoutRecipe';
import MedicineWithRecipe from './components/MedicineWithRecipe/MedicineWithRecipe';
import { useEffect } from 'react';


export default function HowToMakeOrder(): JSX.Element {

    const navigate = useNavigate();

    useEffect(() => {
        navigate(`${PATH_HOW_TO_MAKE_ORDER}/${HOW_TO_MAKE_ORDER.medicineWithoutPrescription}`);
    }, []);

    return (
        <main className={styles.order}>
            <div className={gStyles.container}>
                <Navigate className={styles.navigate} links={[{ name: "Как сделать заказ", to: "" }]} />
                <SwitchContent links={[{ name: HOW_TO_MAKE_ORDER.medicineWithoutPrescription, to: `${PATH_HOW_TO_MAKE_ORDER}/${HOW_TO_MAKE_ORDER.medicineWithoutPrescription}` }, { name: HOW_TO_MAKE_ORDER.medicineWithPrescription, to: `${PATH_HOW_TO_MAKE_ORDER}/${HOW_TO_MAKE_ORDER.medicineWithPrescription}` }]} />
            </div>
            <Routes>
                <Route path={HOW_TO_MAKE_ORDER.medicineWithoutPrescription} element={<MedicineWithoutRecipe />} />
                <Route path={HOW_TO_MAKE_ORDER.medicineWithPrescription} element={<MedicineWithRecipe />} />
            </Routes>
        </main>
    );
}