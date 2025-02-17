import styles from './style.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    classNameWrapper?: string;
    className: string;
}

export default function Button(props: IProps): JSX.Element {

    const { title, className, classNameWrapper = '', ...otherProps } = props;

    return (
        <div className={`${styles.wrapperButton} ${classNameWrapper}`}>
            <button className={className} {...otherProps}>{title}</button>
        </div>
    );
}