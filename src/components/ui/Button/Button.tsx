import styles from './style.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    className: string;
}

export default function Button(props: IProps): JSX.Element {

    const { title, className, ...otherProps } = props;

    return (
        <div className={styles.wrapperButton}>
            <button className={className} {...otherProps}>{title}</button>
        </div>
    );
}