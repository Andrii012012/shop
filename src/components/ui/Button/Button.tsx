import styles from "./style.module.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  classNameWrapper?: string;
  className: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Button(props: IProps): JSX.Element {
  const {
    title,
    className,
    classNameWrapper,
    leftIcon,
    rightIcon,
    ...otherProps
  } = props;

  return (
    <div className={`${styles.wrapperButton} ${classNameWrapper}`}>
      <button className={className} {...otherProps}>
        {leftIcon}
        {title}
        {rightIcon}
      </button>
    </div>
  );
}
