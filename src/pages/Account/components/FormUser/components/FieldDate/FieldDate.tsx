
import styles from './style.module.scss';
import gStyles from '../../../../../../styles/styles.module.scss';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import Button from '../../../../../../components/ui/Button/Button';
import { FIELD, NAME_FIELD } from './constants/fields';
import { IField } from './type';

export default function FieldDate(): JSX.Element {

    const [state, setState] = useState<IField[]>(FIELD);

    function handleChangeEdit(index: number): void {
        setState((prevState) => {
            const newState = [...prevState];
            newState[index].isEdit = !newState[index].isEdit;
            return newState;
        })
    }

    return (
        <Formik
            initialValues={{ familyName: "", name: "", email: "", phone: "", surname: "", birthday: "", sex: "", oldPassword: "", newPassword: "" }}
            onSubmit={(values) => { }}
            className={styles.bodyForm}
        >
            {({ errors }) => (
                <Form className={styles.form}>
                    <div className={`${gStyles.container} ${styles.container}`}>
                        <div className={styles.body}>
                            <ul className={styles.nameField}>
                                {NAME_FIELD.map((item, _) => (
                                    <li className={gStyles.textExtraBig} key={item}>{item}</li>
                                ))}
                            </ul>
                            <div className={styles.wrapperInput}>
                                <div className={styles.bodyInputs}>
                                    {state.map((item, index) => {
                                        return (
                                            <div className={styles.bodyInput}>
                                                <Field className={`${styles.input}`} name={Object.entries(item)[0][0]} />
                                                {(Object.entries(item)[0][0] !== "newPassword" && Object.entries(item)[0][0] !== 'oldPassword') && <div>
                                                    {!item.isEdit ? <div onClick={() => handleChangeEdit(index)} className={styles.bodyChange}><p className={gStyles.textExtraBig}>Редактировать</p></div>
                                                        : <div className={styles.bodyChange}>
                                                            <Button className={`${styles.buttonSave} ${gStyles.textExtraBig}`} title='Сохранить' />
                                                            <Button onClick={() => handleChangeEdit(index)} className={`${styles.buttonCancel} ${gStyles.textExtraBig}`} title='Отменить' />
                                                        </div>}
                                                </div>}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <Button classNameWrapper={styles.bodyButton} className={`${styles.buttonSaveForm} ${gStyles.textMedium}`} title="Сохранить пароль" />
                    </div>
                </Form>
            )}
        </Formik>
    );
}