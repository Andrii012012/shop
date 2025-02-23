import styles from './style.module.scss';
interface IProps extends React.HTMLProps<HTMLDivElement> {
    valueCheckbox: boolean;
    className?: string;
}

export default function Checkbox(props: IProps): JSX.Element {

    const { valueCheckbox, className = '', ...otherProps } = props;

    return (
        <div {...otherProps} className={`${styles.checkbox} ${className} ${valueCheckbox ? styles.activeCheckbox : ''}`}></div>
    );
}