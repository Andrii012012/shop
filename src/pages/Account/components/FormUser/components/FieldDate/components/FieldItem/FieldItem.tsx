
import styles from './style.module.scss';
import gStyles from '../../../../../../../../styles/styles.module.scss';
import { IField } from '../../type';
import Button from '../../../../../../../../components/ui/Button/Button';
import { IUser } from '../../../../../../../../interface/interface';
import { callLocalStore } from '../../../../../../../../servers/callLocalStore';

interface IProps {
    item: IField;
    fieldName: string;
    setState: React.Dispatch<React.SetStateAction<IField[]>>;
    index: number;
    dataUser: IUser;
}

export default function FieldItem(props: IProps): JSX.Element {

    const { item, fieldName, setState, index, dataUser } = props;

    function handleChangeEdit(index: number): void {
        setState((prevState) => {
            const newState = [...prevState];
            newState[index].isEdit = !newState[index].isEdit;
            return newState;
        });
    }

    function handleChangeValue(value: string, key: string): void {
        setState((prevState) => {
            const newState = [...prevState];
            newState[index][key] = value;
            return newState;
        });
    }

    function handleCancelChange(key: string) {
        setState((prevState) => {
            const newState = [...prevState];
            newState[index][key] = dataUser[key];
            return newState;
        });
    }

    function handleSaveChange(key: string) {
        const dataUserCopy = JSON.parse(JSON.stringify(dataUser));
        dataUserCopy[key] = item[fieldName];
        callLocalStore('user', dataUserCopy);
    }

    return (
        <div className={styles.bodyInput}>
            <input
                className={`${styles.input}`}
                disabled={item.isEdit ? false : true}
                name={fieldName}
                value={typeof item[fieldName] === 'undefined' ? "" : String(item[fieldName])}
                onChange={(event) => handleChangeValue(event.target.value, fieldName)}
                type={item.type}
            />
            <div>
                {!item.isEdit
                    ? <div onClick={() => handleChangeEdit(index)} className={styles.bodyChange}><p className={gStyles.textExtraBig}>Редактировать</p></div>
                    : <div className={styles.bodyChange}>
                        {(fieldName !== 'oldPassword' && fieldName !== 'newPassword') ? <Button onClick={() => { handleChangeEdit(index); handleSaveChange(fieldName) }} className={`${styles.buttonSave} ${gStyles.textExtraBig}`} title='Сохранить' /> : <></>}
                        <Button onClick={() => { handleChangeEdit(index); handleCancelChange(fieldName) }} className={`${styles.buttonCancel} ${gStyles.textExtraBig}`} title='Отменить' />
                    </div>}
            </div>
        </div>
    );
}