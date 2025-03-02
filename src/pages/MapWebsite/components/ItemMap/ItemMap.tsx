import styles from './styles.module.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IMapWebsite } from '../../../../interface/interface';
import ListMap from '../ListMap/ListMap';

interface IProps {
    children: IMapWebsite[] | null;
    section?: string;
    sectionMain?: string;
    index: number;
    to?: string;
}

export default function ItemMap(props: IProps): JSX.Element {

    const { children, section, sectionMain, index, to } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleOpenNestedElements(event: React.MouseEvent<HTMLLIElement, MouseEvent>, children: any): void {
        event.stopPropagation();
        if (children) {
            setIsOpen(!isOpen);
        }
    }

    if (to) {
        return (
            <li onClick={(event) => handleOpenNestedElements(event, children)} className={styles.item} key={section}>
                <NavLink to={to} className={`${styles.sectionName} ${isOpen && section ? styles.activeSection : ""}`}>
                    {section}
                </NavLink>
                {children && isOpen && <ListMap index={index + 1} list={children} />}
            </li>
        );
    } else {
        return (
            <li onClick={(event) => handleOpenNestedElements(event, children)} className={styles.item} key={section}>
                <p className={`${styles.sectionName} ${sectionMain ? styles.activeSectionMain : ""}
                         ${isOpen && section ? styles.activeSection : ""}`}>{sectionMain || section}</p>
                {children && isOpen && <ListMap index={index + 1} list={children} />}
            </li>
        );
    }
}