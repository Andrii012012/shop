
import styles from './style.module.scss';
import gStyles from '../../../../../../styles/styles.module.scss';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import Button from '../../../../../../components/ui/Button/Button';
import { fieldUser, NAME_FIELD } from './constants/fields';
import { IField } from './type';
import { IUser } from '../../../../../../interface/interface';
import FieldItem from './components/FieldItem/FieldItem';
import { callLocalStore } from '../../../../../../servers/callLocalStore';

interface IProps {
    dataUser: IUser;
}


export default function FieldDate(props: IProps): JSX.Element {

    const { dataUser } = props;

    const [state, setState] = useState<IField[]>(fieldUser(dataUser));

    function handleSavePassword(): void {
        if (dataUser.password === state[7].oldPassword) {
            const dataUserCopy = JSON.parse(JSON.stringify(dataUser));
            dataUserCopy.password = state[8].newPassword;
            callLocalStore('user', dataUserCopy);
        }
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
                                        const fieldName = Object.entries(item)[0][0];
                                        return (
                                            <FieldItem dataUser={dataUser} setState={setState} index={index} key={index} item={item} fieldName={fieldName} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <Button onClick={() => handleSavePassword()} classNameWrapper={styles.bodyButton} className={`${styles.buttonSaveForm} ${gStyles.textMedium}`} title="Сохранить пароль" />
                    </div>
                </Form>
            )}
        </Formik>
    );
}