import styles from './style.module.scss';

interface IProps {
    value: boolean;
    className?: string;
}

export default function Checkbox(props: IProps): JSX.Element {

    const { value, className = '' } = props;

    return (
        <div className={`${styles.checkbox} ${className} ${value ? styles.activeCheckbox : ''}`}></div>
    );
}