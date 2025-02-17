import gStyles from '../styles/styles.module.scss';
import styles from './style.module.scss';
import Header from "../components/Header/Header";
import Subscribe from "./components/Subscribe/Subscribe";

export function Layout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className={gStyles.wrapper}>
            <Header />
            {children}
            <Subscribe />
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52911152.012123756!2d-161.65545109903397!3d35.960656281788644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sus!4v1738758474204!5m2!1sru!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
